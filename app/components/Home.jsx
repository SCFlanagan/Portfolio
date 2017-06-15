import React from 'react';
import About from './About';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './Footer';
import ContactHeader from './ContactHeader';

export default () => {

  return (
    <div>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <ContactHeader />
    </div>
  )
}