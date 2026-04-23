import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, RefreshCw, Briefcase, ShieldCheck, Zap, Lock, Award } from 'lucide-react';

// Import images
import undergraduateImg from '../../assets/undergraduate.jpg';
import graduateImg from '../../assets/graduate.jpg';
import parentplusImg from '../../assets/parentplus.jpg';
import studentrefinanceImg from '../../assets/studentrefinance.jpg';
import mbaImg from '../../assets/mba.jpg';

export default function StudentLoans() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-8', 'scale-[1.01]');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-8', 'scale-[1.01]');
                    }, 2000);
                }, 100);
            }
        }
    }, [hash]);

    const studentCategories = [
        {
            id: "undergraduate",
            title: "Undergraduate",
            image: undergraduateImg,
            icon: <GraduationCap className="w-5 h-5" />,
            desc: "Cover tuition, housing, and books with flexible repayment options that don't start until after you graduate.",
            benefit: "Deferred payments available while you are in school at least half-time."
        },
        {
            id: "graduate",
            title: "Graduate",
            image: graduateImg,
            icon: <BookOpen className="w-5 h-5" />,
            desc: "Specialized funding for Masters and PhD candidates with higher lending limits and competitive fixed rates.",
            benefit: "Borrow up to the full cost of attendance minus other financial aid."
        },
        {
            id: "parent-plus",
            title: "Parent Plus",
            image: parentplusImg,
            icon: <Users className="w-5 h-5" />,
            desc: "Helping parents support their children's education through affordable loans with low monthly minimums.",
            benefit: "Fast approval process to ensure tuition deadlines are met on time."
        },
        {
            id: "refinance-student",
            title: "Student Refinance",
            image: studentrefinanceImg,
            icon: <RefreshCw className="w-5 h-5" />,
            desc: "Combine multiple student loans into one easy payment and potentially lower your overall interest rate.",
            benefit: "Average savings of over $200 per month for qualified borrowers."
        },
        {
            id: "mba-loans",
            title: "MBA Loans",
            image: mbaImg,
            icon: <Briefcase className="w-5 h-5" />,
            desc: "Tailored financing for business school students, considering your future earning potential in the rate calculation.",
            benefit: "Exclusive networking events and career resources for MBA borrowers."
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6">
                        <GraduationCap className="w-10 h-10 text-cyan-500" />
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black text-[#0B1E3D] mb-6 tracking-tight">
                        Invest in Your <span className="text-cyan-500">Education.</span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl font-medium leading-relaxed">
                        From undergraduate degrees to specialized MBA loans, we help you fund your future without the stress of high-interest debt.
                    </p>
                </div>

                {/* Trust Badges Bar */}
                <div className="flex flex-wrap justify-center gap-8 mb-32 py-8 border-y border-gray-100">
                    <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest">
                        <ShieldCheck className="w-4 h-4 text-cyan-500" /> Secure Application
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest">
                        <Zap className="w-4 h-4 text-cyan-500" /> Instant Decision
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest">
                        <Lock className="w-4 h-4 text-cyan-500" /> No Credit Impact
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-xs tracking-widest">
                        <Award className="w-4 h-4 text-cyan-500" /> Fixed Rates
                    </div>
                </div>
                
                {/* Categories Sections (Alternating Layout) */}
                <div className="space-y-32 mb-32">
                    {studentCategories.map((loan, index) => (
                        <div 
                            key={loan.id} 
                            id={loan.id}
                            className={`flex flex-col lg:items-center gap-16 transition-all duration-1000 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-cyan-50 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-500 opacity-60"></div>
                                    <img 
                                        src={loan.image} 
                                        alt={loan.title} 
                                        className="relative rounded-[2.5rem] w-full h-[500px] object-cover shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex items-center gap-3">
                                    <span className="h-[2px] w-12 bg-cyan-500"></span>
                                    <span className="text-cyan-600 rounded-full text-sm font-black tracking-[0.2em] uppercase flex items-center gap-2">
                                        {loan.icon} {loan.title}
                                    </span>
                                </div>
                                <h2 className="text-5xl font-black text-[#0B1E3D] tracking-tight">{loan.title} Loans</h2>
                                <p className="text-gray-500 text-xl leading-relaxed">{loan.desc}</p>
                                
                                <div className="p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm relative overflow-hidden group/benefit">
                                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-cyan-500 group-hover/benefit:w-3 transition-all"></div>
                                    <p className="text-[#0B1E3D] font-semibold italic text-base leading-relaxed pl-4">
                                        "{loan.benefit}"
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <Link 
                                        to="/check-rate" 
                                        state={{ 
                                            purpose: 'Student Loans', 
                                            subType: loan.title 
                                        }}
                                        className="group inline-flex items-center px-8 py-4 bg-[#0B1E3D] text-white rounded-xl font-bold hover:bg-cyan-500 transition-all shadow-xl shadow-slate-200"
                                    >
                                        Apply for {loan.title}
                                        <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Section */}
                <div className="bg-[#0B1E3D] rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-cyan-500 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-cyan-400 rounded-full blur-[100px]"></div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-5xl font-black mb-6">Ready to start your journey?</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg font-medium">
                            Join thousands of students who have secured their future with our transparent, fixed-rate education financing.
                        </p>
                        <Link 
                            to="/check-rate"
                            state={{ purpose: 'Student Loans' }}
                            className="inline-block px-12 py-5 bg-cyan-500 text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white hover:text-[#0B1E3D] transition-all transform hover:scale-105"
                        >
                            Check Your Rate Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}