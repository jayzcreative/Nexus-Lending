import React, { useState, useEffect, useRef } from 'react';
import Hero1Image from '../assets/hero03.jpg';
import Hero2Image from '../assets/hero2.png';
import Hero3Image from '../assets/hero02.jpg';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlayRef = useRef();

    const slides = [
        {
            id: 1,
            title: "Smart loans, right at your fingertips.",
            desc: "Check your eligibility, get instant offers, and stay in control anytime, anywhere.",
            image: Hero1Image,
            ctaText: "Check My Rate",
            trust: "Ranked #1 in Consumer Satisfaction 2026"
        },
        {
            id: 2,
            title: "Track your loan. Stay ahead.",
            desc: "View balances, upcoming payments, and manage everything in one simple dashboard.",
            image: Hero2Image,
            ctaText: "View Dashboard",
            trust: "Trusted by over 2 Million Members"
        },
        {
            id: 3,
            title: "Approved in minutes. Celebrate faster.",
            desc: "Get the funds you need quick decisions, zero hassle, total peace of mind.",
            image: Hero3Image,
            ctaText: "Get Approved Now",
            trust: "Bank-Level Security & Encryption"
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        if (!isPaused) autoPlayRef.current = nextSlide;
    });

    useEffect(() => {
        const interval = setInterval(() => { if (!isPaused) autoPlayRef.current(); }, 8000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const { title, desc, image, ctaText, trust } = slides[currentSlide];

    return (
        // Increased min-height to 100vh for a true full-screen impact on desktop
        <section className="relative pt-[100px] lg:pt-[120px] min-h-screen lg:min-h-[100vh] bg-cyan-500 overflow-hidden font-sans flex items-center">
            
            {/* --- ENHANCED DECORATIVE GEOMETRY --- */}
            {/* Top Right Circles */}
            <div className="absolute top-10 -right-20 w-64 h-64 border-[32px] border-white/10 rounded-full hidden xl:block"></div>
            <div className="absolute top-40 right-20 w-16 h-16 border-4 border-white/20 rounded-full animate-pulse"></div>
            
            {/* Bottom Left Rectangles & Shapes */}
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-3xl rotate-12 hidden lg:block"></div>
            <div className="absolute bottom-40 left-[15%] w-12 h-12 bg-white/10 rounded-lg -rotate-12 hidden xl:block"></div>
            
            {/* Floating "Blips" */}
            <div className="absolute top-[20%] left-[5%] w-4 h-4 bg-white/30 rounded-full"></div>
            <div className="absolute top-[60%] right-[10%] w-3 h-3 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-[10%] left-[40%] w-6 h-6 border-2 border-white/20 rounded-full"></div>
            
            {/* Middle decorative bar */}
            <div className="absolute top-1/2 left-0 w-24 h-2 bg-white/10 rounded-r-full hidden 2xl:block"></div>
            {/* ----------------------------------- */}

            {/* Container width increased to max-w-[1440px] (8xl) */}
            <div className="max-w-[1440px] mx-auto px-6 py-20 lg:py-32 w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
                    
                    {/* LEFT SIDE: Content */}
                    <div className="lg:w-[55%] text-left">
                        <span className="inline-block bg-[#0B1E3D] text-white font-bold text-xs lg:text-sm uppercase tracking-[0.3em] px-5 py-2 rounded-md mb-8">
                            Nexus Lending®
                        </span>
                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-[#0B1E3D] leading-[0.95] mb-8 tracking-tighter">
                            {title}
                        </h1>
                        <p className="text-[#0B1E3D]/90 text-xl lg:text-2xl xl:text-3xl font-semibold mb-12 max-w-2xl leading-relaxed">
                            {desc}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                            <button className="px-14 py-6 bg-[#0B1E3D] hover:bg-[#162a4d] text-white font-bold text-xl lg:text-2xl rounded-2xl shadow-[0_20px_50px_rgba(11,30,61,0.3)] transition-all transform active:scale-95">
                                {ctaText}
                            </button>
                            
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setIsPaused(!isPaused)} 
                                    className="w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-[#0B1E3D]/10 text-[#0B1E3D] hover:bg-white/20 transition-all shadow-sm"
                                >
                                    {isPaused ? 
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> : 
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                    }
                                </button>
                                <div className="flex bg-[#0B1E3D]/5 p-1.5 rounded-2xl">
                                    <button onClick={prevSlide} className="p-5 text-[#0B1E3D] hover:bg-white rounded-xl transition-all font-bold text-xl">←</button>
                                    <button onClick={nextSlide} className="p-5 text-[#0B1E3D] hover:bg-white rounded-xl transition-all font-bold text-xl">→</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Image */}
                    <div className="lg:w-[45%] flex flex-col items-center">
                        <div className="relative group">
                            {/* Larger, more visible background glow/card */}
                            <div className="absolute -inset-8 bg-white/30 rounded-[5rem] -rotate-6 group-hover:rotate-0 transition-transform duration-1000 -z-10 blur-sm"></div>
                            
                            <div className="relative z-10 bg-white p-4 lg:p-6 rounded-[3.5rem] shadow-[0_80px_120px_-30px_rgba(0,0,0,0.5)]">
                                <img 
                                    src={image} 
                                    alt="Nexus App" 
                                    className="w-full max-w-[520px] h-auto rounded-[2.8rem]" 
                                />
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <p className="text-[#0B1E3D] font-black text-sm lg:text-base tracking-[0.3em] uppercase opacity-80">
                                {trust}
                            </p>
                            <div className="mt-4 flex justify-center gap-1">
                                {slides.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-[#0B1E3D]' : 'w-2 bg-[#0B1E3D]/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}clearInterval