import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import HowItWorks from './components/HowItWorks' // 1. Import the new guide section
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import LoanTerms from './components/LoanTerms'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Shows what the user can get */}
        <ProductSection />
        
        {/* 2. Explains the 3-step process using hero1.jpg */}
        <HowItWorks />
        
        {/* Builds final trust with human reviews */}
        
        <TrustSection /> 
        <FAQ/> 
        <LoanTerms/>
        <Footer />
      </main>

      {/* Footer would go here */}
    </div>
  )
}

export default App