import React from 'react';
import logo from '../assets/logo.png'; 

export default function Footer() {
    // Data synced perfectly with your Navbar logic
    const products = {
        "Personal Loans": ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"],
        "Car Loans": ["New Car Finance", "Used Car Loans", "Refinance", "Lease Buyout", "Auto Equity"],
        "Health & Insurance": ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"],
        "Mortgage": ["Home Purchase", "Refinance", "Cash-out Refi", "Jumbo Loans", "FHA Loans"],
        "Student Loans": ["Undergraduate", "Graduate", "Parent Plus", "Refinance", "MBA Loans"]
    };

    const whyNexus = [
        "Our AI Tech", "Security", "Nexus vs Banks", "Success Stories"
    ];

    const resources = [
        "The 3-Step Process", "Eligibility", "Rates & Fees", "Help Center"
    ];

    return (
        <footer className="bg-[#0B1E3D] text-white pt-24 pb-12 font-sans border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. BRAND & SOCIAL SECTION */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logo} alt="Nexus Logo" className="w-10 h-10 object-contain brightness-0 invert" />
                            <div className="flex flex-col leading-tight">
                                <span className="text-white font-bold text-2xl tracking-tight uppercase">Nexus</span>
                                <span className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">Lending</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            Democratizing credit access through high-fidelity AI alternative data modeling. We provide faster, more transparent, and user-friendly lending solutions for the next generation.
                        </p>
                        <div className="flex gap-4">
                            {['fb', 'tw', 'ln', 'ig'].map((social) => (
                                <div key={social} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 transition-all cursor-pointer group">
                                    <div className="w-4 h-4 bg-gray-400 group-hover:bg-white transition-colors rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex-1 max-w-lg">
                        <h4 className="text-cyan-400 font-black text-sm uppercase tracking-widest mb-2">Ready to start?</h4>
                        <p className="text-gray-300 text-xl font-bold mb-6">Check your personalized rate in under 5 minutes.</p>
                        <button className="px-8 py-3 bg-cyan-500 hover:bg-white hover:text-[#0B1E3D] text-white font-black rounded-xl transition-all shadow-lg shadow-cyan-500/20">
                            Check My Rate
                        </button>
                    </div>
                </div>

                {/* 2. MEGA LINK GRID (Synced with Navbar) */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 mb-20 border-t border-white/10 pt-16">
                    
                    {/* Products Columns (Split for better spacing) */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-cyan-500 pl-3">Personal & Auto</h4>
                        <ul className="space-y-4">
                            {[...products["Personal Loans"], ...products["Car Loans"]].slice(0, 6).map(link => (
                                <li key={link} className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-cyan-500 pl-3">Health & Student</h4>
                        <ul className="space-y-4">
                            {[...products["Health & Insurance"], ...products["Student Loans"]].slice(0, 6).map(link => (
                                <li key={link} className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-cyan-500 pl-3">Company</h4>
                        <ul className="space-y-4">
                            {whyNexus.map(link => (
                                <li key={link} className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">{link}</li>
                            ))}
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-cyan-500 pl-3">Resources</h4>
                        <ul className="space-y-4">
                            {resources.map(link => (
                                <li key={link} className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8 border-l-2 border-cyan-500 pl-3">Support & Legal</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">Help Center</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">Terms of Use</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">Privacy Policy</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-colors cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* 3. FINAL FOOTER BAR */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
                        © 2026 NEXUS LENDING PLATFORM. ALL RIGHTS RESERVED. <span className="text-white ml-2">PROUDLY BUILT BY JAYZTHEPLUG.</span>
                    </p>
                    
                    <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Ensure these paths match your assets */}
                        <div className="flex items-center gap-2 border-r border-white/10 pr-8">
                             <span className="text-[10px] font-bold">FDIC MEMBER</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="text-[10px] font-bold">EQUAL HOUSING LENDER</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}