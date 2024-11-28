import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faLockOpen,
  faLock,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const Navbar_Cmp = () => {
  const number = 19190;
  const total = Intl.NumberFormat("es-CL").format(number);
  const token = true; // Assuming user is logged in

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="estilo_navbar_navbar bg-black"
      >
        <Container className="bg-black responsive-navbar-nav">
          <Navbar.Brand href="#home">
            <span className="text-white">Pizzería MammaMia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* Home link */}
              <Nav.Link href="#features">
                <FontAwesomeIcon
                  icon={faPizzaSlice}
                  style={{ color: "#FFD43B" }}
                />
                <span className="text-white"> Home</span>
              </Nav.Link>
              {/* Login link */}
              <Nav.Link href="#login">
                {token ? (
                  <FontAwesomeIcon
                    icon={faLockOpen}
                    style={{ color: "#FFD43B" }}
                  />
                ) : (
                  <FontAwesomeIcon icon={faKey} style={{ color: "#FFD43B" }} />
                )}
                <span className="text-white">
                  {token ? " Login" : " Register"}
                </span>
              </Nav.Link>
              {/* Register link */}
              <Nav.Link href="#register">
                {token ? (
                  <FontAwesomeIcon icon={faLock} style={{ color: "#FFD43B" }} />
                ) : (
                  <FontAwesomeIcon icon={faKey} style={{ color: "#FFD43B" }} />
                )}
                <span className="text-white">
                  {token ? " Register" : " Login"}
                </span>
              </Nav.Link>
            </Nav>
            <Nav>
              {/* Total price display */}
              <Nav.Link href="#total">
                <span
                  className="total_nav"
                  style={{
                    color: "#00FFFF",
                    border: "2px solid #00FFFF",
                    padding: "5px 10px",
                  }}
                >
                  🛒Total: ${total}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Header />
    </div>
  );
};

export default Navbar_Cmp;
