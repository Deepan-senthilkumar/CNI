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
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-contact').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="contact-page">

            {/* 1. Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="animate-contact">Get in Touch</h1>
                    <p className="animate-contact">We're here to help you connect with the construction industry's best. Reach out to your local chapter or our headquarters.</p>
                </div>
            </section>

            {/* 2. Locations Grid */}
            <section className="locations-section">
                <div className="container">
                    <div className="section-header-contact animate-contact">
                        <h2>Our Offices</h2>
                        <p>Find us in key cities across the region.</p>
                    </div>

                    <div className="locations-grid">
                        {/* Chennai */}
                        <div className="location-card animate-contact">
                            <h3>Chennai</h3>
                            <p><strong>CNI-Construction Network of India</strong></p>
                            <p>Prompt Tower Plot No : 324,<br />Ram Nagar South 12th Extension,<br />Off Radial Road, Near Kamakshi Hospital,<br />Pallikaranai, Chennai - 600 100.</p>
                        </div>

                        {/* Coimbatore */}
                        <div className="location-card animate-contact">
                            <h3>Coimbatore</h3>
                            <p>54 D, 1st Floor,<br />Jayavarthanavelu Nagar,<br />Masakkalipalayam Road, Peelamedu,<br />Coimbatore - 641004.</p>
                        </div>

                        {/* Madurai */}
                        <div className="location-card animate-contact">
                            <h3>Madurai</h3>
                            <p># 279, 1st, East Main Road,<br />Anna Nagar, Madurai - 625020.</p>
                        </div>

                        {/* Trichy */}
                        <div className="location-card animate-contact">
                            <h3>Trichy</h3>
                            <p>No.135, Ponnagar,<br />Near Adjacent Swarna Vinayagar Temple,<br />Trichy - 620001.</p>
                        </div>

                        {/* Erode */}
                        <div className="location-card animate-contact">
                            <h3>Erode</h3>
                            <p>Room No 204,205, Second Floor,<br />No.102/3, Chinna Sengodampalayam,<br />Perundurai Main Road, Nachimuthu Complex,<br />Above Union Bank of India,<br />Veerappampalayam Pirivu,<br />Erode-638012.</p>
                        </div>

                        {/* Expansion Placeholder */}
                        <div className="location-card animate-contact" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <div className="expansion-placeholder">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Growing Stronger</h3>
                                <p style={{ padding: '0 2rem' }}>We are expanding our footprint across India. More chapters coming soon!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. General Info Section */}
            <section className="general-info-section">
                <div className="container">
                    <div className="general-info-grid">

                        {/* Email */}
                        <div className="info-box animate-contact">
                            <div className="info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h3>Email Us</h3>
                            <p>General Inquiries:</p>
                            <a href="mailto:admin@cnibusinessforum.com">admin@cnibusinessforum.com</a>
                        </div>

                        {/* Phone */}
                        <div className="info-box animate-contact">
                            <div className="info-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h3>Call Us</h3>
                            <p><a href="tel:+919362050255">+91 93620 50255</a></p>
                            <p><a href="tel:+919543668090">+91 95436 68090</a></p>
                            <p><a href="tel:+919543668095">+91 95436 68095</a></p>
                        </div>

                        {/* Hours */}
                        <div className="info-box animate-contact">
                            <div className="info-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <h3>Business Hours</h3>
                            <p>Mon to Sat — 10:00 AM to 6:00 PM</p>
                            <p>Sunday — Closed</p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
