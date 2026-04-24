import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png';

// --- REAL KNOWLEDGE BASE (50+ ENTRIES) ---
const INITIAL_ARTICLES = [
    // SECURITY (20)
    { id: 1, category: "Security", title: "Lost or stolen device protocol", content: "Freeze your account immediately via the web dashboard. Contact our 24/7 emergency line to revoke hardware tokens.", tags: ["security", "lost", "stolen"] },
    { id: 2, category: "Security", title: "Enabling Biometric 2FA", content: "Navigate to Security Settings > Authentication to enable FaceID or Fingerprint verification for high-value transfers.", tags: ["security", "2fa", "biometric"] },
    { id: 3, category: "Security", title: "Phishing alert guidelines", content: "Nexus will never ask for your PIN via email. Report suspicious links to security@nexus.ai.", tags: ["security", "phishing", "fraud"] },
    { id: 4, category: "Security", title: "How to reset a forgotten PIN", content: "Go to Profile > Security > Reset PIN. You will need to complete a Face-Match verification step.", tags: ["security", "pin", "reset"] },
    { id: 5, category: "Security", title: "Recognizing authorized Nexus emails", content: "All official communications come from @nexus.ai. Check for the digital signature in the email header.", tags: ["security", "email", "verification"] },
    { id: 6, category: "Security", title: "What is the 'Nexus Lockdown' feature?", content: "Lockdown freezes all outgoing transactions for 24 hours while allowing incoming deposits.", tags: ["security", "lockdown", "protection"] },
    { id: 7, category: "Security", title: "Updating your recovery phone number", content: "You must provide your old number and a valid ID to update your primary contact info.", tags: ["security", "account", "recovery"] },
    { id: 8, category: "Security", title: "Managing trusted devices", content: "View and remove active sessions in Settings > Connected Devices to prevent unauthorized access.", tags: ["security", "devices", "sessions"] },
    { id: 9, category: "Security", title: "Cold storage for high-value assets", content: "Assets exceeding $50,000 are automatically moved to hardware-isolated cold wallets.", tags: ["security", "crypto", "cold-storage"] },
    { id: 10, category: "Security", title: "Suspicious activity notifications", content: "We alert you instantly via Push and SMS if a login occurs from a new IP address or country.", tags: ["security", "alerts", "login"] },
    { id: 11, category: "Security", title: "Multi-signature wallet setup", content: "Enable 'Joint-Approval' for business accounts requiring two directors to sign off on payments.", tags: ["security", "multi-sig", "business"] },
    { id: 12, category: "Security", title: "API Key safety practices", content: "Never hardcode keys. Use environment variables and restrict IP access via the developer portal.", tags: ["security", "api", "developer"] },
    { id: 13, category: "Security", title: "Data encryption standards", content: "We use AES-256 at rest and TLS 1.3 for all data in transit to ensure total privacy.", tags: ["security", "encryption", "data"] },
    { id: 14, category: "Security", title: "Reporting a bug or vulnerability", content: "Submit security flaws to our Bug Bounty program via hackerone.com/nexus.", tags: ["security", "bug", "bounty"] },
    { id: 15, category: "Security", title: "Physical hardware security keys", content: "Nexus supports YubiKey and Google Titan keys for the highest level of 2FA protection.", tags: ["security", "yubikey", "hardware"] },
    { id: 16, category: "Security", title: "Anti-Money Laundering (AML) checks", content: "Our AI monitors transactions in real-time to flag potential money laundering activity.", tags: ["security", "aml", "compliance"] },
    { id: 17, category: "Security", title: "What to do if your card is declined", content: "Check for a 'Security Freeze' in the app or verify if you have exceeded your daily limit.", tags: ["security", "card", "decline"] },
    { id: 18, category: "Security", title: "Identity theft protection", content: "We offer dark web monitoring for your linked email addresses as part of Nexus Pro.", tags: ["security", "identity", "monitoring"] },
    { id: 19, category: "Security", title: "Privacy Mode in Public", content: "Toggle 'Stealth View' in settings to blur account balances while using the app in public.", tags: ["security", "privacy", "stealth"] },
    { id: 20, category: "Security", title: "Social Engineering awareness", content: "Nexus staff will never call you to ask for a one-time password (OTP). Hang up immediately.", tags: ["security", "social", "otp"] },

    // LOANS (15)
    { id: 21, category: "Loans", title: "Interest rate calculation science", content: "Rates are determined by your Nexus Score, which tracks cash flow consistency rather than just debt history.", tags: ["loans", "rates", "score"] },
    { id: 22, category: "Loans", title: "Early repayment penalties", content: "Nexus does not charge fees for early repayment. You only pay interest for the time you used the funds.", tags: ["loans", "payment", "repayment"] },
    { id: 23, category: "Loans", title: "Applying for a business expansion loan", content: "Submit 6 months of revenue data. Decisions are typically made within 4 business hours.", tags: ["loans", "business", "growth"] },
    { id: 24, category: "Loans", title: "Collateral requirements", content: "Most Nexus personal loans are unsecured, but higher limits may require digital asset collateral.", tags: ["loans", "collateral", "limit"] },
    { id: 25, category: "Loans", title: "Understanding your Nexus Score", content: "Your score improves with consistent deposits, low debt-to-income ratios, and app engagement.", tags: ["loans", "score", "credit"] },
    { id: 26, category: "Loans", title: "Loan disbursement timelines", content: "Approved funds are usually available in your Nexus wallet within 60 seconds.", tags: ["loans", "speed", "funding"] },
    { id: 27, category: "Loans", title: "Managing multiple active loans", content: "You can hold up to 3 active loans simultaneously if your Nexus Score is above 750.", tags: ["loans", "multiple", "limit"] },
    { id: 28, category: "Loans", title: "Late payment grace periods", content: "We offer a 3-day grace period before late fees are applied to your balance.", tags: ["loans", "late", "fees"] },
    { id: 29, category: "Loans", title: "Refinancing existing debt", content: "Use the 'Refinance' tool to combine high-interest external debt into one Nexus payment.", tags: ["loans", "refinance", "debt"] },
    { id: 30, category: "Loans", title: "Impact on national credit scores", content: "Repayments are reported to major credit bureaus monthly, helping build your external credit.", tags: ["loans", "credit", "bureau"] },
    { id: 31, category: "Loans", title: "Automated repayment setup", content: "Enable 'Smart-Pay' to automatically deduct loan payments on your salary date.", tags: ["loans", "autopay", "salary"] },
    { id: 32, category: "Loans", title: "Emergency hardship deferment", content: "If you lose your job, you can apply for a 1-month payment holiday via the Support tab.", tags: ["loans", "hardship", "defer"] },
    { id: 33, category: "Loans", title: "Fixed vs Variable rates", content: "Nexus offers fixed rates only, ensuring your monthly payments never change.", tags: ["loans", "rates", "fixed"] },
    { id: 34, category: "Loans", title: "Student loan interest subsidies", content: "Verified students receive a 2% discount on educational purpose loans.", tags: ["loans", "student", "education"] },
    { id: 35, category: "Loans", title: "Mortgage pre-approval process", content: "Get a digital pre-approval letter for home loans based on your internal Nexus history.", tags: ["loans", "home", "mortgage"] },

    // PAYMENTS (15)
    { id: 36, category: "Payments", title: "Linking international bank accounts", content: "Supports IBAN, SWIFT, and local routing for 45 countries including India, UAE, and Singapore.", tags: ["payments", "international", "bank"] },
    { id: 37, category: "Payments", title: "Real-time P2P transfers", content: "Send money to any Nexus user instantly using only their @NexusID or phone number.", tags: ["payments", "p2p", "instant"] },
    { id: 38, category: "Payments", title: "Currency conversion fees", content: "We use mid-market rates with a flat 0.5% fee on major currency pairs.", tags: ["payments", "forex", "fees"] },
    { id: 39, category: "Payments", title: "Setting daily spending limits", content: "Adjust your virtual and physical card limits in the 'Card Management' section.", tags: ["payments", "limits", "card"] },
    { id: 40, category: "Payments", title: "QR Code payment merchant setup", content: "Generate static or dynamic QR codes to accept payments at your physical business location.", tags: ["payments", "qr", "merchant"] },
    { id: 41, category: "Payments", title: "Scheduled recurring payments", content: "Set up standing orders for rent, utilities, and subscriptions in the Payments tab.", tags: ["payments", "recurring", "bills"] },
    { id: 42, category: "Payments", title: "Requesting money from others", content: "Send a payment link to anyone; they can pay via card or bank transfer even without a Nexus account.", tags: ["payments", "request", "link"] },
    { id: 43, category: "Payments", title: "Disputing a transaction", content: "Initiate a chargeback within 60 days for unauthorized or unfulfilled merchant orders.", tags: ["payments", "dispute", "refund"] },
    { id: 44, category: "Payments", title: "Virtual card creation", content: "Create up to 5 disposable virtual cards for safer online shopping on unfamiliar sites.", tags: ["payments", "virtual", "card"] },
    { id: 45, category: "Payments", title: "Bulk payment processing for payroll", content: "Upload a CSV file to pay up to 500 employees simultaneously with one click.", tags: ["payments", "payroll", "bulk"] },
    { id: 46, category: "Payments", title: "Cross-border settlement times", content: "Most SEPA and SWIFT transfers settle within 1-3 business days.", tags: ["payments", "speed", "swift"] },
    { id: 47, category: "Payments", title: "Apple and Google Pay integration", content: "Add your Nexus cards to your mobile wallet for contactless NFC payments.", tags: ["payments", "apple-pay", "nfc"] },
    { id: 48, category: "Payments", title: "Transaction export for taxes", content: "Download your history in PDF, CSV, or QBO format for easy tax filing.", tags: ["payments", "tax", "export"] },
    { id: 49, category: "Payments", title: "Split-bill functionality", content: "Instantly divide a restaurant or utility bill among friends using the Split tool.", tags: ["payments", "split", "social"] },
    { id: 50, category: "Payments", title: "Charity and donation portals", content: "Donate directly to verified NGOs without transaction fees through Nexus Impact.", tags: ["payments", "charity", "impact"] }
];

