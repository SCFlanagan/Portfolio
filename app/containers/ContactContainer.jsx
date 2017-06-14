'use strict';

import React from 'react';
import Navbar from '../components/Navbar';
import ContactHeader from '../components/ContactHeader';
import ContactPage from '../components/ContactPage';
import ContactFooter from '../components/ContactFooter';

export default function(props) {

    return (
      <div>
        <Navbar />
        <ContactHeader /> 
        <ContactPage />    
        <ContactFooter /> 
      </div>
    )

}