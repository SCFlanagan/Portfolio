'use strict';

import React from 'react';
import ContactNavbar from '../components/ContactNavbar';
import ContactHeader from '../components/ContactHeader';
import ContactPage from '../components/ContactPage';
import ContactFooter from '../components/ContactFooter';

export default function(props) {

    return (
      <div>
        <ContactNavbar />
        <ContactHeader /> 
        <ContactPage />    
        <ContactFooter /> 
      </div>
    )

}