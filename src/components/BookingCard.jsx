import React from "react";

export default function BookingCard({ booking, onCancel }) {
    return (
        <div style={{ padding: 12, borderRadius: 8, background: "#071029", border: "1px solid #172554", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <h4 style={{ margin: 0, color: "#fbbf24" }}>{booking?.service || "Booking"}</h4>
                    <div style={{ color: "#94a3b8" }}>{booking?.date || "—"}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                    <div style={{ color: booking?.status === "confirmed" ? "#10b981" : "#f97316" }}>{booking?.status || "pending"}</div>
                    <button onClick={() => onCancel && onCancel(booking)} style={{ marginTop: 8, background: "#ef4444", color: "#fff", border: "none", padding: "6px 8px", borderRadius: 6 }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
