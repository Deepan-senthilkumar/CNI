import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/css/about-premium.css'; // Created this file as requested

// Import images
import logo from '../assets/images/logog.png';
import logoCni from '../assets/images/logo_cni.png';
import introImg from '../assets/images/premium_about_cni_1770813891769.png'; // Using available about image
import benefitsImg from '../assets/images/premium_construction_banner_1770810244381.png'; // Using available banner image

const AboutUs = () => {

    useEffect(() => {
        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            {/* 1. Hero Section */}
            <section className="about-hero-section">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Empowering Construction Professionals</h1>
                    <p className="about-hero-subtitle">Building Growth & Standards Since 2010</p>
                </div>
                <div className="hero-geometric-shape"></div>
            </section>

            {/* 2. Introduction: Split Layout */}
            <section className="intro-section">
                <div className="container">
                    <div className="intro-container">
                        <div className="intro-text animate-on-scroll">
                            <h2>Redefining Business Networking</h2>
                            <p>The Construction Network of India (CNI) isn't just a forum; it's a strategic ecosystem. We
                                recognized a gap in the industry—while technical skills were abundant, the avenues for
                                structured, professional growth and high-quality lead generation were fragmented.</p>
                            <p>We bridge that gap by bringing together architects, engineers, contractors, and material
                                suppliers onto a single, powerful platform designed for mutual success.</p>
                        </div>
                        <div className="intro-image-wrapper animate-on-scroll">
                            <div className="intro-bg-accent"></div>
                            <img src={introImg} alt="CNI Networking Event" className="intro-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Why CNI */}
            <section className="values-section">
                <div className="container">
                    <div className="section-title-center animate-on-scroll">
                        <h2>Why CNI?</h2>
                        <p style={{ color: '#64748b', marginTop: '1rem' }}>Organized by Construction Industry Professionals.</p>
                    </div>

                    <div className="values-grid">
                        {/* Point 1 */}
                        <div className="value-card animate-on-scroll">
                            <div className="value-icon-wrapper"><i className="fas fa-hard-hat"></i></div>
                            <p style={{ color: '#475569' }}>Organized by Construction Industry Professionals who understand the Business of Networking Marketing better.</p>
                        </div>

                        {/* Point 2 */}
                        <div className="value-card animate-on-scroll">
                            <div className="value-icon-wrapper"><i className="fas fa-crown"></i></div>
                            <p style={{ color: '#475569' }}>A first-of-its-kind Member focused Business Network exclusive for the Construction Industry.</p>
                        </div>

                        {/* Point 3 */}
                        <div className="value-card animate-on-scroll">
                            <div className="value-icon-wrapper"><i className="fas fa-comments"></i></div>
                            <p style={{ color: '#475569' }}>Conceptualized to efficiently perform as a unique platform favoring Direct and effectual communique for enhancing Business.</p>
                        </div>

                        {/* Point 4 */}
                        <div className="value-card animate-on-scroll">
                            <div className="value-icon-wrapper"><i className="fas fa-tachometer-alt"></i></div>
                            <p style={{ color: '#475569' }}>Business networking model that builds & establishes trust and fetches you the desired results much faster.</p>
                        </div>

                        {/* Point 5 */}
                        <div className="value-card animate-on-scroll">
                            <div className="value-icon-wrapper"><i className="fas fa-check-circle"></i></div>
                            <p style={{ color: '#475569' }}>Earn product recommendations from the Professionals and enhance your credibility</p>
                        </div>

                        {/* Point 6 */}
                        <div className="value-card animate-on-scroll">
                            <div className="value-icon-wrapper"><i className="fas fa-chart-line"></i></div>
                            <p style={{ color: '#475569' }}>Gain new customers, retain them and continue growing your clientele base with sustained engagement within the network.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Benefits Section */}
            <section className="benefits-section">
                <div className="container benefits-container">
                    <div className="benefits-header animate-on-scroll">
                        <h2>Benefits of CNI</h2>
                        <p>Business Referrals from Trusted Members.</p>
                        <div
                            style={{ width: '60px', height: '4px', background: 'var(--primary-color)', borderRadius: '2px', marginBottom: '2rem' }}>
                        </div>
                        <div className="benefits-image-wrapper">
                            <img src={benefitsImg} alt="CNI Networking Benefits"
                                style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    <ul className="benefits-list animate-on-scroll">
                        <li>
                            <div className="benefit-icon"><i className="fas fa-bullhorn"></i></div>
                            <span className="benefit-text">Generate Valuable Sales referrals that Works for you.</span>
                        </li>
                        <li>
                            <div className="benefit-icon"><i className="fas fa-bullseye"></i></div>
                            <span className="benefit-text">Reach your Product to the maximum among the network with direct promotions which are Incessant, Engaging and Accurate.</span>
                        </li>
                        <li>
                            <div className="benefit-icon"><i className="fas fa-user-friends"></i></div>
                            <span className="benefit-text">Develop & Establish long-lasting Relationship with well-matched Business Professionals.</span>
                        </li>
                        <li>
                            <div className="benefit-icon"><i className="fas fa-door-open"></i></div>
                            <span className="benefit-text">Create new opportunities and identify new avenues through direct interactions</span>
                        </li>
                        <li>
                            <div className="benefit-icon"><i className="fas fa-graduation-cap"></i></div>
                            <span className="benefit-text">Nurture your Professional and Business Skills.</span>
                        </li>
                        <li>
                            <div className="benefit-icon"><i className="fas fa-medal"></i></div>
                            <span className="benefit-text">Continue enhancing your Business Prospects among the fraternity. Leadership skill, Knowledge and Friendship.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 6. CNI Philosophy Section (Banner Style) */}
            <section className="philosophy-section">
                <div className="philosophy-container">
                    <div className="philosophy-left animate-on-scroll">
                        <div className="philosophy-title">CNI<br />Philosophy</div>
                        <div className="philosophy-subtitle">Refer and be Referred</div>
                    </div>
                    <div className="philosophy-right animate-on-scroll">
                        <div className="philosophy-content-text">
                            "A positive attitude is one of the most preferred virtues of a CNI Forum Member, further to being
                            supportive to the Team in the respective chapter, while being outstanding as a Team player. CNI
                            Forum expects its Members to be faithful to their fellow members and committed to the Philosophy of
                            – <span className="highlight-motto">Refer and be Referred.</span>"
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
