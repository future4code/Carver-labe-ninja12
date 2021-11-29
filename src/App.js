import React from "react";
/* import axios from "axios";
import styled from "styled-components"; */
/* import CadastroServicos from "./components/CadastroServicos/CadastroServicos"; */
// import ContratarServico from "./pages/ContratarServico/ContratarServico";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from "./App.styled";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Router>
          <Header />
          <Section />
        </Router>
      </AppContainer>
    );
  }
}
