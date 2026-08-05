import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("tutorflow_user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    useEffect(() => {
        if (user) localStorage.setItem("tutorflow_user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}