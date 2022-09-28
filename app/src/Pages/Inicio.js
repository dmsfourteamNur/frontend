import React from 'react';

import { SButtom, SHr, SPage, SText, SView } from "servisofts-component";

import PBarraFooter from "../Components/PBarraFooter";


export default class Inicio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      saludar:"hola a todos"
    };
  }

  componentDidMount() {
    this.vuelos();
  }


  async vuelos() {
    const api01 = await fetch("http://67.205.155.238/api/vuelo", { method: 'GET' });
    const dataLibros = await api01.json();

    // verifico conexion con la api
    if (!api01) {
      const message = `An error has occured: ${api01.status}`;
      throw new Error(message);
    }

    let html = ``;
    Object.keys(dataLibros).map((key) => {
      var obj = dataLibros[key];
      html += "key "+ JSON.stringify(obj.key)+"\n";
    });

    this.setState({saludar : html})
    // imprimo los datos
    // html += `</br> `;
    // return html;
  }





  render() {
    return (
      <>

        <SPage title={"Pedidos de Hoy"} hidden>
          <SView col={"xs-12"} center>
            <SHr height={25} />
            <SText >Inicio</SText>
          </SView>
          <SView flex center>
            <SView col={"xs-5"} height={200}>

              {/* <SButtom props={{ type: "danger" }} onPress={() => {
                this.vuelos()
              }}>Logout</SButtom> */}


              <SText>{this.state.saludar}</SText>
            </SView>
          </SView>
        </SPage>

        <SHr height={20} />
        <PBarraFooter url={"inicio"} />
      </>
    );
  }
}