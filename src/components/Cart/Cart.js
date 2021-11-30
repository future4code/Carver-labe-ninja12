import React, { Component } from "react";
import { DataContext } from "../Context/Context";
import serviceImg from "../../img/service_img.jpg";
import { CartContainer, CartDiv, TotalContainer } from "./Cart.styled";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nenhum servico ainda</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <CartContainer className="details cart" key={item.id}>
              <CartDiv>
                <img src={serviceImg} alt="serviço" />
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price * item.count}</span>
                  </div>
                  <p>{item.description}</p>
                  <div className="amount">
                    <button
                      className="count"
                      onClick={() => reduction(item.id)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span>{item.count}</span>
                    <button className="count" onClick={() => increase(item.id)}>
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                <div className="delete" onClick={() => removeProduct(item.id)}>
                  X
                </div>
              </CartDiv>
            </CartContainer>
          ))}
          <TotalContainer className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: ${total}</h3>
          </TotalContainer>
        </>
      );
    }
  }
}
