import React from 'react';

const Founder = () => {
    return (
        <section id="founder" className="founder-premium-section">
            <div className="container founder-premium-container animate-on-scroll">

                {/* Founder Image */}
                <div className="founder-image-premium">
                    <div className="founder-image-decor"></div>
                    <div className="founder-image-card">
                        {/* Using placeholder as original image was missing */}
                        <img src="/founder_2.jpg" alt="Mr. E. Udayakumar" />
                    </div>
                    <div className="founder-image-decor-2"></div>
                </div>

                {/* Founder Content */}
                <div className="founder-text-premium">
                    <h2 className="founder-name-large">Mr. E. Udayakumar</h2>
                    <span className="founder-designation" style={{ color: 'black', fontWeight: 700 }}>
                        Managing Director & CEO, PROMPT Group of Companies
                    </span>

                    <div className="founder-quote-box">
                        <p className="founder-quote-text">
                            "The CNI Forum is the brainchild of Mr.E.Udayakumar. His credence in the industry has been
                            gained as a result of his Market-oriented approach and committed inclination to the Indian
                            Construction industry."
                        </p>
                    </div>

                    <p className="founder-bio">
                        As a result of his everyday connect with the industry, he brings with unmatched knowledge levels and
                        understanding of the market trends, which he proposes to effectively put to task in the CNI Platform
                        for the benefit of every Participant, by incorporating the same level of understanding towards the
                        advantage of referral marketing.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Founder;
