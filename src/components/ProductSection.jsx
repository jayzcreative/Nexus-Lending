import React, { useEffect } from 'react';
import LoanProducts from './LoanProducts';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Don't forget the CSS!

export default function ProductSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // How long the animation lasts (1 second)
            once: false,    // Whether it should animate every time you scroll up/down
            easing: 'ease-out-back', // Gives it that "snap" or "flying" feel
        });
    }, []);

    return (
        <section className="bg-white py-24 px-6 relative z-20">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header with Fade Down */}
                <div className="mb-16 text-center lg:text-left" data-aos="fade-down">
                    <h2 className="text-[#0B1E3D] text-4xl lg:text-5xl font-black tracking-tight mb-4">
                        Everything you need to <span className="text-cyan-500">reach your goals.</span>
                    </h2>
                    <p className="text-[#0B1E3D]/60 text-xl font-medium max-w-3xl">
                        From debt consolidation to buying your dream home, 
                        Nexus Lending offers flexible solutions tailored to your financial journey.
                    </p>
                </div>

                <LoanProducts />
            </div>
        </section>
    );
}