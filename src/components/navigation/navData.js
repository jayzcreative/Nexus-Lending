export const navLinks = ["Products", "Why Nexus?", "How it works", "About Us"];

export const linkPaths = {
    "Products": "/products",
    "Personal Loans": "/personal-loans",
    "Car Loans": "/car-loans",
    "Health & Insurance": "/health-insurance",
    "Mortgage": "/mortgage",
    "Student Loans": "/student-loans",
    "Why Nexus?": "/why-nexus",
    "How it works": "/how-it-works",
    "About Us": "/about-us",
    "Login": "/login",
    "CheckRate": "/check-rate"
};

export const productLinks = [
    {
        category: "PERSONAL LOANS",
        path: "/personal-loans",
        links: [
            { name: "Debt Consolidation", path: "/personal-loans#debt-consolidation" },
            { name: "Wedding Loans", path: "/personal-loans#wedding-loans" },
            { name: "Home Improvement", path: "/personal-loans#home-improvement" },
            { name: "Vacation Loans", path: "/personal-loans#vacation-loans" },
            { name: "Emergency Loans", path: "/personal-loans#emergency-loans" },
        ],
    },
    {
        category: "CAR LOANS",
        path: "/car-loans",
        links: [
            { name: "New Car Finance", path: "/car-loans#new-car-finance" },
            { name: "Used Car Loans", path: "/car-loans#used-car-loans" },
            { name: "Refinance", path: "/car-loans#refinance-auto" },
            { name: "Lease Buyout", path: "/car-loans#lease-buyout" },
            { name: "Auto Equity", path: "/car-loans#auto-equity" },
        ],
    },
    {
        category: "HEALTH & INSURANCE",
        path: "/health-insurance",
        links: [
            { name: "Medical Bills", path: "/health-insurance#medical-bills" },
            { name: "Dental Loans", path: "/health-insurance#dental-loans" },
            { name: "Life Insurance", path: "/health-insurance#life-insurance" },
            { name: "Health Coverage", path: "/health-insurance#health-coverage" },
            { name: "Pet Insurance", path: "/health-insurance#pet-insurance" },
        ],
    },
    {
        category: "MORTGAGE",
        path: "/mortgage",
        links: [
            { name: "Home Purchase", path: "/mortgage#home-purchase" },
            { name: "Refinance", path: "/mortgage#refinance" },
            { name: "Cash-out Refi", path: "/mortgage#cash-out-refi" },
            { name: "Jumbo Loans", path: "/mortgage#jumbo-loans" },
            { name: "FHA Loans", path: "/mortgage#fha-loans" },
        ],
    },
    {
        category: "STUDENT LOANS",
        path: "/student-loans",
        links: [
            { name: "Undergraduate", path: "/student-loans#undergraduate" },
            { name: "Graduate", path: "/student-loans#graduate" },
            { name: "Parent Plus", path: "/student-loans#parent-plus" },
            { name: "Refinance", path: "/student-loans#refinance-student" },
            { name: "MBA Loans", path: "/student-loans#mba-loans" },
        ],
    },
];

export const navSections = {
    "Why Nexus?": [
        { title: "Our AI Tech", desc: "Alternative data modeling", path: "/why-nexus" },
        { title: "Security", desc: "Bank-grade encryption", path: "/why-nexus" },
        { title: "Nexus vs Banks", desc: "Why we are 10x faster", path: "/why-nexus" },
        { title: "Success Stories", desc: "Real user testimonials", path: "/why-nexus" }
    ],
    "How it works": [
        { title: "The 3-Step Process", desc: "From rate check to funding", path: "/how-it-works" },
        { title: "Eligibility", desc: "What you need to apply", path: "/how-it-works" },
        { title: "Rates & Fees", desc: "Transparent APR ranges", path: "/how-it-works" },
        { title: "Help Center", desc: "Detailed FAQ & Support", path: "/help-center" }
    ],
    "About Us": [
        { title: "Our Mission", desc: "Democratizing credit access", path: "/about-us" },
        { title: "Leadership", desc: "Meet the innovators", path: "/about-us" },
        { title: "Careers", desc: "Join the Fintech future", path: "/about-us" },
        { title: "Press", desc: "Nexus in the news", path: "/about-us" }
    ]
};