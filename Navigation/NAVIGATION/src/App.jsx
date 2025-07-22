/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import {Routes, Route} from 'react-router-dom'
import Navbar from './nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>PROTFOILO</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<p>Main Page</p>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<p>Invalid</p>} />
      </Routes>
    </>
  )
}

export default App*/

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
