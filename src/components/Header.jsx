import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logog.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); // Use location for active state

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
                        <li><a href="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About CNI</Link></li>
                        <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                        <li><Link to="/membership" className={location.pathname === '/membership' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Membership</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
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
