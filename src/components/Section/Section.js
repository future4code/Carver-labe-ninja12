import React, { Component } from "react";
// import CardServico from "../CardServico/CardServico";
import Detalhes from "../Detalhes/Detalhes";
import { Route, Routes } from "react-router";
import { SectionContainer } from "./Section.styled";
import ContratarServico from "../../pages/ContratarServico/ContratarServico";

export default class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <Routes>
          <Route path="/" element={<ContratarServico />} exact />
          <Route path="/job" element={<ContratarServico />} exact />
          <Route path="/job/:id" element={<Detalhes />} />
        </Routes>
      </SectionContainer>
    );
  }
}
