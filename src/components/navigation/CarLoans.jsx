import React from 'react';
import { Link } from 'react-router-dom';

export default function CarLoans() {
    return (
        <div className="pt-[120px] pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-extrabold text-[#0B1E3D] mb-6">
                            Drive Away with <br />
                            <span className="text-cyan-500">Better Financing.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            From new purchases to lease buyouts, our AI-driven rates help you save thousands over the life of your auto loan.
                        </p>
                        <Link to="/check-rate" className="inline-block px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all">
                            Check Auto Rate
                        </Link>
                    </div>
                    <div className="bg-slate-50 rounded-[3rem] p-10 border border-gray-100">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                                <span className="text-sm font-semibold text-gray-600">New Car APR</span>
                                <span className="text-xl font-bold text-cyan-500 text-right">Starting at 3.49%</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm">
                                <span className="text-sm font-semibold text-gray-600">Used Car APR</span>
                                <span className="text-xl font-bold text-cyan-500 text-right">Starting at 4.25%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}