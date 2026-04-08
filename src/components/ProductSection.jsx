import React from 'react';
import LoanProducts from './LoanProducts';

export default function ProductSection() {
    return (
        <section className="bg-white py-24 px-6 relative z-20">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-[#0B1E3D] text-4xl lg:text-5xl font-black tracking-tight mb-4">
                        Everything you need to <span className="text-cyan-500">reach your goals.</span>
                    </h2>
                    <p className="text-[#0B1E3D]/60 text-xl font-medium max-w-3xl">
                        From debt consolidation to buying your dream home, 
                        Nexus Lending offers flexible solutions tailored to your financial journey.
                    </p>
                </div>

                {/* The Product Grid */}
                <LoanProducts />
            </div>
        </section>
    );
}