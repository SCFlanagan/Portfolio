'use strict';

import React, { Component } from 'react';
import { Col } from 'react-bootstrap'

export default class Project extends Component {

    render() {
        return (
            <div className='projects'>
                <div className={this.props.class1}>
                    <div className='project-pics'>
                        <div id={this.props.firstPicId} className='screenshots'></div>
                        <div id={this.props.secondPicId} className='screenshots'></div>
                    </div>
                </div>
                <div className={this.props.class2}>
                    <div className='project-text'>
                        <h3 className='pt project-head'>{this.props.title}</h3>
                        <p className='reg project-item'>{this.props.firstP}</p>
                        <br></br>
                        <p className='reg project-item'>{this.props.secondP}</p>
                        <br></br>
                        <a className='site link' href={this.props.firstLink} target="_blank"><strong>Play the Game</strong></a>
                        <span className='lg'> | </span>
                        <a className='code link' href={this.props.secondLink} target="_blank"><strong>View Code</strong></a>
                    </div>
                </div>
            </div>
        )
    }
}
