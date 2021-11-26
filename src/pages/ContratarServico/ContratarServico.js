import React from "react";
import {
  CardContainer,
  ServiceContainer,
  FilterContainer,
} from "./ContratarServico.styled";

export default function ContratarServico() {
  return (
    <div>
      {/* <FilterContainer>
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
      </FilterContainer> */}
      <ServiceContainer>
        <CardContainer>
          <div className="title">Nome do serviço</div>
          <div className="image-card">
            <img src="assets/service_img.jpg" alt="serviço-img" />
          </div>
          <div className="text-card">
            <span className="strong">Preço:</span>
            <span className="span-block">R$150</span>
            <br />
            <span className="strong">Prazo:</span>
            <span className="span-block">30/12/2021</span>
          </div>
          <div className="btn">
            <button className="button-card">Adicionar ao carrinho</button>
            <button className="button-card">Ver detalhes</button>
          </div>
        </CardContainer>
      </ServiceContainer>
    </div>
  );
}
