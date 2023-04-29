import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const NavigationBar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogout = () => {
      logOut()
      .then()
      .catch(error => console.log(error))
    }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" variant="light" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none text-secondary mt-2 me-2" to="/category/0">
                Home
              </Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle className="text-black" style={{ fontSize: "2.3rem" }}></FaUserCircle>
                )}
                {user ? (
                  <Button onClick={handleLogout} variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
