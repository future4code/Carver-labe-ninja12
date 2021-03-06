import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ContainerDetalhes, DetalhesContainer } from "./Detalhes.styled";
import axios from "axios";
import serviceImg from "../../img/service_img.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/Context";

export default function Detalhes() {
  const { id } = useParams();
  const context = useContext(DataContext);

  const [jobItem, setJob] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
    paymentMethods: ["", "", ""],
    dueDate: "",
    taken: false,
  });

  useEffect(() => {
    axios
      .get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
        headers: {
          Authorization: "5ad4040c-731a-403d-9583-f511e3de1a8a",
        },
      })
      .then((response) => {
        setJob(response.data);
      });
  }, [id, jobItem]);

  const { addToCart } = context;

  return (
    <ContainerDetalhes>
      <DetalhesContainer>
        <img src={serviceImg} alt="serviço" />
        <div className="box">
          <div className="row">
            <h2>{jobItem.title}</h2>
            <span>R$ {jobItem.price}</span>
          </div>
          <p>{jobItem.description}</p>
          <p>{jobItem.dueDate}</p>

          <Link
            to="/cart"
            className="cart"
            onClick={() => addToCart(jobItem.id)}
          >
            Adicionar ao carrinho
          </Link>
        </div>
      </DetalhesContainer>
    </ContainerDetalhes>
  );
}
