import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, RefreshCw, Briefcase } from 'lucide-react';

export default function StudentLoans() {
    const { hash } = useLocation();

    // Effect to handle scrolling and highlighting when arriving via a hash link
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Visual highlight effect for the card
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-4', 'scale-[1.02]');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-4', 'scale-[1.02]');
                    }, 2000);
                }, 100);
            }
        }
    }, [hash]);

    const studentCategories = [
        {
            id: "undergraduate",
            title: "Undergraduate",
            icon: <GraduationCap className="w-8 h-8 text-cyan-500" />,
            desc: "Cover tuition, housing, and books with flexible repayment options that don't start until after you graduate.",
            color: "bg-slate-900",
            textColor: "text-white",
            subText: "text-slate-400"
        },
        {
            id: "graduate",
            title: "Graduate",
            icon: <BookOpen className="w-8 h-8 text-white" />,
            desc: "Specialized funding for Masters and PhD candidates with higher lending limits and competitive fixed rates.",
            color: "bg-cyan-500",
            textColor: "text-white",
            subText: "text-cyan-100"
        },
        {
            id: "parent-plus",
            title: "Parent Plus",
            icon: <Users className="w-8 h-8 text-cyan-500" />,
            desc: "Helping parents support their children's education through affordable loans with low monthly minimums.",
            color: "bg-white",
            textColor: "text-[#0B1E3D]",
            subText: "text-gray-500",
            border: "border-2 border-gray-100"
        },
        {
            id: "refinance-student",
            title: "Refinance",
            icon: <RefreshCw className="w-8 h-8 text-cyan-500" />,
            desc: "Combine multiple student loans into one easy payment and potentially lower your overall interest rate.",
            color: "bg-slate-100",
            textColor: "text-[#0B1E3D]",
            subText: "text-gray-500"
        },
        {
            id: "mba-loans",
            title: "MBA Loans",
            icon: <Briefcase className="w-8 h-8 text-white" />,
            desc: "Tailored financing for business school students, considering your future earning potential in the rate calculation.",
            color: "bg-[#0B1E3D]",
            textColor: "text-white",
            subText: "text-slate-400"
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-cyan-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl font-extrabold text-[#0B1E3D] mb-4">Invest in Your Education.</h1>
                    <p className="text-gray-500 max-w-xl">From undergraduate degrees to specialized MBA loans, we help you fund your future without the stress of high-interest debt.</p>
                </div>
                
                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {studentCategories.map((loan) => (
                        <div 
                            key={loan.id} 
                            id={loan.id}
                            className={`p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between ${loan.color} ${loan.textColor} ${loan.border || ''} shadow-lg`}
                        >
                            <div>
                                <div className="mb-6">{loan.icon}</div>
                                <h2 className="text-2xl font-bold mb-4">{loan.title}</h2>
                                <p className={`${loan.subText} mb-8 leading-relaxed`}>{loan.desc}</p>
                            </div>
                            <Link 
                                to="/check-rate" 
                                state={{ 
                                    loanType: 'Student Loan', 
                                    specificType: loan.title,
                                    locked: true 
                                }}
                                className="font-bold hover:underline underline-offset-8 flex items-center gap-2"
                            >
                                Get Started <span className="text-xl">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}