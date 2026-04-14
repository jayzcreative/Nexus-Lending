import React from 'react';
import { MousePointerClick, Activity, Landmark, ShieldCheck, Zap, ChevronDown, Rocket } from 'lucide-react';
import howImage from '../assets/how.jpg'; 

export default function HowLinks() {
    const steps = [
        {
            number: "01",
            title: "Check Your Rate",
            desc: "Tell us about your trajectory. It takes 60 seconds and won't affect your credit score.",
            icon: <MousePointerClick className="w-6 h-6" />,
            link: "#"
        },
        {
            number: "02",
            title: "Connect Your Data",
            desc: "Securely link your accounts so our AI can analyze your real-time financial health.",
            icon: <Activity className="w-6 h-6" />,
            link: "#"
        },
        {
            number: "03",
            title: "Get Funded",
            desc: "Review your offer and sign digitally. Funds are typically sent within 24 hours.",
            icon: <Landmark className="w-6 h-6" />,
            link: "#"
        },
        {
            number: "04",
            title: "Grow with Nexus",
            desc: "Use our dashboard to track your growth. Consistent repayment unlocks even better rates.",
            icon: <Rocket className="w-6 h-6" />,
            link: "#"
        }
    ];

    const processFaqs = [
        { q: "What specific accounts do I need to connect?", a: "Most users connect their primary business or personal bank account. This allows our AI to see your cash flow without requiring physical bank statements." },
        { q: "How long until the money hits my account?", a: "Once you sign your digital agreement, funds are usually dispatched immediately and land in your account within 1 business day." },
        { q: "Is there a penalty for paying back early?", a: "Never. We believe in your growth if you're ready to clear your balance early, we won't charge you extra for it." }
    ];

    return (
        <div className="pt-32 pb-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero / Header */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-6xl font-black text-[#0B1E3D] mb-6 tracking-tight">
                        Simple. Digital. <span className="text-cyan-500">Transparent.</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        We've rebuilt the lending process from the ground up to focus on where you're going, not just where you've been.
                    </p>
                </div>

                {/* Main Process Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    {/* Circle Image Wrapper */}
                    <div className="relative flex justify-center order-2 lg:order-1">
                        <div className="absolute inset-0 bg-cyan-100 rounded-full scale-110 blur-3xl opacity-30"></div>
                        <div className="w-full max-w-[450px] aspect-square rounded-full overflow-hidden border-[12px] border-slate-50 shadow-2xl relative z-10">
                            <img 
                                src={howImage} 
                                alt="Nexus Process" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Step Cards */}
                    <div className="space-y-8 order-1 lg:order-2">
                        {steps.map((step, idx) => (
                            <div 
                                key={idx} 
                                className="group flex gap-8 p-6 rounded-3xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-cyan-500 text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-cyan-100">
                                    {step.number}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-cyan-600">{step.icon}</span>
                                        <h3 className="text-2xl font-bold text-[#0B1E3D]">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section for "How it Works" */}
                <div className="mb-32 bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0B1E3D]">Process Deep-Dive</h2>
                        <p className="text-slate-500 mt-2">Everything you need to know about the journey.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {processFaqs.map((faq, i) => (
                            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200/50">
                                <div className="flex items-center justify-between group cursor-pointer">
                                    <h4 className="font-bold text-[#0B1E3D] group-hover:text-cyan-600 transition-colors">{faq.q}</h4>
                                    <ChevronDown size={20} className="text-slate-400" />
                                </div>
                                <p className="mt-4 text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust / Reliability Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-[#0B1E3D] rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
                        <div>
                            <ShieldCheck size={40} className="text-cyan-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Bank-Grade Privacy</h3>
                            <p className="text-slate-400 mb-8">Your data is encrypted with AES-256 protocols. We never sell your information it's used only to get you the best possible rate.</p>
                        </div>
                        <button className="w-fit py-3 px-6 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">Security Specs</button>
                    </div>
                    
                    <div className="bg-cyan-50 rounded-[2.5rem] p-10 flex flex-col justify-between border border-cyan-100">
                        <div>
                            <Zap size={40} className="text-cyan-500 mb-6" />
                            <h3 className="text-2xl font-bold text-[#0B1E3D] mb-4">Instant Intelligence</h3>
                            <p className="text-slate-500 mb-8">Our proprietary AI models analyze cash flow and career growth to approve users that traditional systems might overlook.</p>
                        </div>
                        <button className="w-fit py-3 px-6 bg-cyan-500 text-white rounded-xl font-bold hover:bg-black transition-colors">Our Tech Stack</button>
                    </div>
                </div>

                {/* Support Footer */}
                <div className="text-center py-20 border-t border-slate-100">
                    <h4 className="text-[#0B1E3D] font-bold mb-4 uppercase tracking-widest text-sm">Need a human?</h4>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">If you're stuck at any step, our support team in Harare is available 24/7 via live chat.</p>
                    <div className="flex justify-center gap-8">
                        <a href="#" className="text-slate-400 hover:text-cyan-500 font-semibold text-sm transition-colors">Help Center</a>
                        <a href="#" className="text-slate-400 hover:text-cyan-500 font-semibold text-sm transition-colors">Rates & Fees</a>
                        <a href="#" className="text-slate-400 hover:text-cyan-500 font-semibold text-sm transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}