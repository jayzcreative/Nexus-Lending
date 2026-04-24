import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const [mobileSubAccordion, setMobileSubAccordion] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

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
        "CheckRate": "/check-rate"
    };

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

    const navSections = {
        "Why Nexus?": [
            { title: "Our AI Tech", desc: "Alternative data modeling", path: "/why-nexus#ai-tech" },
            { title: "Security", desc: "Bank-grade encryption", path: "/why-nexus#security" },
            { title: "Nexus vs Banks", desc: "Why we are 10x faster", path: "/why-nexus#comparison" },
            { title: "Success Stories", desc: "Real user testimonials", path: "/why-nexus#stories" }
        ],
        "How it works": [
            { title: "The 4-Step Process", desc: "From rate check to funding", path: "/how-it-works#process" },
            { title: "Eligibility", desc: "What you need to apply", path: "/how-it-works#eligibility" },
            { title: "Rates & Fees", desc: "Transparent APR ranges", path: "/how-it-works#rates" },
            { title: "Help Center", desc: "Detailed FAQ & Support", path: "/how-it-works#help" }
        ],
        "About Us": [
            { title: "Our Mission", desc: "Democratizing credit access", path: "/about-us#mission" },
            { title: "Leadership", desc: "Meet the innovators", path: "/about-us#leadership" },
            { title: "Careers", desc: "Join the Fintech future", path: "/about-us#careers" },
            { title: "Press", desc: "Nexus in the news", path: "/about-us#press" }
        ]
    };

    const navLinks = ["Products", "Why Nexus?", "How it works", "About Us"];

    const toggleAccordion = (name) => {
        setMobileAccordion(mobileAccordion === name ? null : name);
        setMobileSubAccordion(null);
    };

    const toggleSubAccordion = (name) => {
        setMobileSubAccordion(mobileSubAccordion === name ? null : name);
    };

    // Helper function to handle scroll behavior across pages
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; // This accounts for your fixed navbar height
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm" onMouseLeave={() => setActiveDropdown(null)}>
            <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
                
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
                    <img src={logo} alt="Nexus Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-[#0B1E3D] font-bold text-xl tracking-tight uppercase">Nexus</span>
                        <span className="text-cyan-500 text-[10px] font-bold tracking-[0.2em] uppercase">Lending</span>
                    </div>
                </Link>

                {/* --- DESKTOP NAV --- */}
                <div className="hidden lg:flex items-center gap-2 h-full">
                    {navLinks.map((name) => (
                        <div key={name} className="h-full flex items-center" onMouseEnter={() => setActiveDropdown(name)}>
                            <Link 
                                to={linkPaths[name]} 
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeDropdown === name ? 'text-cyan-500 bg-gray-50' : 'text-gray-900 hover:text-cyan-500'}`}
                            >
                                {name}
                                <svg className={`w-4 h-4 transition-transform ${activeDropdown === name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link to={linkPaths["Login"]} className="hidden sm:block text-gray-900 hover:text-cyan-500 text-sm font-semibold px-4 py-2">
                        Log In
                    </Link>
                    <Link 
                        to={linkPaths["CheckRate"]} 
                        className="px-6 py-2.5 bg-cyan-500 hover:bg-black text-white text-sm font-bold rounded-lg shadow-md shadow-sky-200 transition-all active:scale-95"
                    >
                        Check My Rate
                    </Link>
                    
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
                                <Link 
                                    to={linkPaths[category]} 
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-[#0B1E3D] font-bold text-xs uppercase tracking-widest mb-4 border-l-4 border-cyan-500 pl-3 block hover:text-cyan-500"
                                >
                                    {category}
                                </Link>
                                <ul className="space-y-2">
                                    {items.map(item => (
                                        <li key={item}>
                                            <HashLink 
                                                smooth
                                                scroll={scrollWithOffset}
                                                to={`${linkPaths[category]}${subLinkIds[item] || ''}`} 
                                                onClick={() => setActiveDropdown(null)}
                                                className="text-gray-500 hover:text-cyan-500 text-sm block py-1 transition-colors"
                                            >
                                                {item.replace(/ (Auto|Mortgage|Student)/, '')}
                                            </HashLink>
                                        </li>
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
                            <HashLink 
                                smooth 
                                scroll={scrollWithOffset}
                                key={item.title} 
                                to={item.path} 
                                onClick={() => setActiveDropdown(null)} 
                                className="group p-4 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                <p className="text-[#0B1E3D] font-bold text-sm mb-1 group-hover:text-cyan-500">{item.title}</p>
                                <p className="text-gray-400 text-xs">{item.desc}</p>
                            </HashLink>
                        ))}
                    </div>
                </div>
            )}

            {/* --- MOBILE SIDEBAR MENU --- */}
            <div 
                className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
                onClick={() => setIsOpen(false)}
            ></div>
            
            <div className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full px-6 py-20 overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        {navLinks.map(name => (
                            <div key={name} className="border-b border-gray-50 last:border-none">
                                <div className="flex items-center justify-between w-full">
                                    <Link 
                                        to={linkPaths[name]} 
                                        onClick={() => setIsOpen(false)}
                                        className="flex-grow text-[#0B1E3D] font-bold text-lg py-4 hover:text-cyan-500"
                                    >
                                        {name}
                                    </Link>
                                    <button onClick={() => toggleAccordion(name)} className="py-4 px-4 text-gray-400 hover:text-cyan-500">
                                        <svg className={`w-5 h-5 transition-transform duration-300 ${mobileAccordion === name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                </div>
                                
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileAccordion === name ? 'max-h-[1500px] mb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-cyan-500/20">
                                        {name === "Products" ? (
                                            Object.entries(products).map(([cat, items]) => (
                                                <div key={cat} className="flex flex-col">
                                                    <div className="flex items-center justify-between w-full bg-gray-50 rounded-xl px-4 py-3">
                                                        <Link 
                                                            to={linkPaths[cat]}
                                                            onClick={() => setIsOpen(false)}
                                                            className="text-[#0B1E3D] text-md font-bold flex-grow"
                                                        >
                                                            {cat}
                                                        </Link>
                                                        <button 
                                                            onClick={() => toggleSubAccordion(cat)}
                                                            className="p-1 text-gray-400"
                                                        >
                                                            <svg className={`w-5 h-5 transition-transform ${mobileSubAccordion === cat ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                        </button>
                                                    </div>
                                                    <div className={`overflow-hidden transition-all duration-300 ${mobileSubAccordion === cat ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
                                                        {items.map(subItem => (
                                                            <HashLink
                                                                smooth
                                                                scroll={scrollWithOffset}
                                                                key={subItem}
                                                                to={`${linkPaths[cat]}${subLinkIds[subItem] || ''}`}
                                                                onClick={() => setIsOpen(false)}
                                                                className="block pl-6 py-2 text-gray-500 text-sm hover:text-cyan-500 font-medium"
                                                            >
                                                                {subItem.replace(/ (Auto|Mortgage|Student)/, '')}
                                                            </HashLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            navSections[name].map(item => (
                                                <HashLink smooth scroll={scrollWithOffset} key={item.title} to={item.path} onClick={() => setIsOpen(false)} className="text-gray-500 text-sm py-2 px-3 rounded-xl hover:bg-cyan-50">
                                                    <span className="font-bold block text-[#0B1E3D]">{item.title}</span>
                                                    <span className="text-[11px] opacity-70">{item.desc}</span>
                                                </HashLink>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <div className="border-t border-gray-100 mt-4 pt-4">
                            <Link 
                                to={linkPaths["Login"]} 
                                onClick={() => setIsOpen(false)}
                                className="block text-[#0B1E3D] font-bold text-lg py-4 hover:text-cyan-500"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;