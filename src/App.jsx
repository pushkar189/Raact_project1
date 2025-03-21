import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation.jsx'
import HeroSection from './components/Hero.jsx'

function App() {

  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  )
}

export default App;
