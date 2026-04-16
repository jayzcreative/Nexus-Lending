import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import images
import debtImg from '../../assets/debt.jpg';
import weddingImg from '../../assets/wedding.jpg';
import homeImg from '../../assets/homeimprove.jpg';
import vacationImg from '../../assets/vacation.jpg';
import emergencyImg from '../../assets/emergency.jpg';

export default function PersonalLoans() {
    const { hash } = useLocation();
    const [amount, setAmount] = useState(1000);
    const monthlyPayment = Math.round((amount * 1.05) / 12);

    // Effect to handle scrolling and highlighting when arriving via a hash link
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                // Scroll to element
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Trigger highlight effect
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-8');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-8');
                    }, 2000);
                }, 100);
            }
        }
    }, [hash]);

    const personalLoanCategories = [
        {
            title: "Debt Consolidation",
            id: "debt-consolidation",
            image: debtImg,
            desc: "Simplify your life by combining your balances into one manageable monthly payment. We help you find practical rates that can save you money over time.",
            benefit: "Average interest savings of 15% compared to major credit cards."
        },
        {
            title: "Wedding Loans",
            id: "wedding-loans",
            image: weddingImg,
            desc: "Finance your celebration without draining your savings. From the venue to the ring, we provide the flexible funding you need for your big day.",
            benefit: "Fixed rates so your post-wedding budget remains predictable."
        },
        {
            title: "Home Improvement",
            id: "home-improvement",
            image: homeImg,
            desc: "Increase your home's value with a new project or essential repair. Get funded based on your financial potential with no home equity required.",
            benefit: "Funds delivered as soon as the next business day to start your project."
        },
        {
            title: "Vacation Loans",
            id: "vacation-loans",
            image: vacationImg,
            desc: "Don't put your adventures on hold. Whether it's a family trip or a solo journey, we offer travel financing with transparent terms and no hidden fees.",
            benefit: "No prepayment penalties pay it off early whenever you like."
        },
        {
            title: "Emergency Loans",
            id: "emergency-loans",
            image: emergencyImg,
            desc: "Life happens fast. Whether it's an unexpected medical bill or an urgent car repair, Nexus provides a secure safety net with quick approval.",
            benefit: "Round-the-clock processing for urgent financial needs."
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
                    <div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0B1E3D] leading-tight mb-6">
                            Personal Loans <br />
                            <span className="text-cyan-500">Tailored to You.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Get funded from $50 to $5,000. We look at your whole financial picture to give you the fairest rates possible.
                        </p>
                        <Link 
                            to="/check-rate" 
                            state={{ loanType: 'Personal Loan', locked: true }}
                            className="inline-block px-8 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-100 hover:bg-black transition-all transform hover:-translate-y-1"
                        >
                            Check Your Rate
                        </Link>
                        <p className="mt-4 text-xs text-gray-400 italic">* Checking your rate won't affect your credit score.</p>
                    </div>
                    
                    {/* Calculator Section */}
                    <div className="bg-slate-50 rounded-[3rem] p-12 border border-gray-100 relative shadow-inner">
                        <div className="relative z-10">
                            <h3 className="font-bold text-[#0B1E3D] text-xl mb-8 text-center">Customize Your Loan</h3>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="text-xs font-bold uppercase text-gray-400 tracking-wider">Loan Amount</label>
                                        <p className="text-3xl font-bold text-[#0B1E3D]">${amount.toLocaleString()}</p>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="50" 
                                        max="5000" 
                                        step="50"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-2 uppercase tracking-tighter">
                                        <span>Min $50</span>
                                        <span>Max $5,000</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <div>
                                        <span className="text-xs text-gray-500 block uppercase font-bold">Estimated Monthly</span>
                                        <span className="text-2xl font-bold text-cyan-500">${monthlyPayment}/mo</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-xs text-gray-500 block uppercase font-bold">Term</span>
                                        <span className="text-lg font-bold text-[#0B1E3D]">12 Months</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories & Benefits */}
                <div className="space-y-32 mb-32">
                    {personalLoanCategories.map((loan, index) => (
                        <div 
                            key={loan.id} 
                            id={loan.id} 
                            className={`flex flex-col lg:items-center gap-12 p-4 transition-all duration-700 rounded-[2.5rem] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-cyan-50 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>
                                    <img 
                                        src={loan.image} 
                                        alt={loan.title} 
                                        className="relative rounded-[2rem] w-full h-[400px] object-cover shadow-2xl transition-all duration-500"
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="h-[2px] w-8 bg-cyan-500"></span>
                                    <span className="text-cyan-600 rounded-full text-sm font-bold tracking-widest uppercase">
                                        {loan.title}
                                    </span>
                                </div>
                                <h2 className="text-4xl font-bold text-[#0B1E3D]">{loan.title}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{loan.desc}</p>
                                <div className="p-5 bg-cyan-50/50 border-l-4 border-cyan-500 rounded-r-xl">
                                    <p className="text-[#0B1E3D] font-medium italic text-sm">
                                        {loan.benefit}
                                    </p>
                                </div>
                                <Link 
                                    to="/check-rate" 
                                    state={{ 
                                        loanType: 'Personal Loan', 
                                        specificType: loan.title,
                                        locked: true 
                                    }}
                                    className="group inline-flex items-center font-bold text-[#0B1E3D] hover:text-cyan-500 transition-colors"
                                >
                                    Start Application 
                                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Section */}
                <div className="bg-[#0B1E3D] rounded-[3rem] p-12 text-center text-white mb-32">
                    <h3 className="text-3xl font-bold mb-4">Bank-Level Security. Personalized Care.</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        We use industry-standard encryption to ensure your financial data is protected and private at all times.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Secure-Data", "Privacy Guard", "Fast-Verify", "Nexus-Lock"].map((text, i) => (
                            <div key={i} className="py-3 px-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center">
                                <span className="font-bold text-sm md:text-lg uppercase tracking-widest text-cyan-500">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}