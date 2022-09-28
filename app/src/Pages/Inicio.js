import React from 'react';
import { SHr, SIcon, SPage, SText, STheme, SView } from "servisofts-component";

import PBarraFooter from "../Components/PBarraFooter";


export default class Inicio extends React.Component {
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
              <SIcon name={"Logo"} fill={STheme.color.primary} />
            </SView>
          </SView>

        </SPage>

        <SHr height={20} />
        <PBarraFooter url={"inicio"} />
      </>
    );
  }
}