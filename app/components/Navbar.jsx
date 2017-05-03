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
                <a href="#">Susan Flanagan</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Bio</NavItem>
                <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Where in the World</MenuItem>
                    <MenuItem eventKey={3.2}>Nyuyoku</MenuItem>
                    <MenuItem eventKey={3.3}>Yahtzee</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>More Projects</MenuItem>
                </NavDropdown>
                <NavItem eventKey={3} href="#">Experience</NavItem>
                <NavItem eventKey={4} href="#">Contact</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}