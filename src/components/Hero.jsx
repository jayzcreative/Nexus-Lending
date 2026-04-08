import React, { useState, useEffect, useCallback } from 'react';
import Hero1Image from '../assets/hero03.jpg';
import Hero2Image from '../assets/hero2.png';
import Hero3Image from '../assets/hero02.jpg';

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const CONSTANT_MEMBERS = "2.0M";

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

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 8000); // Slower delay as requested
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <section className="relative min-h-[110vh] lg:min-h-screen bg-cyan-500 overflow-hidden font-sans flex items-center pt-[80px]">
            
            {/* Decorative Geometry */}
            <div className="absolute top-10 -right-20 w-64 h-64 border-[32px] border-white/10 rounded-full hidden xl:block"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-3xl rotate-12 hidden lg:block"></div>
            
            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
                {/* Fixed Height Container to stop jumping */}
                <div className="relative min-h-[600px] lg:min-h-[650px]">
                    {slides.map((slide, index) => {
                        // Page sliding logic: 
                        // Active = centered
                        // Previous = far left
                        // Next/Others = far right
                        let position = "translate-x-full opacity-0";
                        if (index === currentSlide) {
                            position = "translate-x-0 opacity-100 z-20";
                        } else if (
                            index === currentSlide - 1 || 
                            (currentSlide === 0 && index === slides.length - 1)
                        ) {
                            position = "-translate-x-full opacity-0 z-10";
                        }

                        return (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${position}`}
                            >
                                {/* LEFT SIDE: Content */}
                                <div className="lg:w-[55%] text-left">
                                    <span className="inline-block bg-[#0B1E3D] text-white font-bold text-xs lg:text-sm uppercase tracking-[0.3em] px-5 py-2 rounded-md mb-6">
                                        Nexus Lending®
                                    </span>

                                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-[#0B1E3D] leading-[0.95] mb-8 tracking-tighter">
                                        {slide.title}
                                    </h1>
                                    <p className="text-[#0B1E3D]/90 text-xl lg:text-2xl font-semibold mb-8 max-w-2xl leading-relaxed">
                                        {slide.desc}
                                    </p>

                                    {/* STARS & TRUST BADGE - RE-ADDED */}
                                    <div className="flex flex-wrap items-center gap-4 mb-10">
                                        <div className="flex bg-white/15 backdrop-blur-md border border-white/20 p-2 rounded-2xl items-center gap-3">
                                            <div className="flex bg-[#0B1E3D] px-3 py-1.5 rounded-xl items-center gap-1.5 shadow-lg">
                                                <div className="flex text-yellow-400">
                                                    {[...Array(4)].map((_, i) => (
                                                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                    <svg className="w-3.5 h-3.5 fill-current opacity-50" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                                <span className="text-white font-black text-xs">4.7/5</span>
                                            </div>
                                            <p className="text-[#0B1E3D] font-bold text-sm pr-2">
                                                Trusted by <span className="text-white">{CONSTANT_MEMBERS}</span> members
                                            </p>
                                        </div>
                                    </div>

                                    <button className="px-14 py-6 bg-[#0B1E3D] hover:bg-[#162a4d] text-white font-bold text-xl lg:text-2xl rounded-2xl shadow-xl transition-all transform active:scale-95">
                                        {slide.ctaText}
                                    </button>
                                </div>

                                {/* RIGHT SIDE: Image */}
                                <div className="lg:w-[45%] flex flex-col items-center">
                                    <div className="relative group">
                                        <div className="absolute -inset-8 bg-white/30 rounded-[5rem] -rotate-6 transition-transform duration-1000 -z-10 blur-sm"></div>
                                        <div className="relative z-10 bg-white p-4 lg:p-6 rounded-[3.5rem] shadow-2xl">
                                            <img 
                                                src={slide.image} 
                                                alt="Nexus App" 
                                                className="w-full max-w-[480px] h-[350px] lg:h-[450px] object-cover rounded-[2.8rem]" 
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-8 text-center">
                                        <p className="text-[#0B1E3D] font-black text-sm tracking-[0.3em] uppercase opacity-80">
                                            {slide.trust}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CONTROLS */}
                <div className="flex flex-wrap items-center gap-6 mt-16 relative z-30">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsPaused(!isPaused)} 
                            className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-[#0B1E3D]/20 text-[#0B1E3D] hover:bg-white/20 transition-all shadow-sm"
                        >
                            {isPaused ? 
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> : 
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                            }
                        </button>
                        <div className="flex bg-[#0B1E3D]/5 p-1.5 rounded-2xl backdrop-blur-sm shadow-inner">
                            <button onClick={prevSlide} className="p-4 text-[#0B1E3D] hover:bg-white rounded-xl transition-all font-bold">←</button>
                            <button onClick={nextSlide} className="p-4 text-[#0B1E3D] hover:bg-white rounded-xl transition-all font-bold">→</button>
                        </div>
                    </div>
                    
                    <div className="flex gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-[#0B1E3D]' : 'w-2 bg-[#0B1E3D]/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}