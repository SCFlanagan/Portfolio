'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ContactHeader extends React.Component {

    render() {
        return (
            <div id='contact-header' className='header'>
                <div className='header-content'>
                    <h1 className='contact-title'>Contact Me</h1>
                </div>
            </div>
        )
    }
}