import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/tutorflow-logo.png";

import { api } from "../api/api";

export default function Login() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // fake login for demo
        setUser({ name: "Student", email });
        navigate("/dashboard");

        // const response = await api.login({ email, password });
        // const data = await response.json().catch(() => ({}));

        // if (!response.ok) {
        //     alert(data.message || "Login failed");
        //     return;
        // }

        // setUser(data.user);

        // navigate("/dashboard");
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a", color: "#fff" }}>
            <div style={{ background: "#1e293b", padding: 24, borderRadius: 12, width: 360 }}>

                <div style={{ textAlign: "center", marginBottom: 16 }}>
                    <img src={logo} alt="TutorFlow Logo" style={{ width: 120 }} />
                </div>

                <h2 style={{ color: "#fbbf24", textAlign: "center" }}>Login</h2>


                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
                    <label style={{ fontSize: 14 }}>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label style={{ fontSize: 14 }}>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" style={{ marginTop: 8, background: "#fbbf24", border: "none", padding: 10, borderRadius: 8 }}>Login</button>
                </form>
            </div>
        </div>
    );
}
