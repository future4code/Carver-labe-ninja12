import React from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
  padding-top: 100px;
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;

  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .col-2 {
    flex-basis: 50%;
    min-width: 300px;
  }
  .col-2 img {
    padding: 50px 0;
    margin-left: 50px;
  }
  .astro-word {
    color: #7867bf;
  }
`;

export default class MainHome extends React.Component {
  render() {
    return (
      <ContainerHome>
        <div className="row">
          <div className="col-2">
            <h1>
              Seja um ninja!
              <span className="astro-word">
                <strong> Vem pra Labeninja!</strong>
              </span>
            </h1>
            <p>
              Aqui na Labeninjas você pode contratar um serviço de um ninja
              nosso ou oferecer um serviço que você é tão bom que o mundo
              precisa conhecer o seu trabalho. Venha ser um Labeninja, vem se
              tornar um ninja com a gente! <span>🥷😊✨</span>
            </p>
          </div>
          <div className="col-2">
            <img src="assets/labeninjas.png" alt="labeninja" />
          </div>
        </div>
      </ContainerHome>
    );
  }
}
