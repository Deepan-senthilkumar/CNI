import React, { useEffect } from 'react';
import '../assets/css/faq-premium.css';

const FAQ = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqData = [
        {
            question: "Are Members allowed to transfer between Chapters?",
            answer: "CNI Forum aims at generating and building a long-term Business relationship for its members and hence does not prefer Members to change or transfer between chapters without valid reasons. However, Members may be allowed to move to other Chapters, if they have a legitimate reason for their request, such as relocation of business. The Member in such a case, is expected to appoint a suitable replacement for themselves in their Chapter, who would represent the specific business segment. The Member who has requested for transfer will however need to submit a written request and gain the approval of the respective Regional Director of their existing chapter and the chapter to which they have applied for transfer."
        },
        {
            question: "Are Members allowed to change their Business segment in the CNI Chapter?",
            answer: "In the event of a valid reason, such as a new business venture of the Member, he/she may be permitted a change of Business classification. Members who wish to change their classification must submit a new membership application and obtain approval from the Chapter CEO and Regional Director for the classification change."
        },
        {
            question: "Is absence for Medical reasons allowed in CNI Forum meetings?",
            answer: "CNI Forum chapter meetings permit leaves of absence only for valid reasons such as medical ailments. However, a Member taking leave will have to depute a suitable substitute from his organization and inform the Chapter committee accordingly, prior to the Chapter meeting schedules."
        },
        {
            question: "Are CNI Members allowed to visit other Chapters?",
            answer: "Members are allowed to visit other chapters after gaining approvals of the respective Chapter CEOs, as 'Visiting Members'. The Members are permitted to visit other chapters up to a maximum of two times. However, the Visiting Member should ascertain of there is any Member in the Chapter whose category conflicts with their own business segment. The Chapter CEO will have the authority over giving a Visiting Member the opportunity to speak and represent his business during the Meeting."
        },
        {
            question: "Does CNI Chapter have a size limit and for what reason?",
            answer: "CNI promotes Business connects among a Group of Construction Industry Professionals, with maximum of Members in a single chapter."
        },
        {
            question: "What is the actual role of a Core Committee?",
            answer: "CNI Chapters need effective methods to screen and validate aspirants in order to maintain their quality and credibility. It remains the task of the Core committee to interview the aspiring applicants, gain a fair understanding of his/her commitment to the Chapter, Professionalism and Business segment being represented. It is the Core committee that will decide and notify the applicant of the status of their application. Further, the committee will also evaluate the Member's performance metrics on the basis of the regular attendance, participation, contribution and professionalism with reference to the Chapter. In case of a written complaint against a Member, the committee will review the situation according to the policies stated herewith and if not resolved, will escalate to the respective Regional Director and Core Committee to open the respective Member's Business classification for a new aspirant."
        },
        {
            question: "Does CNI Forum offer provision for Refund of fees?",
            answer: "CNI Forum holds a clear stated policy of No Refund for the fees paid. If a Member chooses to leave a Chapter, it happens to be their choice. On the other hand, if a Member is terminated by the Chapter Core Committee for reasons such as the Member not fulfilling the commitments that they agreed to; still the reasons for the termination will be clearly explained and the fees paid are still not refundable."
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
                                <p style={{ color: '#000', fontStyle: 'italic' }}>
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
