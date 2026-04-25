import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Footer({ onCheckRate }) {
    // Mapping logic synced with Navbar and App.jsx
    const linkPaths = {
        "Products": "/products",
        "Personal Loans": "/personal-loans",
        "Car Loans": "/car-loans",
        "Health & Insurance": "/health-insurance",
        "Mortgage": "/mortgage",
        "Student Loans": "/student-loans",
        "Why Nexus?": "/why-nexus",
        "How it works": "/how-it-works",
        "About Us": "/about-us",
        "Login": "/login",
        "CheckRate": "/check-rate",
        "Resources": "/how-it-works",
        "Terms of Use": "/terms",
        "Privacy Policy": "/privacy",
        "Cookie Settings": "/cookies",
        "Disclosures": "/disclosures",
        "Contact Us": "/contact",
        "Help Center": "/help"
    };

    // FIXED: Unique keys for each refinance type to prevent collision
    const subLinkIds = {
        "Debt Consolidation": "#debt-consolidation", "Wedding Loans": "#wedding-loans", "Home Improvement": "#home-improvement", "Vacation Loans": "#vacation-loans", "Emergency Loans": "#emergency-loans",
        "New Car Finance": "#new-car-finance", "Used Car Loans": "#used-car-loans", "Refinance Auto": "#refinance-auto", "Lease Buyout": "#lease-buyout", "Auto Equity": "#auto-equity",
        "Medical Bills": "#medical-bills", "Dental Loans": "#dental-loans", "Life Insurance": "#life-insurance", "Health Coverage": "#health-coverage", "Pet Insurance": "#pet-insurance",
        "Home Purchase": "#home-purchase", "Refinance Mortgage": "#refinance", "Cash-out Refi": "#cash-out-refi", "Jumbo Loans": "#jumbo-loans", "FHA Loans": "#fha-loans",
        "Undergraduate": "#undergraduate", "Graduate": "#graduate", "Parent Plus": "#parent-plus", "Refinance Student": "#refinance-student", "MBA Loans": "#mba-loans"
    };

    const products = {
        "Personal Loans": ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"],
        "Car Loans": ["New Car Finance", "Used Car Loans", "Refinance Auto", "Lease Buyout", "Auto Equity"],
        "Health & Insurance": ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"],
        "Mortgage": ["Home Purchase", "Refinance Mortgage", "Cash-out Refi", "Jumbo Loans", "FHA Loans"],
        "Student Loans": ["Undergraduate", "Graduate", "Parent Plus", "Refinance Student", "MBA Loans"]
    };

    const whyNexus = [
        { title: "Our AI Tech", path: "/why-nexus#ai-tech" },
        { title: "Security", path: "/why-nexus#security" },
        { title: "Nexus vs Banks", path: "/why-nexus#comparison" },
        { title: "Success Stories", path: "/why-nexus#stories" }
    ];

    const howItWorks = [
        { title: "The 4-Step Process", path: "/how-it-works#process" },
        { title: "Eligibility", path: "/how-it-works#eligibility" },
        { title: "Rates & Fees", path: "/how-it-works#rates" },
        { title: "Help Center", path: "/how-it-works#help" }
    ];

    const aboutUs = [
        { title: "Our Mission", path: "/about-us#mission" },
        { title: "Leadership", path: "/about-us#leadership" },
        { title: "Careers", path: "/about-us#careers" },
        { title: "Press", path: "/about-us#press" }
    ];

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
                        
                        <Link 
                            to="/check-rate" 
                            onClick={onCheckRate}
                            className="inline-block px-8 py-3 bg-cyan-500 hover:bg-white hover:text-[#0B1E3D] text-white font-black rounded-xl transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                        >
                            Check My Rate
                        </Link>
                    </div>
                </div>

                {/* 2. MEGA LINK GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 mb-20 border-t border-white/10 pt-16">
                    {Object.entries(products).map(([category, items]) => (
                        <div key={category}>
                            <Link to={linkPaths[category]} className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3 block hover:text-cyan-400 transition-colors">
                                {category}
                            </Link>
                            <ul className="space-y-3">
                                {items.map((item, index) => (
                                    <li 
                                        key={item} 
                                        className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}
                                    >
                                        <Link to={`${linkPaths[category]}${subLinkIds[item] || ''}`}>
                                            {item.replace(/ (Auto|Mortgage|Student)/, '')}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <Link to={linkPaths["Why Nexus?"]} className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3 block hover:text-cyan-400 transition-colors">
                            Why Nexus?
                        </Link>
                        <ul className="space-y-3">
                            {whyNexus.map((item, index) => (
                                <li key={item.title} className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Link to={linkPaths["How it works"]} className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3 block hover:text-cyan-400 transition-colors">
                            How It Works
                        </Link>
                        <ul className="space-y-3">
                            {howItWorks.map((item, index) => (
                                <li key={item.title} className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <Link to={linkPaths["About Us"]} className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3 block hover:text-cyan-400 transition-colors">
                            About Us
                        </Link>
                        <ul className="space-y-3">
                            {aboutUs.map((item, index) => (
                                <li key={item.title} className={`text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ${index > 2 ? 'hidden md:block' : ''}`}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-cyan-400 font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">Compliance & Privacy</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">
                                <Link to={linkPaths["Terms of Use"]}>Terms of Use</Link>
                            </li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">
                                <Link to={linkPaths["Privacy Policy"]}>Privacy Policy</Link>
                            </li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer ">
                                <Link to={linkPaths["Cookie Settings"]}>Cookie Settings</Link>
                            </li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer  ">
                                <Link to={linkPaths["Disclosures"]}>Disclosures</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-cyan-500 pl-3">Support & Legal</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">
                                <Link to={linkPaths["Contact Us"]}>Contact Us</Link>
                            </li>
                            <li className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors cursor-pointer">
                                <Link to={linkPaths["Help Center"]}>Help Center</Link>
                            </li>
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
                            PROUDLY BUILT BY {" "}
                            <span className="text-cyan-500">
                                <a href="https://github.com/jayzcreative" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">JAYZTHEPLUG</a> 
                                & 
                                <a href="https://github.com/WAYNEMAUTSA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors ml-1">MANDEMCODEX</a>
                            </span>  
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