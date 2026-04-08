import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import TrustSection from './components/TrustSection' // Added this import

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductSection />
      {/* This builds trust immediately after the products are shown */}
      <TrustSection /> 
    </div>
  )
}

export default App