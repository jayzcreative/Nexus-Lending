import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, RefreshCcw, DollarSign, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

// Import images
import homePurchaseImg from '../../assets/home purchase.jpg';
import refinanceImg from '../../assets/refinanceloan.jpg';
import cashOutImg from '../../assets/cashoutrefi.jpg';
import jumboImg from '../../assets/jumbo.jpg';
import fhaImg from '../../assets/fha.jpg';

export default function MortgageLoans() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-8');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-8');
                    }, 2000);
                }, 100);
            }
        }
    }, [hash]);

    const mortgageCategories = [
        {
            id: "home-purchase",
            title: "Home Purchase",
            image: homePurchaseImg,
            icon: <Home className="w-8 h-8 text-cyan-500" />,
            desc: "The classic path to homeownership. We offer flexible down payment options and competitive fixed rates to help you get into your dream home sooner.",
            benefit: "Lock your rate for up to 90 days while you shop for the perfect neighborhood.",
            apr: "6.25%"
        },
        {
            id: "refinance",
            title: "Refinance",
            image: refinanceImg,
            icon: <RefreshCcw className="w-8 h-8 text-cyan-500" />,
            desc: "Lower your monthly payment or shorten your loan term. Our AI-driven tool analyzes market trends to tell you exactly when to switch.",
            benefit: "Average users reduce their monthly mortgage payment by $215 through our smart-refi portal.",
            apr: "5.85%"
        },
        {
            id: "cash-out-refi",
            title: "Cash-out Refi",
            image: cashOutImg,
            icon: <DollarSign className="w-8 h-8 text-cyan-500" />,
            desc: "Turn your home's equity into cash for major expenses. Use the funds for home improvements, debt consolidation, or high-level investments.",
            benefit: "Access up to 80% of your home's appraised value with a single lump-sum digital transfer.",
            apr: "6.50%"
        },
        {
            id: "jumbo-loans",
            title: "Jumbo Loans",
            image: jumboImg,
            icon: <Building2 className="w-8 h-8 text-cyan-500" />,
            desc: "For higher-value properties that exceed standard conforming loan limits. We provide streamlined approval for luxury home financing.",
            benefit: "Loan amounts available up to $3.5M with manual underwriting for complex income profiles.",
            apr: "6.99%"
        },
        {
            id: "fha-loans",
            title: "FHA Loans",
            image: fhaImg,
            icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />,
            desc: "Government-backed loans designed for buyers with smaller down payments or less-than-perfect credit scores.",
            benefit: "Down payments as low as 3.5% and credit scores starting from 580 are accepted.",
            apr: "5.75%"
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-black text-[#0B1E3D] leading-[0.9] mb-8 relative z-10">
                            Unlock Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Dream Home.</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-10 max-w-md leading-relaxed">
                            From first-time buyers to luxury estates, our AI modeling identifies your true creditworthiness to secure rates traditional banks miss.
                        </p>
                        
                        {/* UPDATED: Purpose is set to Mortgage, subType is left empty to remain open */}
                        <Link 
                            to="/check-rate"
                            state={{ 
                                purpose: 'Mortgage', 
                                subType: '', 
                                source: 'hero_main' 
                            }}
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0B1E3D] text-white font-bold rounded-2xl transition-all hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-200"
                        >
                            Get Pre-Approved
                            <div className="bg-white/10 p-1 rounded-lg group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-5 h-5 text-cyan-400" />
                            </div>
                        </Link>
                    </div>
                    
                    <div className="bg-slate-50 rounded-[3rem] p-12 border border-gray-100 relative shadow-inner">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">30-Year Fixed</span>
                                <span className="text-2xl font-black text-cyan-500">From 6.25%</span>
                            </div>
                            <div className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">FHA Rate</span>
                                <span className="text-2xl font-black text-cyan-500">From 5.75%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternating Loan Sections (Remaining untouched as requested) */}
                <div className="space-y-32 mb-32">
                    {mortgageCategories.map((loan, index) => (
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
                                        className="relative rounded-[2.5rem] w-full h-[450px] object-cover shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2"
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
                                <h2 className="text-5xl font-black text-[#0B1E3D] tracking-tight">{loan.title}</h2>
                                <p className="text-gray-500 text-xl leading-relaxed">{loan.desc}</p>
                                
                                <div className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm relative overflow-hidden group/benefit">
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-cyan-500 group-hover/benefit:w-3 transition-all"></div>
                                    <p className="text-[#0B1E3D] font-semibold text-base leading-relaxed pl-4 italic">
                                        {loan.benefit}
                                    </p>
                                </div>

                                <Link 
                                    to="/check-rate" 
                                    state={{ 
                                        purpose: 'Mortgage', 
                                        subType: loan.title 
                                    }}
                                    className="inline-flex items-center gap-2 font-black text-lg text-[#0B1E3D] hover:text-cyan-500 transition-colors"
                                >
                                    Check My Rate <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mortgage Process Section */}
                <div className="bg-[#0B1E3D] rounded-[4rem] p-12 lg:p-24 text-white mb-32 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

                    <div className="relative z-10 grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 space-y-6">
                            <div className="w-12 h-1.5 bg-cyan-500 rounded-full"></div>
                            <h3 className="text-5xl font-black leading-tight">
                                Homebuying <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                                    Simplified.
                                </span>
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                We've removed the stress of traditional mortgage applications. No mountains of paperwork, just a clear path to your front door.
                            </p>
                            
                            <div className="pt-8 border-t border-white/10">
                                <p className="text-sm font-bold tracking-widest text-cyan-500 uppercase">Average Speed</p>
                                <p className="text-3xl font-black">15 Business Days</p>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="grid gap-4">
                                {[
                                    { 
                                        step: "01", 
                                        label: "Digital Prequal", 
                                        detail: "Link your bank and income instantly. Our AI evaluates your financial health in real-time without affecting your credit score." 
                                    },
                                    { 
                                        step: "02", 
                                        label: "Verified Approval", 
                                        detail: "Receive a verified approval letter that carries the same weight as a cash offer, giving you the edge in competitive markets." 
                                    },
                                    { 
                                        step: "03", 
                                        label: "Rapid Closing", 
                                        detail: "Our streamlined digital closing process means you can sign your final documents and get your keys in as little as 15 days." 
                                    }
                                ].map((item, i) => (
                                    <div 
                                        key={i} 
                                        className="group flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-[2rem] hover:border-cyan-500/50 transition-all duration-500"
                                    >
                                        <div className="flex-shrink-0 relative">
                                            <div className="text-5xl font-black text-white/10 group-hover:text-cyan-500/40 transition-colors">
                                                {item.step}
                                            </div>
                                        </div>
                                        
                                        <div className="flex-grow space-y-2">
                                            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                {item.label}
                                            </h4>
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                                                {item.detail}
                                            </p>
                                        </div>

                                        <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-10 h-10 rounded-full border border-cyan-500 flex items-center justify-center text-cyan-500">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-wrap gap-3 justify-center">
                        {["No Hidden Closing Costs", "Digital Document Vault", "Dedicated Loan Officer"].map((tag, i) => (
                            <span key={i} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}