import React from 'react';
import logo from '../assets/logo.png'; 

export default function Footer() {
    const products = {
        "Personal Loans": ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"],
        "Car Loans": ["New Car Finance", "Used Car Loans", "Refinance", "Lease Buyout", "Auto Equity"],
        "Health & Insurance": ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"],
        "Mortgage": ["Home Purchase", "Refinance", "Cash-out Refi", "Jumbo Loans", "FHA Loans"],
        "Student Loans": ["Undergraduate", "Graduate", "Parent Plus", "Refinance", "MBA Loans"]
    };

    const whyNexus = ["Our AI Tech", "Security", "Nexus vs Banks", "Success Stories"];
    const howItWorks = ["The 3-Step Process", "Eligibility", "Rates & Fees", "Help Center"];
    const aboutUs = ["Our Mission", "Leadership", "Careers", "Press"];

    const socialLinks = [
        { name: 'LinkedIn', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> },
        { name: 'X', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.464-2.464L20 4"/></svg> },
        { name: 'Facebook', svg: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> }
    ];

    return (
        <footer className="bg-[#0B1E3D] text-white pt-24 pb-12 font-sans border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* 1. BRAND & CALL TO ACTION */}
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
                            {socialLinks.map((social) => (
                                <button key={social.name} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all cursor-pointer text-gray-400">
                                    {social.svg}
                                </button>
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

                {/* 2. MEGA LINK GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 mb-20 border-t border-white/10 pt-16">
                    
                    {/* Products: Shows first 3 on mobile */}
                    {Object.entries(products).map(([category, items]) => (
                        <div key={category}>
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {items.map((item, index) => (
                                    <li 
                                        key={item} 
                                        className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Why Nexus: Shows first 3 on mobile */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">Why Nexus?</h4>
                        <ul className="space-y-3">
                            {whyNexus.map((link, index) => (
                                <li key={link} className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}>{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources: Shows first 3 on mobile */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">Resources</h4>
                        <ul className="space-y-3">
                            {howItWorks.map((link, index) => (
                                <li key={link} className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}>{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* About Us: Shows first 3 on mobile */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">About Us</h4>
                        <ul className="space-y-3">
                            {aboutUs.map((link, index) => (
                                <li key={link} className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}>{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Support & Legal: All important, showing all */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">Support & Legal</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">Contact Us</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">Help Center</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer hidden md:block">Media Kit</li>
                        </ul>
                    </div>

                    {/* Compliance & Privacy: ONLY Terms and Privacy on mobile */}
                    <div>
                        <h4 className="text-cyan-400 font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">Compliance & Privacy</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">Terms of Use</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">Privacy Policy</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer hidden md:block">Cookie Settings</li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer hidden md:block">Disclosures</li>
                        </ul>
                    </div>
                </div>

                {/* 3. FINAL FOOTER BAR */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-2">
                            © 2026 NEXUS LENDING PLATFORM. ALL RIGHTS RESERVED.
                        </p>
                        <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                            PROUDLY BUILT BY <span className="text-cyan-500">JAYZTHEPLUG & MANDEMCODEX</span>  
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2 border-r border-white/10 pr-8">
                             <span className="text-[10px] font-bold">RESERVE BANK OF ZIMBABWE COMPLIANT</span>
                        </div>
                        <div className="flex items-center gap-2">
                             <span className="text-[10px] font-bold uppercase tracking-wider">RBI Registered NBFC Partner (India)</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}