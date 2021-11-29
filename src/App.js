import React from "react";
/* 
/* import CadastroServicos from "./components/CadastroServicos/CadastroServicos"; */
// import ContratarServico from "./pages/ContratarServico/ContratarServico";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider } from "./components/Context/Context";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

export default class App extends React.Component {
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}
