import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <div style={{ background: "#1e293b", padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ color: "#fbbf24", margin: 0 }}>Hello, {user?.name || "Student"} 👋</h2>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
                    {user?.name?.[0] || "S"}
                </div>
                <button onClick={handleLogout} style={{ background: "#ef4444", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8 }}>Logout</button>
            </div>
        </div>
    );
}
