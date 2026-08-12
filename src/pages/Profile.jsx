import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./Profile.css";

export default function Profile() {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: user?.name || "",
        email: user?.email || "",
        notifications: true,
        darkMode: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSave = () => {
        setUser({
            ...user,
            name: form.name,
            email: form.email,
        });

        alert("Profile updated successfully!");
    };

    return (
        <div>
            <div className="profile-container">

                {/* Page Header */}
                <div className="profile-header">
                    <h1>Your Profile</h1>

                    <p>
                        Manage your personal information and account settings.
                    </p>
                </div>

                {/* Profile Overview */}
                <div className="profile-card profile-overview">

                    <div className="profile-avatar">
                        {form.name?.[0]?.toUpperCase() || "U"}
                    </div>

                    <div className="profile-identity">
                        <h2>
                            {form.name || "Student"}
                        </h2>

                        <p>
                            {form.email || "email@example.com"}
                        </p>

                        <span className="student-badge">
                            Student
                        </span>
                    </div>

                </div>

                {/* Personal Information */}
                <div className="profile-card">

                    <div className="section-heading">
                        <h2>Personal Information</h2>

                        <p>
                            Update the information associated with your TutorFlow account.
                        </p>
                    </div>

                    <div className="profile-form">

                        <div className="form-group">
                            <label htmlFor="name">
                                Full Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                        </div>

                    </div>
                </div>

                {/* Account Settings */}
                <div className="profile-card">

                    <div className="section-heading">
                        <h2>Account Settings</h2>

                        <p>
                            Choose how TutorFlow communicates with you.
                        </p>
                    </div>

                    <div className="settings-list">

                        {/* Notifications */}
                        <div className="setting-row">

                            <div className="setting-text">
                                <h3>Notifications</h3>

                                <p>
                                    Receive reminders about upcoming tutoring sessions.
                                </p>
                            </div>

                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    name="notifications"
                                    checked={form.notifications}
                                    onChange={handleChange}
                                />

                                <span className="slider"></span>
                            </label>

                        </div>

                        {/* Dark Mode */}
                        <div className="setting-row">

                            <div className="setting-text">
                                <h3>Dark Mode</h3>

                                <p>
                                    Keep TutorFlow's dark theme enabled.
                                </p>
                            </div>

                            <label className="toggle">
                                <input
                                    type="checkbox"
                                    name="darkMode"
                                    checked={form.darkMode}
                                    onChange={handleChange}
                                />

                                <span className="slider"></span>
                            </label>

                        </div>

                    </div>
                </div>

                {/* Save Button */}
                <div className="profile-actions">

                    <button
                        className="save-profile-btn"
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>

                </div>

                {/* AI Section */}
                <div className="profile-ai-card">

                    <div className="ai-icon">
                        ✨
                    </div>

                    <div>
                        <h2>Need help with your studies?</h2>

                        <p>
                            Your TutorFlow AI assistant can help explain
                            concepts, create practice questions, and prepare
                            you for your next tutoring session.
                        </p>
                    </div>

                    <button
                        className="ai-profile-btn"
                        onClick={() => navigate("/services")}
                    >
                        Ask AI
                    </button>

                </div>

            </div>
        </div>
    );
}