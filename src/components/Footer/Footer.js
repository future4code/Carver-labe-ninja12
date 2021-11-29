import React, { Component } from "react";
import { FooterContainer } from "./Footer.styled";

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="midias-sociais">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/home" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <p>© 2021 Labeninjas S.A</p>
        </div>
      </FooterContainer>
    );
  }
}
