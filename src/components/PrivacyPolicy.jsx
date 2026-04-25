import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';

export default function PrivacyPolicy() {
    const [effectiveDate, setEffectiveDate] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 800, once: true });

        // Logic to always show a date 7 days BEFORE the current date
        const date = new Date();
        date.setDate(date.getDate() - 7);
        
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setEffectiveDate(date.toLocaleDateString('en-US', options));
    }, []);

    const sections = [
        {
            title: "1. Data Collection & Source",
            content: "At Nexus Lending, we collect information that helps us provide a secure and personalized lending support experience. This includes personal identifiers (such as your name and email address provided during registration), financial profile data for loan simulations, and technical metadata collected via our security protocols to ensure a bot-free environment."
        },
        {
            title: "2. How We Use Your Information",
            content: "Your data is used strictly to power the Nexus ecosystem. This involves processing your inquiries through our AI Support Engine, calculating estimated loan rates, and maintaining the integrity of our secure portal. We do not sell your personal data to third-party marketers; your information is used solely to improve the accuracy of our financial models and support responses."
        },
        {
            title: "3. AI & Automated Processing",
            content: "Nexus Lending utilizes advanced artificial intelligence to analyze support tickets and financial inquiries. While our AI processes your input to provide real-time guidance, this data is anonymized wherever possible. Our automated systems are designed to detect fraudulent patterns and protect the platform from unauthorized access."
        },
        {
            title: "4. Security & Encryption Standards",
            content: "Security is the foundation of Nexus Lending. We employ industry-leading AES-256 encryption for data at rest and TLS 1.3 for all data in transit. These protocols ensure that your financial simulations and personal communications remain confidential and protected against interception."
        },
        {
            title: "5. Third-Party Integrations",
            content: "To provide a seamless experience, Nexus integrates with trusted service providers. We use Firebase for secure authentication and Google ReCaptcha (BotShield) to protect our interface. These partners may process limited data under their own privacy policies to verify your identity and maintain site security."
        },
        {
            title: "6. Cookies & Tracking",
            content: "We use cookies and similar tracking technologies to remember your preferences and analyze site traffic. This helps us understand how you interact with our lending tools and allows us to optimize the user interface. You can manage your cookie preferences through your browser settings at any time."
        },
        {
            title: "7. Data Retention & Deletion",
            content: "We retain your information only as long as necessary to fulfill the purposes outlined in this policy. If you choose to close your Nexus account, your personal data will be purged from our active databases in accordance with our secure deletion protocols, unless retention is required for legal or security audits."
        },
        {
            title: "8. Your Privacy Rights",
            content: "You have the right to access, correct, or request the deletion of your personal information held by Nexus Lending. If you wish to exercise these rights or have questions about how your data is handled, please reach out to our privacy team through our official support channels."
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B1E3D]">
            {/* --- HEADER --- */}
            <header className="bg-[#0B1E3D] py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <Link to="/" className="flex items-center gap-3 mb-8 transition-transform hover:scale-105">
                        <img src={logo} alt="Nexus" className="w-10 h-10 shadow-lg shadow-cyan-500/20 rounded-full" />
                        <span className="text-white font-black text-xl tracking-tight uppercase">Nexus Privacy</span>
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Privacy Policy
                    </h1>
                </div>
            </header>

            {/* --- CONTENT --- */}
            <main className="max-w-6xl mx-auto px-6 py-12">
                
                {/* --- Effective Date logic is now 1 week in the past --- */}
                <div className="flex justify-start mb-12" data-aos="fade-right">
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                        <p className="text-[#0B1E3D] font-black text-[10px] uppercase tracking-widest">
                            Last Updated: <span className="text-cyan-600">{effectiveDate}</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    
                    {/* Left: Quick Summary Sidebar */}
                    <aside className="lg:col-span-4 order-2 lg:order-1">
                        <div className="sticky top-10 space-y-6">
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-2xl shadow-cyan-900/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150 duration-700 opacity-50"></div>
                                
                                <h3 className="text-xl font-black mb-8 flex items-center gap-3 relative">
                                    <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                                    Privacy at a Glance
                                </h3>
                                
                                <ul className="space-y-6 relative">
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</div>
                                        We use bank-grade AES-256 encryption.
                                    </li>
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</div>
                                        We do not sell your personal information.
                                    </li>
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</div>
                                        AI data is anonymized for your safety.
                                    </li>
                                    <li className="flex gap-4 text-sm text-gray-500 font-semibold leading-relaxed">
                                        <div className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-[10px] flex-shrink-0">✓</div>
                                        You have full control over your account data.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Right: Full Policy Text */}
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

                        <div className="p-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[2.5rem] border border-cyan-100 shadow-inner mt-16 text-center">
                            <p className="text-sm text-cyan-900 leading-relaxed opacity-80">
                                This policy is updated regularly to ensure compliance with global data protection standards. 
                                Continued use of <strong>Nexus Lending</strong> constitutes your acknowledgment of these practices.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* --- CENTERED FOOTER --- */}
             

                        {/* Footer - Optimized spacing */}
                                <footer className="bg-[#0097B2] pt-8 pb-12">
                        <div className="flex flex-wrap items-center justify-center gap-5 text-white text-sm font-bold px-6">
                          <Link to="/help" className="hover:opacity-80 transition-opacity">Help</Link>
                          <span className="text-white/30">•</span>
                          <Link to="/cookies" className="hover:opacity-80 transition-opacity">Cookie Settings</Link>
                          <span className="text-white/30">•</span>
                          <Link to="/terms" className="hover:opacity-80 transition-opacity">Terms of Use</Link>
                        </div>
                      </footer>
        </div>
    );
}