import React from "react";
import { menuItems } from "./MenuItems";
import './Navbar.css'

console.log(menuItems)

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" id="navbar">
      <Container fluid>
        <Navbar.Brand href="#" id="netflix">Group4flix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
            >
            {menuItems.map((item, index) => (
              <Nav.Link id="navlink" key={index} href={item.url}>{item.title}</Nav.Link>
          ))}
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        {/* <Img src="	https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"/> */}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;