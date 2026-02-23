import React, { useEffect } from 'react';
import '../assets/css/refund-policy-premium.css';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="refund-page">
            {/* Hero Section */}
            <section className="refund-hero">
                <div className="container">
                    <h1>Refund & Cancellation Policy</h1>
                    <p>Understanding our policies regarding membership fees, transfers, and cancellations.</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="refund-content-wrap">
                <div className="container" style={{ maxWidth: '1000px' }}>

                    {/* Refunds and Cancellations */}
                    <div className="refund-block">
                        <h2><i className="fas fa-undo-alt"></i> Refunds and Cancellations</h2>
                        <div className="refund-text">
                            <h3>Refund Policy</h3>
                            <ul className="refund-list">
                                <li>Refund policies for memberships will be clearly stated on the platform. Generally, fees for memberships are non-refundable.</li>
                                <li>Instead of a Refund, the member can move from one chapter to another chapter and change the category from one to another category.</li>
                            </ul>

                            <h3 style={{ marginTop: '2rem' }}>Cancellation</h3>
                            <ul className="refund-list">
                                <li>Users can cancel their membership at any time.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Changes to Payment Policy */}
                    <div className="refund-block">
                        <h2><i className="fas fa-credit-card"></i> Changes to Payment Policy</h2>
                        <div className="refund-text">
                            <h3>Notification</h3>
                            <ul className="refund-list">
                                <li>CNI – Construction Network of India reserves the right to update or modify the payment policy.</li>
                                <li>Users will be notified of any changes, and the latest version will be made available on the platform.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default RefundPolicy;
