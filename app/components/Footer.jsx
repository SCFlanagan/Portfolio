'use strict';

import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';


export default function(props) {
    return (
      <div className='footer'>
          <a target='blank' href='https://github.com/SCFlanagan/Portfolio'>
          <p className='contact-created'>Site Created By: Susan Flanagan</p>
          </a>
      </div>
    )
}