import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from '../../assets/icons/logo.jpg'
import './mynavbar.style.css'

const MyNavbar = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg"  variant="dark" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link className='btn btn-danger text-white' href="https://drive.google.com/uc?export=download&id=1eJVc_DNBzaWzFdCLLWcSrwwpDBO41iJa">Download Resume</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
