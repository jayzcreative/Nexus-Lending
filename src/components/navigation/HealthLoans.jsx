import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Stethoscope, Shield, HeartPulse, PawPrint, CheckCircle, ShieldCheck, Zap, Heart } from 'lucide-react';

// Import images
import medicalImg from '../../assets/medical.jpg';
import dentalImg from '../../assets/dental.jpg';
import lifeImg from '../../assets/life.jpg';
import healthImg from '../../assets/health.jpg';
import petImg from '../../assets/pet.jpg';

export default function HealthLoans() {
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

    const healthCategories = [
        {
            id: "medical-bills",
            title: "Medical Bills",
            image: medicalImg,
            icon: <Activity className="w-8 h-8 text-cyan-500" />,
            desc: "Focus on your recovery, not the costs. Whether it’s an unexpected ER visit or a planned specialist procedure, we cover out-of-pocket expenses and deductibles that insurance leaves behind.",
            benefit: "Funds dispatched directly to providers or your account within 24 hours.",
            stat: "No medical exam required"
        },
        {
            id: "dental-loans",
            title: "Dental Loans",
            image: dentalImg,
            icon: <Stethoscope className="w-8 h-8 text-cyan-500" />,
            desc: "Keep your smile bright without the financial strain. We provide immediate funding for orthodontics, implants, and emergency dental work with flexible monthly repayment plans.",
            benefit: "Covers 100% of treatment costs including cosmetic procedures.",
            stat: "Instant digital approval"
        },
        {
            id: "life-insurance",
            title: "Life Insurance",
            image: lifeImg,
            icon: <Shield className="w-8 h-8 text-cyan-500" />,
            desc: "Secure your family's future today. We offer specialized financing for life insurance premiums, ensuring your coverage never lapses even when your monthly budget is tight.",
            benefit: "Deferred payment options available for long-term policy holders.",
            stat: "Legacy protection"
        },
        {
            id: "health-coverage",
            title: "Health Coverage",
            image: healthImg,
            icon: <HeartPulse className="w-8 h-8 text-cyan-500" />,
            desc: "Bridge the gap in your wellness. Use our health expense loans to cover high insurance deductibles, specialized wellness retreats, or long-term care facility enrollments.",
            benefit: "Low-interest rates designed specifically for essential healthcare costs.",
            stat: "Wellness-first rates"
        },
        {
            id: "pet-insurance",
            title: "Pet Insurance",
            image: petImg,
            icon: <PawPrint className="w-8 h-8 text-cyan-500" />,
            desc: "Because four-legged friends are family too. Never choose between your wallet and your pet's life. Finance emergency surgeries, chronic meds, or specialized vet care instantly.",
            benefit: "Available for all breeds and ages with no pre-existing condition exclusions.",
            stat: "Same-day vet funding"
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-[#F8FAFC] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* HERO SECTION */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-60"></div>
                        <h1 className="text-6xl lg:text-8xl font-black text-[#0B1E3D] leading-[0.9] mb-8 relative z-10">
                            Health First. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Pay Later.</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-10 max-w-md leading-relaxed">
                            Nexus removes the financial barrier between you and the care you need with compassionate, AI-backed financing.
                        </p>
                        <Link 
                            to="/check-rate"
                            state={{ 
                                purpose: 'Health & Insurance', 
                                locked: true 
                            }}
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0B1E3D] text-white font-bold rounded-2xl transition-all hover:bg-cyan-500 hover:shadow-2xl hover:shadow-cyan-200"
                        >
                            Start Your Application
                            <div className="bg-white/10 p-1 rounded-lg group-hover:translate-x-1 transition-transform">
                                <Zap className="w-5 h-5 text-cyan-400" fill="currentColor" />
                            </div>
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-[3rem] -rotate-3"></div>
                        <div className="p-8 bg-white border border-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 transform translate-y-8">
                            <Activity className="w-10 h-10 text-cyan-500 mb-4" />
                            <div className="text-3xl font-black text-[#0B1E3D]">5.99%</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Starting APR</div>
                        </div>
                        <div className="p-8 bg-white border border-white rounded-[2.5rem] shadow-xl shadow-gray-200/50">
                            <ShieldCheck className="w-10 h-10 text-blue-500 mb-4" />
                            <div className="text-3xl font-black text-[#0B1E3D]">HIPAA</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Secure & Private</div>
                        </div>
                        <div className="p-8 bg-white border border-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 transform translate-y-8">
                            <Heart className="w-10 h-10 text-rose-400 mb-4" />
                            <div className="text-3xl font-black text-[#0B1E3D]">100%</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Care Coverage</div>
                        </div>
                        <div className="p-8 bg-white border border-white rounded-[2.5rem] shadow-xl shadow-gray-200/50">
                            <CheckCircle className="w-10 h-10 text-emerald-400 mb-4" />
                            <div className="text-3xl font-black text-[#0B1E3D]">&lt;24h</div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Funding Speed</div>
                        </div>
                    </div>
                </div>

                {/* Alternating Categories Section */}
                <div className="space-y-32 mb-40">
                    {healthCategories.map((loan, index) => (
                        <div 
                            key={loan.id} 
                            id={loan.id} 
                            className={`flex flex-col lg:items-center gap-16 p-4 transition-all duration-700 rounded-[2.5rem] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-white rounded-[3rem] shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img 
                                        src={loan.image} 
                                        alt={loan.title} 
                                        className="relative rounded-[2.5rem] w-full h-[450px] object-cover shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">{loan.icon}</div>
                                    <span className="text-cyan-600 font-black tracking-widest uppercase text-xs px-4 py-2 bg-cyan-50 rounded-full">
                                        {loan.stat}
                                    </span>
                                </div>
                                <h2 className="text-5xl font-bold text-[#0B1E3D] tracking-tight">{loan.title}</h2>
                                <p className="text-gray-500 text-xl leading-relaxed">{loan.desc}</p>
                                
                                <div className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm relative overflow-hidden group/benefit">
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-cyan-500 group-hover/benefit:w-3 transition-all"></div>
                                    <p className="text-[#0B1E3D] font-semibold text-base leading-relaxed pl-4">
                                        {loan.benefit}
                                    </p>
                                </div>

                                <Link 
                                    to="/check-rate" 
                                    state={{ 
                                        purpose: 'Health & Insurance', 
                                        subType: loan.title 
                                    }}
                                    className="inline-flex items-center gap-2 font-black text-lg text-[#0B1E3D] hover:text-cyan-500 transition-colors"
                                >
                                    Check Eligibility <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM PROCESS SECTION */}
                <div className="relative bg-white border border-gray-100 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-gray-200/50 overflow-hidden mb-20">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5">
                            <h3 className="text-5xl font-black text-[#0B1E3D] mb-6 leading-tight">
                                Our Care <br /> <span className="text-cyan-500">Manifesto.</span>
                            </h3>
                            <p className="text-gray-500 text-lg mb-8 font-medium">
                                We've automated the complex parts of healthcare financing so you can focus on getting better. No medical jargon, just simple steps.
                            </p>
                            <div className="space-y-4">
                                {["HIPAA Compliant Data", "Zero Prepayment Fees", "Direct-to-Vet Funding"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <span className="font-bold text-[#0B1E3D] text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid gap-6">
                            {[
                                { step: "01", title: "Soft Check", desc: "View your rates in 2 minutes without affecting your credit score." },
                                { step: "02", title: "Plan Choice", desc: "Select a repayment term that fits your monthly recovery budget." },
                                { step: "03", title: "Direct Funding", desc: "We pay your clinic or hospital directly so you don't have to wait." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-gray-100 hover:border-cyan-200 hover:bg-white transition-all group">
                                    <div className="text-4xl font-black text-cyan-200 group-hover:text-cyan-500 transition-colors">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0B1E3D] mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}