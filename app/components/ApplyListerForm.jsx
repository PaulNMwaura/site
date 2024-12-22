"use client";

import React, { useState } from "react";
import Link from "next/link";   
import { useRouter } from "next/navigation";

export default function ApplyLister() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [schedule, setSchedule] = useState({
        Monday: { start: "", end: "" },
        Tuesday: { start: "", end: "" },
        Wednesday: { start: "", end: "" },
        Thursday: { start: "", end: "" },
        Friday: { start: "", end: "" },
        Saturday: { start: "", end: "" },
        Sunday: { start: "", end: "" },
    });
    const [status, setStatus] = useState("Pending");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleScheduleChange = (day, type, value) => {
        setSchedule((prevSchedule) => ({
            ...prevSchedule,
            [day]: { ...prevSchedule[day], [type]: value },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!firstname || !lastname || !location || !phone || !email || !status) {
            setError("All fields are necessary.");
            return;
        }

        try {
            const res = await fetch("api/applyLister", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    location,
                    phone,
                    email,
                    schedule,
                    status,
                }),
            });

            if (res.ok) {
                const form = e.target;
                form.reset();
                // router.push("/");
            } else {
                console.log("Lister registration failed.");
            }
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    return (
        <div className="w-full h-full flex flex-wrap">
            <div className="w-full h-[500px]">
                <img src="/placeholder/template.png" alt="Style 1" width={100} height={100} layout="responsive" className="w-full h-full object-cover rounded-3xl"/>
            </div>
            <div className="max-w-md p-4">
                <h1 className="text-xl font-bold mb-4">Apply to Become a Lister</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="block w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="block w-full border p-2 rounded"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="block w-full border p-2 rounded"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="block w-full border p-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="block w-full border p-2 rounded"
                    />
                </form>
                {error && <p className="mt-4 text-center">{error}</p>}
            </div>
            <div className="p-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Schedule Availability</h2>
                            {Object.keys(schedule).map((day) => (
                                <div key={day} className="flex items-center space-x-4">
                                    <label className="w-1/5 font-medium">{day}</label>
                                    <input
                                        type="time"
                                        onChange={(e) => handleScheduleChange(day, "start", e.target.value)}
                                        value={schedule[day].start}
                                        className="w-2/5 border p-2 rounded"
                                    />
                                    <span>to</span>
                                    <input
                                        type="time"
                                        onChange={(e) => handleScheduleChange(day, "end", e.target.value)}
                                        value={schedule[day].end}
                                        className="w-2/5 border p-2 rounded"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            type="submit"
                            className="block w-full bg-blue-500 text-white py-2 rounded"
                        >
                            Submit Application
                        </button>
                </form>
            </div>
        </div>
    );
}
