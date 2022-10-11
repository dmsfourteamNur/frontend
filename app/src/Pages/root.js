import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Aeronave'} disableScroll>
			<SView center col={'xs-12'} height >
				<SHr height={50} />
				<SView col={'xs-11 md-10 xl-10'} center row>
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