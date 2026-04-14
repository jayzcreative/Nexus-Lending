import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ShieldCheck, Cpu, Zap, CreditCard, BarChart3, Lock, CheckCircle, ChevronDown } from 'lucide-react';
import whyImage from '../assets/whynexus.jpg'; 

export default function WhyNexusLinks() {
    const advantages = [
        {
            title: "AI-Powered Precision",
            desc: "Our proprietary models analyze over 10,000 data points to find your true potential, not just a score.",
            icon: <Cpu className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Bank-Grade Security",
            desc: "AES-256 encryption and biometric MFA ensure your financial DNA is guarded by elite-level security.",
            icon: <Lock className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Fair & Fast Decisions",
            desc: "Our machine learning gives you a firm offer in under 60 seconds. No waiting, no bias.",
            icon: <Zap className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Fraud Prevention",
            desc: "Advanced neural networks monitor every transaction to stop identity theft before it happens.",
            icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />
        }
    ];

    const faqs = [
        { q: "Is checking my rate going to hurt my credit score?", a: "No. We use a soft inquiry that doesn't affect your traditional credit score at all." },
        { q: "How do you decide who to approve?", a: "We look at your real-time cash flow and career trajectory. We value your future, not just your past." },
        { q: "Is Nexus available for small businesses in Harare?", a: "Yes! We are specifically designed to help entrepreneurs and modern earners across Zimbabwe grow." }
    ];

    return (
        <div className="pt-32 pb-20 bg-slate-50 font-sans selection:bg-cyan-100">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-100 rounded-full">
                        Built for Harare. Built for the Future.
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-[#0B1E3D] mb-6 tracking-tight">
                        Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Next Generation.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Nexus isn't just a lender. We're a human-first financial ecosystem designed to approve more people, faster, based on where they're going not where they've been.
                    </p>
                </div>

                {/* Advantage Grid */}
                <div className="flex overflow-x-auto pb-10 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 no-scrollbar">
                    {advantages.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="flex-shrink-0 w-[85vw] md:w-auto snap-center group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-500 ease-out"
                        >
                            <div className="mb-6 p-3 bg-slate-50 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-cyan-50 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1E3D] mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* AI Visual Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl"></div>
                        <div className="relative bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-cyan-500 rounded-xl text-white">
                                    <BarChart3 size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#0B1E3D]">Nexus AI Score™</h4>
                                    <p className="text-xs text-slate-400">Real-time Risk Assessment</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: "Alternative Data Points", val: "94%" },
                                    { label: "Fraud Risk Factor", val: "0.02%" },
                                    { label: "Growth Potential", val: "98.7%" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="font-semibold text-slate-700">{stat.label}</span>
                                            <span className="text-cyan-600 font-bold">{stat.val}</span>
                                        </div>
                                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-cyan-500 h-full rounded-full transition-all duration-1000" 
                                                style={{ width: stat.val }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-black text-[#0B1E3D] mb-6">How our Intelligence works for you.</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            While banks only look at your past, our AI looks at your trajectory. We analyze income stability and career growth to give you the credit you actually deserve. We're here to say "yes" when the paperwork says "maybe."
                        </p>
                        <div className="flex gap-8 border-t border-slate-200 pt-8">
                            <div>
                                <p className="text-3xl font-black text-[#0B1E3D]">120k+</p>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Active Users</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-[#0B1E3D]">$0</p>
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Hidden Fees</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transparency Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-black text-[#0B1E3D] mb-8 leading-tight">
                            A System Built on <br />
                            <span className="text-cyan-500">Total Transparency.</span>
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Bias-Free Lending", body: "Our AI removes human prejudice, focusing purely on your financial potential." },
                                { title: "Data Sovereignty", body: "You own your data. We use it only to secure your better rates." },
                                { title: "Real-Time Trust", body: "Every automated decision is cross-checked by our security protocols." }
                            ].map((v, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle className="text-cyan-500 shrink-0" size={24} />
                                    <p className="text-slate-600"><strong>{v.title}:</strong> {v.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                            <img 
                                src={whyImage} 
                                alt="Why Nexus AI" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0B1E3D]">Common Questions</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                                <div className="flex items-center justify-between cursor-pointer group">
                                    <h4 className="font-bold text-[#0B1E3D] group-hover:text-cyan-600 transition-colors">{f.q}</h4>
                                    <ChevronDown size={20} className="text-slate-400" />
                                </div>
                                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Card */}
                <div className="bg-[#0B1E3D] rounded-[3.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl shadow-blue-900/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Nexus vs. The Rest</h2>
                            <p className="text-cyan-100/70 mb-10 text-lg">We’ve removed the friction, the paperwork, and the bias. Lending is now digital-first.</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-cyan-400 text-3xl font-black mb-1">10x</p>
                                    <p className="text-xs uppercase tracking-widest font-bold">Faster Decisions</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-cyan-400 text-3xl font-black mb-1">99%</p>
                                    <p className="text-xs uppercase tracking-widest font-bold">Data Security</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] p-10 text-center transform lg:rotate-3 shadow-2xl">
                            <CreditCard className="mx-auto mb-4 text-white/50" size={48} />
                            <h3 className="text-2xl font-bold mb-2 text-white">Ready to start?</h3>
                            <p className="text-white/80 text-sm mb-8">Check your rate in 60 seconds without affecting your credit score.</p>
                            
                            {/* Linked to /signup while maintaining the exact same UI styling */}
                            <Link 
                                to="/signup"
                                className="w-full py-4 bg-white text-[#0B1E3D] rounded-2xl font-black hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                            >
                                GET STARTED NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}