const CATEGORIES = ["All", "Security", "Loans", "Payments"];

export default function HelpCenter() {
    const [articles, setArticles] = useState(INITIAL_ARTICLES);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const displayedArticles = useMemo(() => {
        let results = [...articles];

        // 1. Logic for "All" - Shuffle and mix
        if (activeCategory === "All") {
            for (let i = results.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [results[i], results[j]] = [results[j], results[i]];
            }
        } else {
            // 2. Logic for specific categories - Filter first
            results = results.filter(art => art.category === activeCategory);
        }

        // 3. Search Logic - If searching, show all matches regardless of limit
        if (searchQuery.trim() !== "") {
            return results.filter(art => 
                art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                art.tags.some(tag => tag.includes(searchQuery.toLowerCase()))
            );
        }

        // 4. Default View Logic - Show only 6 questions when not searching
        return results.slice(0, 6);
               
    }, [searchQuery, activeCategory, articles]);

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B1E3D]">
            
            {/* --- ARTICLE MODAL --- */}
            {selectedArticle && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0B1E3D]/90 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-[2rem] p-10 relative animate-in zoom-in duration-300 shadow-2xl">
                        <button 
                            onClick={() => setSelectedArticle(null)} 
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-all font-bold"
                        >✕</button>
                        <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest">{selectedArticle.category}</span>
                        <h2 className="text-3xl font-black mt-2 mb-6">{selectedArticle.title}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">{selectedArticle.content}</p>
                        <button onClick={() => setSelectedArticle(null)} className="px-8 py-3 bg-[#0B1E3D] text-white rounded-xl font-bold hover:bg-cyan-600 transition-all">Close</button>
                    </div>
                </div>
            )}

            {/* --- HEADER / HERO --- */}
            <section className="bg-[#0B1E3D] pt-16 pb-32 px-6 relative">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                    <Link to="/" className="flex items-center gap-3 mb-12">
                        <img src={logo} alt="Nexus" className="w-10 h-10" />
                        <span className="text-white font-black text-xl tracking-tight">SUPPORT ENGINE</span>
                    </Link>
                    
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">How can we help?</h1>
                    
                    <div className="relative w-full max-w-xl group">
                        <input 
                            type="text" 
                            placeholder="Search 50+ topics..."
                            className="w-full py-4 px-8 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:bg-white focus:text-[#0B1E3D] focus:ring-4 focus:ring-cyan-500/30 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 text-[#0B1E3D] px-5 py-2 rounded-xl text-xs font-black hover:bg-white transition-all">
                            SEARCH
                        </button>
                    </div>
                </div>
            </section>

            {/* --- MAIN INTERFACE --- */}
            <main className="max-w-7xl mx-auto px-6 -mt-16 pb-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Column: Knowledge Base */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-black text-[#0B1E3D]">
                                {searchQuery ? `Search Results (${displayedArticles.length})` : 'Trending Topics'}
                            </h2>
                            <div className="flex gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-100">
                                {CATEGORIES.map(cat => (
                                    <button 
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeCategory === cat ? 'bg-[#0B1E3D] text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {displayedArticles.length > 0 ? (
                                displayedArticles.map((art) => (
                                    <div 
                                        key={art.id} 
                                        onClick={() => setSelectedArticle(art)}
                                        className="p-6 rounded-3xl bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5 cursor-pointer transition-all flex flex-col justify-between group"
                                    >
                                        <div className="mb-4">
                                            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">{art.category}</span>
                                            <h3 className="font-bold text-gray-800 mt-1 leading-snug group-hover:text-[#0B1E3D]">{art.title}</h3>
                                        </div>
                                        <div className="flex items-center text-xs font-bold text-gray-400 group-hover:text-cyan-500 transition-colors">
                                            Read Article <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100">
                                    <p className="text-gray-400 font-bold">No matches found. Try different keywords.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Guidelines & Contact */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-black mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                                Pro Guidelines
                            </h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex-shrink-0 flex items-center justify-center text-cyan-600 font-bold text-sm">1</div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">Use <span className="text-[#0B1E3D] font-bold">Transaction IDs</span> when querying specific payments.</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex-shrink-0 flex items-center justify-center text-cyan-600 font-bold text-sm">2</div>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">Security alerts are prioritized by our <span className="text-[#0B1E3D] font-bold">AI Response Unit</span>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0B1E3D] p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
                            <h3 className="text-xl font-black mb-2 italic">Still stuck?</h3>
                            <p className="text-white/50 text-sm mb-6 leading-relaxed">Our support developers are online to assist with technical API issues.</p>
                            <Link to="/contact" className="block w-full py-4 bg-white text-[#0B1E3D] text-center font-black rounded-xl hover:bg-cyan-400 transition-all">
                                START LIVE CHAT
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-[#0097B2] py-5 mb-10">
                <div className="flex items-center justify-center gap-6 text-white text-sm font-bold">
                    <Link to="/terms" className="hover:opacity-70 transition-opacity">Terms of Service</Link>
                    <span className="text-white/30 text-xs">•</span>
                    <Link to="/privacy" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
                </div>
            </footer>
        </div>
    );
}