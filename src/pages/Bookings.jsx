export default function Bookings() {
    const bookings = [
        {
            subject: "Math Tutoring",
            tutor: "Sarah Johnson",
            date: "July 10",
            time: "3:00 PM",
            color: "text-blue-400",
        },
        {
            subject: "Science Review",
            tutor: "Michael Lee",
            date: "July 12",
            time: "1:00 PM",
            color: "text-green-400",
        },
        {
            subject: "English Writing",
            tutor: "Emily Carter",
            date: "July 15",
            time: "11:00 AM",
            color: "text-yellow-400",
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-yellow-400">Your Bookings</h1>
                <p className="text-gray-300 mt-2">
                    View and manage your upcoming tutoring sessions.
                </p>
            </div>

            {/* Bookings List */}
            <div className="space-y-6">
                {bookings.map((session, index) => (
                    <div
                        key={index}
                        className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:bg-[#0f172a] transition"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className={`text-xl font-bold ${session.color}`}>
                                    {session.subject}
                                </h2>
                                <p className="text-gray-300 mt-1">
                                    Tutor: {session.tutor}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {session.date} • {session.time}
                                </p>
                            </div>

                            <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg font-semibold">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
