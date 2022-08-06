import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import logo from '../../images/logo.png'


export default function NavComponent() {

  return (
    <Navbar bg="light" variant="light" expand="md">
    <Container>
      <Navbar.Brand id="brand" href="#home">
        <img
          id='logo'
          alt="Logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-bottom"
        />{' '}
        <span>Estatery</span>
      </Navbar.Brand>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#rent" className="link-active">Rent</Nav.Link>
            <Nav.Link href="#buy">Buy</Nav.Link>
            <Nav.Link href="#sell">Sell</Nav.Link>

            <NavDropdown title="Manage Property" id="basic-nav-dropdown">
              <NavDropdown.Item href="#manage-property/4.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#manage-property/4.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-property/4.3">Something</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#manage-property/5.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#manage-property/5.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#manage-property/5.3">Something</NavDropdown.Item>
            </NavDropdown>
            

          </Nav>
          <div className="d-flex flex-column d-md-block" id="nav-btn">
            <Button className="my-1" variant="outline-primary">Log in</Button>
            <Button className="my-1 mx-md-2 mx-lg-3">Sign up</Button>
          </div>
          </Navbar.Collapse>

    </Container>
  </Navbar>

  )
}
