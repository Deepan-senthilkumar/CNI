import React, { useState } from 'react';
import mainBannerImg from '../assets/images/banner_new_1770810321893.png';
import covaiImg from '../assets/images/covai.png';
import maduraiImg from '../assets/images/Madurai.png';
import erodeImg from '../assets/images/Erode.png';
import chennaiImg from '../assets/images/Chennai.png';
import thajaiImg from '../assets/images/Thajai.jpg';
import velloreImg from '../assets/images/velore.png';


const News = () => {
    const [mainContent, setMainContent] = useState({
        img: mainBannerImg,
        title: 'CHENNAI, INDIA',
        subtitle: 'Global Headquarters'
    });
    const [fade, setFade] = useState(false);

    const locations = [
        { img: covaiImg, name: 'COIMBATORE' },
        { img: maduraiImg, name: 'MADURAI' },
        { img: erodeImg, name: 'ERODE' },
        { img: chennaiImg, name: 'CHENNAI' },
        { img: thajaiImg, name: 'THANJAI' },
        { img: velloreImg, name: 'VELLORE' }
    ];

    const handleLocationClick = (loc) => {
        setFade(true);
        setTimeout(() => {
            setMainContent({
                img: loc.img,
                title: `${loc.name}, INDIA`,
                subtitle: 'Regional Office'
            });
            setFade(false);
        }, 400);
    };

    return (
        <section id="news">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <h2>Latest Industry News</h2>
                </div>
                {/* Global News / Location Style Layout */}
                <div className="news-hero-location animate-on-scroll">
                    <img
                        src={mainContent.img}
                        alt="Global Headquarters"
                        id="main-news-img"
                        style={{ opacity: fade ? 0.3 : 1, transition: 'opacity 0.4s ease' }}
                    />
                    <div className="location-overlay-hero">
                        <h3 id="main-news-title">{mainContent.title}</h3>
                        <span id="main-news-subtitle">{mainContent.subtitle}</span>
                    </div>
                </div>

                <div className="global-news-grid animate-on-scroll">
                    {locations.map((loc, index) => (
                        <div className="news-location-card" key={index} onClick={() => handleLocationClick(loc)}>
                            <img src={loc.img} alt={loc.name} />
                            <div className="location-card-text">
                                <h4>{loc.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
