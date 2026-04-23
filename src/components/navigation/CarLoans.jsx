import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, History, RefreshCcw, Key, Wallet } from 'lucide-react';

// Import images
import newImg from '../../assets/new.jpg';
import usedImg from '../../assets/used.jpg';
import refinanceImg from '../../assets/refinance.jpg';
import leaseImg from '../../assets/lease.jpg';
import autoImg from '../../assets/auto.jpg';

export default function CarLoans() {
    const { hash } = useLocation();

    // Effect to handle scrolling and highlighting when arriving via a hash link
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Visual highlight effect
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-8');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-8');
                    }, 2000);
                }, 100);
            }
        }
    }, [hash]);

    const carLoanCategories = [
        {
            id: "new-car-finance",
            title: "New Car Finance",
            image: newImg,
            icon: <Car className="w-8 h-8 text-cyan-500" />,
            desc: "Get behind the wheel of a brand-new vehicle with interest rates that favor your financial future. We offer quick pre-approvals so you can negotiate at the dealership with confidence.",
            benefit: "Flexible terms up to 84 months and 0% down payment options for qualified buyers.",
            apr: "3.49%"
        },
        {
            id: "used-car-loans",
            title: "Used Car Loans",
            image: usedImg,
            icon: <History className="w-8 h-8 text-cyan-500" />,
            desc: "Financing a pre-owned vehicle doesn't have to mean high interest. Our models look beyond just the car's age to provide you with the most competitive rates available.",
            benefit: "Financing available for vehicles up to 10 years old with mileage up to 120,000.",
            apr: "4.25%"
        },
        {
            id: "refinance-auto",
            title: "Auto Refinance",
            image: refinanceImg,
            icon: <RefreshCcw className="w-8 h-8 text-cyan-500" />,
            desc: "Stuck with a high-interest auto loan? Swap it for a Nexus loan. Our average user saves $126 per month by refinancing their existing car debt.",
            benefit: "Skip up to two payments when you switch your current loan to Nexus Finance.",
            apr: "3.15%"
        },
        {
            id: "lease-buyout",
            title: "Lease Buyout",
            image: leaseImg,
            icon: <Key className="w-8 h-8 text-cyan-500" />,
            desc: "Love the car you're currently leasing? We provide the capital to buy out your lease early or at the end of your term, turning that rental into an asset.",
            benefit: "Avoid costly end-of-lease mileage and wear-and-tear fees entirely.",
            apr: "3.99%"
        },
        {
            id: "auto-equity",
            title: "Auto Equity",
            image: autoImg,
            icon: <Wallet className="w-8 h-8 text-cyan-500" />,
            desc: "Use the value of your paid-off or low-balance vehicle to access cash for other life needs, all while keeping your keys and continuing to drive.",
            benefit: "Borrow up to 80% of your car's wholesale value with same-day digital funding.",
            apr: "4.50%"
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0B1E3D] leading-tight mb-6">
                            Drive Away with <br />
                            <span className="text-cyan-500">Better Financing.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            From new purchases to lease buyouts, our AI-driven rates help you save thousands over the life of your auto loan.
                        </p>
                        <Link 
                            to="/check-rate"
                            state={{ 
                                purpose: 'Car Loans', 
                                locked: true 
                            }}
                            className="inline-block px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-100 hover:bg-black transition-all transform hover:-translate-y-1"
                        >
                            Check Auto Rate
                        </Link>
                    </div>
                    
                    <div className="bg-slate-50 rounded-[3rem] p-12 border border-gray-100 relative shadow-inner">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">New Car APR</span>
                                <span className="text-2xl font-black text-cyan-500">From 3.49%</span>
                            </div>
                            <div className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Used Car APR</span>
                                <span className="text-2xl font-black text-cyan-500">From 4.25%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories & Benefits (Alternating Style) */}
                <div className="space-y-32 mb-32">
                    {carLoanCategories.map((loan, index) => (
                        <div 
                            key={loan.id} 
                            id={loan.id} 
                            className={`flex flex-col lg:items-center gap-12 p-4 transition-all duration-700 rounded-[2.5rem] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-cyan-50 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>
                                    <img 
                                        src={loan.image} 
                                        alt={loan.title} 
                                        className="relative rounded-[2rem] w-full h-[400px] object-cover shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="h-[2px] w-8 bg-cyan-500"></span>
                                    <span className="text-cyan-600 rounded-full text-sm font-bold tracking-widest uppercase">
                                        Starting {loan.apr} APR
                                    </span>
                                </div>
                                <h2 className="text-4xl font-bold text-[#0B1E3D]">{loan.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{loan.desc}</p>
                                
                                <div className="p-5 bg-cyan-50/50 border-l-4 border-cyan-500 rounded-r-xl">
                                    <p className="text-[#0B1E3D] font-medium italic text-sm">
                                        {loan.benefit}
                                    </p>
                                </div>

                                <Link 
                                    to="/check-rate" 
                                    state={{ 
                                        purpose: 'Car Loans', 
                                        subType: loan.title 
                                    }}
                                    className="group inline-flex items-center font-bold text-[#0B1E3D] hover:text-cyan-500 transition-colors"
                                >
                                    Start Application 
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Human-Centered Car Loan Process Section */}
                <div className="bg-[#0B1E3D] rounded-[4rem] p-12 lg:p-20 text-white mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl lg:text-5xl font-black mb-6">Your keys are <span className="text-cyan-400">waiting.</span></h3>
                            <p className="text-gray-400 max-w-xl mx-auto text-lg">
                                We’ve simplified the boring paperwork so you can get to the best part: driving. No hidden hoops, no dealership headaches.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { 
                                    step: "01", 
                                    label: "Quick Check", 
                                    detail: "Snap a photo of your ID and tell us about the car. We’ll take care of the heavy lifting in seconds." 
                                },
                                { 
                                    step: "02", 
                                    label: "Fair Numbers", 
                                    detail: "We check real-world prices instantly to make sure you're getting a deal that actually makes sense." 
                                },
                                { 
                                    step: "03", 
                                    label: "Ready to Roll", 
                                    detail: "Walk into the dealership with your Nexus voucher in hand. Sign, grab the keys, and you're off." 
                                }
                            ].map((item, i) => (
                                <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                                    <span className="text-6xl font-black text-white/5 absolute top-4 right-6 group-hover:text-cyan-500/20 transition-colors">
                                        {item.step}
                                    </span>
                                    <h4 className="text-xl font-bold mb-4 text-cyan-400 tracking-tight">{item.label}</h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {item.detail}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-wrap justify-center gap-4 border-t border-white/10 pt-12">
                            {["Real-time Approval", "No Surprise Fees", "Dealer-Friendly Payments"].map((tag, i) => (
                                <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                                    <span className="text-xs font-semibold tracking-wide text-gray-200">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}