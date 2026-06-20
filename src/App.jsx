//import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import FAQ from './pages/FAQ';
import SimpleGuidance from './pages/Getting Started Content/simple-guidance';
import GetStarted from './pages/Getting Started Content/get-started';
import Normal from './pages/Getting Started Content/normal';
import Anatomy from './pages/Getting Started Content/Anatomy';

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/simple-guidance" element={<SimpleGuidance/>} />
        <Route path="/normal" element={<Normal/>}/>
        <Route path="/anatomy" element={<Anatomy />} />
      </Routes>
    </>
  )
}

export default App
