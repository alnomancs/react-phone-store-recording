import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "..//logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ms-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto">
          <ButtonContainer>
            <span className="me-2">
              <FaShoppingCart></FaShoppingCart>
            </span>{" "}
            my cart
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
    }
  }
`;

export default Navbar;
