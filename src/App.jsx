import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import FAQ from './components/FAQ';
import LoanTerms from './components/LoanTerms';
import Footer from './components/Footer';
import ProductsLinks from './components/ProductsLinks';
import WhyNexusLinks from './components/WhyNexusLinks'; 
import HowLinks from './components/HowLinks';
import AboutUsLinks from './components/AboutUsLinks'; // Import the new page

// Helper to reset scroll position when navigating to a new link
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component for the Landing Page content
const Home = () => (
  <>
    <Hero />
    <ProductSection />
    <HowItWorks />
    <TrustSection /> 
    <FAQ /> 
    <LoanTerms />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures users start at the top of the page on redirect */}
      <div className="min-h-screen bg-white">
        {/* Navbar and Footer stay visible on all pages */}
        <Navbar />
        
        <main>
          <Routes>
            {/* The Main Landing Page */}
            <Route path="/" element={<Home />} />
            
            {/* The Dedicated Products Page */}
            <Route path="/products" element={<ProductsLinks />} />

            {/* The Dedicated Why Nexus Page */}
            <Route path="/why-nexus" element={<WhyNexusLinks />} />

            {/* The Dedicated How It Works Page */}
            <Route path="/how-it-works" element={<HowLinks />} />

            {/* The Dedicated About Us Page */}
            <Route path="/about-us" element={<AboutUsLinks />} />
            
            {/* Future routes like /about-us go here */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;