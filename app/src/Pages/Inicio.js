import React from 'react';

import { SHr, SPage, SText, SView } from "servisofts-component";

import PBarraFooter from "../Components/PBarraFooter";
import Http from '../Http';


export default class Inicio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      aeronave: "a",
      tripulacion: "b",
      vuelo: "b"
    };
  }

  componentDidMount() {
    this.listVuelo();
    this.listTripulacion();
    this.listAeronave();
  }


  async listVuelo() {
    const api01 = await fetch("http://67.205.155.238/api/vuelo", { method: 'GET' });
    const dataLibros = await api01.json();

    // verifico conexion con la api
    if (!api01) {
      const message = `An error has occured: ${api01.status}`;
      throw new Error(message);
    }

    let html1 = ``;
    Object.keys(dataLibros).map((key) => {
      var obj = dataLibros[key];
      html1 += "key " + JSON.stringify(obj.key) + "\n";
    });

    this.setState({ vuelo: html1 })
  }

  async listTripulacion() {
    const api01 = await fetch("http://67.205.155.238/api/tripulacion", { method: 'GET' });
    const dataLibros = await api01.json();

    // verifico conexion con la api
    if (!api01) {
      const message = `An error has occured: ${api01.status}`;
      throw new Error(message);
    }

    let html2 = ``;
    Object.keys(dataLibros).map((key) => {
      var obj = dataLibros[key];
      html2 += "key " + JSON.stringify(obj.key) + "\n";
    });

    this.setState({ tripulacion: html2 })
  }

  async listAeronave() {
    Http.post().then(resp=>{
      console.log(resp)
    }).catch(e => {
      console.error(e);
    })
    return;
    
    const api01 = await fetch("http://159.223.109.162/api/aeronave", { method: 'GET' });
    const dataLibros = await api01.json();

    // verifico conexion con la api
    if (!api01) {
      const message = `An error has occured: ${api01.status}`;
      throw new Error(message);
    }

    let html = ``;
    Object.keys(dataLibros).map((key) => {
      var obj = dataLibros[key];
      html += "key " + JSON.stringify(obj.key) + "\n";
    });

    this.setState({ aeronave: html })
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
              <SText style={{ color: "red" }} >{this.state.aeronave}</SText>
              <SText style={{ color: "yellow" }} >{this.state.tripulacion}</SText>
              <SText style={{ color: "green" }} >{this.state.vuelo}</SText>
            </SView>
          </SView>
        </SPage>

        <SHr height={20} />
        <PBarraFooter url={"inicio"} />
      </>
    );
  }
}