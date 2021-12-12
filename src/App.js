import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';


function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <HeroSection/>
        <Footer/>
        <Routes>
           <Route path='/' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;