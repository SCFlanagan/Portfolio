import React from 'react';
import { Link } from 'react-router';

export default class MyNavbar extends React.Component {

    render() {
        return (
            <div id='home'>
                <div id='header-content'>
                    <h1>Susan Flanagan</h1>
                    <h2>Sofware Engineer</h2>
                    <div id='view-work'>View Work</div>
                </div>
            </div>
        )
    }
}