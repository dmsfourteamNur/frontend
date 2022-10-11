import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Home'} disableScroll>
			<SView center col={'xs-12'}  >
				<SView col={'xs-11'} center row>
					<ButtonCuadrado url="/tripulacion" name="Tripulacion" icon="Ajustes" />
					<ButtonCuadrado url="/aeronave" name="Aeronave" icon="Ajustes" />
					<ButtonCuadrado url="/vuelo" name="Vuelo" icon="Ajustes" />
					<ButtonCuadrado url="/venta" name="Venta" icon="Ajustes" />
					<ButtonCuadrado url="/checkIn" name="CheckIn" icon="Ajustes" />
				</SView>
			</SView>
		</SPage>
	);
}