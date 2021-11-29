import React, { Component } from "react";
import { HeaderContainer } from "./Header.styled";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <HeaderContainer>
        <div className="menu" onClick={this.menuToggle}>
          <img src="assets/bars-solid.svg" alt="menu" width="40" />
        </div>

        <div className="logo">
          <h1>
            <Link to="/">LabeNinjas</Link>
          </h1>
        </div>

        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form-servicos">Quero ser um ninja!</Link>
            </li>
            <li>
              <Link to="/job">Contratar um ninja!</Link>
            </li>
            <li className="close" onClick={this.menuToggle}>
              <img src="assets/times-solid.svg" alt="close" width="20" />
            </li>
          </ul>
          <button type="button" className="icon-button">
            <span className="icon">
              <img src="assets/shopping-cart-solid.svg" alt="cart" width="30" />
            </span>
            <span className="icon-button__badge">0</span>
            <Link to="/cart"></Link>
          </button>
        </nav>
      </HeaderContainer>
    );
  }
}
