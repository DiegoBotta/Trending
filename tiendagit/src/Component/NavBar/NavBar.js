import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom'
import Cart from '../../assets/Cart.png'
import {CartContext} from '../../Component/Container/Context/CartContext'



export default function App() {
  const[cart,setCart] = useContext(CartContext)


  return (
    <>
     <Navbar bg="light" expand="lg">
     <Link to={`/`}> <Navbar.Brand href="#home">TiendaMia</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Link to={`/category/bicicletas`}>   <Nav.Link href="#home">Bicicletas completas</Nav.Link></Link>
    <Link to={`/category/componentes`}>   <Nav.Link href="#home">Componentes</Nav.Link></Link>
    
    
    </Nav>

    
  </Navbar.Collapse>
  <div className= "pr-3">
  <Link to={`/Cart`} > <img style={{display: cart.length !== 0 ? 'block' : 'none' }} src={Cart} height="40" /></Link>
  </div>
  
</Navbar>

    </>
  );
}