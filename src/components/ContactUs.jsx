import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Auto-message logic: Opens user's email with pre-filled text
        const mailtoLink = `mailto:leonoelzuze@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hello Nexus Team,\n\n${formData.message}\n\nBest regards,\n${formData.name}`)}`;

        setTimeout(() => {
            setIsLoading(false);
            setSubmitted(true);
            window.location.href = mailtoLink;
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between font-sans text-gray-900">
            <div className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                    <Link to="/" className="inline-flex items-center gap-3 mb-6 transition-transform active:scale-95">
                        <img src={logo} alt="Nexus Logo" className="w-12 h-12 object-contain" />
                        <div className="flex flex-col leading-tight text-left">
                            <span className="text-[#0B1E3D] font-bold text-2xl tracking-tight uppercase">Nexus</span>
                            <span className="text-cyan-500 text-xs font-bold tracking-[0.2em] uppercase">Lending</span>
                        </div>
                    </Link>
                    <h2 className="text-3xl font-extrabold text-[#0B1E3D]">
                        {submitted ? "Nexus Team Notified" : "Contact Our Team"}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 px-4">
                        {submitted 
                            ? "Your mail client has been opened. We'll reply to leonoelzuze@gmail.com shortly." 
                            : "Have questions? Reach out via the form or call our support line."}
                    </p>
                </div>

                <div className="mt-8 mx-auto w-full max-w-[500px]">
                    <div className="bg-white py-8 px-6 shadow-xl shadow-gray-200/50 rounded-[2.5rem] border border-gray-100 sm:px-10 mx-4">
                        {submitted ? (
                            <div className="text-center py-6">
                                <div className="w-20 h-20 bg-cyan-50 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-[#0B1E3D] font-bold text-xl mb-2">Message Drafted!</h3>
                                <p className="text-gray-500 text-sm mb-6">If your email app didn't open, please send directly to leonoelzuze@gmail.com</p>
                                <button 
                                    onClick={() => navigate('/')}
                                    className="w-full py-4 rounded-xl bg-[#0B1E3D] text-white font-bold hover:bg-cyan-600 transition-all shadow-lg"
                                >
                                    Back to Home
                                </button>
                            </div>
                        ) : (
                            <>
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-bold text-[#0B1E3D] ml-1 mb-2">Full Name</label>
                                            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="block w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[#0B1E3D] ml-1 mb-2">Email Address</label>
                                            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="name@email.com" className="block w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-cyan-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0B1E3D] ml-1 mb-2">Subject</label>
                                        <select name="subject" value={formData.subject} onChange={handleChange} className="block w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-cyan-500">
                                            <option>General Inquiry</option>
                                            <option>Loan Support</option>
                                            <option>Technical Issue</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#0B1E3D] ml-1 mb-2">Message</label>
                                        <textarea name="message" required rows="3" value={formData.message} onChange={handleChange} placeholder="How can we help?" className="block w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:ring-2 focus:ring-cyan-500 resize-none"></textarea>
                                    </div>

                                    <button type="submit" disabled={isLoading} className={`w-full py-4 rounded-xl shadow-lg text-sm font-bold text-white transition-all active:scale-95 flex justify-center items-center gap-2 ${isLoading ? 'bg-[#0B1E3D]' : 'bg-cyan-500 hover:bg-[#0B1E3D]'}`}>
                                        {isLoading ? 'Processing...' : 'Send Message'}
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Quick Connect</p>
                                    <a href="tel:+263786295196" className="text-[#0B1E3D] font-black text-lg hover:text-cyan-600 transition-colors">
                                        +263 78629 5196
                                    </a>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 text-gray-400">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Bank-grade security</p>
                    </div>
                </div>
            </div>

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