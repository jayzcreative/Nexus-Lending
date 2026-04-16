import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Stethoscope, Shield, HeartPulse, PawPrint } from 'lucide-react';

export default function HealthLoans() {
    const { hash } = useLocation();

    // Effect to handle scrolling and highlighting when arriving via a hash link
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Visual highlight effect
                    element.classList.add('ring-4', 'ring-cyan-400', 'ring-offset-4', 'shadow-2xl');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-cyan-400', 'ring-offset-4', 'shadow-2xl');
                    }, 2000);
                }, 100);
            }
        }
    }, [hash]);

    const healthCategories = [
        {
            id: "medical-bills",
            title: "Medical Bills",
            icon: <Activity className="w-8 h-8 text-cyan-500" />,
            desc: "Cover unexpected hospital stays, elective surgeries, or specialist consultations without the financial stress."
        },
        {
            id: "dental-loans",
            title: "Dental Loans",
            icon: <Stethoscope className="w-8 h-8 text-cyan-500" />,
            desc: "From routine work to orthodontics and cosmetic procedures. Keep your smile bright with manageable monthly plans."
        },
        {
            id: "life-insurance",
            title: "Life Insurance",
            icon: <Shield className="w-8 h-8 text-cyan-500" />,
            desc: "Secure your family's future. We offer financing for premium payments to ensure your coverage never lapses."
        },
        {
            id: "health-coverage",
            title: "Health Coverage",
            icon: <HeartPulse className="w-8 h-8 text-cyan-500" />,
            desc: "Bridge the gap in your insurance or cover high deductibles with a low-interest health expense loan."
        },
        {
            id: "pet-insurance",
            title: "Pet Insurance",
            icon: <PawPrint className="w-8 h-8 text-cyan-500" />,
            desc: "Because they are family too. Finance emergency vet visits, surgeries, or long-term pet care treatments."
        }
    ];

    return (
        <div className="pt-[120px] pb-20 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6 text-center">
                
                {/* Header Section */}
                <h1 className="text-5xl font-extrabold text-[#0B1E3D] mb-6">
                    Focus on Recovery, <br />
                    <span className="text-cyan-500">Not the Bills.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Nexus provides flexible financing for medical procedures, dental work, and insurance premiums so you can get the care you need today.
                </p>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
                    {healthCategories.map((loan) => (
                        <div 
                            key={loan.id} 
                            id={loan.id}
                            className="p-8 border-2 border-gray-50 rounded-[2rem] hover:border-cyan-400 hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full"
                        >
                            <div className="mb-6 bg-cyan-50 w-fit p-4 rounded-2xl">
                                {loan.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-[#0B1E3D] mb-3">{loan.title}</h3>
                            <p className="text-gray-500 mb-8 flex-grow leading-relaxed">{loan.desc}</p>
                            <Link 
                                to="/check-rate" 
                                state={{ 
                                    loanType: 'Health Loan', 
                                    specificType: loan.title,
                                    locked: true 
                                }}
                                className="text-cyan-500 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                            >
                                Check Rates <span>→</span>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-slate-50 rounded-[3rem] p-12 border border-gray-100 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#0B1E3D] mb-4">Ready to prioritize your health?</h2>
                    <p className="text-gray-500 mb-8">Fast-track your application and get funded in as little as 24 hours.</p>
                    <Link 
                        to="/check-rate" 
                        state={{ loanType: 'Health Loan', locked: true }}
                        className="inline-block px-10 py-4 bg-cyan-500 text-white font-bold rounded-xl shadow-lg hover:bg-[#0B1E3D] transition-all transform hover:-translate-y-1"
                    >
                        Get Medical Funding
                    </Link>
                </div>
            </div>
        </div>
    );
}