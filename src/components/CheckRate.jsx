import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BotShield from './BotShield'; 

const loanCategories = {
  "Personal Loans": ["Debt Consolidation", "Wedding Loans", "Home Improvement", "Vacation Loans", "Emergency Loans"],
  "Car Loans": ["New Car Finance", "Used Car Loans", "Auto Refinance", "Lease Buyout", "Auto Equity"],
  "Health & Insurance": ["Medical Bills", "Dental Loans", "Life Insurance", "Health Coverage", "Pet Insurance"],
  "Mortgage": ["Home Purchase", "Refinance", "Cash-out Refi", "Jumbo Loans", "FHA Loans"],
  "Student Loans": ["Undergraduate", "Graduate", "Parent Plus", "Refinance", "MBA Loans"]
};

const loanRates = {
  "Debt Consolidation": 0.06, "Wedding Loans": 0.12, "Home Improvement": 0.07, "Vacation Loans": 0.14, "Emergency Loans": 0.18,
  "New Car Finance": 0.0349, "Used Car Loans": 0.0425, "Auto Refinance": 0.0315, "Lease Buyout": 0.0399, "Auto Equity": 0.0450,
  "Medical Bills": 0.0599, "Dental Loans": 0.0650, "Life Insurance": 0.0720, "Health Coverage": 0.0550, "Pet Insurance": 0.0890,
  "Home Purchase": 0.0625, "Refinance": 0.0575, "Cash-out Refi": 0.0680, "Jumbo Loans": 0.0710, "FHA Loans": 0.0550,
  "Undergraduate": 0.0499, "Graduate": 0.0650, "Parent Plus": 0.0750, "MBA Loans": 0.0680,
  "default": 0.15
};

const loanRanges = {
  "Personal Loans": { min: 50, max: 5000 },
  "Car Loans": { min: 2000, max: 100000 },
  "Health & Insurance": { min: 100, max: 15000 },
  "Mortgage": { min: 10000, max: 500000 },
  "Student Loans": { min: 100, max: 50000 },
  "default": { min: 1, max: 1000000 }
};

const zimProvinces = ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"];
const employmentStatuses = ["Full-Time Employee", "Part-Time Employee", "Self-Employed / Freelancer", "Business Owner", "Student", "Pensioner / Retired", "Unemployed"];
const loanTerms = [12, 24, 36, 48, 60, 72, 84];

