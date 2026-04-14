import React from 'react';
import { Link } from 'react-router-dom'; // Added this import
import { Target, Shield, Globe, Award, Zap, Heart, MessageSquare, ChevronDown } from 'lucide-react';
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

    const impacts = [
        {
            name: "Chenai M.",
            biz: "Tech Startup Founder",
            story: "Nexus saw my potential when traditional banks only saw my lack of collateral. They funded my expansion in 24 hours."
        },
        {
            name: "Tinashe K.",
            biz: "Final Year Student",
            story: "The AI score took my part-time earnings into account, allowing me to secure a laptop loan for my final projects."
        }
    ];

    const aboutFaqs = [
        { q: "Why did you start in Harare?", a: "We saw that local brilliance was being held back by outdated paperwork. We wanted to build a solution from home, for home." },
        { q: "Are you a bank?", a: "We are an AI-first fintech partner. We work alongside the financial ecosystem to provide faster access to capital." },
        { q: "How do you protect my data?", a: "We use bank-grade AES-256 encryption. Your 'Financial DNA' is seen by our AI, but never sold to third parties." }
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
        <div className="pt-32 pb-20 bg-white font-sans selection:bg-cyan-100">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section 1: Hero */}
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
                            We started Nexus in Harare with a simple observation: the banking system wasn't built for the modern earner. We built this to help the entrepreneurs and the doers get the support they deserve.
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
                            alt="Our Workspace" 
                            className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-[#0B1E3D] text-white p-5 rounded-3xl z-20 shadow-xl border border-white/10 hidden md:flex items-center gap-4">
                            <div className="bg-cyan-500/20 p-3 rounded-2xl text-cyan-400">
                                <Globe size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Our Base</p>
                                <p className="font-bold text-sm">Harare, Zimbabwe</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Values */}
                <div className="bg-[#0B1E3D] rounded-[3rem] p-12 lg:p-20 text-white mb-32 relative overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="order-2 lg:order-1">
                            <img 
                                src={dataImg} 
                                alt="Technology" 
                                className="rounded-3xl opacity-90 border border-white/10 shadow-2xl"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold mb-6 italic">The Heart of the Tech</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Our engine handles the complexity so you can focus on your dreams. We analyze trajectory, not just history.
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
                </div>

                {/* Section 3: Impact */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#0B1E3D] mb-4">Lives Impacted</h2>
                        <p className="text-slate-500">Real stories from our Nexus community.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {impacts.map((story, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow relative overflow-hidden">
                                <MessageSquare className="absolute -top-4 -right-4 w-24 h-24 text-cyan-500/5 rotate-12" />
                                <p className="text-slate-600 text-lg italic mb-8 relative z-10">"{story.story}"</p>
                                <div>
                                    <h4 className="font-black text-[#0B1E3D]">{story.name}</h4>
                                    <p className="text-cyan-600 text-sm font-bold uppercase tracking-widest">{story.biz}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 4: Leadership */}
                <div className="text-center mb-32">
                    <h2 className="text-4xl font-black text-[#0B1E3D] mb-16">The People Behind the Code</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {team.map((member, i) => (
                            <div key={i} className="group text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-slate-50 shadow-xl mx-auto mb-6">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-[#0B1E3D]">{member.name}</h4>
                                <p className="text-cyan-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 5: Transparency Questions */}
                <div className="mb-32 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0B1E3D]">Transparency is Key</h2>
                    </div>
                    <div className="space-y-4">
                        {aboutFaqs.map((faq, i) => (
                            <div key={i} className="border-b border-slate-100 pb-6">
                                <div className="flex justify-between items-center cursor-pointer group">
                                    <h4 className="font-bold text-[#0B1E3D] group-hover:text-cyan-500 transition-colors">{faq.q}</h4>
                                    <ChevronDown size={18} className="text-slate-300" />
                                </div>
                                <p className="mt-3 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-slate-50 rounded-[2.5rem] p-12 text-center border border-slate-100">
                    <h3 className="text-3xl font-black text-[#0B1E3D] mb-8">Let's build your future together.</h3>
                    <Link 
                        to="/signup"
                        className="inline-block bg-[#0B1E3D] text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}