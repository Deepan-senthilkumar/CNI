import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';
import '../assets/css/events-premium.css';

// Import images - Reusing available premium assets or placeholders
import heroBg from '../assets/images/premium_hero_banner_1770813875811.png';
import eventImg1 from '../assets/images/premium_banner_image_1770810202351.png';
import eventImg2 from '../assets/images/premium_about_cni_1770813891769.png';
import eventImg3 from '../assets/images/premium_construction_banner_1770810244381.png';
import cniLogo from '../assets/images/logog.png';

const EventsPage = () => {

    useEffect(() => {
        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="events-page-arch">


            {/* 2. Date & Venue Banner */}
            <section className="arch-date-banner animate-on-scroll">
                <div className="container">
                    <div className="date-banner-content">
                        <h2>Successful Chennai's Construction Elite</h2>
                        <div className="date-time-box">
                            <h3>Tuesday, Aug 26, 2025</h3>
                            <p>9.30 AM - 6.00 PM</p>
                        </div>
                        <div className="stats-highlight">
                            <span>40 Architects</span> | <span>20 Premium Stalls</span>
                        </div>
                        <div className="venue-pill">
                            <i className="fas fa-map-marker-alt"></i> The Residency Towers, T. Nagar, Chennai
                        </div>
                    </div>
                </div>
            </section>

            {/* New Upcoming Events Section */}
            <section className="upcoming-events-section animate-on-scroll">
                <div className="container">
                    <div className="section-header">
                        <h2>Networking Events</h2>
                    </div>
                    <div className="event-grid">
                        {/* Event 1 */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Networking Event" />
                                <div className="event-date-tag">
                                    <span className="day">15</span>
                                    <span className="month">Mar</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <span className="event-category">Business Growth</span>
                                <h3>Chennai Central Chapter: Founders Meetup</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 07:30 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> Hotel Savera</span>
                                </div>
                                <button className="cta-button">Register Now</button>
                            </div>
                        </div>

                        {/* Event 2 */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Construction Expo" />
                                <div className="event-date-tag">
                                    <span className="day">22</span>
                                    <span className="month">Mar</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <span className="event-category">Innovation</span>
                                <h3>Coimbatore Innovation Expo 2024</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 10:00 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> CODISSIA Complex</span>
                                </div>
                                <button className="cta-button">Register Now</button>
                            </div>
                        </div>

                        {/* Event 3 */}
                        <div className="event-card">
                            <div className="event-image">
                                <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Leadership Summit" />
                                <div className="event-date-tag">
                                    <span className="day">05</span>
                                    <span className="month">Apr</span>
                                </div>
                            </div>
                            <div className="event-content">
                                <span className="event-category">Leadership</span>
                                <h3>Annual Construction Leadership Summit</h3>
                                <div className="event-meta">
                                    <span><i className="far fa-clock"></i> 09:00 AM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> The Residency</span>
                                </div>
                                <button className="cta-button">Register Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Architects Presence */}
            <section className="arch-presence-section">
                <div className="container">
                    <div className="section-title-arch animate-on-scroll">
                        <h2><span className="highlight-text-bg">Architectural</span> Presence at the Event</h2>
                    </div>
                    <div className="presence-grid animate-on-scroll">
                        <div className="presence-card">
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Morning Session" />
                        </div>
                        <div className="presence-card">
                            <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Afternoon Session" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Arch Connect Exists */}
            <section className="why-arch-section">
                <div className="container">
                    <div className="section-title-arch animate-on-scroll">
                        <h2>Why <span className="highlight-text-bg">ARCH CONNECT</span> Exists</h2>
                    </div>

                    <div className="why-arch-grid">
                        {/* Card 1 */}
                        <div className="why-card animate-on-scroll">
                            <div className="card-number">1</div>
                            <h3>For CNI Members</h3>
                            <p className="card-motto">"Your Network, Your Net Worth!"</p>
                            <p>Architects play a pivotal role in the construction industry. This project specifically targets ARCHITECTS, offering an opportunity to pitch your business directly to them. We created this platform to facilitate direct face-to-face interaction, reducing the cold calling effort and maximizing conversion potential.</p>
                            <button className="btn-details">Read More</button>
                        </div>

                        {/* Card 2 */}
                        <div className="why-card animate-on-scroll">
                            <div className="card-number">2</div>
                            <h3>For Architects</h3>
                            <p className="card-motto">"Quality inputs for Superior output"</p>
                            <p>You realize that sourcing reliable vendors is crucial for project success. This event brings 40 top-tier vendors under one roof. These networking interactions ensure you have multiple options for every project requirement, ensuring quality, cost-effectiveness, and timely delivery.</p>
                            <button className="btn-details">Read More</button>
                        </div>

                        {/* Card 3 */}
                        <div className="why-card animate-on-scroll">
                            <div className="card-number">3</div>
                            <h3>For the Industry</h3>
                            <p className="card-motto">"Bridging Gaps, Building Future"</p>
                            <p>Bringing the giants of construction under one roof fosters collaboration, innovation, and trust. ARCH CONNECT is more than an event; it's a movement to streamline the industry's supply chain and create an ecosystem of mutual growth and support for the next decade.</p>
                            <button className="btn-details">Read More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Construction Future Split */}
            <section className="construction-future-section">
                <div className="container future-grid">
                    <div className="future-image animate-on-scroll">
                        <img src={eventImg1} alt="CNI Event Collage" />
                    </div>
                    <div className="future-content animate-on-scroll">
                        <img src={cniLogo} alt="CNI Logo" className="future-logo" />
                        <h2>Construction India's <br />Construction Future</h2>
                        <p className="future-tagline">The Nation's Premier Construction Network - 50+ Chapters Strong</p>
                        <p>For over a decade, Construction Network India (CNI) has been the steel framework supporting India's construction revolution. From Chennai's bustling commercial districts to Mumbai's towering residential complexes, CNI's 50+ specialized chapters have orchestrated partnerships worth over ₹10,000 crores in successful project completions.</p>
                        <p><strong>We don't just connect businesses—we architect the relationships that build nations.</strong></p>
                        <p>As India's most trusted construction ecosystem, CNI has consistently delivered what others only promise: direct access to decision-makers, quality-verified partnerships, and measurable business growth. Our network includes the country's most influential architects, premier manufacturers, trusted contractors, and innovative solution providers who collectively shape India's skyline.</p>

                        <button className="btn-future">Fetch your invites here</button>
                    </div>
                </div>
            </section>



            {/* 7. Footer Sponsors */}
            <section className="arch-footer-section">
                <div className="arch-sponsors">
                    <div className="container">
                        <div className="sponsors-grid">
                            {/* Sponsor items removed */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
