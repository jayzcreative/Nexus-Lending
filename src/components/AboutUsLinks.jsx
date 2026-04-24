import React, { useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 
import { Target, Shield, Globe, Heart, ChevronDown, Rocket, Newspaper, Calendar, ArrowRight, Users, Briefcase, X } from 'lucide-react'; // Added X for closing modal

// Assets
import companyImg from '../assets/company.jpg';
import dataImg from '../assets/data.jpg';
import founderImg from '../assets/founder.jpg';
import ceoImg from '../assets/ceo.jpg';
import managerImg from '../assets/manager.jpg';
import personalLoanImg from '../assets/data.jpg'; 
import businessLoanImg from '../assets/company.jpg';

// New Assets
import cbdImg from '../assets/cbd.jpg';
import techImg from '../assets/tech.jpg';
import teamImg from '../assets/team.jpg';
import studentImg from '../assets/happystudent.jpg';
import worldImg from '../assets/world.jpg';

export default function AboutUsLinks() {
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null); // Added for the News Modal
    const { hash } = useLocation(); 

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const team = [
        { name: "Marcus Darwins", role: "Founder & Visionary", img: founderImg },
        { name: "Sarah Moyo", role: "Chief Executive Officer", img: managerImg },
        { name: "David Mapfuudze", role: "Operations Manager", img: ceoImg }
    ];

    const blogs = [
        { 
            title: "Harare CBD Milestone: Nexus Expansion", 
            date: "April 20, 2026", 
            img: cbdImg, 
            desc: "Nexus officially opens its physical verification hub in the heart of Harare to support local merchants. This move marks a significant step in our commitment to physical accessibility for our business partners.",
            fullInfo: "Our new hub in the Harare CBD is designed to provide face-to-face support for merchants and entrepreneurs. This center features dedicated AI consulting stations where business owners can learn how to leverage our credit engine to scale their operations. We believe that while digital is the future, local presence builds the trust necessary for a thriving financial ecosystem."
        },
        { 
            title: "The Tech Stack Behind the Engine", 
            date: "April 15, 2026", 
            img: techImg, 
            desc: "An inside look at our proprietary AI credit scoring model and the security layers protecting user data.",
            fullInfo: "At Nexus, we utilize a multi-layered security architecture. Our proprietary AI model analyzes over 500 non-traditional data points to determine creditworthiness without relying on outdated banking history. Everything is protected by bank-grade AES-256 encryption and monitored 24/7 by our security operations center." 
        },
        { 
            title: "Inside the Nexus Innovation Lab", 
            date: "April 05, 2026", 
            img: companyImg, 
            desc: "How our high-tech office environment fosters the next generation of African fintech solutions.",
            fullInfo: "Our Innovation Lab is where the magic happens. We've created an open-collaboration space in Harare where engineers, data scientists, and financial experts work side-by-side. This environment has reduced our feature deployment cycle by 40%, allowing us to respond to user needs in near real-time."
        },
        { 
            title: "Collaboration: Our Secret Weapon", 
            date: "March 22, 2026", 
            img: teamImg, 
            desc: "Our engineering and operations teams working in sync to reduce loan approval times to under 24 hours.",
            fullInfo: "Syncing technical development with on-the-ground operations is key. By automating the verification pipeline and integrating real-time KYC (Know Your Customer) checks, our team has achieved an industry-leading approval speed. This ensures that capital is available exactly when our users need it most."
        },
        { 
            title: "Student Success: Breaking the Barrier", 
            date: "March 10, 2026", 
            img: studentImg, 
            desc: "Meet Tinashe, the university student who used Nexus to fund his final year project and launch a startup.",
            fullInfo: "Tinashe's journey represents the core of our mission. Unable to secure traditional funding, he used the Nexus micro-credit line to purchase specialized hardware for his Final Year Project. Today, that project has evolved into a registered tech startup, proving that accessible credit can jumpstart careers."
        },
        { 
            title: "A Global Vision from Local Roots", 
            date: "Feb 28, 2026", 
            img: worldImg, 
            desc: "Mapping the journey of Nexus as we prepare to scale our democratized credit model to international markets.",
            fullInfo: "While we are rooted in Zimbabwe, the problems we solve are global. We are currently auditing our algorithms for cross-border compliance as we prepare to expand into neighboring SADC regions. Our goal is to create a unified credit standard for the modern African professional."
        }
    ];

    const aboutFaqs = [
        { q: "Why did you start in Harare?", a: "We saw that local brilliance was being held back by outdated paperwork. We wanted to build a solution from home, for home." },
        { q: "Are you a bank?", a: "We are an AI-first fintech partner. We work alongside the financial ecosystem to provide faster access to capital." },
        { q: "How do you protect my data?", a: "We use bank-grade AES-256 encryption. Your 'Financial DNA' is seen by our AI, but never sold to third parties." }
    ];

    return (
        <div className="pt-32 pb-20 bg-white font-sans selection:bg-cyan-100 scroll-smooth">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section 1: Hero */}
                <div id="mission" className="grid lg:grid-cols-2 gap-16 items-center mb-32 scroll-mt-32">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-600 rounded-full text-sm font-bold mb-6">
                            <Target size={16} /> OUR MISSION
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-[#0B1E3D] mb-8 tracking-tight leading-tight">
                            More than an engine. <br/>
                            <span className="text-cyan-500">A partner in growth.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed mb-8">
                            Nexus is democratizing credit access. We started with a simple observation: the system wasn't built for the modern earner.
                        </p>
                        <div className="flex items-center gap-6 border-t border-slate-100 pt-8">
                            <div>
                                <p className="text-3xl font-black text-[#0B1E3D]">120k+</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Active Users</p>
                            </div>
                            <div className="w-px h-10 bg-slate-100"></div>
                            <div>
                                <p className="text-3xl font-black text-cyan-500">24h</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Avg. Funding</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={companyImg} alt="Base" className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[450px] object-cover" />
                    </div>
                </div>

                {/* Section 2: News / Blogs */}
                <div id="press" className="mb-32 scroll-mt-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-bold mb-4">
                                <Newspaper size={16} /> NEXUS BLOG
                            </div>
                            <h2 className="text-4xl font-black text-[#0B1E3D]">Latest from the Newsroom</h2>
                        </div>
                        <div className="text-slate-400 font-bold text-sm flex items-center gap-2">
                            Scroll to explore <ArrowRight size={16} className="animate-bounce-x" />
                        </div>
                    </div>
                    
                    <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar snap-x snap-mandatory">
                        {blogs.map((blog, i) => (
                            <div key={i} onClick={() => setSelectedBlog(blog)} className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
                                <div className="overflow-hidden rounded-[2rem] mb-6 shadow-md border border-slate-100">
                                    <img src={blog.img} alt={blog.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="flex items-center gap-2 text-cyan-600 font-bold text-[10px] mb-3 uppercase tracking-widest">
                                    <Calendar size={12} /> {blog.date}
                                </div>
                                <h3 className="text-xl font-bold text-[#0B1E3D] mb-3 group-hover:text-cyan-500 transition-colors leading-tight line-clamp-1">{blog.title}</h3>
                                <p className="text-slate-500 text-sm line-clamp-2">{blog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* News Modal - ONLY SHOWS WHEN A BLOG IS CLICKED */}
                {selectedBlog && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                        <div className="bg-white rounded-[3rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
                            <button 
                                onClick={() => setSelectedBlog(null)}
                                className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-cyan-500 hover:text-white text-slate-500 rounded-full transition-all z-20"
                            >
                                <X size={24} />
                            </button>
                            
                            <div className="grid md:grid-cols-2">
                                <div className="h-[300px] md:h-full">
                                    <img src={selectedBlog.img} alt={selectedBlog.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8 md:p-12">
                                    <div className="inline-flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-widest mb-4">
                                        <Calendar size={14} /> {selectedBlog.date}
                                    </div>
                                    <h2 className="text-3xl font-black text-[#0B1E3D] mb-6 leading-tight">{selectedBlog.title}</h2>
                                    <div className="space-y-4">
                                        <p className="text-slate-600 font-bold leading-relaxed">{selectedBlog.desc}</p>
                                        <p className="text-slate-500 leading-relaxed">{selectedBlog.fullInfo}</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedBlog(null)}
                                        className="mt-8 px-8 py-3 bg-[#0B1E3D] text-white rounded-full font-bold hover:bg-cyan-600 transition-colors"
                                    >
                                        Close Story
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Section: Careers */}
                <div id="careers" className="mb-32 scroll-mt-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img src={techImg} alt="Development" className="rounded-[2.5rem] shadow-xl h-[400px] w-full object-cover" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold mb-6">
                                <Briefcase size={16} /> CAREER & INNOVATION
                            </div>
                            <h2 className="text-4xl font-black text-[#0B1E3D] mb-6">Bridging Academic Excellence with Professional AI</h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-6">
                                Our development philosophy stems from a deep foundation in Artificial Intelligence and Fullstack engineering. By integrating specialized BTech insights with freelance web expertise, we build systems that aren't just functional, but intelligently responsive.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-cyan-100 p-1 rounded-md text-cyan-600 font-bold">✓</div>
                                    <p className="text-slate-600"><span className="font-bold text-[#0B1E3D]">Fintech AI:</span> Designing security-first algorithms for fraud detection.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-cyan-100 p-1 rounded-md text-cyan-600 font-bold">✓</div>
                                    <p className="text-slate-600"><span className="font-bold text-[#0B1E3D]">Responsive Architecture:</span> Crafting high-performance React and Tailwind interfaces.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 3: Growth Hub */}
                <div id="ecosystem" className="mb-32 scroll-mt-32">
                    <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-white">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-bold mb-6 border border-cyan-500/20">
                                <Users size={16} /> ECOSYSTEM
                            </div>
                            <h2 className="text-4xl font-black mb-6">Building the Future</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We aren't building in a vacuum. Nexus is actively collaborating with Harare's innovation hubs to ensure our AI models align with local standards and financial inclusion goals.
                            </p>
                            <Link to="/contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-2xl font-bold hover:bg-cyan-500 hover:text-white transition-all">Connect to Hub</Link>
                        </div>
                        <div className="lg:w-1/2 w-full grid grid-cols-1 gap-4">
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                                <h4 className="font-bold text-xl mb-2 text-cyan-400">Impact Hub Harare x Nexus</h4>
                                <p className="text-slate-400 text-sm">Strategic alignment for monthly AI essentials and financial security workshops.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-colors">
                                <h4 className="font-bold text-xl mb-2 text-cyan-400">Regulatory Roadmap</h4>
                                <p className="text-slate-400 text-sm">Working within the framework of the RBZ Fintech Sandbox for bank-grade security protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Leadership */}
                <div id="leadership" className="mb-32 scroll-mt-32">
                    <div className="text-center md:text-left mb-16">
                        <h2 className="text-4xl font-black text-[#0B1E3D]">The People Behind the Code</h2>
                    </div>
                    
                    <div className="flex overflow-x-auto md:grid md:grid-cols-3 pb-8 gap-12 no-scrollbar snap-x snap-mandatory">
                        {team.map((member, i) => (
                            <div key={i} className="min-w-[280px] md:min-w-0 snap-center group text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-slate-50 shadow-xl mx-auto mb-6">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-[#0B1E3D]">{member.name}</h4>
                                <p className="text-cyan-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 5: FAQ */}
                <div id="faq" className="mb-32 max-w-3xl mx-auto scroll-mt-32">
                    <h2 className="text-3xl font-black text-[#0B1E3D] text-center mb-12">Common Questions</h2>
                    <div className="space-y-4">
                        {aboutFaqs.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                                <button 
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full p-6 text-left flex justify-between items-center group transition-colors hover:bg-slate-100"
                                >
                                    <span className="font-bold text-[#0B1E3D] group-hover:text-cyan-600">{faq.q}</span>
                                    <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-cyan-500' : ''}`} />
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="bg-[#0B1E3D] rounded-[2.5rem] p-12 text-center relative overflow-hidden border border-white/10">
                    <h3 className="text-3xl font-black text-white mb-8 relative z-10">Let's build your future together.</h3>
                    <Link to="/signup" className="relative z-10 inline-block bg-cyan-500 text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all">Get Started</Link>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                @keyframes bounce-x {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(5px); }
                }
                .animate-bounce-x { animation: bounce-x 1s infinite; }
            `}} />
        </div>
    );
}