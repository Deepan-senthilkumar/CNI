import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Import CSS
import './assets/css/styles.css';
import './assets/css/space-button.css';
import './assets/css/founder-premium.css';
import './assets/css/partners.css';
import './assets/css/gallery-premium.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
