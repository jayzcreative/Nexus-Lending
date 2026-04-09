import React from 'react';
import { ShieldCheck, Cpu, Zap, CreditCard, BarChart3, Lock, CheckCircle } from 'lucide-react';
import whyImage from '../assets/whynexus.jpg'; // Ensure this path is correct for your project

export default function WhyNexusLinks() {
    const advantages = [
        {
            title: "AI-Powered Precision",
            desc: "Our proprietary models analyze over 10,000 data points beyond just a FICO score to find your true potential.",
            icon: <Cpu className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Bank-Grade Security",
            desc: "AES-256 encryption and biometric MFA ensure your financial DNA is guarded by elite-level security.",
            icon: <Lock className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Lightning Decisions",
            desc: "Automated underwriting fueled by machine learning gives you a firm offer in under 60 seconds.",
            icon: <Zap className="w-8 h-8 text-cyan-500" />
        },
        {
            title: "Fraud Prevention",
            desc: "Advanced neural networks monitor every transaction to stop identity theft before it happens.",
            icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />
        }
    ];

    return (
        <div className="pt-32 pb-20 bg-slate-50 font-sans selection:bg-cyan-100">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-cyan-600 uppercase bg-cyan-100 rounded-full">
                        The Future of Credit
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-[#0B1E3D] mb-6 tracking-tight">
                        Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Next Generation.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Nexus isn't just a lender. We're an AI-first financial ecosystem designed to approve more people, faster, with lower rates than traditional banks.
                    </p>
                </div>

                {/* Advantage Grid with Hover Effects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {advantages.map((item, idx) => (
                        <div key={idx} className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-500 ease-out">
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
                                    { label: "Alternative Data", val: "94%" },
                                    { label: "Fraud Risk Factor", val: "0.02%" },
                                    { label: "Repayment Probability", val: "98.7%" }
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
                            While banks only look at your past, our AI looks at your trajectory. We use machine learning to analyze income stability, education, and career growth to give you the credit you actually deserve.
                        </p>
                        <button className="px-8 py-4 bg-[#0B1E3D] text-white rounded-2xl font-bold hover:bg-cyan-600 transition-colors shadow-lg shadow-slate-200">
                            Learn About Our Tech
                        </button>
                    </div>
                </div>

                {/* Trust Content + Circle Image Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-black text-[#0B1E3D] mb-8 leading-tight">
                            A System Built on <br />
                            <span className="text-cyan-500">Total Transparency.</span>
                        </h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <CheckCircle className="text-cyan-500 shrink-0" size={24} />
                                <p className="text-slate-600"><strong>Bias-Free Lending:</strong> Our AI removes human prejudice, focusing purely on your financial behavior and potential.</p>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="text-cyan-500 shrink-0" size={24} />
                                <p className="text-slate-600"><strong>Data Sovereignty:</strong> You own your data. We use it only to secure your better rates, protected by multi-layer encryption.</p>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle className="text-cyan-500 shrink-0" size={24} />
                                <p className="text-slate-600"><strong>Real-Time Auditing:</strong> Every automated decision is cross-checked by our security protocols to ensure 100% accuracy.</p>
                            </div>
                        </div>
                        <p className="mt-8 text-slate-500 italic">
                            "Nexus was founded to fix the broken trust between traditional banks and modern earners."
                        </p>
                    </div>
                    
                    <div className="order-1 lg:order-2 flex justify-center">
                        {/* Image is now a perfect circle with no effects */}
                        <div className="w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                            <img 
                                src={whyImage} 
                                alt="Why Nexus AI" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Comparison Card (Glassmorphism) */}
                <div className="bg-[#0B1E3D] rounded-[3.5rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl shadow-blue-900/20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Nexus vs. The Rest</h2>
                            <p className="text-cyan-100/70 mb-10 text-lg">We’ve removed the friction, the paperwork, and the bias. Lending is now a digital-first experience.</p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-cyan-400 text-3xl font-black mb-1">10x</p>
                                    <p className="text-xs uppercase tracking-widest font-bold">Faster Decisions</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-cyan-400 text-3xl font-black mb-1">0</p>
                                    <p className="text-xs uppercase tracking-widest font-bold">Hidden Fees</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] p-10 text-center transform lg:rotate-3 shadow-2xl">
                            <CreditCard className="mx-auto mb-4 text-white/50" size={48} />
                            <h3 className="text-2xl font-bold mb-2 text-white">Ready to start?</h3>
                            <p className="text-white/80 text-sm mb-8">Check your rate in 60 seconds without affecting your credit score.</p>
                            <button className="w-full py-4 bg-white text-[#0B1E3D] rounded-2xl font-black hover:bg-slate-100 transition-all active:scale-95">
                                GET STARTED NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}