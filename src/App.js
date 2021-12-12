import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';


function App() {
  return (

    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <Footer/>
        <Routes>
           <Route path='/' exact  />
        </Routes>
      </Router>
    </>
  );
}

export default App;