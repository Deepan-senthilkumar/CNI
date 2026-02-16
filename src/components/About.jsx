import React from 'react';
import aboutImg from '../assets/images/premium_about_cni_1770813891769.png';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-dynamic-layout">
                    <div className="about-image-wrapper animate-on-scroll">
                        <div className="about-shape-bg" style={{ background: 'transparent' }}></div>
                        <div className="about-image-mask" style={{ boxShadow: '0 20px 50px rgba(45, 79, 124, 0.2)' }}>
                            <img src={aboutImg} alt="About CNI" />
                        </div>
                    </div>

                    <div className="about-content-fluid animate-on-scroll">
                        <h2>Building a Legacy of <span style={{ color: 'var(--primary-color)' }}>Construction Excellence</span></h2>
                        <p>Conceived and organized by industry professionals who deeply understand the dynamics of referral
                            marketing, CNI (Construction Network of India) is a first-of-its-kind, member-focused business
                            network exclusively for the construction industry.</p>
                        <p>CNI is a purpose-built platform designed to facilitate direct, efficient, and result-oriented
                            business communication among professionals, consultants, and service providers.</p>
                        <div className="about-legacy-card animate-on-scroll">
                            <div className="legacy-item">
                                <span className="legacy-label">Established</span>
                                <div className="legacy-value primary">10.10.2010</div>
                            </div>
                            <div className="legacy-item">
                                <span className="legacy-label">Started With</span>
                                <div className="legacy-value secondary">25 Members</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
