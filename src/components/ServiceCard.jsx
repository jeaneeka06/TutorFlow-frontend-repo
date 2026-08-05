import React from "react";

export default function ServiceCard({ service, onBook }) {
    return (
        <div style={{ padding: 12, borderRadius: 8, background: "#0b1220", border: "1px solid #1f2937", marginBottom: 8 }}>
            <h3 style={{ margin: 0, color: "#fbbf24" }}>{service?.title || "Service"}</h3>
            {service?.description && <p style={{ margin: "6px 0", color: "#cbd5e1" }}>{service.description}</p>}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: "#94a3b8" }}>{service?.price ? `$${service.price}` : "Free"}</div>
                <button onClick={() => onBook && onBook(service)} style={{ background: "#2563eb", color: "#fff", border: "none", padding: "6px 10px", borderRadius: 6 }}>Book</button>
            </div>
        </div>
    );
}