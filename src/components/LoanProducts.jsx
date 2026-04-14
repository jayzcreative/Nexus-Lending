import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { name: "Personal Loans", icon: "👤", range: "$50 - $5,000", features: ["Checking your rate takes 5 minutes", "No pre-payment penalty", "Fixed monthly payments", "Funds as fast as one business day", "Competitive APR models"] },
    { name: "Mortgage", icon: "🏠", range: "$10,000 - $250,000", features: ["Low down payment options", "Get pre-approved in minutes", "Zero hidden lender fees", "Expert support team", "Flexible term lengths"] },
    { name: "Car Loans", icon: "🚗", range: "$2,000 - $40,000", features: ["Swap your car loan and save", "Average monthly savings of $126", "Check your rate in minutes", "No impact on credit score", "Simple online application"] },
    { name: "Health & Insurance", icon: "🏥", range: "$100 - $15,000", features: ["Covers elective procedures", "Easy payment plans", "No surprise medical bills", "Direct hospital payment", "Flexible repayment terms"] },
    { name: "Student Loans", icon: "🎓", range: "$100 - $10,000", features: ["Undergrad & Graduate funding", "Parent Plus & MBA specialized loans", "Refinance to lower your monthly rate", "Quick digital approval process", "Build your credit while in school"] }
];

export default function LoanProducts() {
    return (
        <div className="relative w-full">
            <div className="flex overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-6 pb-8 lg:pb-0 lg:grid lg:grid-cols-2 xl:grid-cols-5 scrollbar-hide px-4 lg:px-0">
                {products.map((loan, index) => (
                    <div 
                        key={index} 
                        data-aos="fade-up" 
                        data-aos-delay={index * 100} 
                        className="flex-shrink-0 w-[85%] sm:w-[60%] lg:w-full snap-center bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm hover:shadow-2xl hover:border-cyan-400 transition-all duration-500 group flex flex-col h-full"
                    >
                        <div className="flex flex-col items-center text-center mb-6">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {loan.icon}
                            </div>
                            <h3 className="font-black text-2xl text-[#0B1E3D] leading-tight">
                                {loan.name}
                            </h3>
                        </div>

                        <div className="bg-cyan-50 text-cyan-700 font-bold text-sm py-2 px-4 rounded-lg text-center mb-8">
                            {loan.range}
                        </div>

                        <ul className="space-y-4 mb-10 flex-grow">
                            {loan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-start gap-3 text-left">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center text-cyan-500 mt-1">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                        </svg>
                                    </span>
                                    <span className="text-[#0B1E3D]/80 text-[15px] leading-tight font-medium">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col items-center gap-6 mt-auto">
                            <Link 
                                to="/check-rate"
                                state={{ 
                                    preSelected: loan.name, 
                                    minAmount: loan.range.split('-')[0].replace(/[^0-9]/g, '') 
                                }}
                                className="w-full py-4 bg-[#0B1E3D] text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors text-center block shadow-lg shadow-[#0B1E3D]/10"
                            >
                                Check your rate
                            </Link>
                            
                            <button className="flex items-center justify-center group/arrow cursor-pointer">
                                <div className="flex items-center gap-2 text-[#0B1E3D] font-bold text-lg group-hover/arrow:text-cyan-500 transition-colors">
                                    <span className="text-sm uppercase tracking-widest">Explore</span>
                                    <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover/arrow:border-cyan-500 group-hover/arrow:translate-x-2 transition-all duration-300">
                                        <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none lg:hidden"></div>
        </div>
    );
}