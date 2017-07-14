import React from 'react';
import About from './About';
import Header from './Header';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './Footer';
import Contact from './Contact';

export default () => {

  return (
    <div>
        <Header />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}