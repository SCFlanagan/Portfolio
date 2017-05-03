'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import HomePage from './components/HomePage'
import BackgroundItem from './components/BackgroundItem'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AppContainer from './containers/AppContainer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={HomePage} />
        <Route path="/background" component={BackgroundItem} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)





        {/*<Jumbotron className='jumbo' id='bio'>
            <h1 id='bio-head'>Bio</h1>
            <div id='bio-grid'>
                <Col lg={1.5} md={1.5} sm={1} >
                </Col>
                <Col lg={3} md={3} sm={4} >
                    <p className='bio-text'>Here's a short paragraph that my say some stuff about myself and experience and interests and blah blah blah, i'm so not looking forward to writing this shit. Hopefully I can pull something good out of my ass.</p>
                </Col>
                <Col lg={3} md={3} sm={4} >
                    <div id='bio-pic'></div>
                </Col>
                <Col lg={3} md={3} sm={4} >
                    <p className='bio-text'>Here's a short paragraph that my say some stuff about myself and experience and interests and blah blah blah, i'm so not looking forward to writing this shit. Hopefully I can pull something good out of my ass.Here's a short paragraph that my say some stuff about myself and experience and interests and blah blah blah, i'm so not looking forward to writing this shit. Hopefully I can pull something good out of my ass.</p>
                </Col>
                <Col lg={1.5} md={1.5} sm={1} >
                </Col>
            </div>
        </Jumbotron>
        <Jumbotron className='jumbo' id='tech'>
            <div id='tech-block'>
                <div id='tech-text'>
                    <h1 id='tech-head'>Technologies</h1>
                        <h2 id='tech-pro'>Proficient: </h2>
                        <p className='inline-block'>JavaScript</p>
                        <p className='inline-block'>Node.js</p>
                        <p className='inline-block'>Express.js</p>
                        <p className='inline-block'>React.js</p>
                        <p className='inline-block'>Redux</p>
                        <p className='inline-block'>PostgreSQL</p>
                        <p className='inline-block'>Sequelize</p>
                        <p className='inline-block'>CSS</p>
                        <p className='inline-block'>HTML</p>
                        <p className='inline-block'>Bootstrap</p>
                        <p className='inline-block'>Git</p>

                        <h2 id='tech-fam'>Familiar: </h2>
                        <p className='inline-block'>jQuery</p>
                        <p className='inline-block'>SASS/SCSS</p>
                        <p className='inline-block'>Firebase</p>
                        <p className='inline-block'>• Socket.io</p>
                </div>
                <h1 id='project-head'>Projects</h1>
            </div>
        </Jumbotron>
        <div id='yahtzee'>

        </div>
        {/*<Jumbotron className='jumbo my-container' id='yahtzee'>
            <h1>Yahtzee</h1>
            <p>Solo Project</p>
            <p>Designed an artificial computer player to play against.</p>
            <p>Technologies: Node.js, Express.js, React.js, Redux</p>
            <a href='nyuyoku.herokuapp.com'>Visit Project</a>
            <img src="https://images6.alphacoders.com/451/thumb-350-451028.jpg" />
        </Jumbotron>
        <Jumbotron className='jumbo' id='world'></Jumbotron>
        <Jumbotron className='jumbo' id='nyuyoku'></Jumbotron>
        <Jumbotron className='jumbo' id='background'></Jumbotron>
        <Jumbotron className='jumbo' id='content'></Jumbotron>
      </div> */}


























// .inline-block {
//     display: inline-block;
//     margin: 0 3vh;
// }

// #bio {
//     margin-bottom: 0;
//     color: #55614a;
//     background: #f9f8f9;
// }
// #bio-head {
//     height: 10vh;
//     margin-top: 0;
//     color: #ffe575;
//     text-shadow: 2px 3px #55614a;
//     margin-bottom: 3vh;
// }
// #bio-pic {
//     height: 70vh;
//     border: 2px solid black;
//     margin-left: auto;
//     margin-right: auto;
//     border-radius: 15px;
//     background-image: url('./horsebio.jpg');
//     background-size: cover;
//     background-position: center;
// }
// .bio-text {
//     margin-top: 3vh;
//     height: 70vh;
//     font-size: 2.5vh;
// }
// #bio-grid {
//     margin-top: 3vh;
//     margin-left: 10%;
// }


// #tech {
//     color: #55614a;
//     background: #f9f8f9;
// }
// #project-head{
//     color: #ffe575;
//     text-shadow: 1px 1px #55614a;
// }
// #tech-head {
//     color: #ffe575;
//     text-shadow: 1px 1px #55614a;
// }
// #tech-pro {
//     padding-bottom: 3vh;
//     color: #ffe575;
//     text-shadow: 1px 1px #55614a;
// }
// #tech-fam {
//     padding-bottom: 3vh;
//     color: #ffe575;
//     text-shadow: 1px 1px #55614a;
// }
// #tech-text {
//     height: 50vh;
//     width: 60%;
//     margin: -5vh auto 0 auto;
//     border-top: 3px solid #ffe575;
//     padding-top: 2vh;
// }

