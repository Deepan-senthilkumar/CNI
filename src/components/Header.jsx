import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logog.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <div className="container nav-container">
                <nav className={isScrolled ? 'nav-scrolled' : ''}>
                    <div className="logo">
                        <img src={logo} alt="CNI Logo" style={{ height: '60px', width: 'auto' }} />
                    </div>
                    {/* CSS-only mobile menu toggle adapted for React state if needed */}
                    <input
                        type="checkbox"
                        id="menu-checkbox"
                        checked={isMenuOpen}
                        onChange={(e) => setIsMenuOpen(e.target.checked)}
                    />
                    <label htmlFor="menu-checkbox" className="menu-toggle"></label>
                    <ul className="nav-links">
                        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="about.html">About CNI</a></li>
                        <li><a href="#events" onClick={() => setIsMenuOpen(false)}>Events</a></li>
                        <li><a href="#membership" onClick={() => setIsMenuOpen(false)}>Membership</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
                        <li>
                            <a href="#login" style={{ textDecoration: 'none' }}>
                                <button type="button" className="cta-button" style={{ padding: '0.5rem 1.5rem' }}>LOG IN</button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
