import React from 'react';
import advImg1 from '../assets/images/premium_banner_image_1770810202351.png';
import advImg2 from '../assets/images/premium_banner_new_1770810179312.png';
import advImg3 from '../assets/images/banner_new_1770810321893.png';
import advImg4 from '../assets/images/premium_about_cni_1770813891769.png';

const Advantage = () => {
    return (
        <section id="advantage" style={{ background: 'var(--bg-color)', overflow: 'hidden', padding: '40px 0 80px' }}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>The CNI Advantage</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '2rem auto 0', fontSize: '1.2rem' }}>
                        Breaking the traditional boxy networking mold with a fluid ecosystem designed for the modern construction
                        professional.
                    </p>
                </div>

                <div className="advantage-grid">
                    {/* Advantage 1 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg1} alt="Quality Referrals" />
                        </div>
                        <div className="advantage-content">
                            <h3>Quality Referrals</h3>
                            <p>Generate Valuable Sales referrals that Works for you which are Incessant, Engaging and Accurate</p>
                        </div>
                    </div>

                    {/* Advantage 2 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg2} alt="Strategic Networking" />
                        </div>
                        <div className="advantage-content">
                            <h3>Strategic Networking</h3>
                            <p>Reach your Product to the maximum among the network with direct promotions</p>
                        </div>
                    </div>

                    {/* Advantage 3 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg3} alt="Exponential Growth" />
                        </div>
                        <div className="advantage-content">
                            <h3>Exponential Growth</h3>
                            <p>Develop & Establish long-lasting Relationship with well-matched Business Professionals</p>
                        </div>
                    </div>

                    {/* Advantage 4 */}
                    <div className="advantage-item animate-on-scroll">
                        <div className="advantage-circle-img">
                            <img src={advImg4} alt="Industry Credibility" />
                        </div>
                        <div className="advantage-content">
                            <h3>Industry Credibility</h3>
                            <p>Nurture your Professional and Business Skills through direct interactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
