import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Aeronave'} disableScroll>
			<SView center col={'xs-12'} >
				<SView col={'xs-12'} row center>
					<SText center col={"xs-12"} style={{ fontSize: 48, }}> Microservicio Aeronave</SText>
					<SHr height={50} />
					<ButtonCuadrado url="/venta/vuelo" name="Tarifas" icon="Ajustes" />
					{/* <ButtonCuadrado url="/venta/vuelo/select" name="v. Select" icon="Ajustes" /> */}
					<ButtonCuadrado url="/venta/lista" name="Ventas" icon="Money" />
					<ButtonCuadrado url="/venta/registro" name="Vender" icon="Carrito" />
				</SView>
			</SView>
		</SPage>
	);
}