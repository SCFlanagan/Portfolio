'use strict';

import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Logos from './Logos';

export default function(props) {
    return (
      <div id="footer">
        <Logos />
        <a target='blank' href='https://github.com/SCFlanagan/Personal-Website'>
          <p className='created'>Site Created By: Susan Flanagan</p>
          </a>
      </div>
    )
}

