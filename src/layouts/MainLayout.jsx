import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#0f172a", color: "#fff" }}>
            <Sidebar />

            <div style={{ flex: 1 }}>
                <Navbar />
                <div style={{ padding: 24 }}>{children}</div>
            </div>
        </div>
    );
}