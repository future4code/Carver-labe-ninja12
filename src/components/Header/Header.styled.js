import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    min-height: 70px;
    background: black;
    color: #7867bf;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  & .logo {
    margin-left: 50px;
    text-transform: capitalize;
    letter-spacing: 2px;
  }

  & ul {
  }

  & .logo a {
    text-decoration: none;
    text-transform: capitalize;
  }

  & nav {
    display: flex;
  }

  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  nav ul li {
    list-style: none;
    display: inline-block;
  }
  nav ul li a {
    text-decoration: none;
    text-transform: capitalize;
    color: #e056fd;

    padding: 0 15px;
  }
  nav ul li a:hover {
    color: #686de0;
  }

  .icon-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: #333333;
    background: black;
    border: none;
    outline: none;
    border-radius: 50%;
    margin-right: 20px;
  }

  .icon-button:hover {
    cursor: pointer;
    background: #cccccc;
  }

  .icon-button__badge {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 25px;
    height: 25px;
    background: #eb4d4b;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  & .menu {
    margin-left: 20px;
  }

  & .menu,
  & .close {
    cursor: pointer;
    display: none;
  }

  @media (max-width: 650px) {
    & ul {
      position: fixed;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background: white;
      z-index: 99;
      opacity: 0.97;
      transition: 0.5s linear;
    }
    & .menu,
    & .close {
      display: block;
    }
    & .close {
      position: absolute;
      top: 10px;
      right: 20px;
    }
    & ul.toggle {
      left: 0;
    }
  }
`;
