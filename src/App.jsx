import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import EventsPage from './pages/EventsPage';

import Contact from './pages/Contact';
import Membership from './pages/Membership';
import FAQ from './pages/FAQ';
import WeeklyMeeting from './pages/WeeklyMeeting';

// Import CSS
import './assets/css/styles.css';
import './assets/css/space-button.css';
import './assets/css/founder-premium.css';
import './assets/css/partners.css';
import './assets/css/gallery-premium.css';
import './assets/css/membership-premium.css';
import './assets/css/contact-premium.css';
import './assets/css/faq-premium.css';
import './assets/css/weekly-meeting-premium.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/weekly-meeting" element={<WeeklyMeeting />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
