import React, { Component } from "react";
import CardServico from "../../components/CardServico/CardServico";
import { FilterContainer, ServiceContainer } from "./ContratarServico.styled";
import { DataContext } from "../../components/Context/Context";

export default class ContratarServico extends Component {
  static contextType = DataContext;
  render() {
    const { jobs } = this.context;
    console.log(jobs);
    return (
      <div>
        <FilterContainer>
          <input type="text" placeholder="Valor Mínimo" />
          <input type="text" placeholder="Valor Máximo" />
          <input type="text" placeholder="Buscar por título ou descrição" />
          <select name="" id="">
            <option value="">Sem ordenação</option>
            <option value="">Menor valor</option>
            <option value="">Maior valor</option>
            <option value="">Título</option>
            <option value="">Prazo</option>
          </select>
        </FilterContainer>
        <ServiceContainer>
          {jobs.map((job) => {
            return (
              <CardServico
                key={job.id}
                imageServico="assets/service_img.jpg"
                {...job}
              />
            );
          })}
        </ServiceContainer>
      </div>
    );
  }
}
