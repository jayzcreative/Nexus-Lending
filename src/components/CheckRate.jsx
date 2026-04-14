import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const loanCategories = {
  "Personal Loans": ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"],
  "Car Loans": ["New Car Finance", "Used Car Loans", "Refinance", "Lease Buyout", "Auto Equity"],
  "Health & Insurance": ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"],
  "Mortgage": ["Home Purchase", "Refinance", "Cash-out Refi", "Jumbo Loans", "FHA Loans"],
  "Student Loans": ["Undergraduate", "Graduate", "Parent Plus", "Refinance", "MBA Loans"]
};

const loanRanges = {
  "Personal Loans": { min: 50, max: 5000 },
  "Car Loans": { min: 2000, max: 40000 },
  "Health & Insurance": { min: 100, max: 15000 },
  "Mortgage": { min: 10000, max: 250000 },
  "Student Loans": { min: 100, max: 10000 },
  "default": { min: 1, max: 1000000 }
};

const zimProvinces = ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"];
const employmentStatuses = ["Full-Time Employee", "Part-Time Employee", "Self-Employed / Freelancer", "Business Owner", "Student", "Pensioner / Retired", "Unemployed"];
const loanTerms = [12, 24, 36, 48, 60];

export default function CheckRate() {
  const location = useLocation();
  const navigate = useNavigate();

  // Capture pre-filled data if user came from a specific card
  const preSelected = location.state?.preSelected || "";
  const minFromCard = location.state?.minAmount || "";

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [estPayment, setEstPayment] = useState(0);
  const [interestPortion, setInterestPortion] = useState(0);
  
  const [formData, setFormData] = useState({
    amount: minFromCard || '', 
    term: 36,
    purpose: preSelected || '',
    subType: '',
    fullName: '',
    age: '',
    citizenship: 'Zimbabwe',
    address: '',
    city: '',
    province: '',
    zipCode: '000000',
    employment: '',
    income: '',
    phone: '',
    email: ''
  });

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const range = loanRanges[category] || loanRanges.default;
    setFormData({
      ...formData,
      purpose: category,
      subType: '',
      amount: range.min 
    });
  };

  useEffect(() => {
    const P = parseFloat(formData.amount);
    const annualRate = 0.15;
    const i = annualRate / 12; 
    const n = formData.term;
    
    if (P > 0) {
      const x = Math.pow(1 + i, n);
      const monthly = (P * i * x) / (x - 1);
      setEstPayment(monthly.toFixed(2));
      setInterestPortion((P * i).toFixed(2));
    } else {
      setEstPayment("0.00");
      setInterestPortion("0.00");
    }
  }, [formData.amount, formData.term]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFormData({ ...formData, [name]: value.replace(/[0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/|]/g, '') });
    } else if (name === "phone" || name === "zipCode" || name === "amount" || name === "income") {
      setFormData({ ...formData, [name]: value.replace(/[^0-9+]/g, '') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      const range = loanRanges[formData.purpose] || loanRanges.default;
      if (!formData.purpose) newErrors.purpose = "Select a category";
      if (!formData.subType) newErrors.subType = "Select a specific loan type";
      
      // Strict range validation
      if (!formData.amount || Number(formData.amount) < range.min) {
        newErrors.amount = `Minimum allowed for ${formData.purpose} is $${range.min}`;
      } else if (Number(formData.amount) > range.max) {
        newErrors.amount = `Maximum allowed for ${formData.purpose} is $${range.max}`;
      }
    }
    if (step === 2) {
      if (formData.fullName.trim().split(" ").length < 2) newErrors.fullName = "Legal Name Required";
      if (!formData.age || formData.age < 18) newErrors.age = "Must be 18+";
    }
    if (step === 4) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.province) newErrors.province = "Province is required";
    }
    if (step === 5) {
      if (!formData.employment) newErrors.employment = "Select status";
      if (formData.employment !== "Unemployed" && (!formData.income || formData.income <= 0)) newErrors.income = "Enter income";
    }
    if (step === 6) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid Email";
      if (formData.phone.length < 8) newErrors.phone = "Invalid Phone";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => { if (validateStep()) setStep((prev) => prev + 1); };
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsProcessing(true);
      setTimeout(() => { setIsProcessing(false); navigate('/login'); }, 3000);
    }
  };

  const ErrorMsg = ({ name }) => (
    errors[name] ? <p className="text-red-500 text-[9px] font-black mt-1 uppercase italic">{errors[name]}</p> : null
  );

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-[#0B1E3D] flex items-center justify-center text-white p-6">
        <div className="text-center">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-6" />
          <h2 className="text-2xl font-black mb-2 tracking-widest">NEXUS AI</h2>
          <p className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.3em] animate-pulse">Running Credit Underwriting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12 px-4 font-sans antialiased">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 px-4 flex justify-between items-end">
          <div>
            <h1 className="text-xs font-black text-cyan-600 uppercase tracking-widest mb-1">Nexus Rate Check</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Secure AI-Powered Lending</p>
          </div>
          <span className="text-[10px] font-black text-gray-300 uppercase">Step {step}/6</span>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-gray-100">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="bg-cyan-900 rounded-3xl p-6 text-white mb-6 shadow-xl">
                    <label className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Estimated Monthly Payment</label>
                    <div className="text-4xl font-black mt-1">${estPayment}<span className="text-sm font-medium text-cyan-300 ml-1">/mo</span></div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                        <span className="text-[9px] font-bold text-cyan-200 uppercase tracking-tight">Includes ${interestPortion} interest (Month 1)</span>
                        <span className="text-[9px] font-black text-white bg-cyan-800 px-2 py-1 rounded">15% APR</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Loan Amount ($)</label>
                        <input 
                            type="text" 
                            name="amount" 
                            value={formData.amount} 
                            onChange={handleInputChange} 
                            placeholder={formData.purpose ? `Min: $${loanRanges[formData.purpose].min}` : "Select Category First"}
                            className="w-full bg-transparent text-2xl font-black text-[#0B1E3D] outline-none placeholder:text-gray-200 placeholder:text-sm" 
                        />
                        <ErrorMsg name="amount" />
                    </div>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Term (Months)</label>
                        <select name="term" value={formData.term} onChange={(e) => setFormData({...formData, term: parseInt(e.target.value)})} className="w-full bg-transparent text-xl font-black text-[#0B1E3D] outline-none">
                            {loanTerms.map(t => <option key={t} value={t}>{t} Months</option>)}
                        </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <select 
                        name="purpose" 
                        value={formData.purpose} 
                        onChange={handleCategoryChange} 
                        disabled={!!preSelected}
                        className={`w-full px-6 py-4 rounded-2xl font-bold border-2 ${preSelected ? 'bg-gray-100 text-gray-400 border-transparent cursor-not-allowed' : 'bg-gray-50 border-transparent focus:ring-2 focus:ring-cyan-500'}`}
                    >
                      <option value="">Choose Loan Category</option>
                      {Object.keys(loanCategories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                    <ErrorMsg name="purpose" />

                    {formData.purpose && (
                      <select name="subType" value={formData.subType} onChange={handleInputChange} className="w-full px-6 py-4 bg-cyan-50 border-2 border-cyan-100 rounded-2xl font-bold text-cyan-900">
                        <option value="">Choose Specific {formData.purpose} Type</option>
                        {loanCategories[formData.purpose].map(sub => <option key={sub} value={sub}>{sub}</option>)}
                      </select>
                    )}
                    <ErrorMsg name="subType" />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-2xl font-black text-[#0B1E3D]">Identity Check</h2>
                  <input name="fullName" placeholder="Legal Name (First & Last)" value={formData.fullName} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500" />
                  <ErrorMsg name="fullName" />
                  <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500" />
                  <ErrorMsg name="age" />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center">
                  <h2 className="text-2xl font-black text-[#0B1E3D]">Citizenship</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {['Zimbabwe', 'Other'].map(status => (
                      <button key={status} type="button" onClick={() => setFormData({...formData, citizenship: status})} className={`py-6 rounded-2xl font-black border-2 transition-all ${formData.citizenship === status ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200'}`}>
                        {status === 'Zimbabwe' ? '🇿🇼 Resident of Zimbabwe' : 'International Resident'}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <h2 className="text-2xl font-black text-[#0B1E3D]">Where do you live?</h2>
                  <input name="address" placeholder="Residential Street Address" value={formData.address} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500" />
                  <ErrorMsg name="address" />
                  <div className="grid grid-cols-2 gap-4">
                    <input name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500" />
                    {formData.citizenship === 'Zimbabwe' ? (
                      <select name="province" value={formData.province} onChange={handleInputChange} className="px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500">
                        <option value="">Province</option>
                        {zimProvinces.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    ) : (
                      <input name="province" placeholder="State/Province" value={formData.province} onChange={handleInputChange} className="px-6 py-4 bg-gray-50 rounded-2xl font-bold" />
                    )}
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-2xl font-black text-[#0B1E3D]">Financial Status</h2>
                  <select name="employment" value={formData.employment} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500">
                    <option value="">Employment Type</option>
                    {employmentStatuses.map(status => <option key={status} value={status}>{status}</option>)}
                  </select>
                  <ErrorMsg name="employment" />
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-gray-400">$</span>
                    <input type="text" name="income" placeholder="Monthly Net Income" value={formData.income} onChange={handleInputChange} disabled={formData.employment === "Unemployed"} className={`w-full pl-10 pr-6 py-4 bg-gray-50 rounded-2xl font-bold ${formData.employment === "Unemployed" ? 'opacity-30' : ''}`} />
                  </div>
                  <ErrorMsg name="income" />
                </motion.div>
              )}

              {step === 6 && (
                <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h2 className="text-2xl font-black text-[#0B1E3D]">Final Details</h2>
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500" />
                  <ErrorMsg name="email" />
                  <input type="tel" name="phone" placeholder="Phone Number (e.g. +263...)" value={formData.phone} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500" />
                  <ErrorMsg name="phone" />
                  <div className="p-4 bg-cyan-50 rounded-2xl text-[10px] font-bold text-cyan-800 uppercase tracking-tight leading-relaxed border border-cyan-100">
                    🔒 Secure Encryption: Nexus AI uses bank-grade 256-bit encryption. Your data is protected.
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            <div className="flex gap-4 mt-12">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="flex-1 py-5 bg-gray-100 text-gray-500 font-black rounded-2xl uppercase text-[10px] tracking-widest">Back</button>
              )}
              <button type="button" onClick={step < 6 ? nextStep : handleSubmit} className={`flex-[2] py-5 font-black rounded-2xl uppercase text-[10px] tracking-widest transition-all ${step === 6 ? 'bg-cyan-500 text-white shadow-xl shadow-cyan-200' : 'bg-[#0B1E3D] text-white'}`}>
                {step < 6 ? 'Continue' : 'Finalize Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}