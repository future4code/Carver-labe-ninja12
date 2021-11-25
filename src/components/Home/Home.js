import React, {Component} from 'react';
import "./Header.css"
import "./Body.css"

export class Home extends Component{



    render(){
        return (
            <div>
              <div className="header" >
                <h1> LabeNinjas </h1>
                <button className="buttonHome">Home</button>
                <button className="buttonCarrinho">Carrinho</button>
              </div>
              <div className="bodyContainer">
                  <h1> LabeNinjas </h1>
                  <h3> O talento certo no momento certo</h3>
                  <button className="buttonBeNinja"> Quero ser um Ninja</button>
                  <button className="buttonHireNinja">Contratar um Ninja</button>
              </div>
            </div>
        )
    }
}

