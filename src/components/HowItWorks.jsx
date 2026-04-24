import React, { useEffect } from 'react';
import Hero1Image from '../assets/hero1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Added icon imports for the new steps
import { MousePointerClick, Activity, Landmark, Rocket } from 'lucide-react';

export default function HowItWorks() {
    // Initialize AOS for the scroll animations
    useEffect(() => {
        AOS.init({
            duration: 1200, // Slightly slower for a smoother "gliding" feel
            once: false,
        });
    }, []);

    const steps = [
        {
            number: "01",
            title: "Check Your Rate",
            desc: "Tell us about your trajectory. It takes 60 seconds and won't affect your credit score.",
            icon: <MousePointerClick className="w-6 h-6" />,
            link: "/how#eligibility"
        },
        {
            number: "02",
            title: "Connect Your Data",
            desc: "Securely link your accounts so our AI can analyze your real-time financial health.",
            icon: <Activity className="w-6 h-6" />,
            link: "/how#faq"
        },
        {
            number: "03",
            title: "Get Funded",
            desc: "Review your offer and sign digitally. Funds are typically sent within 24 hours.",
            icon: <Landmark className="w-6 h-6" />,
            link: "/how#security"
        },
        {
            number: "04",
            title: "Grow with Nexus",
            desc: "Use our dashboard to track your growth. Consistent repayment unlocks even better rates.",
            icon: <Rocket className="w-6 h-6" />,
            link: "/how#cta"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    
                    {/* LEFT SIDE: Slides in from the LEFT */}
                    <div 
                        className="lg:w-1/2 order-2 lg:order-1"
                        data-aos="fade-right"
                    >
                        <h2 className="text-[#0B1E3D] text-4xl lg:text-5xl font-black mb-12 tracking-tight">
                            A new loan could be just <br />
                            <span className="text-cyan-500">clicks away</span>
                        </h2>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div 
                                    key={index} 
                                    className="flex gap-8 group"
                                    data-aos="fade-right"
                                    data-aos-delay={index * 200}
                                >
                                    {/* Number Circle */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-black shadow-[0_10px_20px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform">
                                        {step.number}
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-cyan-500">{step.icon}</span>
                                            <h3 className="text-[#0B1E3D] text-2xl font-bold">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-md">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Slides in from the RIGHT */}
                    <div 
                        className="lg:w-1/2 order-1 lg:order-2 flex justify-center relative"
                        data-aos="fade-left"
                    >
                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 bg-cyan-100 rounded-full blur-3xl opacity-40 scale-75"></div>
                        
                        <div className="relative z-10">
                            <img 
                                src={Hero1Image} 
                                alt="How Nexus works" 
                                className="w-full max-w-[500px] h-auto rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] transform -rotate-2 hover:rotate-0 transition-transform duration-700"
                            />
                            
                            {/* Floating Checkmark UI */}
                            <div 
                                className="absolute -top-6 -right-6 bg-white p-4 rounded-3xl shadow-xl animate-bounce"
                                data-aos="zoom-in"
                                data-aos-delay="600"
                            >
                                <div className="bg-green-500 p-2 rounded-xl">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}