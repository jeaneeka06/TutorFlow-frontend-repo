import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.register(form);
        navigate("/");
    };

    return (
        <div className="auth-container">
            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Full Name" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} />

                <select name="role" onChange={handleChange}>
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}
