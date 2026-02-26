import React, { useEffect } from 'react';
import '../assets/css/styles.css';
import '../assets/css/contact-premium.css';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        // Simple entry animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-contact').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page-v2">

            {/* 1. Premium Hero Section */}
            <section className="contact-hero-v2">
                <div className="container">
                    <h1 className="animate-contact">Connect with CNI</h1>
                    <p className="animate-contact">Have a question or want to join India's premium construction network? Our team is ready to assist you.</p>
                </div>
            </section>

            {/* 2. Main Contact Grid (Split Form & Info) */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-split-grid">

                        {/* Left Side: Premium Form */}
                        <div className="contact-form-wrapper animate-contact">
                            <div className="form-card-v2">
                                <h2>Send us a Message</h2>
                                <p>Fill out the form below and we'll get back to you within 24 hours.</p>

                                <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group-v2">
                                        <input type="text" placeholder="Your Name" required />
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="form-group-v2">
                                        <input type="email" placeholder="Email Address" required />
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="form-group-v2 full-width">
                                        <input type="tel" placeholder="Phone Number" />
                                        <i className="fas fa-phone"></i>
                                    </div>

                                    <div className="form-group-v2 full-width">
                                        <textarea placeholder="Tell us more about your requirement..." required></textarea>
                                        <i className="fas fa-comment-alt"></i>
                                    </div>
                                    <button type="submit" className="submit-btn-v2">
                                        Send Message <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Side: Headquarters Info */}
                        <div className="contact-info-wrapper animate-contact">
                            <div className="hq-detail-card">
                                <div className="hq-header">
                                    <span className="badge-v2">Headquarters</span>
                                    <h3>Chennai Office</h3>
                                </div>

                                <div className="hq-body">
                                    <div className="hq-info-row">
                                        <div className="row-icon"><i className="fas fa-map-marked-alt"></i></div>
                                        <div className="row-text">
                                            <h4>Main Office</h4>
                                            <p>Prompt Tower Plot No : 324, Ram Nagar South 12th Extension, Pallikaranai, Chennai - 600 100.</p>
                                        </div>
                                    </div>

                                    <div className="hq-info-row">
                                        <div className="row-icon"><i className="fas fa-phone-volume"></i></div>
                                        <div className="row-text">
                                            <h4>Technical Support</h4>
                                            <p><a href="tel:+919362050255">+91 93620 50255</a></p>
                                            <p><a href="tel:+919543668090">+91 95436 68090</a></p>
                                        </div>
                                    </div>

                                    <div className="hq-info-row">
                                        <div className="row-icon"><i className="fas fa-envelope-open-text"></i></div>
                                        <div className="row-text">
                                            <h4>Official Mail</h4>
                                            <p><a href="mailto:admin@cnibusinessforum.com">admin@cnibusinessforum.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Regional Presence (Redesigned Locations) */}
            <section className="regional-presence-section">
                <div className="container">
                    <div className="presence-header animate-contact">
                        <h2>Regional Presence</h2>
                        <div className="title-underline"></div>
                        <p>Bridging gaps across major cities in Tamil Nadu</p>
                    </div>

                    <div className="regions-grid-v2">
                        {/* Coimbatore */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <i className="fas fa-city"></i>
                            </div>
                            <h3>Coimbatore</h3>
                            <p>54 D, 1st Floor, Jayavarthanavelu Nagar, Masakkalipalayam Road, Peelamedu, CBE - 641004.</p>
                        </div>

                        {/* Madurai */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <i className="fas fa-landmark"></i>
                            </div>
                            <h3>Madurai</h3>
                            <p># 279, 1st, East Main Road, Anna Nagar, Madurai - 625020.</p>
                        </div>

                        {/* Trichy */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <i className="fas fa-gopuram"></i>
                            </div>
                            <h3>Trichy</h3>
                            <p>No.135, Ponnagar, Near Adjacent Swarna Vinayagar Temple, Trichy - 620001.</p>
                        </div>

                        {/* Erode */}
                        <div className="region-card-v2 animate-contact">
                            <div className="city-img-placeholder">
                                <i className="fas fa-industry"></i>
                            </div>
                            <h3>Erode</h3>
                            <p>Nachimuthu Complex, Second Floor, Perundurai Main Road, Erode - 638012.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
