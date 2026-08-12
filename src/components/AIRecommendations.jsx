import React, { useState } from "react";
import { api } from "../api/api";

export default function AIRecommendations({ subject, progress }) {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        async function loadAI() {
            const res = await api.getAISuggestions({ subject, progress });
            const data = await res.json();
            setSuggestions(data.suggestions || []);
        }
        loadAI();
    }, [subject, progress]);

    return (
        //         <div className="ai-box">
        //             <h3>AI Study Recommendations</h3>

        //             {suggestions.length === 0 && <p>No recommendations yet.</p>}

        //             {suggestions.map((tip, index) => (
        //                 <p key={index} className="ai-tip">{tip}</p>
        //             ))}
        //         </div>
        //     );
        // }
        <div
            className="stat-card"
            onClick={() => navigate("/services")}
            style={{ cursor: "pointer" }}
        >
            <div className="stat-icon">✨</div>

            <h3>AI Suggestions</h3>

            <p className="stat-text">
                Ask your AI Study Assistant
            </p>
        </div>
    );
}
