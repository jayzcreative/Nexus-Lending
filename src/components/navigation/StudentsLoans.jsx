import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentLoans() {
    return (
        <div className="pt-[120px] pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl font-extrabold text-[#0B1E3D] mb-4">Invest in Your Education.</h1>
                    <p className="text-gray-500 max-w-xl">From undergraduate degrees to specialized MBA loans, we help you fund your future without the stress of high-interest debt.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="p-10 bg-slate-900 rounded-3xl text-white">
                        <h2 className="text-2xl font-bold mb-4">Undergrad & Graduate</h2>
                        <p className="text-slate-400 mb-6">Simple, transparent funding for your university years.</p>
                        <Link to="/check-rate" className="text-cyan-400 font-bold hover:underline underline-offset-4">Apply Now →</Link>
                    </div>
                    <div className="p-10 bg-cyan-500 rounded-3xl text-white">
                        <h2 className="text-2xl font-bold mb-4">Refinance</h2>
                        <p className="text-cyan-100 mb-6">Lower your monthly payments on existing student debt.</p>
                        <Link to="/check-rate" className="text-white font-bold hover:underline underline-offset-4">Check My Savings →</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}