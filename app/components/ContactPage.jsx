'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ContactPage extends React.Component {

    render() {
        return (
            <div>
                <a className='btn' href='/resume' target='blank'>Resume</a>
                <p>Interested in working with me? Connect with me on LinkedIn, email, or fill out the form below!</p>
            </div>
        )
    }
}