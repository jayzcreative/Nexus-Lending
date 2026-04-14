import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BotShield = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    setLoading(true);
    // Simulate a security check
    setTimeout(() => {
      setLoading(false);
      setIsVerified(true);
    }, 1500);
  };

  if (isVerified) return children;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1E3D] flex items-center justify-center p-6 text-white font-sans">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            {/* Shield Icon */}
            <svg className="w-10 h-10 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.952 11.952 0 00-1.02 9.492c1.783 5.053 6.07 8.904 11.413 9.546a11.952 11.952 0 0011.412-9.546 11.952 11.952 0 00-1.02-9.492z" />
            </svg>
        </div>
        
        <h1 className="text-2xl font-black mb-2 tracking-tight">Security Check</h1>
        <p className="text-gray-400 mb-8 text-sm uppercase tracking-widest font-bold">Verifying your connection to Nexus</p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
            {loading ? (
                <div className="flex flex-col items-center gap-4 py-4">
                    <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-xs font-bold text-cyan-500 tracking-tighter uppercase">Analyzing Environment...</p>
                </div>
            ) : (
                <button 
                    onClick={handleVerify}
                    className="w-full flex items-center justify-between px-6 py-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-white/20 rounded group-hover:border-cyan-500 transition-colors"></div>
                        <span className="font-bold text-sm">I am a human</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-black uppercase">Verify</span>
                </button>
            )}
        </div>

        <p className="mt-8 text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">
            Protected by Nexus Shield Engine v2.4
        </p>
      </div>
    </div>
  );
};

export default BotShield;