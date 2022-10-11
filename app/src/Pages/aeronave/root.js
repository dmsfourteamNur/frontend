import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Aeronave'} disableScroll>
			<SView center col={'xs-12'} >
				<SView col={'xs-12'} row center>
					<ButtonCuadrado url="/aeronave/marca" name="Marca" icon="Ajustes" />
					<ButtonCuadrado url="/aeronave/aeronave" name="Aeronave" icon="Ajustes" />
				</SView>
			</SView>
		</SPage>
	);
}