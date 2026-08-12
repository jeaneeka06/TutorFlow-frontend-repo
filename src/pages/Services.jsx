import "./Services.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
    const [showModal, setShowModal] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [
            ...prev,
            {
                sender: "user",
                text: userMessage
            }
        ]);

        setInput("");

        try {
            const response = await fetch("http://localhost:5000/api/ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage,
                    conversation: messages
                })
            });

            const data = await response.json();

            console.log("AI Response:", data);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: data.error
                        ? `AI Error: ${data.error}`
                        : data.reply
                }
            ]);

        } catch (error) {

            console.error("AI Error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    sender: "ai",
                    text: "Sorry, I couldn't connect to the AI assistant right now."
                }
            ]);
        }
    };

    const handleBookTutor = (subject) => {
        navigate("/bookings", {
            state: {
                selectedSubject: subject
            }
        });
    };

    return (
        <div>

            <div className="services-container">

                {/* PAGE HEADER */}
                <div className="services-header">

                    <h1>Services</h1>

                    <p>
                        Get personalized academic support from tutors
                        and your AI study assistant.
                    </p>

                </div>


                {/* TUTORING SERVICES */}
                <section className="services-section">

                    <div className="section-heading">

                        <h2>Our Services</h2>

                        <p>
                            Choose a subject and get the help you need.
                        </p>

                    </div>


                    <div className="service-grid">

                        {/* MATH */}
                        <div className="service-card">

                            <div className="service-icon">
                                📐
                            </div>

                            <h3>
                                Math Tutoring
                            </h3>

                            <p>
                                Get personalized help with equations,
                                algebra, geometry, calculus, and more.
                            </p>

                            <div className="service-buttons">

                                <button
                                    className="service-btn"
                                    onClick={() =>
                                        handleBookTutor("Math")
                                    }
                                >
                                    Book a Tutor
                                </button>

                                <button
                                    className="ai-btn"
                                    onClick={openModal}
                                >
                                    Ask AI
                                </button>

                            </div>

                        </div>


                        {/* SCIENCE */}
                        <div className="service-card">

                            <div className="service-icon">
                                🔬
                            </div>

                            <h3>
                                Science Tutoring
                            </h3>

                            <p>
                                Understand biology, chemistry, physics,
                                and other challenging science topics.
                            </p>

                            <div className="service-buttons">

                                <button
                                    className="service-btn"
                                    onClick={() =>
                                        handleBookTutor("Science")
                                    }
                                >
                                    Book a Tutor
                                </button>

                                <button
                                    className="ai-btn"
                                    onClick={openModal}
                                >
                                    Ask AI
                                </button>

                            </div>

                        </div>


                        {/* ENGLISH */}
                        <div className="service-card">

                            <div className="service-icon">
                                📚
                            </div>

                            <h3>
                                English Tutoring
                            </h3>

                            <p>
                                Improve writing, reading comprehension,
                                grammar, essays, and communication skills.
                            </p>

                            <div className="service-buttons">

                                <button
                                    className="service-btn"
                                    onClick={() =>
                                        handleBookTutor("English")
                                    }
                                >
                                    Book a Tutor
                                </button>

                                <button
                                    className="ai-btn"
                                    onClick={openModal}
                                >
                                    Ask AI
                                </button>

                            </div>

                        </div>

                    </div>

                </section>


                {/* AI ASSISTANT */}
                <section className="ai-helper">

                    <div className="ai-helper-icon">
                        ✨
                    </div>

                    <h2>
                        AI Study Assistant
                    </h2>

                    <p>
                        Need help understanding a topic, preparing for
                        an exam, or creating a study plan?
                    </p>

                    <p className="ai-helper-secondary">
                        Tell TutorFlow what you're struggling with and
                        we'll help you figure out the best next step.
                    </p>

                    <button
                        className="ai-main-btn"
                        onClick={openModal}
                    >
                        Chat with AI
                    </button>

                </section>


                {/* AI MODAL */}
                {showModal && (

                    <div
                        className="ai-modal"
                        onClick={closeModal}
                    >

                        <div
                            className="ai-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <div className="ai-modal-header">

                                <div>
                                    <h3>
                                        ✨ AI Study Assistant
                                    </h3>

                                    <p>
                                        Ask a question or tell me
                                        what you're struggling with.
                                    </p>
                                </div>

                                <button
                                    className="modal-x"
                                    onClick={closeModal}
                                >
                                    ×
                                </button>

                            </div>


                            {/* CHAT */}
                            <div className="chatbox">

                                <div className="messages">

                                    {messages.length === 0 ? (

                                        <div className="ai-welcome">

                                            <div className="welcome-icon">
                                                🤖
                                            </div>

                                            <h4>
                                                How can I help you?
                                            </h4>

                                            <p>
                                                Try asking me about a
                                                school subject, homework,
                                                an upcoming test, or a
                                                study plan.
                                            </p>

                                        </div>

                                    ) : (

                                        messages.map((msg, index) => (

                                            <div
                                                key={index}
                                                className={
                                                    msg.sender === "user"
                                                        ? "msg-user"
                                                        : "msg-ai"
                                                }
                                            >
                                                {msg.text}
                                            </div>

                                        ))

                                    )}

                                </div>


                                <div className="chat-input-row">

                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) =>
                                            setInput(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                sendMessage();
                                            }
                                        }}
                                        placeholder="Ask the AI anything..."
                                        className="chat-input"
                                    />

                                    <button
                                        className="send-btn"
                                        onClick={sendMessage}
                                    >
                                        Send
                                    </button>

                                </div>

                            </div>


                            <button
                                onClick={closeModal}
                                className="close-btn"
                            >
                                Close
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}