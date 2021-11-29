import React, { Component } from "react";
import { HeaderContainer } from "./Header.styled";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <div className="menu">
          <img src="assets/bars-solid.svg" alt="menu" width="20" />
        </div>

        <div className="logo">
          <h1>
            <Link to="/">LabeNinjas</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Quero ser um ninja!</Link>
            </li>
            <li>
              <Link to="/">Contratar um ninja!</Link>
            </li>
            <li className="close">
              <img src="assets/times-solid.svg" alt="close" width="20" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart">
              <img src="assets/shopping-cart-solid.svg" alt="cart" width="20" />
            </Link>
          </div>
        </nav>
      </HeaderContainer>
    );
  }
}
