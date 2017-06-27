'use strict';

import React from 'react';

export default class MyNavbar extends React.Component {

    render() {
        return (
            <div>
                <div className='banner' id='skills'>
                    <h1 className='banner-title'>SKILLS</h1>
                </div>
                <h3 className='tech-title'>PROFICIENT</h3>
                <div className='tech-section'>
                    <h5 className='tech'>JavaScript (& ES6)</h5>
                    <h5 className='tech'>Node</h5>
                    <h5 className='tech'>Express</h5>
                    <h5 className='tech'>React</h5>
                    <h5 className='tech'>Redux</h5>
                    <h5 className='tech'>PostgreSQL</h5>
                    <h5 className='tech'>Sequelize</h5>
                    <h5 className='tech'>HTML</h5>
                    <h5 className='tech'>CSS</h5>
                    <h5 className='tech'>SASS/SCSS</h5>
                    <h5 className='tech'>jQuery</h5>
                    <h5 className='tech'>Bootstrap</h5>
                    <h5 className='tech'>Git</h5>
                    <h5 className='tech'>AJAX</h5>
                    <h5 className='tech'>Babel</h5>
                </div>
                <h3 className='tech-title'>KNOWLEDGEABLE</h3>
                <div className='tech-section'>
                    <h5
                    className='tech'>Firebase</h5>
                    <h5 className='tech'>Socket.io</h5>
                    <h5 className='tech'>Mocha</h5>
                    <h5 className='tech'>Jasmine</h5>
                    <h5 className='tech'>Webpack</h5>
                    <h5 className='tech'>JSON</h5>
                    <h5 className='tech'>Photoshop</h5>
                </div>
            </div>
        )
    }
}