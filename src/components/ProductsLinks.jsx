import React, { useRef, useState } from 'react';

// Asset imports
import personalImg from '../assets/personal loan.jpg';
import carImg from '../assets/car loan.jpg';
import healthImg from '../assets/health loan.jpg';
import mortgageImg from '../assets/morgage.jpg'; 
import studentImg from '../assets/student loan.jpg';
import familyImg from '../assets/family.jpg'; 

const productData = [
    {
        category: "Personal Loans",
        image: personalImg,
        desc: "Pay off high-rate debt with no fees required.",
        links: ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"]
    },
    {
        category: "Car Loans",
        image: carImg,
        desc: "Get on the road with competitive auto rates.",
        links: ["New Car Finance", "Used Car Loans", "Refinance", "Lease Buyout", "Auto Equity"]
    },
    {
        category: "Health & Insurance",
        image: healthImg,
        desc: "Flexible financing for your medical peace of mind.",
        links: ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"]
    },
    {
        category: "Mortgage",
        image: mortgageImg,
        desc: "Buy or refinance your dream home today.",
        links: ["Home Purchase", "Refinance", "Cash-out Refi", "Jumbo Loans", "FHA Loans"]
    },
    {
        category: "Student Loans",
        image: studentImg,
        desc: "See rates and flexible terms for education.",
        links: ["Undergraduate", "Graduate", "Parent Plus", "Refinance", "MBA Loans"]
    }
];

export default function ProductsLinks() {
    const gridRef = useRef(null); 
    const firstCardRef = useRef(null); 
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleExploreClick = () => {
        const isMobile = window.innerWidth < 768;
        const target = isMobile ? firstCardRef.current : gridRef.current;
        target?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

        setIsHighlighted(true);
        setTimeout(() => {
            setIsHighlighted(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            
            <main className="flex-grow max-w-[1440px] mx-auto px-6 pt-32 pb-20 w-full">
                {/* 1. Header Hero Card */}
                <div className="w-full bg-[#0B1E3D] rounded-3xl p-10 mb-12 shadow-2xl border-l-[12px] border-cyan-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-cyan-500/10 to-transparent"></div>
                    <h1 className="text-white text-4xl font-black mb-3 relative z-10 uppercase tracking-tight">Our Financial Products</h1>
                    <p className="text-cyan-100 opacity-90 max-w-2xl text-lg relative z-10">
                        Explore our range of AI-driven lending solutions tailored to your unique financial needs. 
                    </p>
                </div>

                {/* 2. Responsive Scrollable Container */}
                <div 
                    ref={gridRef}
                    className={`flex overflow-x-auto pb-8 snap-x snap-mandatory md:snap-none md:grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-24 transition-all duration-700 rounded-[3rem] p-2 no-scrollbar ${
                        isHighlighted ? 'md:ring-8 md:ring-cyan-400 md:ring-offset-8 md:bg-cyan-50/50' : 'ring-0'
                    }`}
                >
                    {productData.map((item, index) => (
                        <div 
                            key={item.category} 
                            ref={index === 0 ? firstCardRef : null}
                            className={`flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto snap-center bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative ${
                                isHighlighted && index === 0 ? 'ring-4 ring-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] scale-105 md:scale-100 md:ring-0' : ''
                            }`}
                        >
                            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-md group-hover:border-cyan-400/50 transition-colors">
                                <img src={item.image} alt={item.category} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-[#0B1E3D] font-black text-xl mb-2">{item.category}</h3>
                            <p className="text-gray-400 text-[11px] mb-6 leading-relaxed uppercase tracking-wider font-bold h-12">{item.desc}</p>
                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>
                            
                            {/* Updated List for better tap targets */}
                            <ul className="w-full space-y-2">
                                {item.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-600 hover:text-cyan-600 text-base py-2 font-bold flex justify-between items-center group/item transition-colors">
                                            {link}
                                            <span className="text-cyan-400 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all font-black">→</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* 3. Secure Your Family Section */}
                <div className="w-full bg-[#0B1E3D] rounded-[3rem] p-10 lg:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-16 text-white relative overflow-hidden mb-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 opacity-10 blur-[120px]"></div>
                    
                    <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[10px] border-white/5 shadow-2xl">
                            <img src={familyImg} alt="Nexus Family" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="relative z-10 w-full lg:w-1/2 flex flex-col space-y-6">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                            SECURE YOUR <br /><span className="text-cyan-400">FAMILY'S FUTURE</span>
                        </h2>
                        
                        <div className="space-y-4">
                            <h4 className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Nexus Loans: Empowering Families</h4>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                At Nexus Loans, we understand that a family's well-being is the foundation of a bright future. We provide personalized lending solutions designed to support your family's milestones.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h5 className="font-black uppercase tracking-widest text-xs text-white">Family Milestone Support:</h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                                <li className="flex items-center text-gray-300 text-sm font-semibold">
                                    <span className="text-cyan-400 mr-2">•</span> Debt Consolidation for Peace of Mind
                                </li>
                                <li className="flex items-center text-gray-300 text-sm font-semibold">
                                    <span className="text-cyan-400 mr-2">•</span> Home Improvement for Growth
                                </li>
                                <li className="flex items-center text-gray-300 text-sm font-semibold">
                                    <span className="text-cyan-400 mr-2">•</span> Educational Funding for Opportunity
                                </li>
                                <li className="flex items-center text-gray-300 text-sm font-semibold">
                                    <span className="text-cyan-400 mr-2">•</span> Medical Bill Assistance for Security
                                </li>
                            </ul>
                        </div>

                        <button 
                            onClick={handleExploreClick}
                            className="bg-cyan-500 hover:bg-white hover:text-[#0B1E3D] text-[#0B1E3D] font-black py-5 px-12 rounded-2xl w-fit transition-all transform hover:scale-105 uppercase tracking-widest mt-4"
                        >
                            Explore Family Lending
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}