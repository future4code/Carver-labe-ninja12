import styled from "styled-components";

export const ServiceContainer = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 12px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
`;

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