export default function CheckRate() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLocked = !!location.state?.purpose;
  const preSelectedPurpose = location.state?.purpose || "";
  const preSelectedSubType = location.state?.subType || "";
  
  const [step, setStep] = useState(0); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [estPayment, setEstPayment] = useState(0);
  const [currentAPR, setCurrentAPR] = useState(loanRates.default);

  const [formData, setFormData] = useState({
    amount: location.state?.amount || loanRanges[preSelectedPurpose]?.min || 5000,
    term: 60,
    purpose: preSelectedPurpose,
    subType: preSelectedSubType,
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

  useEffect(() => {
    if (preSelectedPurpose || preSelectedSubType) {
      setFormData(prev => ({
        ...prev,
        purpose: preSelectedPurpose || prev.purpose,
        subType: preSelectedSubType || prev.subType,
        amount: location.state?.amount || prev.amount
      }));
    }
  }, [preSelectedPurpose, preSelectedSubType, location.state?.amount]);

  const handleVerify = () => setStep(1);

  const handleCategoryChange = (e) => {
    if (isLocked) return; 
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
    const rate = loanRates[formData.subType] || loanRates.default;
    setCurrentAPR(rate);
    const i = rate / 12;
    const n = formData.term;
    if (P > 0 && n > 0) {
      const x = Math.pow(1 + i, n);
      const monthly = (x - 1) === 0 ? (P / n) : (P * i * x) / (x - 1);
      setEstPayment(isFinite(monthly) ? monthly.toFixed(2) : "0.00");
    } else {
      setEstPayment("0.00");
    }
  }, [formData.amount, formData.term, formData.subType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "fullName") {
      updatedValue = value.replace(/[0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/|]/g, '');
    } else if (["phone", "zipCode", "amount", "income"].includes(name)) {
      updatedValue = value.replace(/[^0-9+]/g, '');
    }

    if (name === "employment") {
      setFormData(prev => ({
        ...prev,
        [name]: updatedValue,
        income: updatedValue === "Unemployed" ? "0" : prev.income
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: updatedValue }));
    }

    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      const range = loanRanges[formData.purpose] || loanRanges.default;
      if (!formData.purpose) newErrors.purpose = "Select a category";
      if (!formData.subType) newErrors.subType = "Select a specific loan type";
      if (!formData.amount || Number(formData.amount) < range.min) newErrors.amount = `Min $${range.min}`;
      else if (Number(formData.amount) > range.max) newErrors.amount = `Max $${range.max}`;
    }
    if (step === 2) {
      if (formData.fullName.trim().split(" ").length < 2) newErrors.fullName = "Legal Name Required";
      if (!formData.age || formData.age < 18) newErrors.age = "Must be 18+";
    }
    if (step === 4) {
      if (!formData.address.trim()) newErrors.address = "Required";
      if (!formData.province) newErrors.province = "Required";
    }
    if (step === 5) {
      if (!formData.employment) newErrors.employment = "Select status";
      if (formData.employment !== "Unemployed" && (!formData.income || Number(formData.income) <= 0)) {
        newErrors.income = "Enter valid income";
      }
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

  if (step === 0) return <BotShield onVerified={handleVerify} />;

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-gray-50 overflow-x-hidden">
      <div className="flex-grow pt-8 sm:pt-16">
        <div className="max-w-2xl mx-auto w-full px-4 sm:px-5">
          <AnimatePresence mode="wait">
            <motion.div key="form-container" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="pb-12">
              <div className="mb-6 px-2 flex justify-between items-end">
                <div>
                  <h1 className="text-[10px] sm:text-xs font-black text-cyan-600 uppercase tracking-widest mb-1">Nexus Rate Check</h1>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase">Secure AI Lending</p>
                </div>
                <span className="text-[10px] font-black text-gray-300 uppercase">Step {step}/6</span>
              </div>

              <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-5 sm:p-8 lg:p-12 border border-gray-100">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 sm:space-y-8">
                        <div className="bg-[#0B4D5D] rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 text-white shadow-xl">
                          <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-cyan-400">Monthly Payment</label>
                          <div className="text-3xl sm:text-5xl font-black mt-2 tracking-tight break-words">
                            ${estPayment}<span className="text-lg sm:text-xl font-medium text-cyan-300 ml-1 sm:ml-2">/mo</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                          <div className="p-4 sm:p-6 bg-gray-50 rounded-2xl sm:rounded-3xl border border-gray-100 group focus-within:ring-2 focus-within:ring-cyan-500 transition-all">
                              <div className="flex justify-between items-center mb-2 sm:mb-3">
                                <label className="block text-[10px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">Amount ($)</label>
                                <span className="hidden xs:block text-[8px] font-bold text-cyan-600 uppercase tracking-widest animate-pulse">Adjust with - / +</span>
                              </div>
                              {/* Changed gap-4 to gap-2 for small screens */}
                              <div className="flex items-center gap-2 sm:gap-4">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const range = loanRanges[formData.purpose] || loanRanges.default;
                                    const newVal = Math.max(range.min, Number(formData.amount) - 100);
                                    setFormData({ ...formData, amount: newVal });
                                  }}
                                  className="w-10 h-10 flex-shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl font-black text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
                                >
                                  −
                                </button>
                                {/* Added min-w-0 to prevent flex input from pushing out */}
                                <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} className="flex-grow min-w-0 bg-transparent text-2xl sm:text-4xl font-black text-[#0B1E3D] outline-none text-center" />
                                <button
                                  type="button"
                                  onClick={() => {
                                    const range = loanRanges[formData.purpose] || loanRanges.default;
                                    const newVal = Math.min(range.max, Number(formData.amount) + 100);
                                    setFormData({ ...formData, amount: newVal });
                                  }}
                                  className="w-10 h-10 flex-shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xl font-black text-gray-400 hover:bg-cyan-50 hover:text-cyan-500 transition-colors shadow-sm"
                                >
                                  +
                                </button>
                              </div>
                              <ErrorMsg name="amount" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <label className="block text-[9px] sm:text-[10px] font-black text-gray-400 uppercase mb-2 tracking-widest">Term</label>
                                <select name="term" value={formData.term} onChange={(e) => setFormData({...formData, term: parseInt(e.target.value)})} className="w-full bg-transparent text-lg sm:text-xl font-black text-[#0B1E3D] outline-none">
                                    {loanTerms.map(t => <option key={t} value={t}>{t} Months</option>)}
                                </select>
                            </div>
                            <div className="p-4 sm:p-5 bg-cyan-50 rounded-2xl border border-cyan-100 flex items-center justify-between">
                                <span className="text-[9px] sm:text-[10px] font-black text-cyan-800 uppercase tracking-widest">AI APR</span>
                                <span className="text-lg sm:text-xl font-black text-cyan-600">{(currentAPR * 100).toFixed(2)}%</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <select 
                            name="purpose" 
                            value={formData.purpose} 
                            onChange={handleCategoryChange} 
                            disabled={isLocked}
                            className={`w-full px-5 sm:px-8 py-4 sm:py-5 bg-gray-50 rounded-2xl font-bold text-sm sm:text-base border-2 transition-all ${isLocked ? 'opacity-70 cursor-not-allowed border-gray-200' : 'border-transparent focus:ring-2 focus:ring-cyan-500'}`}
                          >
                            <option value="">Choose Loan Category</option>
                            {Object.keys(loanCategories).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                          </select>
                          <ErrorMsg name="purpose" />

                          {formData.purpose && (
                            <select 
                              name="subType" 
                              value={formData.subType} 
                              onChange={handleInputChange} 
                              disabled={isLocked && !!preSelectedSubType}
                              className={`w-full px-5 sm:px-8 py-4 sm:py-5 bg-cyan-50 border-2 rounded-2xl font-bold text-cyan-900 text-sm sm:text-base transition-all ${isLocked && !!preSelectedSubType ? 'opacity-70 cursor-not-allowed border-cyan-200' : 'border-cyan-100'}`}
                            >
                              <option value="">Specific Type</option>
                              {loanCategories[formData.purpose].map(sub => <option key={sub} value={sub}>{sub}</option>)}
                            </select>
                          )}
                          <ErrorMsg name="subType" />
                          {isLocked && <p className="text-[8px] text-cyan-600 font-bold uppercase tracking-widest text-center">Field locked based on your selection</p>}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0B1E3D]">Identity Check</h2>
                        <input name="fullName" placeholder="Legal Name" value={formData.fullName} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm" />
                        <ErrorMsg name="fullName" />
                        <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm" />
                        <ErrorMsg name="age" />
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0B1E3D] text-center">Citizenship</h2>
                        <div className="grid grid-cols-1 gap-4">
                          {['Zimbabwe', 'Other'].map(status => (
                            <button key={status} type="button" onClick={() => setFormData({...formData, citizenship: status})} className={`py-5 rounded-2xl font-black border-2 transition-all text-sm ${formData.citizenship === status ? 'border-cyan-500 bg-cyan-50 text-cyan-700' : 'border-gray-100 bg-gray-50 text-gray-400'}`}>
                              {status === 'Zimbabwe' ? '🇿🇼 Resident of Zimbabwe' : 'International Resident'}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0B1E3D]">Address</h2>
                        <input name="address" placeholder="Residential Address" value={formData.address} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm" />
                        <ErrorMsg name="address" />
                        <div className="grid grid-cols-2 gap-4">
                          <input name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm w-full" />
                          <select name="province" value={formData.province} onChange={handleInputChange} className="px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm w-full">
                            <option value="">Province</option>
                            {zimProvinces.map(p => <option key={p} value={p}>{p}</option>)}
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {step === 5 && (
                      <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0B1E3D]">Financial Status</h2>
                        <select name="employment" value={formData.employment} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm">
                          <option value="">Employment Type</option>
                          {employmentStatuses.map(status => <option key={status} value={status}>{status}</option>)}
                        </select>
                        <ErrorMsg name="employment" />
                        
                        <div className={`relative transition-all duration-300 ${formData.employment === "Unemployed" ? 'opacity-40 grayscale' : 'opacity-100'}`}>
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-gray-400">$</span>
                          <input 
                            type="text" 
                            name="income" 
                            placeholder="Monthly Net Income" 
                            value={formData.income} 
                            onChange={handleInputChange} 
                            disabled={formData.employment === "Unemployed"} 
                            className="w-full pl-10 pr-6 py-4 bg-gray-50 rounded-2xl font-bold text-sm border-2 border-transparent focus:ring-2 focus:ring-cyan-500" 
                          />
                        </div>
                        {formData.employment === "Unemployed" && (
                          <p className="text-[9px] text-cyan-600 font-bold uppercase tracking-widest animate-pulse">Income details waived for unemployed status</p>
                        )}
                        <ErrorMsg name="income" />
                      </motion.div>
                    )}

                    {step === 6 && (
                      <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                        <h2 className="text-xl sm:text-2xl font-black text-[#0B1E3D]">Final Details</h2>
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm" />
                        <ErrorMsg name="email" />
                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-6 py-4 bg-gray-50 rounded-2xl font-bold border-2 border-transparent focus:ring-2 focus:ring-cyan-500 text-sm" />
                        <ErrorMsg name="phone" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-12">
                    {step > 1 && (
                      <button type="button" onClick={prevStep} className="w-full sm:flex-1 py-4 bg-gray-100 text-gray-500 font-black rounded-2xl uppercase text-[10px] tracking-widest order-2 sm:order-1">Back</button>
                    )}
                    <button type="button" onClick={step < 6 ? nextStep : handleSubmit} className={`w-full sm:flex-[2] py-4 font-black rounded-2xl uppercase text-[10px] tracking-widest transition-all order-1 sm:order-2 ${step === 6 ? 'bg-cyan-500 text-white' : 'bg-[#0B1E3D] text-white'}`}>
                      {step < 6 ? 'Continue' : 'Finalize Application'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <footer className="bg-[#0097B2] pt-8 pb-12">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-white text-sm font-bold px-6">
          <Link to="/help" className="hover:opacity-80 transition-opacity text-xs sm:text-sm">Help</Link>
          <span className="text-white/30">•</span>
          <Link to="/terms" className="hover:opacity-80 transition-opacity text-xs sm:text-sm">Terms of Use</Link>
          <span className="text-white/30">•</span>
          <Link to="/privacy" className="hover:opacity-80 transition-opacity text-xs sm:text-sm">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}