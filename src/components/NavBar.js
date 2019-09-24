import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #333;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    font-size: 20px;
    padding-left: 20px;
    color: white;
    &:hover {
      color: none;
    }
  }
  .navbar-toggler-icon {
    color: white;
  }

  @media (max-width: 768px) {
    a {
      font-size: 15px;
      padding-left: 0px;
    }
  }
  .active {
    color: #e63946;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink exact to="/" activeClassName="active">
              Strona Główna
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about" activeClassName="active">
              Oferta
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/price" activeClassName="active">
              Cennik
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" activeClassName="active">
              Kontakt
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
