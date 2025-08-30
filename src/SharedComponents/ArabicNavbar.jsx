
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const ArabicNavbar = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="navbar-arabic"
      dir="rtl"
       style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1030 }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          يقين
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/quran">
              القرآن الكريم
            </Nav.Link>
            <Nav.Link as={Link} to="/prayer">
              الصلاة
            </Nav.Link>
            <Nav.Link as={Link} to="/azkar">
              الأذكار
            </Nav.Link>
           
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ArabicNavbar;
