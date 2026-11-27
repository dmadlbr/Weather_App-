"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WeatherForm() {
    const [city, setCity] = useState("");
    const router = useRouter()


    return (
        <form onSubmit={(e)=>{e.preventDefault();router.push("/?city=" + city)}} className="flex items-center gap-3 w-full max-w-md mx-auto mt-6">
            <input
                type="text"
                name="city"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200">Search</button>
        </form>
    );
}