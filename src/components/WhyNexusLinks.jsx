import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    ShieldCheck, Cpu, Zap, Lock, CheckCircle, BarChart3, 
    CreditCard, Users, Globe, ChevronLeft, ChevronRight 
} from 'lucide-react';

// Assets
import whyImage from '../assets/whynexus.jpg'; 
import Bridget from '../assets/student.jpg';
import Elena from '../assets/woman.jpg';
import Jordan from '../assets/father.jpg';

export default function WhyNexusLinks() {
    const { hash } = useLocation();
    
    // Refs for horizontal scrolling
    const advantageRef = useRef(null);
    const storiesRef = useRef(null);

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0); 
        }
    }, [hash]);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const { scrollLeft, clientWidth } = ref.current;
            const offset = direction === 'left' ? -clientWidth : clientWidth;
            ref.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
        }
    };

    const advantages = [
        { id: "ai-tech", title: "AI-Powered Precision", desc: "Our proprietary models analyze over 10,000 alternative data points to find your true potential.", icon: <Cpu className="w-8 h-8 text-cyan-500" /> },
        { id: "security", title: "Bank-Grade Security", desc: "AES-256 encryption and biometric MFA ensure your financial DNA is guarded by elite-level protocol.", icon: <Lock className="w-8 h-8 text-cyan-500" /> },
        { id: "efficiency", title: "Fair & Fast Decisions", desc: "Our machine learning gives you a firm offer in under 60 seconds. High-speed, bias-free lending.", icon: <Zap className="w-8 h-8 text-cyan-500" /> },
        { id: "fraud", title: "Fraud Prevention", desc: "Advanced neural networks monitor transactions to stop identity theft before it reaches your account.", icon: <ShieldCheck className="w-8 h-8 text-cyan-500" /> }
    ];

    const stories = [
        { name: "Bridget Kwenda", role: "MBA Borrower", text: "Nexus made it happen when others couldn't. Found a rate 1.5% lower than my local bank.", image: Bridget },
        { name: "Elena Mutasa", role: "Parent Plus", text: "The Nexus transparency protocol made everything clear. Zero hidden fees, just pure honesty.", image: Elena },
        { name: "Jordan Muzeza", role: "Debt Refinance", text: "Autonomous fraud protection and clear savings. Swapping my loan was the best decision.", image: Jordan }
    ];

    return (
        <div className="pt-32 pb-20 bg-slate-50 font-sans selection:bg-cyan-100 overflow-x-hidden">
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">
                
                {/* HERO SECTION */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-100 rounded-full">
                        The New Standard of Fintech
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-[#0B1E3D] mb-6 tracking-tight leading-[1.1]">
                        Finance for the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Next Generation.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Nexus is a human-first financial ecosystem. We've replaced banking bureaucracy with AI to approve you based on your future.
                    </p>
                </div>

                {/* ADVANTAGE SLIDER */}
                <div className="relative mb-32 group/slider">
                    {/* Navigation Buttons - Hidden on mobile, visible on desktop hover */}
                    <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none px-2">
                        <button onClick={() => scroll(advantageRef, 'left')} className="p-3 rounded-full bg-white shadow-xl border border-slate-100 pointer-events-auto -ml-6 hover:bg-cyan-500 hover:text-white transition-all opacity-0 group-hover/slider:opacity-100"><ChevronLeft /></button>
                        <button onClick={() => scroll(advantageRef, 'right')} className="p-3 rounded-full bg-white shadow-xl border border-slate-100 pointer-events-auto -mr-6 hover:bg-cyan-500 hover:text-white transition-all opacity-0 group-hover/slider:opacity-100"><ChevronRight /></button>
                    </div>

                    <div ref={advantageRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-6">
                        {advantages.map((item, idx) => (
                            <div key={idx} className="snap-center shrink-0 w-[85%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-cyan-400 transition-all duration-500">
                                <div className="mb-6 p-3 bg-slate-50 w-fit rounded-2xl group-hover:bg-cyan-50 transition-colors">{item.icon}</div>
                                <h3 className="text-xl font-bold text-[#0B1E3D] mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI TECH SECTION */}
                <div id="ai-tech" className="grid lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-32">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl"></div>
                        <div className="relative bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-cyan-500 rounded-xl text-white shadow-lg shadow-cyan-200"><BarChart3 size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-[#0B1E3D]">Nexus AI Engine™</h4>
                                    <p className="text-xs text-slate-400">Alternative Credit Modeling</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[{ label: "Predictive Success Rate", val: "94%" }, { label: "Institutional Trust Index", val: "99.2%" }, { label: "Processing Latency", val: "0.04s" }].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-2"><span className="font-semibold text-slate-700">{stat.label}</span><span className="text-cyan-600 font-bold">{stat.val}</span></div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-cyan-500 h-full rounded-full" style={{ width: stat.val }}></div></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-black text-[#0B1E3D] mb-6">Intelligence that works for you.</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">We look at income stability and professional growth to offer lower rates to responsible borrowers.</p>
                        <div className="flex gap-12 border-t border-slate-200 pt-8">
                            <div className="flex items-center gap-3"><Users className="text-cyan-500" /><div><p className="text-2xl font-black text-[#0B1E3D]">120k+</p><p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Active Users</p></div></div>
                            <div className="flex items-center gap-3"><Globe className="text-cyan-500" /><div><p className="text-2xl font-black text-[#0B1E3D]">Harare</p><p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Hub Location</p></div></div>
                        </div>
                    </div>
                </div>

                {/* SECURITY SECTION */}
                <div id="security" className="bg-[#0B1E3D] rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden mb-32 scroll-mt-32">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Your data is yours. <br /> We just guard it.</h2>
                            <div className="space-y-6">
                                {["AES-256 Encryption", "MFA Authentication", "Privacy First"].map((title, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-cyan-500/20 p-1 h-fit rounded-full"><CheckCircle className="text-cyan-400" size={20} /></div>
                                        <p className="text-cyan-100/70"><strong className="text-white">{title}</strong>: Bank-grade infrastructure at every layer.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative p-12 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl">
                                <Lock size={120} className="text-cyan-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* STORIES SLIDER */}
                <div id="stories" className="text-center mb-32 scroll-mt-32 group/stories">
                    <h2 className="text-4xl font-black text-[#0B1E3D] mb-12">Built for Real Success.</h2>
                    <div className="relative">
                        <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 pointer-events-none">
                            <button onClick={() => scroll(storiesRef, 'left')} className="p-3 rounded-full bg-white shadow-xl border border-slate-100 pointer-events-auto -ml-6 hover:bg-cyan-500 hover:text-white transition-all opacity-0 group-hover/stories:opacity-100"><ChevronLeft /></button>
                            <button onClick={() => scroll(storiesRef, 'right')} className="p-3 rounded-full bg-white shadow-xl border border-slate-100 pointer-events-auto -mr-6 hover:bg-cyan-500 hover:text-white transition-all opacity-0 group-hover/stories:opacity-100"><ChevronRight /></button>
                        </div>
                        <div ref={storiesRef} className="flex overflow-x-auto snap-x snap-mandatory gap-8 no-scrollbar pb-6">
                            {stories.map((story, i) => (
                                <div key={i} className="snap-center shrink-0 w-[85%] md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] p-8 bg-white rounded-3xl border border-slate-200 text-left hover:shadow-xl transition-shadow flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-full overflow-hidden mb-6 border-2 border-cyan-100">
                                            <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-slate-500 italic mb-6">"{story.text}"</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B1E3D]">{story.name}</h4>
                                        <p className="text-xs text-cyan-600 font-bold uppercase tracking-tighter">{story.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FINAL CTA */}
                <div id="get-started" className="bg-gradient-to-br from-[#0B1E3D] to-blue-900 rounded-[3.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Join the Ecosystem.</h2>
                            <p className="text-cyan-100/70 mb-10 text-lg">Check your rate in 60 seconds with no credit impact.</p>
                        </div>
                        <Link to="/signup" className="py-5 bg-cyan-500 text-white rounded-2xl font-black hover:bg-cyan-400 transition-all text-center">
                            GET STARTED NOW
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}