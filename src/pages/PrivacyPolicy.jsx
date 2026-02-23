import React, { useEffect } from 'react';
import '../assets/css/privacy-policy-premium.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page">
            {/* Hero Section */}
            <section className="privacy-hero">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Construction Network of India (CNI) - Protecting your personal information and privacy.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="privacy-content-wrap">
                <div className="container" style={{ maxWidth: '1000px' }}>

                    {/* Introduction */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-info-circle"></i> Introduction</h2>
                        <div className="privacy-text">
                            <p>Welcome to CNI – Construction Network of India. This Privacy Policy outlines how we collect, use, disclose, and protect personal information on our referral forum platform.</p>
                        </div>
                    </div>

                    {/* Information We Collect */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-database"></i> Information We Collect</h2>
                        <div className="privacy-text">
                            <h3>Member Provided Information</h3>
                            <p>We collect personal information that members voluntarily provide when registering, creating a profile, or participating in discussions on the referral forum. This may include:</p>
                            <ul className="privacy-list">
                                <li>Full name</li>
                                <li>Contact information (email address)</li>
                                <li>Profile picture</li>
                                <li>Professional details</li>
                            </ul>
                        </div>
                    </div>

                    {/* How We Use Information */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-tools"></i> How We Use Information</h2>
                        <div className="privacy-text">
                            <p>We use the collected information for various purposes, including but not limited to:</p>
                            <ul className="privacy-list">
                                <li>Facilitating members information and referrals on the forum.</li>
                                <li>Sending notifications and updates related to forum activities.</li>
                                <li>Analyzing members behavior to enhance the forum's features and members experience.</li>
                                <li>Communicating with members about forum-related matters.</li>
                            </ul>
                        </div>
                    </div>

                    {/* User Generated Content */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-users"></i> User Generated Content</h2>
                        <div className="privacy-text">
                            <ul className="privacy-list">
                                <li>Content posted by members on the forum, including comments, referrals, and other contributions, may be publicly visible.</li>
                                <li>Members are responsible for the content they share and should be mindful of the information they disclose.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Disclosure of Information */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-share-alt"></i> Disclosure of Information</h2>
                        <div className="privacy-text">
                            <p>We may share members information with:</p>
                            <ul className="privacy-list">
                                <li>Other forum chapter members for the purpose of referrals and business.</li>
                                <li>Service providers assisting with forum operations.</li>
                                <li>Legal authorities if required by law.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Security Measures */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-shield-alt"></i> Security Measures</h2>
                        <div className="privacy-text">
                            <p>We implement reasonable security measures to protect members information from unauthorized access, disclosure, alteration, and destruction.</p>
                        </div>
                    </div>

                    {/* User Choices and Controls */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-user-cog"></i> User Choices and Controls</h2>
                        <div className="privacy-text">
                            <p>Members have the right to:</p>
                            <ul className="privacy-list">
                                <li>Update and correct their personal information.</li>
                                <li>Adjust privacy settings and notification preferences.</li>
                                <li>Delete their account and information.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Changes to Policy */}
                    <div className="privacy-block">
                        <h2><i className="fas fa-sync-alt"></i> Changes to this Privacy Policy</h2>
                        <div className="privacy-text">
                            <p>We may update this Privacy Policy from time to time. The date of the latest revision will be indicated at the top.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
