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
        <div className="ai-box">
            <h3>AI Study Recommendations</h3>

            {suggestions.length === 0 && <p>No recommendations yet.</p>}

            {suggestions.map((tip, index) => (
                <p key={index} className="ai-tip">{tip}</p>
            ))}
        </div>
    );
}
