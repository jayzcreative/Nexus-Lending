import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
    MousePointerClick, 
    Activity, 
    Landmark, 
    ShieldCheck, 
    Zap, 
    ChevronDown, 
    Rocket, 
    CheckCircle2, 
    HelpCircle, 
    Percent 
} from 'lucide-react';
import { HashLink } from 'react-router-hash-link'; 
import howImage from '../assets/how.jpg'; 

export default function HowLinks() {
    const [activeFaq, setActiveFaq] = useState(0);
    const { hash } = useLocation(); 

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            
            const scrollToElement = () => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return true;
                }
                return false;
            };

            if (!scrollToElement()) {
                const interval = setInterval(() => {
                    if (scrollToElement()) clearInterval(interval);
                }, 100);
                setTimeout(() => clearInterval(interval), 2000);
            }
        }
    }, [hash]);

const steps = [
        {
            number: "01",
            title: "Check Your Rate",
            desc: "Tell us about your trajectory. It takes 60 seconds and won't affect your credit score.",
            icon: <MousePointerClick className="w-6 h-6" />,
            link: "/how#eligibility" // Added route path for cross-page navigation
        },
        {
            number: "02",
            title: "Connect Your Data",
            desc: "Securely link your accounts so our AI can analyze your real-time financial health.",
            icon: <Activity className="w-6 h-6" />,
            link: "/how#faq" // Added route path
        },
        {
            number: "03",
            title: "Get Funded",
            desc: "Review your offer and sign digitally. Funds are typically sent within 24 hours.",
            icon: <Landmark className="w-6 h-6" />,
            link: "/how#security" // Added route path
        },
        {
            number: "04",
            title: "Grow with Nexus",
            desc: "Use our dashboard to track your growth. Consistent repayment unlocks even better rates.",
            icon: <Rocket className="w-6 h-6" />,
            link: "/how#cta" // Added route path
        }
    ];

    const processFaqs = [
        { q: "What specific accounts do I need to connect?", a: "Most users connect their primary business or personal bank account. This allows our AI to see your cash flow without requiring physical bank statements." },
        { q: "How long until the money hits my account?", a: "Once you sign your digital agreement, funds are usually dispatched immediately and land in your account within 1 business day." },
        { q: "Is there a penalty for paying back early?", a: "Never. We believe in your growth—if you're ready to clear your balance early, we won't charge you extra for it." }
    ];

    return (
        <div className="pt-32 pb-20 bg-white font-sans scroll-smooth"> 
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero / Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black text-[#0B1E3D] mb-6 tracking-tight">
                        Simple. Digital. <span className="text-cyan-500">Transparent.</span>
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        We've rebuilt the lending process from the ground up to focus on where you're going, not just where you've been.
                    </p>
                </div>

                {/* Main Process Section - Linked to #process */}
                <div id="process" className="grid lg:grid-cols-2 gap-20 items-center mb-32 scroll-mt-32">
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

                    <div className="space-y-8 order-1 lg:order-2">
                        {steps.map((step, idx) => (
                            <HashLink 
                                smooth
                                to={step.link}
                                key={idx} 
                                className="group flex gap-8 p-6 rounded-3xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-100 block"
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
                            </HashLink>
                        ))}
                    </div>
                </div>

                {/* Eligibility Section */}
                <div id="eligibility" className="mb-32 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px flex-1 bg-slate-100"></div>
                        <h2 className="text-2xl font-black text-[#0B1E3D] uppercase tracking-widest px-4">Eligibility</h2>
                        <div className="h-px flex-1 bg-slate-100"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Residency", info: "Must be a legal resident or citizen with a valid ID." },
                            { title: "Income", info: "Stable monthly income with at least 3 months of history." },
                            { title: "Digital Access", info: "An active online banking account for data verification." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-8 bg-slate-50 rounded-[2rem] border border-white hover:border-cyan-100 transition-colors">
                                <CheckCircle2 className="text-cyan-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-[#0B1E3D] mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rates & Fees Section */}
                <div id="rates" className="mb-32 scroll-mt-32 p-12 bg-[#0B1E3D] rounded-[3rem] text-white">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                            <Percent className="text-cyan-400" /> Rates & Fees
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            We offer transparent APR ranges based on your financial trajectory. No hidden application fees, no origination surprises.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <span className="text-cyan-400 block mb-2 font-bold uppercase text-xs tracking-widest">Standard APR</span>
                                <span className="text-3xl font-black">5.99% - 24.99%</span>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <span className="text-cyan-400 block mb-2 font-bold uppercase text-xs tracking-widest">Early Repayment</span>
                                <span className="text-3xl font-black">$0 Penalty</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Help Center Section (Updated FAQ) */}
                <div id="help" className="mb-32 bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 scroll-mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[#0B1E3D] flex items-center justify-center gap-3">
                            <HelpCircle className="text-cyan-500" /> Help Center
                        </h2>
                        <p className="text-slate-500 mt-2">Everything you need to know about the process.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {processFaqs.map((faq, i) => (
                            <div key={i} className={`bg-white p-6 rounded-3xl border transition-all duration-300 ${activeFaq === i ? 'border-cyan-200 ring-4 ring-cyan-50' : 'border-slate-200/50'}`}>
                                <div 
                                    className="flex items-center justify-between group cursor-pointer"
                                    onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                                >
                                    <h4 className="font-bold text-[#0B1E3D] group-hover:text-cyan-600 transition-colors">{faq.q}</h4>
                                    <ChevronDown size={20} className={`text-slate-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </div>
                                {activeFaq === i && (
                                    <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Your other existing sections */}
                <div id="security" className="grid md:grid-cols-2 gap-8 mb-32 scroll-mt-32">
                    <div className="bg-[#0B1E3D] rounded-[2.5rem] p-10 text-white flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
                        <div>
                            <ShieldCheck size={40} className="text-cyan-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Bank-Grade Privacy</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">Your data is encrypted with AES-256 protocols.</p>
                        </div>
                    </div>
                    
                    <div className="bg-cyan-50 rounded-[2.5rem] p-10 flex flex-col justify-between border border-cyan-100 hover:-translate-y-2 transition-transform duration-500">
                        <div>
                            <Zap size={40} className="text-cyan-500 mb-6" />
                            <h3 className="text-2xl font-bold text-[#0B1E3D] mb-4">Instant Intelligence</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">Our AI models approve users that traditional systems overlook.</p>
                        </div>
                    </div>
                </div>

                <div id="cta" className="mb-32 text-center p-16 rounded-[3rem] bg-gradient-to-b from-white to-cyan-50 border border-cyan-100 scroll-mt-32">
                    <h2 className="text-4xl font-black text-[#0B1E3D] mb-6">Ready to find your trajectory?</h2>
                    <p className="text-slate-500 mb-10 max-w-xl mx-auto">Join thousands of others scaling their finances with AI speed.</p>
                    <Link to="/check-rate" className="inline-block px-10 py-5 bg-[#0B1E3D] text-white rounded-2xl font-black text-lg hover:bg-cyan-500 transition-all shadow-xl shadow-cyan-100 hover:scale-105 active:scale-95">
                        Get Your Free Rate Now
                    </Link>
                </div>

                {/* Support Footer */}
                <div className="text-center py-20 border-t border-slate-100">
                    <h4 className="text-[#0B1E3D] font-bold mb-4 uppercase tracking-widest text-sm">Need a human?</h4>
                    <p className="text-slate-500 mb-8 max-w-md mx-auto">If you're stuck, our support team is available 24/7.</p>
                    <div className="flex justify-center gap-8">
                        <a href="#" className="text-slate-400 hover:text-cyan-500 font-semibold text-sm transition-colors underline-offset-4 hover:underline">Help Center</a>
                        <a href="#" className="text-slate-400 hover:text-cyan-500 font-semibold text-sm transition-colors underline-offset-4 hover:underline">Rates & Fees</a>
                    </div>
                </div>
            </div>
        </div>
    );
}