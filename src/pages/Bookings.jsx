import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Bookings.css";

const Bookings = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const bookings = [
        {
            subject: "Math Tutoring",
            tutor: "Sarah Johnson",
            date: "August 13",
            time: "4:00 PM",
            status: "Confirmed"
        },
        {
            subject: "Science Review",
            tutor: "Michael Lee",
            date: "August 15",
            time: "1:00 PM",
            status: "Confirmed"
        },
        {
            subject: "English Writing",
            tutor: "Emily Carter",
            date: "August 18",
            time: "11:00 AM",
            status: "Confirmed"
        }
    ];

    return (

        <div className="bookings-container">

            <div className="bookings-header">
                <h1 className="bookings-title">
                    Your Bookings
                </h1>

                <p className="bookings-subtitle">
                    Manage your upcoming tutoring appointments
                </p>
                {location.state?.selectedSubject && (
                    <div className="selected-service">
                        <h2>Book {location.state.selectedSubject} Tutoring</h2>

                        <p>
                            You selected {location.state.selectedSubject} tutoring.
                            Choose a time for your tutoring session.
                        </p>

                        <button
                            className="view-btn"
                            onClick={() =>
                                alert(
                                    `${location.state.selectedSubject} tutoring appointment selected!`
                                )
                            }
                        >
                            Confirm Appointment
                        </button>
                    </div>
                )}
            </div>

            <div className="bookings-list">

                {bookings.map((b, index) => (

                    <div className="booking-card" key={index}>

                        <div className="booking-card-header">
                            <h2 className="booking-subject">
                                {b.subject}
                            </h2>

                            <span className="booking-status">
                                {b.status}
                            </span>
                        </div>

                        <div className="booking-details">

                            <div className="booking-detail">
                                <span className="detail-icon">👨‍🏫</span>

                                <div>
                                    <span className="detail-label">
                                        Tutor
                                    </span>

                                    <span className="detail-value">
                                        {b.tutor}
                                    </span>
                                </div>
                            </div>

                            <div className="booking-detail">
                                <span className="detail-icon">📅</span>

                                <div>
                                    <span className="detail-label">
                                        Date
                                    </span>

                                    <span className="detail-value">
                                        {b.date}
                                    </span>
                                </div>
                            </div>

                            <div className="booking-detail">
                                <span className="detail-icon">🕒</span>

                                <div>
                                    <span className="detail-label">
                                        Time
                                    </span>

                                    <span className="detail-value">
                                        {b.time}
                                    </span>
                                </div>
                            </div>

                        </div>

                        <button
                            className="view-btn"
                            onClick={() =>
                                alert(
                                    `Booking: ${b.subject}\nTutor: ${b.tutor}\nDate: ${b.date}\nTime: ${b.time}`
                                )
                            }
                        >
                            View Details
                        </button>

                    </div>

                ))}

            </div>

            <div className="booking-help">
                <h2>Need help with your booking?</h2>

                <p>
                    You can use the AI Study Assistant if you have
                    questions about your tutoring session.
                </p>

                <button
                    className="ai-help-btn"
                    onClick={() => navigate("/services")}
                >
                    Ask AI for Help
                </button>
            </div>

        </div>

    );
};

export default Bookings;