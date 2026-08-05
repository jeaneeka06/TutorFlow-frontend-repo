// export default function Dashboard() {
//     return (
//         <div className="space-y-8">

//             {/* Welcome Banner */}
//             <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
//                 <h1 className="text-3xl font-bold text-yellow-400">
//                     Welcome Back, John!
//                 </h1>
//                 <p className="text-gray-300 mt-2">
//                     Here’s your learning progress and upcoming tutoring sessions.
//                 </p>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
//                     <h2 className="text-xl font-semibold">Hours Learned</h2>
//                     <p className="text-4xl font-bold text-blue-400 mt-4">42</p>
//                 </div>

//                 <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
//                     <h2 className="text-xl font-semibold">Sessions Completed</h2>
//                     <p className="text-4xl font-bold text-green-400 mt-4">18</p>
//                 </div>

//                 <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
//                     <h2 className="text-xl font-semibold">Active Tutors</h2>
//                     <p className="text-4xl font-bold text-purple-400 mt-4">3</p>
//                 </div>
//             </div>

//             {/* Upcoming Sessions */}
//             <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>

//                 <div className="space-y-4">
//                     <div className="bg-[#0f172a] p-4 rounded-lg flex justify-between items-center">
//                         <div>
//                             <p className="font-semibold">Math Tutoring</p>
//                             <p className="text-gray-400 text-sm">July 10 • 3:00 PM</p>
//                         </div>
//                         <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
//                             View
//                         </button>
//                     </div>

//                     <div className="bg-[#0f172a] p-4 rounded-lg flex justify-between items-center">
//                         <div>
//                             <p className="font-semibold">Science Review</p>
//                             <p className="text-gray-400 text-sm">July 12 • 1:00 PM</p>
//                         </div>
//                         <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
//                             View
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* AI Recommendations */}
//             <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
//                 <h2 className="text-2xl font-bold mb-4">AI Recommendations</h2>

//                 <div className="space-y-4">
//                     <div className="bg-[#0f172a] p-4 rounded-lg">
//                         <p className="font-semibold text-yellow-400">
//                             📘 Study Suggestion
//                         </p>
//                         <p className="text-gray-300 mt-2">
//                             You’ve improved in Algebra. Consider reviewing Geometry next to
//                             strengthen your foundation.
//                         </p>
//                     </div>

//                     <div className="bg-[#0f172a] p-4 rounded-lg">
//                         <p className="font-semibold text-yellow-400">
//                             🎯 Skill Focus
//                         </p>
//                         <p className="text-gray-300 mt-2">
//                             Your writing scores show potential. Try a guided writing session
//                             this week.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//this is the new Dashboard component with Tailwind CSS styling. It includes a welcome banner, stats cards, upcoming sessions, and AI recommendations. The layout is responsive and visually appealing, using a dark theme with accent colors for emphasis. I need to create a css styling first to make sure it runs smoothly.
import React from "react";
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

    const progressData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Learning Progress",
                data: [20, 40, 60, 80],
                borderColor: "#4e79a7",
                backgroundColor: "rgba(78, 121, 167, 0.2)",
                tension: 0.4,
            },
        ],
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dashboard-header">
                <h1>Welcome Back, John!</h1>
                <p>Let's get ready to learn.</p>
            </header>

            {/* Stats Section */}
            <section className="dashboard-stats">
                <div className="stat-box">
                    <h3>Upcoming Sessions</h3>
                    <p>3</p>
                    <a href="#">View Schedule</a>
                </div>
                <div className="stat-box">
                    <h3>Hours Learned</h3>
                    <p>12.5 hrs</p>
                </div>
                <div className="stat-box">
                    <h3>Current Goal</h3>
                    <p>Complete Algebra Unit</p>
                </div>
                <div className="stat-box">
                    <h3>AI Suggestions</h3>
                    <p>New Recommendations</p>
                </div>
            </section>

            {/* Next Session */}
            <section className="next-session">
                <h2>Next Session</h2>
                <div className="session-card">
                    <h3>Math Tutoring</h3>
                    <p>Tomorrow | 4:00 PM</p>
                    <button className="join-btn">Join Session</button>
                    <button className="reschedule-btn">Reschedule</button>
                </div>
            </section>

            {/* Recommended Tutors */}
            <section className="recommended-tutors">
                <h2>Recommended Tutors</h2>
                <div className="tutor-list">
                    <div className="tutor-card">
                        <h4>Sarah Miller</h4>
                        <p>Chemistry Expert</p>
                    </div>
                    <div className="tutor-card">
                        <h4>Michael Chen</h4>
                        <p>English & Literature</p>
                    </div>
                    <div className="tutor-card">
                        <h4>Laura Stevens</h4>
                        <p>Biology Specialist</p>
                    </div>
                </div>
            </section>

            {/* Learning Progress */}
            <section className="learning-progress">
                <h2>Learning Progress</h2>

                <div className="chart-container">
                    <Line data={progressData} />
                </div>

                <div className="calendar-container">
                    <Calendar />
                </div>
            </section>

            {/* Goals */}
            <section className="goals">
                <h2>Achieve Your Goals!</h2>
                <p>Track your progress and reach your learning targets.</p>
                <button className="set-goals-btn">Set Goals</button>
            </section>
        </div>
    );
}
