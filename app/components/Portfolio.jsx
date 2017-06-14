import React from 'react';
import Project from './Project';

export default class MyNavbar extends React.Component {

    render() {
        return (
            <div id='portfolio'>
                <div className='banner'>
                    <h1 className='banner-title'>PORTFOLIO</h1>
                </div>
                <Project />
                <Project />
                <Project />
            </div>
        )
    }
}