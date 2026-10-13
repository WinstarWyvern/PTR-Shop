import { createContext, useState } from 'react';
import { login as loginRequest } from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(
        () => localStorage.getItem('accessToken')
    );

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const isAuthenticated = Boolean(accessToken);

    async function signIn(username, password) {
        const data = await loginRequest(username, password);

        const userData = {
            id: data.id,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
        };

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(userData));

        setAccessToken(data.accessToken);
        setUser(userData);

        return data;
    }

    function logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');

        setAccessToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                isAuthenticated,
                signIn,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;