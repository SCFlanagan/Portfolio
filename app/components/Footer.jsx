import React from 'react'
import { Col } from 'react-bootstrap'


export default function(props) {
    return (
      <div id="footer">
        <h2>CONTACT ME</h2>
        <div id='foot-cols'>
            <Col md={4} >
            Linked In
            </Col>
            <Col md={4} >
            Github
            </Col>
            <Col md={4} >
            Email
            </Col>
        </div>
      </div>
    )
}
