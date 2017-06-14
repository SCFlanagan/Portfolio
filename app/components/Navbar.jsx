import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Route, RouteHandler, Link } from 'react-router'
import { logout } from '../reducers/auth'
import { LinkContainer } from 'react-router-bootstrap'

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">Susan Flanagan</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} onClick={() => {this.routeTo()}} href="#home">Home</NavItem>
                <NavItem eventKey={2} onClick={() => {this.routeTo()}} href="#about">About</NavItem>
                <NavItem eventKey={3} onClick={() => {this.routeTo()}}href='#portfolio'>Portfolio</NavItem>
                <NavItem eventKey={4} href="#footer" onClick={() => {this.routeTo()}}>Contact</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}


/* TO DO
    - write bio
    - redo projects and descriptions and make it a component
    - make education and experience their own jumbotrons
    - reformat contact footer, add brooklyn
    - change raccoon picture
    - make pictures smaller in education/experience and larger in projects
*/