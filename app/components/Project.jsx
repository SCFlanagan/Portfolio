import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Project extends Component {

    render() {
        return (
            <div className='projects'>
                    <Col lg={6} md={6}>        
                        <div id={this.props.firstPicId} className='screenshots'></div>
                        <div id={this.props.secondPicId} className='screenshots'></div>
                    </Col>
                    <Col lg={6} md={6}>
                        <h3 className='pt project-head'>{this.props.title}</h3>
                        <p className='reg project-item'>{this.props.firstP}</p>
                        <p className='reg project-item'>{this.props.secondP}</p>
                        <a className='site link' href={this.props.firstLink} target="_blank">Play the Game</a>
                        <span className='reg'> | </span>
                        <a className='code link' href={this.props.secondLink} target="_blank">View Code</a>
                    </Col>
                </div>
        )
    }
}