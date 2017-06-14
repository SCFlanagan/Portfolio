'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ContactPage extends React.Component {

    render() {
        return (
            <div>
                <a className='btn' href='/resume' target='blank'>Resume</a>
                <p>Interested in working with me? Connect with me on LinkedIn, email, or fill out the form below!</p>

                <div className='logos'>

                    <a href='https://www.linkedin.com/in/susan-flanagan-05b26a139/' target='_blank'><img className='contact-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'/></a>

                    <a href='https://github.com/SCFlanagan' target='_blank'><img className='contact-logo' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT5sI1s4_YLs5DLf6ETpKdXNFl700fVMHMlYulnjhOmWsg6NU-C'/></a>
                    
                    <a href='mailto:SusanFlanagan7@gmail.com'><img className='contact-logo' src='http://www.freeiconspng.com/uploads/email-icon-23.png'/></a>

                </div>

            </div>
        )
    }
}