import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added for navigation
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
    {
        question: "Will checking my rate affect my credit score?",
        answer: "No. When you check your rate with Nexus, we perform a 'soft' credit pull which does not affect your credit score. A 'hard' inquiry only occurs if you accept your loan offer and proceed with funding."
    },
    {
        question: "How fast will I receive my funds?",
        answer: "99% of our members receive their funds within one business day after signing their digital loan agreement. The timing depends on your bank's processing speed."
    },
    {
        question: "Are there any hidden fees or prepayments penalties?",
        answer: "None. Nexus believes in pure transparency. There are zero application fees, zero origination fees on most products, and zero penalties for paying off your loan early."
    },
    {
        question: "What is the maximum amount I can borrow?",
        answer: "Depending on your credit profile and the type of loan (Student, MBA, or Personal), you can borrow anywhere from $1,000 up to $250,000."
    },
    {
        question: "Is my data safe with Nexus AI?",
        answer: "Absolutely. We use bank-level 256-bit encryption and our autonomous defense systems monitor for phishing and unauthorized access 24/7 to keep your financial identity secure."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        // Initializing animations
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16" data-aos="zoom-in">
                    <h2 className="text-[#0B1E3D] text-4xl lg:text-5xl font-black mb-4">
                        Got <span className="text-cyan-500">Questions?</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-bold uppercase tracking-widest">
                        We've got the answers.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-8 flex items-center justify-between text-left group"
                            >
                                <span className={`text-[#0B1E3D] text-xl font-extrabold pr-8 transition-colors ${openIndex === index ? 'text-cyan-500' : ''}`}>
                                    {item.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-cyan-500 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-cyan-500 text-white' : 'text-cyan-500 group-hover:bg-cyan-50'}`}>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </div>
                            </button>
                            
                            <div 
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-8 pt-0 text-gray-500 text-lg font-medium leading-relaxed border-t border-gray-50 mt-2">
                                    <div className="pt-6">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Updated Footer Button with Link */}
                <div className="mt-16 text-center" data-aos="fade-up" data-aos-offset="0">
                    <p className="text-[#0B1E3D] font-bold text-lg mb-6">Still confused about something?</p>
                    <Link 
                        to="/contact" 
                        className="inline-block px-10 py-4 border-2 border-[#0B1E3D] text-[#0B1E3D] font-black rounded-2xl hover:bg-[#0B1E3D] hover:text-white transition-all shadow-lg hover:shadow-[#0B1E3D]/20"
                    >
                        Contact Support
                    </Link>
                </div>

            </div>
        </section>
    );
}