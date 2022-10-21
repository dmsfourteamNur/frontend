import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Aeronave'} disableScroll>
			<SView center col={'xs-12'} >
				<SView col={'xs-12'} row center>
					<ButtonCuadrado url="/venta/lista" name="Ventas" icon="Ajustes" />
					<ButtonCuadrado url="/venta/registro" name="Vender" icon="Carrito" />
				</SView>
			</SView>
		</SPage>
	);
}