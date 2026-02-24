import React from 'react';
import { useNavigate } from 'react-router-dom';
import eventImg2 from '../assets/images/premium_banner_image_1770810202351.png';
import eventImg3 from '../assets/images/premium_about_cni_1770813891769.png';
import eventImg4 from '../assets/images/Madurai.png';

const Events = () => {
    const navigate = useNavigate();

    return (
        <section id="events">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Networking Events</h2>
                </div>
                <div className="event-grid">
                    {/* Event 1 */}
                    <div className="event-card animate-on-scroll" onClick={() => navigate('/event-detail/founders-meetup')} style={{ cursor: 'pointer' }}>
                        <div className="event-image">
                            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                                alt="Chennai Central Chapter: Founders Meetup" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Business Growth</span>
                            <h3>Chennai Central Chapter: Founders Meetup</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 07:30 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> Hotel Savera</span>
                            </div>
                            <button className="cta-button">Read More</button>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="event-card animate-on-scroll" onClick={() => navigate('/event-detail/coimbatore-expo')} style={{ cursor: 'pointer' }}>
                        <div className="event-image">
                            <img src={eventImg2} alt="Construction Expo" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Innovation</span>
                            <h3>Coimbatore Innovation Expo 2024</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 10:00 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> CODISSIA Complex</span>
                            </div>
                            <button className="cta-button">Read More</button>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="event-card animate-on-scroll" onClick={() => navigate('/event-detail/leadership-summit')} style={{ cursor: 'pointer' }}>
                        <div className="event-image">
                            <img src={eventImg3} alt="Leadership Seminar" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Leadership</span>
                            <h3>Annual Construction Leadership Summit</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 09:00 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> The Residency</span>
                            </div>
                            <button className="cta-button">Read More</button>
                        </div>
                    </div>

                    {/* Event 4 */}
                    <div className="event-card animate-on-scroll" onClick={() => navigate('/event-detail/business-meet')} style={{ cursor: 'pointer' }}>
                        <div className="event-image">
                            <img src={eventImg4} alt="Madurai Infrastructure Expo" />
                        </div>
                        <div className="event-content">
                            <span className="event-category">Infrastructure</span>
                            <h3>Madurai Infrastructure & Real Estate Expo</h3>
                            <div className="event-meta">
                                <span><i className="fas fa-clock"></i> 11:00 AM</span>
                                <span><i className="fas fa-map-marker-alt"></i> Madurai Trade Center</span>
                            </div>
                            <button className="cta-button">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;
