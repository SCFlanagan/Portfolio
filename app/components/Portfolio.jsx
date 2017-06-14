import React from 'react';
import Project from './Project';

export default class MyNavbar extends React.Component {

    render() {
        return (
            <div id='portfolio'>
                <div className='banner'>
                    <h1 className='banner-title'>PORTFOLIO</h1>
                </div>
                <Project 
                    title='Where in the World'
                    firstPicId='wiw-pic1'
                    secondPicId='wiw-pic2'
                    firstP='A solo project, this application is a game designed to test your knowledge of geographical locations and landmarks throughout the world using street views and maps from the Google Maps API.'
                    secondP='Created with Node, Express, React, Redux, PostgreSQL, Sequelize, HTML, CSS, Bootstrap'
                    firstLink='https://where-in-world.herokuapp.com'
                    secondLink='https://github.com/SCFlanagan/Where-in-the-World'
                />
                <Project 
                    title=''
                    firstPicId=''
                    secondPicId=''
                    firstP=''
                    secondP=''
                    firstLink=''
                    secondLink=''
                />
                <Project 
                    title=''
                    firstPicId=''
                    secondPicId=''
                    firstP=''
                    secondP=''
                    firstLink=''
                    secondLink=''
                />
            </div>
        )
    }
}