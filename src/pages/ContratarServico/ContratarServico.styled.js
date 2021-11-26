import styled from "styled-components";

export const FilterContainer = styled.div`
  & {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 32px 24px 0px;
  }

  input {
    width: 300px;
    margin-bottom: 12px;
  }

  select {
    width: 308px;
    margin-bottom: 12px;
  }
`;

export const ServiceContainer = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 12px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    background-color: black;
  }
`;

export const CardContainer = styled.div`
  & {
    background-color: white;
    border-radius: 10px;
    padding: 1em;
    box-shadow: 0px 10px 5px #b2bec3;
    text-align: center;
    font-family: "Poppins";
  }

  .strong {
    font-weight: bold;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .image-card {
    max-width: 100%;
    border-radius: 5px;
  }
  .image-card img {
    height: 170px;
  }

  .text-card {
    text-align: left;
    margin-left: 2em;
    margin-bottom: 0.5em;
    font-size: 12px;
  }

  .btn {
    display: flex;
  }

  .button-card {
    background-color: #e056fd;
    border: none;
    padding: 1em;
    border-radius: 5px;
    font-weight: bold;
    width: 100%;
    margin: 0 10px;
  }
  .button-card:hover {
    box-shadow: 0px 5px 5px #b2bec3;
    color: #130f40;
  }
`;
