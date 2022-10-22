import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Aeronave'} disableScroll>
			<SView center col={'xs-12'} >
			<SText center col={"xs-12"} style={{ fontSize: 48, }}> Microservicio Aeronave</SText>
			<SHr height={50} />
				<SView col={'xs-12'} row center>
					<ButtonCuadrado url="/aeronave/marca" name="Marca" icon="Ajustes" />
					<ButtonCuadrado url="/aeronave/modelo" name="Modelo" icon="Ajustes" />
					<ButtonCuadrado url="/aeronave/aeronave" name="Aeronave" icon="Ajustes" />
				</SView>
			</SView>
		</SPage>
	);
}