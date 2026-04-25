import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';

export default function CookieSettings() {
    const [effectiveDate, setEffectiveDate] = useState("");
    const [isSaved, setIsSaved] = useState(false);
    const navigate = useNavigate();
    
    // State for cookie toggles
    const [preferences, setPreferences] = useState({
        essential: true, 
        analytics: true,
        marketing: false
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 800, once: true });

        const date = new Date();
        date.setDate(date.getDate() - 9);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setEffectiveDate(date.toLocaleDateString('en-US', options));
    }, []);

    const toggleCookie = (type) => {
        if (type === 'essential') return; 
        setPreferences(prev => ({ ...prev, [type]: !prev[type] }));
    };

    const handleSave = () => {
        // Logic to save to localStorage or backend would go here
        console.log("Saving Preferences:", preferences);
        setIsSaved(true);
        setTimeout(() => {
            setIsSaved(false);
            navigate('/'); // Redirect after saving
        }, 2000);
    };

    const handleAcceptAll = () => {
        const allOn = { essential: true, analytics: true, marketing: true };
        setPreferences(allOn);
        console.log("Accepted All Cookies");
        setIsSaved(true);
        setTimeout(() => {
            setIsSaved(false);
            navigate('/');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B1E3D]">
            {/* Header - Adjusted padding for mobile */}
            <header className="bg-[#0B1E3D] py-12 md:py-16 px-6 text-center">
                <Link to="/" className="inline-flex items-center gap-3 mb-6 md:mb-8 hover:scale-105 transition-transform">
                    <img src={logo} alt="Nexus" className="w-8 h-8 md:w-10 md:h-10 shadow-lg shadow-cyan-500/20 rounded-full" />
                    <span className="text-white font-black text-lg md:text-xl tracking-tight uppercase">Nexus Security</span>
                </Link>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">Cookie Preferences</h1>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8 md:py-12">
                {/* Dynamic Date Badge */}
                <div className="flex justify-start mb-8 md:mb-10" data-aos="fade-right">
                    <div className="inline-flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-sm">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                        <p className="text-[#0B1E3D] font-black text-[9px] md:text-[10px] uppercase tracking-widest">
                            Policy Ref: <span className="text-cyan-600">{effectiveDate}</span>
                        </p>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6" data-aos="fade-up">
                    <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-6 md:mb-10">
                        We use cookies to enhance your experience within the Nexus ecosystem. Some are essential for the portal to function, while others help us improve our AI tools.
                    </p>

                    {/* Cookie Cards - Responsive Flex/Grid */}
                    {[
                        { 
                            id: 'essential', 
                            title: 'Strictly Necessary', 
                            desc: 'Used for BotShield protection and secure session management. Required for security.', 
                            required: true 
                        },
                        { 
                            id: 'analytics', 
                            title: 'Performance & Analytics', 
                            desc: 'Helps us monitor AI response times and page stability. Data is fully anonymized.' 
                        },
                        { 
                            id: 'marketing', 
                            title: 'Personalization', 
                            desc: 'Allows us to show you relevant financial updates based on your interests.' 
                        }
                    ].map((item) => (
                        <div key={item.id} className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-lg shadow-cyan-900/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="max-w-xl">
                                <h3 className="font-black text-base md:text-lg mb-1 flex items-center gap-2">
                                    {item.title}
                                    {item.required && <span className="text-[9px] bg-cyan-100 text-cyan-600 px-2 py-0.5 rounded-full uppercase">Required</span>}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                            
                            {/* Toggle Switch */}
                            <button 
                                onClick={() => toggleCookie(item.id)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${item.required ? 'opacity-50 cursor-not-allowed bg-cyan-500' : (preferences[item.id] ? 'bg-cyan-500' : 'bg-gray-300')}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${preferences[item.id] ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Success Message */}
                {isSaved && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-xl text-center font-bold text-sm animate-bounce">
                        Preferences updated successfully!
                    </div>
                )}

                {/* Action Buttons - Full width on mobile */}
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={handleSave}
                        className="w-full sm:w-auto px-10 py-4 bg-[#0B1E3D] text-white rounded-2xl font-black shadow-xl shadow-blue-900/20 hover:bg-cyan-600 hover:-translate-y-1 transition-all duration-300 uppercase text-xs tracking-widest"
                    >
                        Save Preferences
                    </button>
                    <button 
                        onClick={handleAcceptAll}
                        className="w-full sm:w-auto px-10 py-4 border-2 border-gray-200 text-[#0B1E3D] rounded-2xl font-black hover:bg-white hover:border-cyan-200 transition-all duration-300 uppercase text-xs tracking-widest"
                    >
                        Accept All
                    </button>
                </div>
            </main>

            {/* Footer - Optimized spacing */}
          <footer className="bg-[#0097B2] pt-8 pb-12">
  <div className="flex flex-wrap items-center justify-center gap-5 text-white text-sm font-bold px-6">
    <Link to="/help" className="hover:opacity-80 transition-opacity">Help</Link>
    <span className="text-white/30">•</span>
    <Link to="/terms" className="hover:opacity-80 transition-opacity">Terms of Use</Link>
    <span className="text-white/30">•</span>
    <Link to="/privacy" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
  </div>
</footer>
        </div>
    );
}