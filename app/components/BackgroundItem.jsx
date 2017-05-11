import React from 'react';
import { Jumbotron, Col, Button } from 'react-bootstrap';

export default (props) => {
  return (
      <div className='box'>
        <Col lg={4} md={4}>
            <img src={props.url} className='logo'/>
        </Col>
        <div className='box-text'>
            <Col lg={6} md={6}>
                <h4 className='left'>{props.name}</h4>
            </Col>
            <Col lg={2} md={2}>
                <h4 className='right'>{props.year}</h4>
            </Col>
        </div>

         <div className='box-text'>
         <Col lg={4} md={4}>
            
        </Col>
            <Col lg={8} md={8}>
                {props.details.map((detail, index) => {
                    return (
                        <p key={index} className='left blocked'>{detail}</p>
                    )
                })}
            </Col>
        </div>
      </div>
  )
}