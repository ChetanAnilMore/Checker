import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-black text-white m-0">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo-img" />
            Checker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <button
                type="button"
                href="#login"
                className="btn m-1 px-3 py-1 btn-warning"
              >
                Login
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
