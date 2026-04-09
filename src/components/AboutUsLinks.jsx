import React from 'react';
import { Target, Shield, Globe, Award, Zap, Heart } from 'lucide-react';
import companyImg from '../assets/company.jpg';
import dataImg from '../assets/data.jpg';
import founderImg from '../assets/founder.jpg';
import ceoImg from '../assets/ceo.jpg';
import managerImg from '../assets/manager.jpg';

export default function AboutUsLinks() {
    const team = [
        { 
            name: "Marcus Darwins", 
            role: "Founder & Visionary", 
            img: founderImg, 
            linkedin: "https://linkedin.com" 
        },
        { 
            name: "Sarah Jenkins", 
            role: "Chief Executive Officer", 
            img: managerImg, 
            linkedin: "https://linkedin.com" 
        },
        { 
            name: "David Okoro", 
            role: "Operations Manager", 
            img: ceoImg, 
            linkedin: "https://linkedin.com" 
        }
    ];

    const milestones = [
        { year: "2024", event: "The Spark in Harare" },
        { year: "2025", event: "Nexus AI Goes Live" },
        { year: "2026", event: "120k Lives Impacted" }
    ];

    const values = [
        { icon: <Shield className="w-6 h-6" />, title: "People over Paperwork", desc: "We believe your potential is more than just a credit score." },
        { icon: <Heart className="w-6 h-6" />, title: "Built with Empathy", desc: "We design tools that solve real financial hurdles for real people." },
        { icon: <Globe className="w-6 h-6" />, title: "Borderless Access", desc: "From Harare to the world, we're making finance inclusive." }
    ];

    return (
        <div className="pt-32 pb-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section 1: Hero + Human Mission */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-bold mb-6">
                            <Target size={16} /> OUR STORY
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-[#0B1E3D] mb-8 tracking-tight leading-tight">
                            More than an engine. <br/>
                            <span className="text-cyan-500">A partner in your growth.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-8">
                            We started Nexus in Harare,Zimbabwe with a simple observation: the current banking system doesn't see the full picture. We built this to help the entrepreneurs, the dreamers, and the doers get the support they actually need, right when they need it.
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
                            {milestones.map((m, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-cyan-500 font-black text-xl">{m.year}</span>
                                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-tight leading-tight">{m.event}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>
                        <img 
                            src={companyImg} 
                            alt="Our Team Workspace" 
                            className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                        />
                        
                        {/* Updated Location Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-[#0B1E3D] text-white p-5 rounded-3xl z-20 shadow-xl border border-white/10 hidden md:flex items-center gap-4">
                            <div className="bg-cyan-500/20 p-3 rounded-2xl text-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Our Base</p>
                                <p className="font-bold text-sm">Harare, Zimbabwe</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Human Values */}
                <div className="bg-[#0B1E3D] rounded-[3rem] p-12 lg:p-20 text-white mb-32 overflow-hidden relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="order-2 lg:order-1">
                            <img 
                                src={dataImg} 
                                alt="Our Technology" 
                                className="rounded-3xl opacity-90 border border-white/10 shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6 italic">The Heart of the Tech</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Our engine does the heavy lifting so you don't have to. We analyze your real-time cash flow and business health to give you a fair shot, regardless of your history.
                            </p>
                            <div className="space-y-6">
                                {values.map((v, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                                            {v.icon}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-xl">{v.title}</h5>
                                            <p className="text-slate-400 text-sm leading-snug">{v.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
                </div>

                {/* Section 3: Leadership */}
                <div className="text-center mb-32">
                    <h2 className="text-4xl font-black text-[#0B1E3D] mb-4">The People Behind the Code</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto mb-16">
                        We are a mix of engineers, dreamers, and finance geeks working together to build something better.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-12">
                        {team.map((member, i) => (
                            <div key={i} className="group">
                                <div className="relative mb-6 inline-block">
                                    <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-slate-50 relative z-10 shadow-xl bg-slate-100">
                                        <img 
                                            src={member.img} 
                                            alt={member.name} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <a 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="absolute bottom-2 right-2 bg-white p-3 rounded-full shadow-lg z-20 text-[#0077B5] hover:bg-[#0B1E3D] hover:text-white transition-all duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                    </a>
                                </div>
                                <h4 className="text-2xl font-bold text-[#0B1E3D]">{member.name}</h4>
                                <p className="text-cyan-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Final CTA */}
                <div className="bg-[#f8fafc] rounded-[2.5rem] p-12 text-center border border-slate-100">
                    <h3 className="text-3xl font-black text-[#0B1E3D] mb-4">Let's build your future together.</h3>
                    <p className="text-slate-500 mb-8 max-w-xl mx-auto italic">
                        "Your growth is our only metric for success."
                    </p>
                    <button className="bg-[#0B1E3D] text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}