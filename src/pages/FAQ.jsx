import React, { useEffect } from 'react';
import '../assets/css/faq-premium.css';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqData = [
        {
            question: "What is CNI and how can I join?",
            answer: "CNI (Construction Network India) is a professional networking platform exclusively for the construction industry. You can join by visiting our Membership page and submitting an inquiry form. Our team will get in touch with you for the verification process."
        },
        {
            question: "How often are the weekly meetings held?",
            answer: "Each chapter holds weekly meetings on their designated days (e.g., Tuesday, Wednesday, or Friday) at 8:00 AM. These meetings are focused on business exchanges, referrals, and industry updates."
        },
        {
            question: "Can I visit a chapter before joining?",
            answer: "Yes, we encourage potential members to visit as a guest. You can register for a guest invitation through our Events or Contact page to experience a typical CNI meeting firsthand."
        },
        {
            question: "What are the benefits of CNI membership?",
            answer: "Members get access to an exclusive network of builders and contractors, quality business referrals, professional development sessions, and the opportunity to showcase their services to a dedicated audience."
        },
        {
            question: "How do I start a new CNI chapter in my region?",
            answer: "Starting a new chapter requires a minimum number of dedicated professionals from the construction sector. Please contact our Regional Directors or the Head Office for detailed guidance on chapter formation."
        },
        {
            question: "Is there a specific industry niche required to join?",
            answer: "CNI is open to all professionals related to the construction ecosystem, including builders, architects, civil engineers, interior designers, and material suppliers."
        }
    ];

    return (
        <div className="faq-page-container">
            {/* Hero Section */}
            <section className="faq-hero">
                <div className="container">
                    <h1>Help Center</h1>
                    <p>Everything you need to know about Construction Network India and our community.</p>
                </div>
            </section>

            {/* FAQ Content Section */}
            <section className="faq-content-section">
                <div className="container">
                    <div className="faq-grid-layout">
                        {/* Sidebar Information */}
                        <div className="faq-sidebar">
                            <h2>Common Questions</h2>
                            <p>
                                Can't find the answer you're looking for? Our support team is here to help you with any specific queries regarding membership or chapter operations.
                            </p>

                            <div className="contact-card-mini">
                                <h4>Still have questions?</h4>
                                <p>We're ready to assist you anytime.</p>
                                <a href="/contact" className="mini-contact-link">
                                    Contact Support <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* Accordion List */}
                        <div className="faq-accordion">
                            {faqData.map((item, index) => (
                                <div className="faq-item" key={index}>
                                    <details>
                                        <summary>
                                            <h3>{item.question}</h3>
                                            <div className="faq-icon">
                                                <i className="fas fa-plus"></i>
                                            </div>
                                        </summary>
                                        <div className="faq-answer">
                                            {item.answer}
                                        </div>
                                    </details>
                                </div>
                            ))}

                            {/* Empty state for more categories if needed */}
                            <div style={{ marginTop: '3rem', borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
                                <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                                    More questions are added regularly based on member feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
