import React from 'react';
import { Link } from 'react-router-dom';

export default function MortgageLoans() {
    return (
        <div className="pt-[120px] pb-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
                    <div className="max-w-3xl">
                        <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase">Your Future Home</span>
                        <h1 className="text-5xl font-extrabold text-[#0B1E3D] mt-4 mb-6">
                            Mortgage Solutions for the <span className="text-cyan-500">Next Generation.</span>
                        </h1>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            Whether you're a first-time buyer or looking to cash out equity, our AI modeling identifies your true creditworthiness to secure lower rates than traditional banks.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/check-rate" className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-black transition-all">
                                Get Pre-Approved
                            </Link>
                            <Link to="/contact" className="px-8 py-4 border-2 border-gray-100 text-[#0B1E3D] font-bold rounded-xl hover:bg-gray-50 transition-all">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}