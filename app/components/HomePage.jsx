import React from 'react';
import { Jumbotron, Col, Button } from 'react-bootstrap';
import BackgroundItem from './BackgroundItem'

export default () => {

  return (
      <div id="top">
        <Jumbotron className='header' id='header'>
            <h1 id='header-head'>Susan Flanagan</h1>
            <h3 id='header-text'>Software Engineer</h3>
        </Jumbotron>
        <div id="about" className='jumbo bio'>
            <div className='space-for-nav'></div>
            <h1 className='hello'>Hello</h1>
            <Col className='blank-bio' lg={4} md={4}></Col>
            <Col className='blank-bio' lg={4} md={4}>
                <div id='bio-pic'></div>
            </Col>
            <Col className='blank-bio' lg={4} md={4}></Col>
            <p>I am a <strong>full stack software engineer</strong> based in <strong>Brooklyn, NY</strong>. I have a degree in Wildlife Conservation from the <strong>University of Massachusetts Amherst</strong>. My passion and dedication to conservation has afforded me some amazing opportunities. </p><br></br>
            <p>I’ve had the chance to dodge fruit being thrown at me by endangered red uakari monkeys in the Amazon jungle, to induce a caiman to vomit so I could study its diet, and to traverse a stream, waders pulled up to my waist, sending electric shocks through the water to stun fish so I could record their measurements and take blood samples.</p><br></br>
            <p>While I am still dedicated to conservation, over the last couple of years a new passion has ignited in me to code. I am addicted to the problem-solving, the perpetual learning, and the satisfaction gleaned from creating something from nothing. I am excited by the ever-changing landscape of tech, the never-ending supply of things to learn, and, most of all, by its potential to positively change the world. This new passion has afforded me its own exciting experiences, like the high I felt when I lost a game of Yahtzee to an AI player I had built.</p><br></br>
            <p>I formalized my interest in code by attending <strong>Fullstack Academy</strong> in New York City. I am predominantly a JavaScript developer, but am eager and willing to learn new technologies and skills. I am particularly interested in writing game logic and creating intuitive and seamless user interfaces.</p><br></br>
        </div>

        <div className='jumbotron'>
            <div id="skills" className='banner'>
                <h1 className='banner-title'>SKILLS</h1>
                <div id='skill-section'>
                </div>
            </div>
        </div>

        <div id="portfolio" className='banner'>
            <h1 className='banner-title'>PORTFOLIO</h1>
        </div>
        
        <div>
            <div>
                <div className='projects' id='first-project'>
                    <Col lg={6} md={6}>
                        <h3 className='pt project-head'>Where in the World</h3>
                        <p className='reg project-item'>A game designed to test your knowledge of geographical locations and landmarks throughout the world using street views and maps from the Google Maps API.</p>
                        <p className='reg project-item'>Created with Node, Express, React, Redux, PostgreSQL, Sequelize, HTML, CSS, Bootstrap</p>
                        <p className='reg project-item'>Solo Project</p>
                        <a className='site link' href='https://where-in-world.herokuapp.com' target="_blank">Play the Game</a>
                        <span className='reg'> | </span>
                        <a className='code link' href='https://github.com/SCFlanagan/Where-in-the-World' target="_blank">View the Code</a>
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
                        <h3 className='pt project-head'>Nyuyoku</h3>
                        <p className='reg project-item'>Try to build the biggest city with this group project that reimagined the card game Machi Koro as a web application. Play up to three friends over the internet with this real-time, multiplayer game.</p>
                        <p className='reg project-item'>Created with Node, Express, React, Redux, PostgreSQL, Sequelize, Firebase, HTML, SCSS, Bootstrap.</p>
                        <a className='site link' href='http://nyuyoku.herokuapp.com' target="_blank">Play the Game</a>
                        <span className='reg'> | </span>
                        <a className='code link' href='https://github.com/nyuyoku' target="_blank">View Code</a>
                    </Col>
                </div>

                <div className='projects'>
                    <Col lg={6} md={6}>
                        <h3 className='pt project-head'>Rummy</h3>
                        <p className='reg'>Solo Project</p>
                        <p className='reg'>Used Node, Express, React, Redux, HTML, CSS, Bootstrap</p>
                        <p className='reg'>Play this digitized version of Rummy against an AI player.</p>
                        <a className='site link' href='https://gametown.herokuapp.com' target="_blank">Play the Game</a>
                        <span className='reg'> | </span>
                        <a className='code link' href='https://github.com/SCFlanagan/Rummy' target="_blank">View Code</a>
                    </Col>
                    <Col lg={6} md={6}>
                        <div id='r-pic1' className='screenshots'></div>
                        <div id='r-pic2' className='screenshots'></div>
                    </Col>
                </div>

            </div>
            {/*}
            <div id='section-three'>
                <div className='line jumbo'>
                    <div className='space-for-nav'></div>
                    <h1 className='head'>Education</h1>
                    <BackgroundItem name='Fullstack Academy of Code' year='April 2017' details={['Immersive 3-month software development bootcamp', '50+ hours a week spent coding']} url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0T_AFQhvuRPIA822vOdMIg7hDJdYasB-gPIoANCr4J6P0JzJRqQlgTZV'/>
                    <BackgroundItem name='University of Massachusetts Amherst' year='March 2012' details={['B.S. Wildlife and Fisheries Conservation', 'French Minor']} url='https://cdn.evbuc.com/eventlogos/85574/wordmark1blkmaroon.jpg'/>
                </div>

                <div id='section-four'>
                        <div className='space-for-nav'></div>
                        <h1 className='head'>Experience</h1>
                        <BackgroundItem className='exp' name='Doggone Fit' year='October 2013 - April 2016' details={['Managed the finances, scheduling, and introductory meetings of up to 10 clients at a time.', 'Created and implemented training plans for individual dogs.', 'Maintained a social media page to update clients on their pets\' activities', 'https://www.instagram.com/dogdazeafternoons/']} url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dog_Silhouette_01.svg/2000px-Dog_Silhouette_01.svg.png'/>
                        <BackgroundItem className='exp' name='Quality Inn' year='November 2013 - June 2014' details={['Provided customer service, mediated guest issues, and oversaw operations of the hotel as the sole employee on the evening shift']} url='https://static.wixstatic.com/media/eaba67_fb4605685c5449879ed5546c9ef35bc9~mv2.jpg'/>
                        <BackgroundItem className='exp' name='Urban Wildlife Rehabilitation Wallacea' year='June - August 2011' details={['Aided in the rehabilitation and release of orphaned or injured raccoons, squirrels, skunks, and groundhogs.', 'Cleaned, vaccinated, hand-fed, and administered medications to animals.']} 
                        url='http://farm8.static.flickr.com/7270/7418129800_378fd27e08_z.jpg'/>
                        <BackgroundItem className='exp' name='Operation Wallacea' year='July - August 2010' details={['Collected behavioral and physiological data using a variety of wildlife sampling techniques.', 'Data collection and management for 15 different wildlife conservation research projects in the Amazon River basin.']} url='http://www.samosdiving.com/wp-content/uploads/2015/10/opwall-post.jpg'/>
                </div>
            </div>
            */}
        </div>
      </div>

  )
}