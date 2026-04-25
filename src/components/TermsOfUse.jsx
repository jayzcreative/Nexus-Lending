import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';

export default function TermsOfUse() {
    const [effectiveDate, setEffectiveDate] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 800, once: true });

        // Logic to always show a date 9 days BEFORE the current date
        const date = new Date();
        date.setDate(date.getDate() - 9);
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setEffectiveDate(date.toLocaleDateString('en-US', options));
    }, []);

    const sections = [
        {
            title: "1. The Agreement",
            content: "Welcome to Nexus. By using our platform, you're entering into a legal agreement with us. This applies whether you're just browsing or using our advanced AI-driven features. If you're using Nexus on behalf of a company or a student organization at any University, you represent that you have the authority to bind that entity to these terms."
        },
        {
            title: "2. Our Service & AI Transparency",
            content: "Nexus is an evolving ecosystem of AI support and financial knowledge tools. We use sophisticated Large Language Models to help you navigate complex financial security data. However, AI can sometimes provide unexpected results. You acknowledge that our responses are starting points for research and should not be treated as professional financial advice or a guarantee of loan approval."
        },
        {
            title: "3. Your Nexus Account",
            content: "To access certain features, you might need to create an account. You’re responsible for everything that happens under your login. Keep your password safe like you would a bank PIN. If you suspect someone else has gained access to your account, you must alert our security team immediately to trigger our 'Lost or Stolen Device' protection protocol."
        },
        {
            title: "4. Prohibited Acts (The 'Don'ts')",
            content: "We built Nexus to empower users, not to be exploited. You agree not to: (a) Use automated systems like 'bots' or 'scrapers' to extract our database; (b) Attempt to bypass our BotShield or security layers; (c) Use our AI to generate harmful, illegal, or deceptive content; or (d) Probe our systems for vulnerabilities without prior written consent from our dev team."
        },
        {
            title: "5. Intellectual Property & Ownership",
            content: "We put a lot of work into the Nexus design, code, and algorithms. All original content remains the exclusive property of Nexus. We grant you a personal, non-transferable license to use the platform, but you cannot copy, modify, or sell our proprietary tech."
        },
        {
            title: "6. Security & Data Handling",
            content: "Security is in our DNA. We use AES-256 encryption at rest and TLS 1.3 for all data in transit. While we implement bank-grade security measures, no system is impenetrable. You agree that you are sharing data at your own risk, and Nexus will not be held liable for security breaches beyond our reasonable control."
        },
        {
            title: "7. Fair Usage & Service Limits",
            content: "To ensure a smooth experience for everyone, we may implement 'Rate Limiting.' If your account shows unusual activity (e.g., thousands of AI requests in a few minutes), we may temporarily throttle or suspend your access. This is to protect the platform's stability for all users."
        },
        {
            title: "8. Disclaimer & Liability",
            content: "Nexus is provided 'As-Is.' We don't make promises about the specific functions of the services or their reliability. To the extent permitted by law, Nexus and its developers won't be responsible for lost profits, revenues, or data. Our total liability for any claim under these terms is limited to the amount you paid us to use the services (or, if we choose, to supplying the services to you again)."
        },
        {
            title: "9. Updates to These Terms",
            content: "The tech world moves fast, and so do we. We may update these terms to reflect changes in the law or our services. We’ll post notice of modifications here. Changes won't apply retroactively and will become effective no sooner than 14 days after they are posted."
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B1E3D]">
            {/* --- HEADER --- */}
            <header className="bg-[#0B1E3D] py-16 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <Link to="/" className="flex items-center gap-3 mb-8 transition-transform hover:scale-105">
                        <img src={logo} alt="Nexus" className="w-10 h-10 shadow-lg shadow-cyan-500/20 rounded-full" />
                        <span className="text-white font-black text-xl tracking-tight uppercase">Nexus Legal</span>
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Terms of Service
                    </h1>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="max-w-6xl mx-auto px-6 py-20">
                
                {/* --- Dynamic Last Updated Badge --- */}
                <div className="flex justify-start mb-12" data-aos="fade-right">
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                        <p className="text-[#0B1E3D] font-black text-[10px] uppercase tracking-widest">
                            Last Updated: <span className="text-cyan-600">{effectiveDate}</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left: Quick Summary Sticky Sidebar */}
                    <aside className="lg:col-span-4 order-2 lg:order-1">
                        <div className="sticky top-10 space-y-6">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-cyan-900/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150 duration-700 opacity-50"></div>
                                
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3 relative">
                                    <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                                    In Plain English
                                </h3>
                                
                                <ul className="space-y-6 relative">
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">1</div>
                                        Don't use our AI to hack, spam, or disrupt others.
                                    </li>
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">2</div>
                                        We own our code and our logic.
                                    </li>
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">3</div>
                                        We are not responsible for how you use AI info.
                                    </li>
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">4</div>
                                        Keep your password safe; we'll handle the encryption.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Right: Full Legal Text */}
                    <div className="lg:col-span-8 order-1 lg:order-2 space-y-16">
                        {sections.map((section, index) => (
                            <section key={index} data-aos="fade-up" data-aos-delay={index * 50} className="group">
                                <h2 className="text-2xl font-black mb-6 text-[#0B1E3D] group-hover:text-cyan-600 transition-colors duration-300">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600 leading-[1.8] text-lg font-medium">
                                    {section.content}
                                </p>
                            </section>
                        ))}

                        {/* Professional Disclaimer Box */}
                        <div className="p-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[2.5rem] border border-cyan-100 shadow-inner mt-16">
                            <h4 className="text-[#0B1E3D] font-black text-lg mb-4">Development Disclosure</h4>
                            <p className="text-sm text-cyan-900 leading-relaxed opacity-80">
                                Nexus is a high-performance platform managed by the <strong>Nexus Artificial Intelligence Group</strong>. 
                                By agreeing to these terms, you acknowledge that you are using a system that utilizes live machine 
                                learning models. The security protocols 
                                are proprietary intellectual property developed for the next generation of Fintech solutions.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-10 flex flex-wrap gap-5">
                            <Link to="/" className="px-10 py-4 bg-[#0B1E3D] text-white rounded-2xl font-black shadow-xl shadow-blue-900/20 hover:bg-cyan-600 hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest">
                                I Accept These Terms
                            </Link>
                            <Link to="/contact" className="px-10 py-4 border-2 border-gray-100 text-[#0B1E3D] rounded-2xl font-black hover:bg-white hover:border-cyan-200 hover:shadow-lg transition-all duration-300 uppercase text-xs tracking-widest">
                                Contact Legal Team
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- FOOTER --- */}
           

              {/* Footer - Optimized spacing */}
                      <footer className="bg-[#0097B2] pt-8 pb-12">
              <div className="flex flex-wrap items-center justify-center gap-5 text-white text-sm font-bold px-6">
                <Link to="/help" className="hover:opacity-80 transition-opacity">Help</Link>
                <span className="text-white/30">•</span>
                <Link to="/cookies" className="hover:opacity-80 transition-opacity">Cookie Settings</Link>
                <span className="text-white/30">•</span>
                <Link to="/privacy" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
              </div>
            </footer>
        </div>
    );
}