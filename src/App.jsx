import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import TrustedBy from './components/TrustedBy'

function App() {
  return (
    <div className="app">
       <Navbar />
       <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TrustedBy />
       </main>
    </div>
  )
}

export default App
