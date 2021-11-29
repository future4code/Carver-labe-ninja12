import React from "react";
import { Filtro, GrupoDeFiltros } from "./estiloFiltro";

export default class Filtros extends React.Component {
  render() {
    return (
      <GrupoDeFiltros>
        <Filtro>
          
          <input
            type={"number"} placeholder="Valor Mínimo"
            value={this.props.minimo}
            onChange={this.props.onChangeMinimo}
          />
        </Filtro>

        <Filtro>
          
          <input
            type={"number"} placeholder="Valor Máximo"
            value={this.props.maximo}
            onChange={this.props.onChangeMaximo}
          />
        </Filtro>

        <Filtro>
          
          <input
            type={"text"} placeholder="Buscar por título"
            value={this.props.buscaPorNome}
            onChange={this.props.onChangeBuscaPorNome}
          />
        </Filtro>
      </GrupoDeFiltros>
    );
  }
}
