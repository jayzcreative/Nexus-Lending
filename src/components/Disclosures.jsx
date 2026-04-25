import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';

export default function Disclosures() {
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

    const disclosureSections = [
        {
            title: "Loan Rate & APR Disclosures",
            content: "Fixed APRs (Annual Percentage Rate) for loans through Nexus range from 6.99% to 24.99%. The lowest rates are available to borrowers with excellent credit history. Loan terms range from 12 to 84 months. For example, a $10,000 loan with a 5-year term and 9.99% APR would have a monthly payment of $212.42."
        },
        {
            title: "AI Decisioning Transparency",
            content: "Nexus uses proprietary Artificial Intelligence models to assess creditworthiness. These models analyze traditional credit data and alternative financial indicators. In compliance with the AI Governance Act of 2026, we ensure our algorithms are audited quarterly for bias. Users have the right to request a manual explanation of any automated credit decision."
        },
        {
            title: "Credit Score Impact",
            content: "Checking your rate on Nexus involves a 'Soft Credit Pull' which does not impact your credit score. If you choose to proceed with a loan offer and submit a full application, a 'Hard Credit Pull' will be performed, which may impact your credit score and will be visible to other lenders."
        },
        {
            title: "Lending Partnerships",
            content: "Nexus is a financial technology platform, not a bank. All loans are issued and disbursed by our regulated banking partners, including Nexus Partner Bank (Member FDIC). Mortgage products are provided in partnership with licensed NMLS entities and are subject to final underwriting approval."
        },
        {
            title: "Student Loan Specifics",
            content: "Refinancing federal student loans into a private Nexus loan may result in the loss of certain federal benefits, such as income-driven repayment plans or public service loan forgiveness. We encourage students to evaluate their federal options before choosing a private refinancing route."
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B1E3D]">
            {/* Header */}
            <header className="bg-[#0B1E3D] py-16 px-6 text-center">
                <Link to="/" className="inline-flex items-center gap-3 mb-8 hover:scale-105 transition-transform">
                    <img src={logo} alt="Nexus" className="w-10 h-10 shadow-lg shadow-cyan-500/20 rounded-full" />
                    <span className="text-white font-black text-xl tracking-tight uppercase">Nexus Compliance</span>
                </Link>
                <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">Legal Disclosures</h1>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Dynamic Date Badge */}
                <div className="flex justify-start mb-10" data-aos="fade-right">
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                        <p className="text-[#0B1E3D] font-black text-[10px] uppercase tracking-widest">
                            Review Date: <span className="text-cyan-600">{effectiveDate}</span>
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    {disclosureSections.map((section, index) => (
                        <section key={index} data-aos="fade-up" data-aos-delay={index * 100} className="border-l-4 border-cyan-500 pl-6 md:pl-8">
                            <h2 className="text-xl font-black mb-4 text-[#0B1E3D] uppercase tracking-tight">
                                {section.title}
                            </h2>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>

                {/* Bottom Disclaimer Box */}
                <div className="mt-20 p-8 md:p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-cyan-900/5 text-center">
                    <h3 className="font-black text-lg mb-4 text-[#0B1E3D]">Equal Opportunity Lender</h3>
                    <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
                        Nexus and its partners do not discriminate on the basis of race, color, religion, national origin, sex, marital status, or age. All credit is subject to approval.
                    </p>
                </div>
            </main>

            {/* Footer with breathing room */}
            <footer className="bg-[#0097B2] pt-8 pb-12">
                <div className="flex flex-wrap items-center justify-center gap-5 text-white text-sm font-bold px-6">
                    <Link to="/help" className="hover:opacity-80 transition-opacity">Help</Link>
                    <span className="text-white/30">•</span>
                    <Link to="/terms" className="hover:opacity-80 transition-opacity">Terms of Use</Link>
                    <span className="text-white/30">•</span>
                    <Link to="/privacy" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
                </div>
            </footer>
        </div>
    );
}