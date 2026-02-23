import React, { useEffect } from 'react';
import '../assets/css/terms-and-conditions-premium.css';

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            {/* Hero Section */}
            <section className="terms-hero">
                <div className="container">
                    <h1>Terms & Conditions</h1>
                    <p>Please read these terms and conditions carefully before using our services.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="terms-content-wrap">
                <div className="container" style={{ maxWidth: '1000px' }}>

                    <div className="terms-block">
                        <h2><i className="fas fa-info-circle"></i> Introduction</h2>
                        <div className="terms-text">
                            <p>Welcome to CNI Business Forum. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
                        </div>
                    </div>

                    <div className="terms-block">
                        <h2><i className="fas fa-user-check"></i> Eligibility</h2>
                        <div className="terms-text">
                            <p>To be eligible to participate in CNI, you must be a professional or business owner within the construction industry fraternity. CNI reserves the right to accept or reject any membership application at its sole discretion.</p>
                        </div>
                    </div>

                    <div className="terms-block">
                        <h2><i className="fas fa-handshake"></i> Member Conduct</h2>
                        <div className="terms-text">
                            <p>Members are expected to maintain professional conduct at all times. This includes respecting other members, adhering to meeting protocols, and providing honest and reliable referrals.</p>
                        </div>
                    </div>

                    <div className="terms-block">
                        <h2><i className="fas fa-shield-alt"></i> Limitation of Liability</h2>
                        <div className="terms-text">
                            <p>CNI acts as a facilitator for networking and referral sharing. CNI is not responsible for any business transactions, financial agreements, or disputes that may arise between members. All business conducted between members is at their own risk.</p>
                        </div>
                    </div>

                    <div className="terms-block">
                        <h2><i className="fas fa-edit"></i> Amendments</h2>
                        <div className="terms-text">
                            <p>CNI reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the services after such changes constitutes your acceptance of the new terms.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TermsAndConditions;
