'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Route, RouteHandler, Link } from 'react-router';
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
                <a className='nav' href="/#top">SUSAN FLANAGAN</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem className='nav' eventKey={2} onClick={() => {this.routeTo()}} href='/home#about'>ABOUT</NavItem>
                <NavItem className='nav' eventKey={3} onClick={() => {this.routeTo()}}href='/home#portfolio'>PORTFOLIO</NavItem>
                <NavItem className='nav' eventKey={4} href="/home#contact" onClick={() => {this.routeTo()}}>CONTACT</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}