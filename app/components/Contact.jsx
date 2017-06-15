'use strict';

import React from 'react';
import { Link } from 'react-router';
import Logos from './Logos';

export default class Contact extends React.Component {

    render() {
        return (
            <div>
                <div className='banner' id='contact'>
                    <h1 className='banner-title'>CONTACT ME</h1>
                </div>
                <div id='contact-content'>
                    <a className='btn' href='/resume' target='blank'>Resume</a>
                    <p id='contact-text'>Interested in working with me? Check out my GitHub and connect with me through LinkedIn or email!</p>
                    <Logos />
                </div>
            </div>
        )
    }
}