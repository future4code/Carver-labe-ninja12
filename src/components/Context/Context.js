import React, { Component } from "react";
import axios from "axios";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    jobs: [],
  };

  // Problema no componentDidMount?

  async componentDidMount() {
    const response = await axios.get("https://labeninjas.herokuapp.com/jobs", {
      headers: {
        Authorization: "5ad4040c-731a-403d-9583-f511e3de1a8a",
      },
    });

    const jobsData = await response.data;
    this.setState({ jobs: jobsData.jobs });
  }

  render() {
    const { jobs } = this.state;
    return (
      <DataContext.Provider value={{ jobs }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
