import React from 'react';
import footerLogo from '../assets/images/logo_cni.png';

const Footer = () => {
    return (
        <>
            <footer className="footer-v2">
                <div className="container">
                    {/* Brand Column */}
                    <div className="footer-brand-v2">
                        <a href="#home" style={{ display: 'block', marginBottom: '1.5rem' }}>
                            <img src={footerLogo} alt="CNI Business Forum" style={{ maxWidth: '140px', height: 'auto' }} />
                        </a>
                        <p>CNI Business Forum is India's most reputable business networking platform, connecting innovators and
                            leaders. We provide a wide range of services, including business development, networking events,
                            professional training, and collaborative growth modules.</p>
                        <div className="social-strip-v2">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col-v2">
                        <h3>Quick Links</h3>
                        <ul className="footer-links-v2">
                            <li><a href="#home"><i className="fas fa-angle-double-right"></i> Home</a></li>
                            <li><a href="about.html"><i className="fas fa-angle-double-right"></i> About CNI</a></li>
                            <li><a href="#Events"><i className="fas fa-angle-double-right"></i> Events</a></li>
                            <li><a href="#contact"><i className="fas fa-angle-double-right"></i> Contact Us</a></li>
                            <li><a href="#FAQ"><i className="fas fa-angle-double-right"></i> FAQ</a></li>
                            <li><a href="#Become Member"><i className="fas fa-angle-double-right"></i> Become Member</a></li>
                        </ul>
                    </div>

                    {/* Member Links */}
                    <div className="footer-col-v2">
                        <h3>Member Links</h3>
                        <ul className="footer-links-v2">
                            <li><a href="#meeting"><i className="fas fa-angle-double-right"></i> Weekly Meeting</a></li>
                            <li><a href="#CNI leaders"><i className="fas fa-angle-double-right"></i> CNI Leaders</a></li>
                            <li><a href="#CNI chapters"><i className="fas fa-angle-double-right"></i> CNI Chapters</a></li>
                            <li><a href="#CNI foundation"><i className="fas fa-angle-double-right"></i> CNI Foundation</a></li>
                            <li><a href="#franchise"><i className="fas fa-angle-double-right"></i> Franchise</a></li>
                            <li><a href="#CNI policies"><i className="fas fa-angle-double-right"></i> CNI Policies</a></li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="footer-col-v2">
                        <h3>Contacts</h3>
                        <div className="contact-box-v2">
                            <div className="contact-icon-v2"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="contact-details-v2">
                                <strong>Address:</strong>
                                <p>Prompt Tower, Plot No: 324, Ram Nagar South, Near Kamakshi Hospital, Chennai - 600 100</p>
                            </div>
                        </div>
                        <div className="contact-box-v2">
                            <div className="contact-icon-v2"><i className="fas fa-envelope"></i></div>
                            <div className="contact-details-v2">
                                <strong>Email:</strong>
                                <p>info@cnibusinessforum.com</p>
                            </div>
                        </div>
                        <div className="contact-box-v2">
                            <div className="contact-icon-v2"><i className="fas fa-phone-alt"></i></div>
                            <div className="contact-details-v2">
                                <strong>Phone:</strong>
                                <p>+91-93620 50255</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-v2"
                    style={{ background: '#111', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '30px' }}>
                    <div className="container"
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontSize: '0.85rem' }}>
                        <p style={{ flex: 1, textAlign: 'left', margin: 0, color: '#fff' }}>
                            <a href="#" style={{ color: 'inherit', transition: 'color 0.3s' }}>Terms and Conditions</a>
                        </p>

                        <p style={{ flex: 1, textAlign: 'center', margin: 0, color: '#fff' }}>© 2026 CNI Business Forum. All rights reserved.</p>

                        <p style={{ flex: 1, textAlign: 'right', margin: 0, color: '#fff' }}>Designed by <span
                            style={{ color: '#eb7125' }}><a href="https://www.oceansoftwares.com"
                                style={{ color: 'inherit', transition: 'color 0.3s' }}> Ocean Softwares</a></span></p>
                    </div>
                </div>
            </footer>

            <a href="#home" className="back-to-top" title="Scroll to Top">
                <i className="fas fa-arrow-up"></i>
            </a>
        </>
    );
};

export default Footer;
