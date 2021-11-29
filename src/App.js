import React from "react";
/* 
/* import CadastroServicos from "./components/CadastroServicos/CadastroServicos"; */
// import ContratarServico from "./pages/ContratarServico/ContratarServico";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./components/Context/Context";
import Header from "./components/Header/Header";
//  import Section from "./components/Section/Section";

import ContratarServico from "./pages/ContratarServico/ContratarServico";
import Detalhes from "./components/Detalhes/Detalhes";
import MainHome from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import CadastroServicos from "./pages/CadastroServicos/CadastroServicos";

export default class App extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscaPorNome: "",
  };

  manipularValorDoFiltroMinimo = (event) => {
    this.setState({ filtroMinimo: event.target.value });
  };
  manipularValorDoFiltroMaximo = (event) => {
    this.setState({ filtroMaximo: event.target.value });
  };
  manipularValorDoFiltrobuscaPorNome = (event) => {
    this.setState({ filtrobuscaPorNome: event.target.value });
  };
  /* 
  filtrarServicos = () => {
    const servicoFiltradoMinimo = servicos.filter((servico) => {
      if (this.state.filtroMinimo) {
        return servico.price >= this.state.filtroMinimo;
      }
    });
    const servicoFiltradoMaximo = servicoFiltradoMinimo.filter((servico) => {
      if (this.state.filtroMaximo) {
        return servico.price <= this.state.filtroMaximo;
      } else {
        return servico;
      }
    });

    const servicosFiltradosCompletos = servicoFiltradoMaximo.filter(
      (servico) => {
        return servico.name.includes(this.state.filtroBuscaPorNome);
      }
    );
    return servicosFiltradosCompletos;
  }; */

  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Routes>
              <Route path="/" exact element={<MainHome />} />
              <Route
                path="/cadastro-servicos"
                element={<CadastroServicos />}
                exact
              />
              <Route path="/job" element={<ContratarServico />} exact />
              <Route path="/job/:id" element={<Detalhes />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </DataProvider>
    );
  }
}
