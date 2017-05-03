import React from 'react';
import { Jumbotron, Col, Button } from 'react-bootstrap';
import BackgroundItem from './BackgroundItem'

export default () => {

  return (
      <div>
        <Jumbotron className='header' id='header'>
            <h1 id='header-head'>Susan Flanagan</h1>
            <h3 id='header-text'>Software Engineer</h3>
        </Jumbotron>
        <div className='jumbo line bio'>
            <h1 className='head'>Bio</h1>
            <Col lg={4} md={4} >
                <p className='bios'>Allez, venez, Milord. Vous vous asseoir a ma table. Il fait si froid dehors. Ici c'est conforortable. Laissez-vous faire, Milord. Et prennent vos aises. Vous peinneseur mon coeur et vos pieds sur une chaise. Regardez-moi, Milord. Vous avez un air d'amour.</p>
            </Col>
            <Col lg={4} md={4}>
                <div id='bio-pic'></div>
            </Col>
            <Col lg={4} md={4} >
                <h1 className='mid'>Technologies</h1>
                    <h2 className='reg bold'>Proficient: </h2>
                    <p className='reg inline-block'>JavaScript</p>
                    <p className='reg inline-block'>Node.js</p>
                    <p className='reg inline-block'>Express.js</p>
                    <p className='reg inline-block'>React.js</p>
                    <p className='reg inline-block'>Redux</p>
                    <p className='reg inline-block'>PostgreSQL</p>
                    <p className='reg inline-block'>Sequelize</p>
                    <p className='reg inline-block'>CSS</p>
                    <p className='reg inline-block'>HTML</p>
                    <p className='reg inline-block'>Bootstrap</p>
                    <p className='reg inline-block'>Git</p>

                    <h2 className='reg bold'>Familiar: </h2>
                    <p className='reg inline-block'>jQuery</p>
                    <p className='reg inline-block'>SASS/SCSS</p>
                    <p className='reg inline-block'>Firebase</p>
                    <p className='reg inline-block'>• Socket.io</p>
            </Col>
        </div>

        

        <div>
            <div className='title'>
                <h1 className='head project-title' >Projects</h1>
            </div>
            <div className='line'>
                <div className='projects'>
                    <Col lg={6} md={6}>
                        <h3 className='mid project-head'>Where in the World</h3>
                        <p className='reg'>Solo Project</p>
                        <p className='reg'>Used Node/Express, React-Redux, PostgreSQL, Sequelize, HTML, CSS, Bootstrap</p>
                        <p className='reg'>Play this travel game using google maps api.</p>
                        <a className='site link' href='where-in-world.herokuapp.com'>Play the Game</a>
                        <span className='reg'> | </span>
                        <a className='code link' href='https://github.com/SCFlanagan/Where-in-the-World'>View the Code</a>
                    </Col>
                    <Col lg={6} md={6}>
                        <div id='wiw-pic1' className='screenshots'></div>
                        <div id='wiw-pic2' className='screenshots'></div>
                    </Col>
                </div>

                <div className='projects'>
                    <Col lg={6} md={6}>
                        
                        <div id='nyu-pic1' className='screenshots'></div>
                        <div id='nyu-pic2' className='screenshots'></div>
                    </Col>
                    <Col lg={6} md={6}>
                        <h3 className='mid project-head'>Nyuyoku</h3>
                        <p className='reg'>Group Project</p>
                        <p className='reg'>Used Node, Express, React, Redux, PostgreSQL, Sequelize, Firebase, HTML, SCSS, Bootstrap</p>
                        <p className='reg'>Real-time, multiplayer game based on the board game Machi-Koro.</p>
                        <a className='site link' href='nyuyoku.herokuapp.com'>Visit Project</a>
                        <span className='reg'> | </span>
                        <a className='code link' href='https://github.com/nyuyoku'>View Code</a>
                    </Col>
                </div>

                <div className='projects'>
                    <Col lg={6} md={6}>
                        <h3 className='mid project-head'>Yahtzee</h3>
                        <p className='reg'>Solo Project</p>
                        <p className='reg'>Used Node/Express, React-Redux, HTML, CSS, Bootstrap</p>
                        <p className='reg'>Created an articial computer player to play against.</p>
                        <a className='site link' href='where-in-world.herokuapp.com'>Visit Project</a>
                        <span className='reg'> | </span>
                        <a className='code link' href='https://github.com/SCFlanagan/one-player-yahtzee'>View Code</a>
                    </Col>
                    <Col lg={6} md={6}>
                        <div id='y-pic1' className='screenshots'></div>
                        <div id='y-pic2' className='screenshots'></div>
                    </Col>
                </div>

                <div>
                    <h1 className='head'>Education</h1>
                    <BackgroundItem name='Fullstack Academy of Code' year='April 2017' details={['Immersive 3-month software development bootcamp', '50+ hours a week spent coding']} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0T_AFQhvuRPIA822vOdMIg7hDJdYasB-gPIoANCr4J6P0JzJRqQlgTZV'/>
                    <BackgroundItem name='University of Massachusetts Amherst' year='March 2012' details={['B.S. Wildlife and Fisheries Conservation', 'French Minor']} url='https://cdn.evbuc.com/eventlogos/85574/wordmark1blkmaroon.jpg'/>
                </div>

                <div>
                    <h1 className='head'>Experience</h1>
                    <BackgroundItem name='Doggone Fit' year='October 2013 - April 2016' details={['Managed the finances, scheduling, and introductory meetings of up to 10 clients at a time.', 'Created and implemented training plans for individual dogs.', 'https://www.instagram.com/dogdazeafternoons/']} url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dog_Silhouette_01.svg/2000px-Dog_Silhouette_01.svg.png'/>
                    <BackgroundItem name='Operation Wallacea' year='July - August 2010' details={['Collected behavioral and physiological data using a variety of wildlife sampling techniques.', 'Data collection and management for 15 different wildlife conservation research projects.']} url='http://www.samosdiving.com/wp-content/uploads/2015/10/opwall-post.jpg'/>
                    <BackgroundItem name='Urban Wildlife Rehabilitation Wallacea' year='June - August 2011' details={['Fed orphaned baby racoons', 'Cared and aided in release']} 
                    url='http://farm8.static.flickr.com/7270/7418129800_378fd27e08_z.jpg'/>
                </div>
            </div>
        </div>
      </div>

  )
}