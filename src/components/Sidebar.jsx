import { NavLink } from "react-router-dom";
import logo from "../assets/tutorflow-logo.png";

export default function Sidebar() {
    const linkStyle = { display: "block", padding: "10px 12px", color: "#c7d2fe", textDecoration: "none" };
    const activeStyle = { background: "#2563eb", color: "#fff" };

    return (

        <div style={{ width: 220, background: "#1e293b", padding: 20, minHeight: "100vh" }}>
            <div className="sidebar-logo">
                <img src={logo} alt="TutorFlow Logo" style={{ width: 200 }} />
            </div>

            <h1 style={{ color: "#fbbf24", fontSize: 20, marginBottom: 12 }}>TutorFlow</h1>

            <NavLink to="/dashboard" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Dashboard</NavLink>
            <NavLink to="/services" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Services</NavLink>
            <NavLink to="/bookings" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Bookings</NavLink>
            <NavLink to="/profile" style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}>Profile</NavLink>
        </div>
    );
}
