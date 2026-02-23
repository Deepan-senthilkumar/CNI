import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

import Hero from '../components/Hero';
import Founder from '../components/Founder';
import Stats from '../components/Stats';
import About from '../components/About';
import Events from '../components/Events';

import Advantage from '../components/Advantage';

import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';

const Home = () => {
    useScrollAnimation();

    return (
        <main>
            <Hero />
            <Founder />
            <Stats />
            <About />
            <Events />

            <Advantage />

            <Testimonials />
            <Gallery />
        </main>
    );
};

export default Home;
