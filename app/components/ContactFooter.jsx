'use strict';

import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';


export default function(props) {
    return (
      <div id='contact-footer'>
        <Link to='https://github.com/SCFlanagan/Personal-Website'>
          <p className='contact-created'>Site Created By: Susan Flanagan</p>
        </Link>
      </div>
    )
}