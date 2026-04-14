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
        path: "/personal-loans", // Added main category path
        links: [
            { name: "Debt Consolidation", path: "/personal-loans" },
            { name: "Wedding Loans", path: "/personal-loans" },
            { name: "Home Improvement", path: "/personal-loans" },
            { name: "Vacation Loans", path: "/personal-loans" },
            { name: "Emergency Loans", path: "/personal-loans" },
        ],
    },
    {
        category: "CAR LOANS",
        path: "/car-loans", // Added main category path
        links: [
            { name: "New Car Finance", path: "/car-loans" },
            { name: "Used Car Loans", path: "/car-loans" },
            { name: "Refinance", path: "/car-loans" },
            { name: "Lease Buyout", path: "/car-loans" },
            { name: "Auto Equity", path: "/car-loans" },
        ],
    },
    {
        category: "HEALTH & INSURANCE",
        path: "/health-insurance", // Added main category path
        links: [
            { name: "Medical Bills", path: "/health-insurance" },
            { name: "Dental Loans", path: "/health-insurance" },
            { name: "Life Insurance", path: "/health-insurance" },
            { name: "Health Coverage", path: "/health-insurance" },
            { name: "Pet Insurance", path: "/health-insurance" },
        ],
    },
    {
        category: "MORTGAGE",
        path: "/mortgage", // Added main category path
        links: [
            { name: "Home Purchase", path: "/mortgage" },
            { name: "Refinance", path: "/mortgage" },
            { name: "Cash-out Refi", path: "/mortgage" },
            { name: "Jumbo Loans", path: "/mortgage" },
            { name: "FHA Loans", path: "/mortgage" },
        ],
    },
    {
        category: "STUDENT LOANS",
        path: "/student-loans", // Added main category path
        links: [
            { name: "Undergraduate", path: "/student-loans" },
            { name: "Graduate", path: "/student-loans" },
            { name: "Parent Plus", path: "/student-loans" },
            { name: "Refinance", path: "/student-loans" },
            { name: "MBA Loans", path: "/student-loans" },
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