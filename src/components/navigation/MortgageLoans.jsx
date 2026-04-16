import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, RefreshCcw, DollarSign, Building2, ShieldCheck } from 'lucide-react';

export default function MortgageLoans() {
    const { hash } = useLocation();

    // Handle scroll to ID and highlight effect
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-8', 'bg-cyan-50/30');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-8', 'bg-cyan-50/30');
                    }, 2500);
                }, 100);
            }
        }
    }, [hash]);

    const mortgageCategories = [
        {
            id: "home-purchase",
            title: "Home Purchase",
            icon: <Home className="w-8 h-8 text-cyan-500" />,
            desc: "The classic path to homeownership. We offer flexible down payment options and competitive fixed rates to help you get into your dream home sooner.",
            features: ["Down payments as low as 3%", "Fixed & Adjustable rate options", "Lock your rate for up to 90 days"]
        },
        {
            id: "refinance",
            title: "Refinance",
            icon: <RefreshCcw className="w-8 h-8 text-cyan-500" />,
            desc: "Lower your monthly payment or shorten your loan term. Our AI-driven refinance tool analyzes market trends to tell you exactly when it's the best time to switch.",
            features: ["Reduce your interest rate", "Remove private mortgage insurance (PMI)", "Switch from ARM to Fixed rate"]
        },
        {
            id: "cash-out-refi",
            title: "Cash-out Refi",
            icon: <DollarSign className="w-8 h-8 text-cyan-500" />,
            desc: "Turn your home's equity into cash for major expenses. Use the funds for home improvements, debt consolidation, or high-level investments.",
            features: ["Access up to 80% of your home's value", "Single lump-sum payment", "Potential tax-deductible interest"]
        },
        {
            id: "jumbo-loans",
            title: "Jumbo Loans",
            icon: <Building2 className="w-8 h-8 text-cyan-500" />,
            desc: "For higher-value properties that exceed standard conforming loan limits. We provide streamlined approval for luxury home financing.",
            features: ["Loan amounts up to $3M", "Competitive rates for high-balance loans", "Flexible manual underwriting"]
        },
        {
            id: "fha-loans",
            title: "FHA Loans",
            icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />,
            desc: "Government-backed loans designed for buyers with smaller down payments or less-than-perfect credit scores.",
            features: ["Down payments as low as 3.5%", "More lenient credit requirements", "Gifts allowed for down payments"]
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100 mb-20">
                    <div className="max-w-3xl">
                        <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase">Your Future Home</span>
                        <h1 className="text-5xl font-extrabold text-[#0B1E3D] mt-4 mb-6">
                            Mortgage Solutions for the <span className="text-cyan-500">Next Generation.</span>
                        </h1>
                        <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                            Whether you're a first-time buyer or looking to cash out equity, our AI modeling identifies your true creditworthiness to secure lower rates than traditional banks.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/check-rate" 
                                state={{ loanType: 'Mortgage Loan', locked: true }}
                                className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg shadow-cyan-200"
                            >
                                Get Pre-Approved
                            </Link>
                            <Link to="/contact" className="px-8 py-4 border-2 border-gray-100 text-[#0B1E3D] font-bold rounded-xl hover:bg-gray-50 transition-all">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Expanded Loan Sections */}
                <div className="grid gap-8">
                    {mortgageCategories.map((loan) => (
                        <div 
                            key={loan.id} 
                            id={loan.id} 
                            className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-sm transition-all duration-500 flex flex-col lg:flex-row gap-10 items-start"
                        >
                            <div className="bg-cyan-50 p-6 rounded-2xl shadow-inner">
                                {loan.icon}
                            </div>
                            
                            <div className="flex-grow space-y-4">
                                <h2 className="text-3xl font-black text-[#0B1E3D]">{loan.title}</h2>
                                <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
                                    {loan.desc}
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                    {loan.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                            <span className="text-sm font-semibold text-[#0B1E3D]/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-auto pt-6 lg:pt-0">
                                <Link 
                                    to="/check-rate" 
                                    state={{ 
                                        loanType: 'Mortgage Loan', 
                                        specificType: loan.title,
                                        locked: true 
                                    }}
                                    className="block w-full lg:inline-block text-center px-8 py-4 bg-[#0B1E3D] text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors"
                                >
                                    Check Rate
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center bg-cyan-500 rounded-[3rem] p-16 text-white">
                    <h3 className="text-4xl font-black mb-6">Not sure which path is right?</h3>
                    <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                        Our mortgage advisors are ready to walk you through every option and find the perfect fit for your financial goals.
                    </p>
                    <Link to="/contact" className="px-10 py-5 bg-white text-cyan-500 font-bold rounded-2xl hover:bg-[#0B1E3D] hover:text-white transition-all">
                        Schedule a Free Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
}