'use strict';

import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';

export default function(props) {

    return (
      <div id='body'>
        <Navbar />
        <Home />  
        <Footer />   
      </div>
    )

}