// #project-head {
//     padding: 10vh 0;
//     border-top: 3px solid #ffe575;
//     width: 60%;
//     margin: 10vh auto 0 auto;
// }


// .my-container {
//     position: relative;
//     overflow: hidden;
//     color: #5fbec0;
// }
// .my-container h1 {
//     position: relative;
//     z-index: 2;
//     font-size: 20vh;
//     width: 50%;
//     text-shadow: 1px 1px #f9f8f9;
// }
// .my-container p {
//     position: relative;
//     z-index: 3;
//     font-size: 2.5vh;
//     width: 50%;
// }
// .my-container a {
//     color: #de6f70;
//     font-size: 3vh;
//     position: relative;
//     z-index: 4;
//     font-size: 5vh;
//     font-weight: bold;
//     width: 50%;
//     margin-right: 50%;
//     top: 8vh;
// }
// .my-container img {
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: auto;
//     opacity: 0.6;
// }

// #yahtzee6 {
//     margin: -10vh auto;
// }



// #yahtzee4 {
//     background-image: url('https://images6.alphacoders.com/451/thumb-350-451028.jpg');
//     background-size: cover;
//     color: #f9f6d5;
// }

// #world {
//     background-image: url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDIDushvnii3VcQ9uhbNVo1PsbuOwnWURi8T48Zr9F6KeyFf68vA');
//     background-size: cover;
// }

// #yahtzee3 {
//     position: relative;
//     background: #95c078; /* For browsers that do not support gradients */
//     background: -webkit-linear-gradient(left top, #95c078, #f7ee6b); /* For Safari 5.1 to 6.0 */
//     background: -o-linear-gradient(bottom right, #95c078, #f7ee6b); /* For Opera 11.1 to 12.0 */
//     background: -moz-linear-gradient(bottom right, #95c078, #f7ee6b); /* For Firefox 3.6 to 15 */
//     background: linear-gradient(to bottom right, #95c078, #f7ee6b); /* Standard syntax */
// }

// #yahtzee-header {
//     position: absolute;
//     height: 30vh;
//     width: 35%;
//     font-size: 20vh;
//     text-shadow: 0.8px 0.8px #b48463;
//     margin: 0vh 4%;
//     border-bottom: 2px solid black;
//     text-align: center;
//     padding-top: 3vh;
// }

// #yahtzee-text {
//     color: #3edcc0;
//     text-shadow: 0.8px 0.8px #f9f6d5;
// }

// #nyuyoku3 {
//     background: #ffb35d; /* For browsers that do not support gradients */
//     background: -webkit-linear-gradient(f7ee6b, #ffe867); /* For Safari 5.1 to 6.0 */
//     background: -o-linear-gradient(#ffb35d, #ffe867); /* For Opera 11.1 to 12.0 */
//     background: -moz-linear-gradient(#ffb35d, #ffe867); /* For Firefox 3.6 to 15 */
//     background: linear-gradient(#ffb35d, #ffe867); /* Standard syntax */
// }

// #world2 {
//     background: #ffe867; /* For browsers that do not support gradients */
//     background: -webkit-linear-gradient(#ffe867, #ffe867); /* For Safari 5.1 to 6.0 */
//     background: -o-linear-gradient(#ffe867, #ffe867); /* For Opera 11.1 to 12.0 */
//     background: -moz-linear-gradient(#ffe867, #ffe867); /* For Firefox 3.6 to 15 */
//     background: linear-gradient(#ffe867, #ffe867); /* Standard syntax */
// }

// #games {
//     background: #ffe867; /* For browsers that do not support gradients */
//     background: -webkit-linear-gradient(#ffe867, #c6ffb5); /* For Safari 5.1 to 6.0 */
//     background: -o-linear-gradient(#ffe867, #c6ffb5); /* For Opera 11.1 to 12.0 */
//     background: -moz-linear-gradient(#ffe867, #c6ffb5); /* For Firefox 3.6 to 15 */
//     background: linear-gradient(#ffe867, #c6ffb5); /* Standard syntax */
// }

// #flash-cards {
//     background: #c6ffb5; /* For browsers that do not support gradients */
//     background: -webkit-linear-gradient(#c6ffb5, #9ad3ff); /* For Safari 5.1 to 6.0 */
//     background: -o-linear-gradient(#c6ffb5, #9ad3ff); /* For Opera 11.1 to 12.0 */
//     background: -moz-linear-gradient(#c6ffb5, #9ad3ff); /* For Firefox 3.6 to 15 */
//     background: linear-gradient(#c6ffb5, #9ad3ff); /* Standard syntax */
// }