import { Text, View } from 'react-native'
import React from 'react'
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SDate } from "servisofts-component";

import PBarraFooter from "../Components/PBarraFooter";


export default class entradas extends React.Component {
  render() {
    return (
      <>

        <SPage title={"Pedidos de Hoy"} hidden>
          <SView col={"xs-12"} center>
            <SHr height={25} />
            <SText >Entradas</SText>
          </SView>

          <SView flex center>
            <SView col={"xs-5"} height={200}>
              <SIcon name={"Logo"} fill={STheme.color.primary} />
            </SView>
          </SView>
        </SPage>

        <SHr height={20} />
        <PBarraFooter url={"entradas"} />
      </>
    );
  }
}