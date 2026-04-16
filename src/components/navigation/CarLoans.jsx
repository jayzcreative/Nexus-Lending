import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, History, RefreshCcw, Key, Wallet } from 'lucide-react';

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
            icon: <Car className="w-8 h-8 text-cyan-500" />,
            desc: "Get behind the wheel of a brand-new vehicle with interest rates that favor your financial future. We offer quick pre-approvals so you can negotiate at the dealership with confidence.",
            apr: "3.49%"
        },
        {
            id: "used-car-loans",
            title: "Used Car Loans",
            icon: <History className="w-8 h-8 text-cyan-500" />,
            desc: "Financing a pre-owned vehicle doesn't have to mean high interest. Our models look beyond just the car's age to provide you with the most competitive rates available.",
            apr: "4.25%"
        },
        {
            id: "refinance-auto",
            title: "Auto Refinance",
            icon: <RefreshCcw className="w-8 h-8 text-cyan-500" />,
            desc: "Stuck with a high-interest auto loan? Swap it for a Nexus loan. Our average user saves $126 per month by refinancing their existing car debt.",
            apr: "3.15%"
        },
        {
            id: "lease-buyout",
            title: "Lease Buyout",
            icon: <Key className="w-8 h-8 text-cyan-500" />,
            desc: "Love the car you're currently leasing? We provide the capital to buy out your lease early or at the end of your term, turning that rental into an asset.",
            apr: "3.99%"
        },
        {
            id: "auto-equity",
            title: "Auto Equity",
            icon: <Wallet className="w-8 h-8 text-cyan-500" />,
            desc: "Use the value of your paid-off or low-balance vehicle to access cash for other life needs, all while keeping your keys and continuing to drive.",
            apr: "4.50%"
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <h1 className="text-5xl font-extrabold text-[#0B1E3D] mb-6">
                            Drive Away with <br />
                            <span className="text-cyan-500">Better Financing.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            From new purchases to lease buyouts, our AI-driven rates help you save thousands over the life of your auto loan.
                        </p>
                        <Link 
                            to="/check-rate"
                            state={{ loanType: 'Car Loan', locked: true }}
                            className="inline-block px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all"
                        >
                            Check Auto Rate
                        </Link>
                    </div>
                    <div className="bg-slate-50 rounded-[3rem] p-10 border border-gray-100 shadow-inner">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">New Car APR</span>
                                <span className="text-2xl font-black text-cyan-500">From 3.49%</span>
                            </div>
                            <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Used Car APR</span>
                                <span className="text-2xl font-black text-cyan-500">From 4.25%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid gap-8">
                    {carLoanCategories.map((loan) => (
                        <div 
                            key={loan.id} 
                            id={loan.id} 
                            className="group p-8 lg:p-12 bg-white rounded-[2.5rem] border-2 border-gray-50 hover:border-cyan-400 transition-all duration-500 shadow-sm flex flex-col lg:flex-row items-center gap-10"
                        >
                            <div className="p-5 bg-cyan-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                {loan.icon}
                            </div>
                            
                            <div className="flex-grow space-y-3 text-center lg:text-left">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 justify-center lg:justify-start">
                                    <h2 className="text-3xl font-black text-[#0B1E3D]">{loan.title}</h2>
                                    <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full w-fit mx-auto lg:mx-0">
                                        Starting {loan.apr} APR
                                    </span>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                                    {loan.desc}
                                </p>
                            </div>

                            <div className="w-full lg:w-auto">
                                <Link 
                                    to="/check-rate" 
                                    state={{ 
                                        loanType: 'Car Loan', 
                                        specificType: loan.title,
                                        locked: true 
                                    }}
                                    className="block px-8 py-4 bg-[#0B1E3D] text-white font-bold rounded-xl text-center hover:bg-cyan-600 transition-colors"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}