import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
export default function App() {
  return (
    <>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">TiendaMia</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Bicicletas completas</Nav.Link>
      <Nav.Link href="#link">Componentes</Nav.Link>
      <Nav.Link href="#link2">Nutricion</Nav.Link>
    
    
    </Nav>

    
  </Navbar.Collapse>
  <CartWidget/>
</Navbar>

    </>
  );
}