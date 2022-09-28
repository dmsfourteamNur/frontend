import React, { Component } from 'react';

import { SView, SText, STheme, SGradient, SIcon, SNavigation, SHr } from 'servisofts-component'

export default class PBarraFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		// this.page = SNavigation.getParam("page");
		// this.key_restaurante = SNavigation.getParam("key_restaurante");
	}

	getItem({ key, title, icon, url, params }) {
		var color = STheme.color.primary;
		var isSelect = (key == this.props.url)
		return <SView flex center height={65} onPress={() => {
			SNavigation.navigate(url, params);
		}} >
			<SView style={{
				width: 80
			}} center>
				<SView height={5} col={"xs-12"} style={{
					backgroundColor: (isSelect ? STheme.color.primary : ""),
					borderBottomLeftRadius: 5,
					borderBottomRightRadius: 5
				}}></SView>
				<SHr height={10}></SHr>
				<SView height={23} colSquare center >
					<SIcon name={icon} fill={STheme.color.primary} />
				</SView>
				<SView height={2} />
				<SText fontSize={8} center color={STheme.color.primary} bold >{title}</SText>
				<SHr height={10}></SHr>
				<SView height={5} col={"xs-12"} style={{
					backgroundColor: (isSelect ? STheme.color.primary : ""),
					borderTopLeftRadius: 5,
					borderTopRightRadius: 5
				}}></SView>
			</SView>
		</SView>


	}
	render() {
		return (
			<>
				<SView height={10} >
					<SGradient colors={["#00000010", "#ffffff10"]} height={10} />
				</SView>
				<SView col={"xs-12"} height={65} >
					<SView col={'xs-12'} row  >
						{this.getItem({ key: "inicio", title: 'INICIO', icon: 'Inicio', url: 'inicio', params: {} })}
						{this.getItem({ key: "entradas", title: 'ENTRADAS', icon: 'Entradas', url: 'entradas', params: {} })}
						{this.getItem({ key: "reservas", title: 'RESERVAS', icon: 'Reservas', url: 'reservas', params: {} })}
					</SView>
				</SView >
			</>
		);
	}
}
