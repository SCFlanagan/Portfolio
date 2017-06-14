'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Route, RouteHandler, Link } from 'react-router'
import { logout } from '../reducers/auth'
import { LinkContainer } from 'react-router-bootstrap'

export default class ContactNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <a className='nav' href="/home">SUSAN FLANAGAN</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem className='nav' eventKey={1} onClick={() => {this.routeTo()}} href='/home'>HOME</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}