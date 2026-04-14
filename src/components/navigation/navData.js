// src/components/navigation/navData.js

export const navLinks = ["Products", "Why Nexus?", "How it works", "About Us"];

export const linkPaths = {
    "Products": "/products",
    "Why Nexus?": "/why-nexus",
    "How it works": "/how-it-works",
    "About Us": "/about-us",
    "Login": "/login",
    "CheckRate": "/check-rate"
};

export const productLinks = [
    {
        category: "PERSONAL LOANS",
        links: [
            { name: "Debt Consolidation", path: "/loans/debt-consolidation" },
            { name: "Wedding Loans", path: "/loans/wedding" },
            { name: "Home Improvement", path: "/loans/home-improvement" },
            { name: "Vacation Loans", path: "/loans/vacation" },
            { name: "Emergency Loans", path: "/loans/emergency" },
        ],
    },
    {
        category: "CAR LOANS",
        links: [
            { name: "New Car Finance", path: "/auto/new" },
            { name: "Used Car Loans", path: "/auto/used" },
            { name: "Refinance", path: "/auto/refinance" },
            { name: "Lease Buyout", path: "/auto/lease-buyout" },
            { name: "Auto Equity", path: "/auto/equity" },
        ],
    },
    {
        category: "HEALTH & INSURANCE",
        links: [
            { name: "Medical Bills", path: "/health/medical" },
            { name: "Dental Loans", path: "/health/dental" },
            { name: "Life Insurance", path: "/health/life" },
            { name: "Health Coverage", path: "/health/coverage" },
            { name: "Pet Insurance", path: "/health/pet" },
        ],
    },
    {
        category: "MORTGAGE",
        links: [
            { name: "Home Purchase", path: "/mortgage/purchase" },
            { name: "Refinance", path: "/mortgage/refinance" },
            { name: "Cash-out Refi", path: "/mortgage/cash-out" },
            { name: "Jumbo Loans", path: "/mortgage/jumbo" },
            { name: "FHA Loans", path: "/mortgage/fha" },
        ],
    },
    {
        category: "STUDENT LOANS",
        links: [
            { name: "Undergraduate", path: "/student/undergrad" },
            { name: "Graduate", path: "/student/grad" },
            { name: "Parent Plus", path: "/student/parent" },
            { name: "Refinance", path: "/student/refinance" },
            { name: "MBA Loans", path: "/student/mba" },
        ],
    },
];

export const navSections = {
    "Why Nexus?": [
        { title: "Our AI Tech", desc: "Alternative data modeling", path: "/why-nexus/ai" },
        { title: "Security", desc: "Bank-grade encryption", path: "/why-nexus/security" },
        { title: "Nexus vs Banks", desc: "Why we are 10x faster", path: "/why-nexus/comparison" },
        { title: "Success Stories", desc: "Real user testimonials", path: "/why-nexus/stories" }
    ],
    "How it works": [
        { title: "The 3-Step Process", desc: "From rate check to funding", path: "/how-it-works/process" },
        { title: "Eligibility", desc: "What you need to apply", path: "/how-it-works/eligibility" },
        { title: "Rates & Fees", desc: "Transparent APR ranges", path: "/how-it-works/rates" },
        { title: "Help Center", desc: "Detailed FAQ & Support", path: "/help-center" }
    ],
    "About Us": [
        { title: "Our Mission", desc: "Democratizing credit access", path: "/about-us/mission" },
        { title: "Leadership", desc: "Meet the innovators", path: "/about-us/leadership" },
        { title: "Careers", desc: "Join the Fintech future", path: "/about-us/careers" },
        { title: "Press", desc: "Nexus in the news", path: "/about-us/press" }
    ]
};