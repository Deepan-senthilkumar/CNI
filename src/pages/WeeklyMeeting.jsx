import React, { useEffect } from 'react';
import '../assets/css/weekly-meeting-premium.css';

const Counter = ({ target, duration }) => {
    const [count, setCount] = React.useState(0);
    const [started, setStarted] = React.useState(false);
    const countRef = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started) {
                setStarted(true);
            }
        }, { threshold: 0.1 });

        if (countRef.current) observer.observe(countRef.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;

        let start = 0;
        const speed = duration / target;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= target) clearInterval(timer);
        }, speed);

        return () => clearInterval(timer);
    }, [started, target, duration]);

    return <span ref={countRef}>{count}</span>;
};

const WeeklyMeeting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-wm').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="weekly-meeting-page">
            {/* Hero Section */}
            <section className="wm-hero">
                <div className="container">
                    <div className="wm-hero-content animate-wm">
                        <h1>Weekly Chapter Meeting</h1>
                        <p>The heartbeat of the CNI ecosystem, where structured networking meets professional excellence.</p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="wm-overview">
                <div className="container">
                    <div className="wm-card animate-wm">
                        <h2>Chapter Dynamics</h2>
                        <p>
                            Each CNI Chapter maintains a strategic strength of <strong>80 Professionals</strong>.
                            This ecosystem consists of 60 Members representing varied construction industry segments
                            and 20 Builders, Architects, or Engineers seeking specialized products and services.
                        </p>
                        <div className="wm-stats-grid">
                            <div className="wm-stat-item">
                                <h3><Counter target={60} duration={1500} /></h3>
                                <p>Industry Members</p>
                            </div>
                            <div className="wm-stat-item">
                                <h3><Counter target={20} duration={1500} /></h3>
                                <p>Architects & Builders</p>
                            </div>
                            <div className="wm-stat-item">
                                <h3><Counter target={80} duration={1500} /></h3>
                                <p>Total Strength</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meeting Protocols */}
            <section className="wm-protocol-section">
                <div className="container">
                    <div className="section-title animate-wm">
                        <h2>Meeting Fundamentals</h2>
                        <p>Structured guidelines ensuring every minute generates value for our members.</p>
                    </div>

                    <div className="wm-grid">
                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-calendar-alt"></i>
                            <h3>Regularity</h3>
                            <p>Meetings are organized weekly on weekdays or weekends, as determined by the Chapter CEO and Core Committee.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-hotel"></i>
                            <h3>Premium Venues</h3>
                            <p>Held in banquet facilities of Star Rated Hotels. Costs are shared transparently among members and visitors.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-users"></i>
                            <h3>Active Networking</h3>
                            <p>Every meeting is preceded by a 30-minute high-energy networking session to foster personal connections.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-envelope-open-text"></i>
                            <h3>Invitation Protocol</h3>
                            <p>Circulated 5 days in advance via WhatsApp and Email, including details of the venue, time, and prominent Chief Guests.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-chair"></i>
                            <h3>Professional Setup</h3>
                            <p>Conference or U-Type seating arrangements with designated Head Table and prominent Chapter Banners.</p>
                        </div>

                        <div className="wm-info-box animate-wm">
                            <i className="fas fa-user-clock"></i>
                            <h3>Perfect Attendance</h3>
                            <p>Mandatory registration 30 minutes prior to the start time. Presence is recorded physically at the Front Desk.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Run Order */}
            <section className="wm-run-order">
                <div className="container">
                    <div className="section-title animate-wm">
                        <h2>Meeting Run Order</h2>
                        <p>A rigorous timeline designed for maximum efficiency.</p>
                    </div>

                    <div className="timeline-container animate-wm">
                        <div className="timeline-item">
                            <h4>Procedures & Prayers</h4>
                            <p>Starts with a Silent Prayer and the ceremonial garlanding of the Meeting Chairman by the Chapter CEO.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Welcome & Pledge</h4>
                            <p>Welcome Note by the Secretary followed by the CNI Pledge led by the Chapter CEO.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Inductions</h4>
                            <p>New member introductions and official badge pinning ceremony.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Keynote Session</h4>
                            <p>External Speaker presentations (10-15 minutes) on industry innovations or professional growth.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Member & Visitor Pitch</h4>
                            <p>Fast-paced 45-second self-introductions for members and 30-second slots for visitors.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Referrals & Business</h4>
                            <p>A dedicated 30-minute session for sharing referrals, generating ASKs, and gratitude notes.</p>
                        </div>
                        <div className="timeline-item">
                            <h4>Closing Protocols</h4>
                            <p>Recognitions, Vote of Thanks, and Birthday/Anniversary celebrations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="wm-awards">
                <div className="container">
                    <div className="section-title animate-wm">
                        <h2>Recognition & Excellence</h2>
                        <p>Celebrating the contributors who drive our community forward.</p>
                    </div>

                    <div className="awards-grid">
                        <div className="award-card animate-wm">
                            <i className="fas fa-medal"></i>
                            <h3>Weekly Awards</h3>
                            <p>Top Referrals, Max Visitors, Best Intro, and One-to-One Champions are honored every week.</p>
                        </div>
                        <div className="award-card animate-wm">
                            <i className="fas fa-trophy"></i>
                            <h3>Star of the Chapter</h3>
                            <p>Awarded monthly to the highest Giver within the ecosystem.</p>
                        </div>
                        <div className="award-card animate-wm">
                            <i className="fas fa-crown"></i>
                            <h3>Captain & Ambassador</h3>
                            <p>Recognizing the Best Meeting Chairman and Top Visitor Invitee of the month.</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default WeeklyMeeting;
