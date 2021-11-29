import React from "react";
import { CardContainer } from "./CardServico.styled";
import { Link } from "react-router-dom";

export default function CardServico(props) {
  return (
    <CardContainer>
      <div className="title">{props.title}</div>
      <div className="image-card">
        <img src={props.imageServico} alt="serviço-img" />
      </div>
      <div className="text-card">
        <span className="strong">Preço:</span>
        <span className="span-block"> {props.price}</span>
        <br />
        <span className="strong">Prazo:</span>
        <span className="span-block"> {props.dueDate}</span>
      </div>
      <div className="btn">
        <button className="button-card">Adicionar ao carrinho</button>

        <button className="button-card">
          <Link to={props.id}>Ver Detalhes</Link>
        </button>
      </div>
    </CardContainer>
  );
}
