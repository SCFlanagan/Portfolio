'use strict';

import React from 'react';
import Project from './Project';

export default class MyNavbar extends React.Component {

    render() {
        return (
            <div>
                <div className='banner' id='portfolio'>
                    <h1 className='banner-title'>PORTFOLIO</h1>
                </div>
                <Project 
                    title='Where in the World'
                    firstPicId='wiw-pic1'
                    secondPicId='wiw-pic2'
                    firstP='This is a game designed to test your knowledge of geographical locations and landmarks throughout the world using street views and maps from the Google Maps API. This was a solo project.'
                    secondP='Created with JavaScript (ES6), Node, Express, React, Redux, PostgreSQL, Sequelize, HTML, CSS, Bootstrap, Webpack, Babel, AJAX, and the Google Maps API.'
                    firstLink='https://where-in-world.herokuapp.com'
                    secondLink='https://github.com/SCFlanagan/Where-in-the-World'
                    class1='left project-section'
                    class2='right project-section'
                />
                <Project 
                    title='Nyuyoku'
                    firstPicId='nyu-pic1'
                    secondPicId='nyu-pic2'
                    firstP='Try to build the biggest city with this group project that reimagined the card game Machi Koro as a web application. Play up to three friends over the internet with this real-time, multiplayer game.'
                    secondP='Created with JavaScript (ES6), Node, Express, React, Redux, PostgreSQL, Sequelize, Firebase, HTML, SCSS, Bootstrap, Webpack, Babel, and AJAX. Tests written in Mocha.'
                    firstLink='http://nyuyoku.herokuapp.com'
                    secondLink='https://github.com/nyuyoku'
                    class1='right project-section'
                    class2='left project-section'
                />
                <Project 
                    title='Rummy'
                    firstPicId='r-pic1'
                    secondPicId='r-pic2'
                    firstP='This project is a recreation of the classic card game Rummy. It features an AI player to play against, a hand of cards that can be dragged and sorted, and a scoreboard that keeps track of multiple rounds. This was a solo project.'
                    secondP='Created with JavaScript (ES6), Node, Express, React, HTML, CSS, Bootstrap, Webpack, Babel.'
                    firstLink='https://gametown.herokuapp.com'
                    secondLink='https://github.com/SCFlanagan/Rummy'
                    class1='left project-section'
                    class2='right project-section'
                />
            </div>
        )
    }
}