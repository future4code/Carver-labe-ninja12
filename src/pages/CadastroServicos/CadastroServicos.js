import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardCadastro = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 30px;
  border: solid 1px;
`;

export default class CadastroServicos extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    preco: "",
    pagamentos: ["Cartão", "Pix", "Boleto"],
    prazoServico: "",
    ServicosId: "",
  };

  onChangeTitulo = (e) => {
    this.setState({ titulo: e.target.value });
  };
  onChangeDescricao = (e) => {
    this.setState({ descricao: e.target.value });
  };
  onChangePreco = (e) => {
    this.setState({ preco: e.target.value });
  };
  onChangePagamentos = (e) => {
    this.setState({ pagamentos: e.target.value });
  };
  onChangePrazoServico = (e) => {
    this.setState({ prazoServico: e.target.value });
  };

  onChangeSerivicosId = (e) => {
    this.setState({ ServicosId: e.target.value });
  };

  cadastrarServicos = () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethods: this.state.pagamentos,
      dueDate: "2021-12-30",
    };
    axios
      .post("https://labeninjas.herokuapp.com/jobs", body, {
        headers: {
          Authorization: "5ad4040c-731a-403d-9583-f511e3de1a8a",
        },
      })
      .then(() => {
        alert("Adiconado com sucesso!");
        this.setState({
          titulo: "",
          descricao: "",
          preco: "",
          prazoServico: "",
        });
        console.log(this.setState);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response);
      });
  };

  // deletaServico = (id) => {
  //   const url ="https://labeninjas.herokuapp.com/jobs/efed9385-cf87-4f0e-a121-465384b3f2e4"

  //   axios.delete(url,{
  //       headers: {
  //           Authorization: "5ad4040c-731a-403d-9583-f511e3de1a8a"
  //       }
  //   })
  //   .then((res) => {
  //       alert ("Serviço deletado")

  //     // this.mostraServicos()
  //   //   this.setState({mostraServicos:res.data})
  //   console.log (res)

  //     })
  //     .catch((err) => {
  //         alert("err.response.data.message")
  //       // console.log(err.response.data)

  //     });
  // };

  render() {
    const listaPamentos = this.state.pagamentos.map((tipos) => {
      return <div key={tipos}> {tipos} </div>;
    });

    return (
      <div>
        <h1> Ninja, cadastre agora seu serviço! </h1>
        <CardCadastro>
          <input
            placeholder={"Título*"}
            value={this.state.titulo}
            onChange={this.onChangeTitulo}
          />

          <input
            placeholder={"Descrição*"}
            value={this.state.descricao}
            onChange={this.onChangeDescricao}
          />

          <input
            placeholder={"Preço: R$"}
            value={this.state.preco}
            onChange={this.onChangePreco}
          />

          {listaPamentos}

          <input
            placeholder={"AA/MM/DD"}
            value={this.state.prazoServico}
            onChange={this.onChangePrazoServico}
          />

          <button onClick={this.cadastrarServicos}> Cadastrar Serviço</button>
        </CardCadastro>
      </div>
    );
  }
}
