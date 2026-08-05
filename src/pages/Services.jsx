import "./Services.css";

export default function Services() {
    return (
        <div>
            <h1 style={{ color: "#fbbf24", textAlign: "center" }}>Services</h1>

            {/*  Service Cards Section  */}
            <section className="services-section">
                <h2>Our Services</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <h3>Math Tutoring</h3>
                        <p>Get personalized help from expert tutors or AI explanations for tricky problems.</p>
                        <button className="service-btn">Book a Tutor</button>
                        <button className="ai-btn">Ask AI</button>
                    </div>

                    <div className="service-card">
                        <h3>Science Tutoring</h3>
                        <p>Understand complex concepts with guided sessions or instant AI answers.</p>
                        <button className="service-btn">Book a Tutor</button>
                        <button className="ai-btn">Ask AI</button>
                    </div>

                    <div className="service-card">
                        <h3>English Tutoring</h3>
                        <p>Improve writing and comprehension with tutor feedback or AI grammar checks.</p>
                        <button className="service-btn">Book a Tutor</button>
                        <button className="ai-btn">Ask AI</button>
                    </div>
                </div>
            </section>

            {/*  AI Study Assistant Section  */}
            <section className="ai-helper">
                <h2>AI Study Assistant</h2>
                <p>Need quick help? Ask our AI for explanations, summaries, or practice questions anytime.</p>
                <button className="ai-btn">Chat with AI</button>
            </section>
        </div>
    );
}

