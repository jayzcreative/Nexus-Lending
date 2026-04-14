import React from 'react';
import { Link } from 'react-router-dom';

export default function HealthLoans() {
    return (
        <div className="pt-[120px] pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-extrabold text-[#0B1E3D] mb-6">
                    Focus on Recovery, <br />
                    <span className="text-cyan-500">Not the Bills.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Nexus provides flexible financing for medical procedures, dental work, and insurance premiums so you can get the care you need today.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
                    {["Medical Bills", "Dental Work", "Life Insurance", "Pet Health"].map((item) => (
                        <div key={item} className="p-6 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#0B1E3D]">{item}</h3>
                            <p className="text-xs text-gray-400 mt-2">Instant approval for qualified health expenses.</p>
                        </div>
                    ))}
                </div>
                <Link to="/check-rate" className="inline-block px-10 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all">
                    Get Medical Funding
                </Link>
            </div>
        </div>
    );
}