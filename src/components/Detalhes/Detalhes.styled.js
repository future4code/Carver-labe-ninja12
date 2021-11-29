import styled from "styled-components";

export const ContainerDetalhes = styled.div`
  & {
    box-shadow: 0 0 5px #ccc;
    padding: 15px 10px;
  }
`;

export const DetalhesContainer = styled.div`
  & {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;
  }

  & img {
    max-width: 500px;
    min-width: 290px;
    height: 300px;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  & .box {
    max-width: 500px;
    min-width: 290px;
    margin: 25px;
  }

  .box .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .box .row h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .box .row span {
    color: crimson;
  }

  .box p {
    line-height: 1.5;
    margin: 15px 0;
  }

  .box .cart {
    background: #be2edd;
    color: white;
    text-decoration: none;
    padding: 10px 25px;
    display: inline-block;
  }
`;
