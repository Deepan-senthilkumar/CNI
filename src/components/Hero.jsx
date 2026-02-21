import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-text-content animate-on-scroll" style={{ marginBottom: '2rem' }}>
                    <h1>CONSTRUCTION NETWORK OF INDIA</h1>
                    <p style={{ fontSize: '1.5rem', color: '#e2e8f0', marginTop: '1rem', fontWeight: 500 }}>
                        Connecting Construction Industry Professionals
                    </p>
                </div>

                {/* Registration CTA */}
                <div className="registration-cta" style={{ marginTop: '15vh' }}>
                    <a href="#contact" className="cta-button"
                        style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', background: 'transparent', border: '2px solid #fff', color: '#fff' }}>
                        Register Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
