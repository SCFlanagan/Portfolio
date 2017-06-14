import React from 'react';
import { Link } from 'react-router';

export default class MyNavbar extends React.Component {

    render() {
        return (
            <div id='home' className='header'>
                <div className='header-content'>
                    <h1 className='header-title'>Susan Flanagan</h1>
                    <h2>Sofware Engineer</h2>
                    <a id='view-work' href="#portfolio">View Work</a>
                </div>
            </div>
        )
    }
}