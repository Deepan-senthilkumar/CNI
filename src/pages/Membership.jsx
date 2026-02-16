import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/css/membership-premium.css';

const Membership = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple entry animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-mem').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="membership-page">

            {/* 1. Hero Section */}
            <section className="mem-hero-section">
                <div className="container">
                    <div className="mem-hero-content animate-mem">
                        <h1 className="mem-headline">Join the Elite Construction Network</h1>
                        <p className="mem-subheadline">
                            Unlock distinct advantages tailored for industry leaders. Connect, Collaborate, and Conquer with Construction Network India.
                        </p>
                        <div className="mem-cta-group">
                            <button className="btn-primary-mem">Become a Member</button>
                            <button className="btn-secondary-mem">View Benefits</button>
                        </div>
                    </div>
                </div>
            </section>



            {/* 3. Benefits Section */}
            <section className="mem-benefits-section">
                <div className="container">
                    <div className="section-title-mem animate-mem">
                        <h2>Membership Enquiry</h2>
                        <p>Interested in joining the elite? Fill out the form below and our team will get back to you.</p>
                    </div>

                    <div className="mem-form-container animate-mem">
                        <form className="mem-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" className="form-input" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" className="form-input" placeholder="Your Construction Company" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" className="form-input" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" className="form-input" placeholder="+91 98765 43210" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message / Queries</label>
                                <textarea id="message" className="form-textarea" placeholder="Tell us about your business goals..."></textarea>
                            </div>
                            <button type="button" className="btn-submit">Submit Enquiry</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 4. Join Steps Section */}
            <section className="mem-steps-section animate-mem">
                <div className="container">
                    <div className="section-title-mem">
                        <h2>How to Become a Member</h2>
                        <p>Three simple steps to unlock a world of opportunities.</p>
                    </div>

                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-number"><span>1</span></div>
                            <h3>Apply Online</h3>
                            <p>Fill out our comprehensive membership application form with your company details.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number"><span>2</span></div>
                            <h3>Verification</h3>
                            <p>Our audit team reviews your profile to ensure alignment with CNI's quality standards.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number"><span>3</span></div>
                            <h3>Induction</h3>
                            <p>Attend the induction ceremony and get officially welcomed into your local chapter.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="mem-cta-section animate-mem">
                <div className="container">
                    <h2>Ready to Build the Future?</h2>
                    <p>Join thousands of architects, engineers, and builders who are redefining the industry.</p>
                    <button className="btn-primary-mem" style={{ background: 'white', color: '#1e3a8a' }}>Apply for Membership</button>
                </div>
            </section>

        </div>
    );
};

export default Membership;
