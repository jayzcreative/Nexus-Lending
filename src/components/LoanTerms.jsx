import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LoanTerms() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div 
          className="mb-16 border-b-2 border-[#0B1E3D]/5 pb-10"
          data-aos="fade-down"
        >
          <h2 className="text-[#0B1E3D] text-3xl lg:text-4xl font-black uppercase tracking-widest">
            Detailed Loan <span className="text-cyan-500">Specifications</span>
          </h2>
          <p className="text-gray-400 mt-4 font-bold text-sm italic">
            Last Updated: April 19, 2026 ● All rates subject to change without prior notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-[13px] leading-relaxed text-gray-500 font-medium text-justify">
          
          {/* 1. Mortgage Loan Terms */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Mortgage & Home Equity
            </h3>
            <p>
              <sup>1</sup> Financing for home purchases and equity access ranges from **$10,000 to $250,000**. Rates are determined by the Loan-to-Value (LTV) ratio, credit history, and alternative data modeling via the Nexus AI engine. No prepayment penalties are applied to fixed-rate residential liens. Monthly payments are calculated based on the final agreed-upon term and APR, which includes all origination charges.
            </p>
          </div>

          {/* 2. Student Loan Terms */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Education & Student Financing
            </h3>
            <p>
             <sup>2</sup> Nexus Student Loan rates reflect a 0.25% interest rate reduction for users enrolled in automatic recurring payments. Eligible borrowers can access funding ranging from **$100 up to $10,000** to cover tuition, books, and living expenses. For specialized graduate programs, the aggregate limit is determined by the specific field of study and professional potential analyzed by our AI modeling.
            </p>
          </div>

          {/* 3. Auto/Car Loan Terms */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Automotive & Vehicle Liens
            </h3>
            <p>
              <sup>3</sup> Vehicle financing is available for amounts between **$2,000 and $40,000** with terms ranging from 12 to 84 months. Interest rates vary based on the borrower's credit profile and the specific loan-to-value ratio of the collateral. Nexus does not charge application fees for standard auto financing. Vehicles must be for personal use and pass our internal Nexus Shield security and valuation criteria.
            </p>
          </div>

          {/* 4. Healthcare/Medical Loans */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Healthcare & Wellness Funding
            </h3>
            <p>
              <sup>4</sup> Medical and health-related loans cover elective procedures and urgent care with ranges from **$100 to $15,000**. Terms span 12 to 84 months with fixed monthly installments. Our healthcare partners offer instant point-of-sale approval via the Nexus API. There are zero penalties for early repayment of medical debt, allowing for full financial flexibility for patients and their families.
            </p>
          </div>

          {/* 5. Personal Loan Terms - Highlights the core Nexus Loans product */}
          <div 
            className="md:col-span-2 bg-[#F8FAFC] p-10 rounded-[3rem] border-2 border-cyan-500/10 mt-6 shadow-sm"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <h3 className="text-[#0B1E3D] font-black text-lg uppercase mb-6 flex items-center gap-3">
               <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
               Personal Loan Comprehensive Terms
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              <sup>5</sup> Fixed rates from **8.99% APR to 35.99% APR** include a total potential **0.50% discount** (0.25% for Autopay enrollment and 0.25% for Direct Deposit). Lowest rates are reserved for creditworthy borrowers with a debt-to-income ratio below 35%. Your actual rate is determined by the selected term and our AI's evaluation of your income and security profile.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Personal loan amounts range from **$50 to $5,000**. The APR reflects the yearly cost of credit, including the interest rate and a one-time origination fee of 1%–8% deducted at the time of funding. While Autopay is not required for loan approval, it is mandatory to receive the associated interest rate reduction. All transactions are protected by the Nexus Shield Engine V2.4.
            </p>
            <div className="pt-6 border-t border-gray-200">
               <p className="text-[12px] opacity-60 italic">
                  Nexus Lending is a financial technology company, not a bank. Banking services are provided by our network of partner banks. All loans are subject to final credit approval and identity verification via our AI-driven security engine.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}