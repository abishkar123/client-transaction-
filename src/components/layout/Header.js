import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link }from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(()=>{
   
    const user = JSON.parse( sessionStorage.getItem("user"));
       setUser(user);
  }, []);

  const handleOnLogOut = ()=>{
    //remove the user form the localstorage
 alert(" loging out");
// redirect user to the login page 
 sessionStorage.removeItem("user");
 navigate("/")
  }

  return (
    <Navbar bg="" className=" footer" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="/">Transaction Tracker </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            {user?._id ? (
              <>
              <div className="nav-link fw-bolder text-warning"> Welcome back {user?.name} </div>
              <Link to="/" className=" nav-link text-black" onClick={handleOnLogOut}>Logout
              </Link>
              </>
            ):(
              <>
              <Link to="/" className=" nav-link text-black">Login</Link>
            <Link to="/register" className="nav-link text-black">Register</Link>
            </>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};