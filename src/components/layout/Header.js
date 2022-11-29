import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link }from "react-router-dom";


export const Header = () => {
  return (
    <Navbar bg="" className=" footer" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Transaction Tracker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className=" nav-link text-black">Login</Link>
            <Link to="/register" className="nav-link text-black">Register</Link>
            <Link to="#" className=" nav-link text-black">Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};