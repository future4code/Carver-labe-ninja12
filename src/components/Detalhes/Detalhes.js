import React from "react";
import { useParams } from "react-router";
import { DataContext } from "../Context/Context";

export default function Detalhes() {
  /*   state = {
    jobs: [],
  }; */

  /*   getJob = () => {
    if (this.props.match.params.id) {
      const res = this.context.jobs;
      const data = res.filter((job) => {
        return job.id === this.props.match.params.id;
      });

      console.log(data);
    }
  };

  componentDidMount() {
    this.getJob();
  } */

  const { id } = useParams();

  return <div>Detalhes {id}</div>;
}
