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
        
        {/* Section Header - Fades down from the top */}
        <div 
          className="mb-16 border-b-2 border-[#0B1E3D]/5 pb-10"
          data-aos="fade-down"
        >
          <h2 className="text-[#0B1E3D] text-3xl lg:text-4xl font-black uppercase tracking-widest">
            Detailed Loan <span className="text-cyan-500">Specifications</span>
          </h2>
          <p className="text-gray-400 mt-4 font-bold text-sm italic">
            Last Updated: April 9, 2026 ● All rates subject to change without prior notice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-[13px] leading-relaxed text-gray-500 font-medium text-justify">
          
          {/* 1. Mortgage Loan Terms - Slides from Left */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Mortgage & Home Equity
            </h3>
            <p>
              <sup>5</sup> 10-YEAR Payment Example: A loan amount of $400,000.00 with a 5.000% fixed rate and 75% LTV results in a monthly payment of $4,243.00. The Annual Percentage Rate (APR) is 5.514%, which includes all origination charges and processing fees. Rates are determined by the Loan-to-Value (LTV) ratio, credit history, and the specific property type in the Nexus portfolio. No prepayment penalties are applied to any 10, 15, 20, or 30-year fixed-rate residential liens.
            </p>
          </div>

          {/* 2. Student Loan Terms - Slides from Right */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Education & Student Financing
            </h3>
            <p>
              Nexus Student Loan rates reflect a 0.25% interest rate reduction for users enrolled in automatic recurring payments. Eligible borrowers include undergraduate and graduate students enrolled at least half-time in an accredited Nexus-partner institution. Loan amounts range from $1,000 up to the total cost of attendance minus other financial aid received. For MBA and Law programs, the maximum aggregate limit is capped at $250,000.00 per borrower.
            </p>
          </div>

          {/* 3. Auto/Car Loan Terms - Slides from Left */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Automotive & Vehicle Liens
            </h3>
            <p>
              New and used car loans are available with terms ranging from 24 to 84 months, depending on the vehicle's age and mileage. Interest rates are competitive and vary based on the borrower's credit profile and the specific loan-to-value ratio of the collateral. Nexus does not charge application or documentation fees for standard consumer auto financing. Vehicles must be for personal use and meet our internal safety and valuation criteria.
            </p>
          </div>

          {/* 4. Healthcare/Medical Loans - Slides from Right */}
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-[#0B1E3D] font-black text-base uppercase border-l-4 border-cyan-500 pl-4 mb-4">
              Healthcare & Wellness Funding
            </h3>
            <p>
              Medical loans through the Nexus Health platform cover elective procedures, dental work, and urgent veterinary expenses not covered by standard insurance. Terms are flexible, spanning 12 to 60 months, with fixed monthly installments designed to fit within a patient's monthly budget. Our healthcare partners offer instant point-of-sale approval to ensure treatments are never delayed by financing hurdles. There are zero penalties for early repayment of medical debt.
            </p>
          </div>

          {/* 5. Personal Loan Terms - Zooms in to highlight importance */}
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
              Fixed rates from **7.74% APR to 35.49% APR** reflect a 0.25% autopay interest rate discount and a 0.25% direct deposit discount for Nexus Plus members. Lowest rates are strictly reserved for the most creditworthy borrowers with a debt-to-income ratio below 35%. Your actual rate will be determined within the range of rates listed and will depend on the term you select and evaluation of your income and creditworthiness.
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Loan amounts range from **$5,000 to $100,000**. The APR is the cost of credit as a yearly rate and reflects both your interest rate and a one-time origination fee of 0%–7%. This fee is deducted from your loan proceeds at the time of funding. Autopay is not a requirement to receive a loan from Nexus, though it is encouraged for rate reduction benefits. You are not required to enroll in Nexus Plus to be eligible for loan approval.
            </p>
            <div className="pt-6 border-t border-gray-200">
               <p className="text-[12px] opacity-60 italic">
                  Nexus Lending (Nexus Loans) is a financial technology company, not a bank. Banking services are provided by our network of FDIC-insured partner banks. All loans are subject to final credit approval and verification of income and identity. 
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}