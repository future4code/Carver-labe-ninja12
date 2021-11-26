import React from "react";
/* import axios from "axios";
import styled from "styled-components"; */
/* import CadastroServicos from "./components/CadastroServicos/CadastroServicos"; */
import ContratarServico from "./pages/ContratarServico/ContratarServico";
import Filtros from "./componentes-filtros/Filtros";
// import { Servicos } from "./Servicos";

export default class App extends React.Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroBuscaPorNome: ""
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

  filtrarServicos = () => {
 
  
    const servicoFiltradoMinimo = Servicos.filter((servico) => {
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
  };

  render() {
   
    // const servicosFiltrados = this.filtrarServicos();
    // console.log(servicosFiltrados);
   
    return (
      <div>
   
   <Filtros
    minimo={this.state.filtroMinimo}
    maximo={this.state.filtroMaximo}
    buscaPorNome={this.state.filtroBuscaPorNome}
    
    onChangeMinimo={this.manipularValorDoFiltroMinimo}
    onChangeMaximo={this.manipularValorDoFiltroMaximo}
    onChangeMinimo={this.manipularValorDoFiltrobuscaPorNome}/>
   
   
   
      <ContratarServico />


      </div>
    )

  }
}
