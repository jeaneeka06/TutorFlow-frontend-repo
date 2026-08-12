import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Line } from "react-chartjs-2";
import "./Dashboard.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Dashboard() {
    const navigate = useNavigate();

    const progressData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Learning Progress",
                data: [20, 40, 60, 80],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.15)",
                pointBackgroundColor: "#fbbf24",
                pointBorderColor: "#fbbf24",
                pointRadius: 5,
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: "#cbd5e1",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#94a3b8",
                },
                grid: {
                    color: "rgba(148, 163, 184, 0.1)",
                },
            },
            y: {
                ticks: {
                    color: "#94a3b8",
                },
                grid: {
                    color: "rgba(148, 163, 184, 0.1)",
                },
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        <div className="dashboard-container">

            {/* PAGE HEADER */}
            <div className="dashboard-header">
                <h1>Welcome Back, Student! 👋</h1>
                <p>Let's get ready to learn.</p>
            </div>


            {/* STATS */}
            <section className="dashboard-stats">

                <div className="stat-card">
                    <div className="stat-icon">📅</div>

                    <h3>Upcoming Sessions</h3>

                    <p className="stat-number">3</p>

                    <button
                        className="dashboard-link-btn"
                        onClick={() => navigate("/bookings")}
                    >
                        View Schedule
                    </button>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">⏱️</div>

                    <h3>Hours Learned</h3>

                    <p className="stat-number">12.5</p>

                    <span>hours</span>
                </div>


                <div className="stat-card">
                    <div className="stat-icon">🎯</div>

                    <h3>Current Goal</h3>

                    <p className="stat-text">
                        Complete Algebra Unit
                    </p>
                </div>


                <div
                    className="stat-card clickable-card"
                    onClick={() => navigate("/services")}
                    style={{ cursor: "pointer" }}
                >
                    <div className="stat-icon">✨</div>

                    <h3>AI Suggestions</h3>

                    <p className="stat-text">
                        Ask your AI Study Assistant
                    </p>
                </div>

            </section>


            {/* NEXT SESSION */}
            <section className="dashboard-section">

                <div className="section-heading">
                    <h2>Next Session</h2>

                    <p>
                        Here's what's coming up next.
                    </p>
                </div>


                <div className="session-card">

                    <div className="session-icon">
                        📐
                    </div>

                    <div className="session-info">
                        <h3>Math Tutoring</h3>

                        <p>
                            August 13 | 4:00 PM
                        </p>
                    </div>

                    <div className="session-buttons">

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/bookings")}
                        >
                            Join Session
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() => navigate("/bookings")}
                        >
                            Reschedule
                        </button>

                    </div>

                </div>

            </section>


            {/* RECOMMENDED TUTORS */}
            <section className="dashboard-section">

                <div className="section-heading">
                    <h2>Recommended Tutors</h2>

                    <p>
                        Tutors who may be a great match for you.
                    </p>
                </div>


                <div className="tutor-grid">

                    <div className="tutor-card">

                        <div className="tutor-icon">
                            👩‍🏫
                        </div>

                        <h3>Sarah Miller</h3>

                        <p>Chemistry Expert</p>

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/services")}
                        >
                            View Tutor
                        </button>

                    </div>


                    <div className="tutor-card">

                        <div className="tutor-icon">
                            👨‍🏫
                        </div>

                        <h3>Michael Chen</h3>

                        <p>English & Literature</p>

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/services")}
                        >
                            View Tutor
                        </button>

                    </div>


                    <div className="tutor-card">

                        <div className="tutor-icon">
                            👩‍🔬
                        </div>

                        <h3>Laura Stevens</h3>

                        <p>Biology Specialist</p>

                        <button
                            className="primary-btn"
                            onClick={() => navigate("/services")}
                        >
                            View Tutor
                        </button>

                    </div>

                </div>

            </section>


            {/* LEARNING PROGRESS */}
            <section className="dashboard-section">

                <div className="section-heading">
                    <h2>Learning Progress</h2>

                    <p>
                        Track your progress as you work toward your goals.
                    </p>
                </div>


                <div className="progress-grid">

                    {/* CHART */}
                    <div className="progress-card">

                        <h3>Weekly Progress</h3>

                        <div className="chart-container">
                            <Line
                                data={progressData}
                                options={chartOptions}
                            />
                        </div>

                    </div>


                    {/* CALENDAR */}
                    <div className="progress-card calendar-card">

                        <h3>Study Calendar</h3>

                        <div className="calendar-container">
                            <Calendar />
                        </div>

                    </div>

                </div>

            </section>


            {/* GOALS */}
            <section className="goals-card">

                <div className="goals-icon">
                    🎯
                </div>

                <h2>Achieve Your Goals!</h2>

                <p>
                    Track your progress and reach your learning targets.
                </p>

                <button
                    className="ai-main-btn"
                    onClick={() =>
                        alert("Goal setting will be available here. For now, your current goal is: Complete Algebra Unit.")
                    }
                >
                    Set Goals
                </button>

            </section>

        </div>
    );
}