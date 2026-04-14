import React from 'react';
import { Link } from 'react-router-dom';

export default function PersonalLoans() {
    return (
        <div className="pt-[120px] pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0B1E3D] leading-tight mb-6">
                            Personal Loans <br />
                            <span className="text-cyan-500">Tailored to You.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Get funded from $1,000 to $50,000. Our AI-driven modeling looks beyond just credit scores to give you the best rates possible.
                        </p>
                        <Link 
                            to="/check-rate" 
                            className="inline-block px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-100 hover:bg-black transition-all transform hover:-translate-y-1"
                        >
                            Check Your Rate
                        </Link>
                    </div>
                    <div className="bg-slate-50 rounded-[3rem] p-12 border border-gray-100 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="font-bold text-[#0B1E3D] text-xl mb-4">Loan Calculator</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Amount</label>
                                    <p className="text-3xl font-bold text-[#0B1E3D]">$25,000</p>
                                </div>
                                <div className="h-1.5 w-full bg-gray-200 rounded-full">
                                    <div className="h-full w-1/2 bg-cyan-500 rounded-full"></div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Monthly Payment</span>
                                    <span className="text-sm font-bold text-cyan-500">$425/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Fast Funding", desc: "Money in your account as soon as the next business day." },
                        { title: "No Hidden Fees", desc: "No application fees, no origination fees, no surprises." },
                        { title: "Fixed Rates", desc: "Your monthly payment stays the same for the life of the loan." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:border-cyan-200 transition-colors bg-white shadow-sm">
                            <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-cyan-500 font-bold text-xl">{i + 1}</span>
                            </div>
                            <h4 className="font-bold text-[#0B1E3D] mb-3">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}