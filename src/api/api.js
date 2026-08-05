const BASE_URL = "http://localhost:5000/api";

export const api = {
    login: (data) =>
        fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }),

    register: (data) =>
        fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }),

    getServices: () => fetch(`${BASE_URL}/services`),

    createBooking: (data) =>
        fetch(`${BASE_URL}/bookings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }),

    getBookings: (userId) => fetch(`${BASE_URL}/bookings/${userId}`),

    getAISuggestions: (data) =>
        fetch(`${BASE_URL}/ai`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        }),
};
