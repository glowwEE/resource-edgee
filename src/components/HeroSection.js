import React from 'react';
import './HeroSection.css';
import '../App.css';
import relax from './images/relax.png'

function HeroSection() {
    return (
        <div  className="hero-container">
            <div className='hero-text'>
                <h1>Throw paper works into the trash where it belongs.</h1>
                <h3>eliminate all hassle invovled in managing people operation by managing it</h3>
            </div>
            <div className="hero-image">
                <img src={relax} />
            </div>
        </div>
    )
}

export default HeroSection
