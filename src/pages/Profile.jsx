import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
    const { user, setUser } = useContext(AuthContext);

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
        // Update user context
        setUser({
            ...user,
            name: form.name,
            email: form.email,
        });

        alert("Profile updated successfully!");
    };

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-yellow-400">Your Profile</h1>
                <p className="text-gray-300 mt-2">
                    Manage your personal information and account settings.
                </p>
            </div>

            {/* Profile Card */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-md flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-3xl font-bold">
                    {form.name?.[0] || "U"}
                </div>

                <div>
                    <h2 className="text-2xl font-bold">{form.name || "User"}</h2>
                    <p className="text-gray-300">{form.email || "email@example.com"}</p>
                </div>
            </div>

            {/* Editable Info */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-md space-y-6">
                <h2 className="text-xl font-bold text-yellow-400">Personal Information</h2>

                <div className="flex flex-col gap-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#0f172a] border border-gray-600"
                        placeholder="Full Name"
                    />

                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="p-3 rounded bg-[#0f172a] border border-gray-600"
                        placeholder="Email Address"
                    />
                </div>
            </div>

            {/* Settings */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-md space-y-6">
                <h2 className="text-xl font-bold text-yellow-400">Account Settings</h2>

                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Enable Notifications</span>
                    <input
                        type="checkbox"
                        name="notifications"
                        checked={form.notifications}
                        onChange={handleChange}
                        className="w-5 h-5"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-300">Dark Mode</span>
                    <input
                        type="checkbox"
                        name="darkMode"
                        checked={form.darkMode}
                        onChange={handleChange}
                        className="w-5 h-5"
                    />
                </div>
            </div>

            {/* Save Button */}
            <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold"
            >
                Save Changes
            </button>
        </div>
    );
}
