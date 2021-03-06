import styled from "styled-components";

export const CartContainer = styled.div`
  & {
    box-shadow: 0 0 5px #ccc;
    padding: 15px 10px;
  }
`;

export const CartDiv = styled.div`
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

  .cart {
    position: relative;
    border: 1px solid #ccc;
  }
  .amount span {
    color: crimson;
    padding: 0 20px;
  }
  .amount .count {
    width: 40px;
    height: 30px;
    border: 1px solid #555;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
  .delete {
    position: absolute;
    top: 0;
    right: 5px;
    color: crimson;
    cursor: pointer;
    font-weight: 900;
  }
`;

export const TotalContainer = styled.div`
  & {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  & a {
    text-decoration: none;
    background: #333;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px 25px;
  }
  & h3 {
    margin-right: 50px;
    color: crimson;
  }
`;
