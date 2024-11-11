// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Service from '../components/Service';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
        <WhyUs />
        <Testimonial />
        <CTA />
        <FAQ />
      <Service />
      <Footer />
    </div>
  );
}

export default Home;
