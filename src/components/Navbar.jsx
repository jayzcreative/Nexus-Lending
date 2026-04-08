import React, { useState } from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
    const [activeDropdown, setActiveDropdown] = useState(null); // Desktop hover state
    const [mobileAccordion, setMobileAccordion] = useState(null); // Mobile accordion state

    const products = {
        "Personal Loans": ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"],
        "Car Loans": ["New Car Finance", "Used Car Loans", "Refinance", "Lease Buyout", "Auto Equity"],
        "Health & Insurance": ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"],
        "Mortgage": ["Home Purchase", "Refinance", "Cash-out Refi", "Jumbo Loans", "FHA Loans"],
        "Student Loans": ["Undergraduate", "Graduate", "Parent Plus", "Refinance", "MBA Loans"]
    };

    const navSections = {
        "Why Nexus?": [
            { title: "Our AI Tech", desc: "Alternative data modeling" },
            { title: "Security", desc: "Bank-grade encryption" },
            { title: "Nexus vs Banks", desc: "Why we are 10x faster" },
            { title: "Success Stories", desc: "Real user testimonials" }
        ],
        "How it works": [
            { title: "The 3-Step Process", desc: "From rate check to funding" },
            { title: "Eligibility", desc: "What you need to apply" },
            { title: "Rates & Fees", desc: "Transparent APR ranges" },
            { title: "Help Center", desc: "Detailed FAQ & Support" }
        ],
        "About Us": [
            { title: "Our Mission", desc: "Democratizing credit access" },
            { title: "Leadership", desc: "Meet the innovators" },
            { title: "Careers", desc: "Join the Fintech future" },
            { title: "Press", desc: "Nexus in the news" }
        ]
    };

    const navLinks = ["Products", "Why Nexus?", "How it works", "About Us"];

    const toggleAccordion = (name) => {
        setMobileAccordion(mobileAccordion === name ? null : name);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 font-sans shadow-sm" onMouseLeave={() => setActiveDropdown(null)}>
            <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <img src={logo} alt="Nexus Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-[#0B1E3D] font-bold text-xl tracking-tight uppercase">Nexus</span>
                        <span className="text-cyan-500 text-[10px] font-bold tracking-[0.2em] uppercase">Lending</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2 h-full">
                    {navLinks.map((name) => (
                        <div key={name} className="h-full flex items-center" onMouseEnter={() => setActiveDropdown(name)}>
                            <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeDropdown === name ? 'text-cyan-500 bg-gray-50' : 'text-gray-900 hover:text-cyan-500'}`}>
                                {name}
                                <svg className={`w-4 h-4 transition-transform ${activeDropdown === name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-gray-900 hover:text-cyan-500 text-sm font-semibold px-4 py-2 transition-colors">Log In</button>
                    <button className="px-6 py-2.5 bg-cyan-500 hover:bg-black text-white text-sm font-bold rounded-lg shadow-md shadow-sky-200 transition-all active:scale-95">Check My Rate</button>
                    <button className="lg:hidden text-gray-900 p-2" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeWidth="2" stroke="currentColor" /></svg>
                    </button>
                </div>
            </div>

            {/* --- DESKTOP DROPDOWN MENUS --- */}
            {activeDropdown === "Products" && (
                <div className="hidden lg:block absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-5 gap-8">
                        {Object.entries(products).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="text-[#0B1E3D] font-bold text-xs uppercase tracking-widest mb-4 border-l-4 border-cyan-500 pl-3">{category}</h3>
                                <ul className="space-y-2">
                                    {items.map(item => (
                                        <li key={item}><a href="#" className="text-gray-500 hover:text-cyan-500 text-sm block py-1">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeDropdown && activeDropdown !== "Products" && (
                <div className="hidden lg:block absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-2xl">
                    <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-6">
                        {navSections[activeDropdown].map((item) => (
                            <a key={item.title} href="#" className="group p-4 rounded-xl hover:bg-gray-50 transition-all">
                                <p className="text-[#0B1E3D] font-bold text-sm mb-1 group-hover:text-cyan-500">{item.title}</p>
                                <p className="text-gray-400 text-xs">{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* --- MOBILE MENU --- */}
            {isOpen && (
                <div className="lg:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white z-40 overflow-y-auto px-6 py-6 animate-in slide-in-from-right duration-300">
                    <div className="flex flex-col gap-2">
                        {navLinks.map(name => (
                            <div key={name} className="border-b border-gray-50 last:border-none">
                                <button 
                                    onClick={() => toggleAccordion(name)}
                                    className="w-full flex items-center justify-between text-gray-900 font-bold text-xl py-4"
                                >
                                    {name}
                                    <svg className={`w-5 h-5 transition-transform ${mobileAccordion === name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </button>
                                
                                {/* Accordion Content */}
                                <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === name ? 'max-h-[500px] mb-4' : 'max-h-0'}`}>
                                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-cyan-500/30">
                                        <a href="#" className="text-cyan-500 font-bold text-sm py-1">View all {name}</a>
                                        {name === "Products" ? (
                                            Object.keys(products).map(cat => (
                                                <a key={cat} href="#" className="text-gray-500 text-sm py-1">{cat}</a>
                                            ))
                                        ) : (
                                            navSections[name].map(item => (
                                                <a key={item.title} href="#" className="text-gray-500 text-sm py-1">{item.title}</a>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 flex flex-col gap-4">
                        <button className="w-full py-4 text-[#0B1E3D] font-bold border-2 border-[#0B1E3D]/10 rounded-xl">Log In</button>
                        <button className="w-full py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg">Check My Rate</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;