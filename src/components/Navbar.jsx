import React, { useState } from 'react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
    const [activeDropdown, setActiveDropdown] = useState(null); // Desktop hover state
    const [mobileAccordion, setMobileAccordion] = useState(null); // Mobile accordion state

    // Mapping for main link destinations
    const linkPaths = {
        "Products": "/products",
        "Why Nexus?": "/why-nexus",
        "How it works": "/how-it-works",
        "About Us": "/about-us" // This will now correctly redirect to your AboutUsLinks page
    };

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
                <a href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group cursor-pointer">
                    <img src={logo} alt="Nexus Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-[#0B1E3D] font-bold text-xl tracking-tight uppercase">Nexus</span>
                        <span className="text-cyan-500 text-[10px] font-bold tracking-[0.2em] uppercase">Lending</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-2 h-full">
                    {navLinks.map((name) => (
                        <div key={name} className="h-full flex items-center" onMouseEnter={() => setActiveDropdown(name)}>
                            <a 
                                href={linkPaths[name]} 
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeDropdown === name ? 'text-cyan-500 bg-gray-50' : 'text-gray-900 hover:text-cyan-500'}`}
                            >
                                {name}
                                <svg className={`w-4 h-4 transition-transform ${activeDropdown === name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-gray-900 hover:text-cyan-500 text-sm font-semibold px-4 py-2 transition-colors">Log In</button>
                    <button className="px-6 py-2.5 bg-cyan-500 hover:bg-black text-white text-sm font-bold rounded-lg shadow-md shadow-sky-200 transition-all active:scale-95">Check My Rate</button>
                    
                    <button className="lg:hidden text-gray-900 p-2 z-50 transition-colors hover:text-cyan-500" onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- DESKTOP DROPDOWN MENUS --- */}
            {activeDropdown === "Products" && (
                <div className="hidden lg:block absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-5 gap-8">
                        {Object.entries(products).map(([category, items]) => (
                            <div key={category}>
                                <a 
                                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-[#0B1E3D] font-bold text-xs uppercase tracking-widest mb-4 border-l-4 border-cyan-500 pl-3 block hover:text-cyan-500 transition-colors"
                                >
                                    {category}
                                </a>
                                <ul className="space-y-2">
                                    {items.map(item => (
                                        <li key={item}><a href="#" className="text-gray-500 hover:text-cyan-500 text-sm block py-1 transition-colors">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeDropdown && activeDropdown !== "Products" && (
                <div className="hidden lg:block absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-4 gap-6">
                        {navSections[activeDropdown].map((item) => (
                            <a key={item.title} href={linkPaths[activeDropdown]} className="group p-4 rounded-xl hover:bg-gray-50 transition-all">
                                <p className="text-[#0B1E3D] font-bold text-sm mb-1 group-hover:text-cyan-500">{item.title}</p>
                                <p className="text-gray-400 text-xs">{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* --- MOBILE MENU --- */}
            {isOpen && (
                <>
                    <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity" onClick={() => setIsOpen(false)}></div>
                    
                    <div className="lg:hidden fixed top-[90px] right-4 left-4 max-h-[80vh] bg-white z-40 overflow-y-auto px-6 py-8 rounded-[2.5rem] shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300">
                        <div className="flex flex-col gap-2">
                            {navLinks.map(name => (
                                <div key={name} className="border-b border-gray-50 last:border-none">
                                    <div className="flex items-center justify-between w-full">
                                        <a 
                                            href={linkPaths[name]} 
                                            onClick={() => setIsOpen(false)}
                                            className="flex-grow text-[#0B1E3D] font-bold text-lg py-4 px-4 rounded-l-2xl transition-all duration-200 hover:text-cyan-500 active:bg-gray-50"
                                        >
                                            {name}
                                        </a>
                                        <button 
                                            onClick={() => toggleAccordion(name)}
                                            className="py-4 px-6 rounded-r-2xl text-gray-400 hover:text-cyan-500 transition-all border-l border-gray-50 active:bg-gray-50"
                                        >
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${mobileAccordion === name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                    </div>
                                    
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileAccordion === name ? 'max-h-[800px] mb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="pl-6 mt-2 flex flex-col gap-3 border-l-2 border-cyan-500/20">
                                            {name === "Products" ? (
                                                Object.keys(products).map(cat => (
                                                    <a 
                                                        key={cat} 
                                                        href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-[#0B1E3D] text-md py-3 px-4 rounded-xl bg-gray-50 hover:bg-cyan-50 hover:text-cyan-600 font-bold transition-all active:scale-95"
                                                    >
                                                        {cat}
                                                    </a>
                                                ))
                                            ) : (
                                                navSections[name].map(item => (
                                                    <a key={item.title} href={linkPaths[name]} onClick={() => setIsOpen(false)} className="text-gray-500 text-sm py-2 px-3 rounded-xl transition-colors hover:bg-cyan-50 hover:text-cyan-600">
                                                        <span className="font-bold block text-[#0B1E3D]">{item.title}</span>
                                                        <span className="text-[11px] opacity-70">{item.desc}</span>
                                                    </a>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-8 flex flex-col gap-3">
                            <button className="w-full py-4 text-[#0B1E3D] font-bold border-2 border-[#0B1E3D]/5 rounded-2xl hover:bg-gray-50 active:scale-95 transition-all">Log In</button>
                            <button className="w-full py-4 bg-cyan-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-200 hover:bg-black active:scale-95 transition-all">Check My Rate</button>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;