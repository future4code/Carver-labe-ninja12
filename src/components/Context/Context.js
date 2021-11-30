import React, { Component } from "react";
import axios from "axios";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    jobs: [],
    cart: [],
    total: 0,
  };

  addToCart = (id) => {
    const { jobs, cart } = this.state;
    const data = jobs.filter((job) => {
      return job.id === id;
    });
    this.setState({ cart: [...cart, ...data] });
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Você tem certeza que quer deletar o produto?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
  };

  // Problema no componentDidMount?

  async componentDidMount() {
    const response = await axios.get("https://labeninjas.herokuapp.com/jobs", {
      headers: {
        Authorization: "5ad4040c-731a-403d-9583-f511e3de1a8a",
      },
    });

    const jobsData = await response.data;
    const jobsWithCount = jobsData.jobs.map((job) => {
      return { ...job, count: 1 };
    });
    this.setState({ jobs: jobsWithCount });
  }

  render() {
    const { jobs, cart, total } = this.state;
    const { addToCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          jobs,
          addToCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
