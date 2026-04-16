import React, { useState } from 'react';

const BotShield = ({ children, onVerified }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = () => {
    setLoading(true);
    // Simulate the Nexus Security scan
    setTimeout(() => {
      setLoading(false);
      setIsVerified(true);
      if (onVerified) onVerified();
    }, 1500);
  };

  if (isVerified && children) return children;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1E3D] flex items-center justify-center p-6 text-white font-sans overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        {/* Shield Icon with Animated Pulse */}
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-cyan-500/5 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative">
          <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.952 11.952 0 00-1.02 9.492c1.783 5.053 6.07 8.904 11.413 9.546a11.952 11.952 0 0011.412-9.546 11.952 11.952 0 00-1.02-9.492z" />
          </svg>
          {loading && (
             <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping" />
          )}
        </div>
        
        <h1 className="text-3xl font-black mb-3 tracking-tight">Security Check</h1>
        <p className="text-gray-400 mb-10 text-[11px] uppercase tracking-[0.3em] font-bold">Verifying your connection to Nexus</p>

        {/* The Glassmorphism Card */}
        <div className="w-full max-w-[360px] mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-transparent shadow-2xl">
          <div className="bg-[#1c2a3f]/80 backdrop-blur-xl rounded-[calc(1.5rem-1px)] p-6 sm:p-8">
            {loading ? (
              <div className="flex flex-col items-center gap-5 py-4">
                <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[10px] font-black text-cyan-500 tracking-[0.2em] uppercase">Analyzing Environment...</p>
              </div>
            ) : (
              <button 
                onClick={handleVerify}
                className="w-full flex items-center justify-between px-6 py-5 bg-white/5 hover:bg-white/10 rounded-2xl transition-all group border border-white/5 hover:border-cyan-500/40 active:scale-[0.98]"
              >
                <div className="flex items-center gap-5">
                  <div className="w-6 h-6 border-2 border-gray-500 rounded-lg group-hover:border-cyan-500 transition-colors bg-transparent flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="font-bold text-lg text-white tracking-tight">I am a human</span>
                </div>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest group-hover:text-cyan-500 transition-colors">Verify</span>
              </button>
            )}
          </div>
        </div>

        <p className="mt-16 text-[9px] text-gray-500 uppercase font-black tracking-[0.4em] opacity-60">
          Nexus Shield Engine v2.4
        </p>
      </div>
    </div>
  );
};

export default BotShield;