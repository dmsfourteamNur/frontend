import { SPage, SView } from 'servisofts-component';
import ButtonCuadrado from '../Components/ButtonCuadrado';

export default (props) => {
	return (
		<SPage title={'Home'} disableScroll>
			<SView center col={'xs-12'}  >
				<SView col={'xs-12'} center row>
					<ButtonCuadrado url="/tripulacion" name="Tripulacion" icon="Box" fill={"#F0949B"} />
					<ButtonCuadrado url="/aeronave" name="Aeronave" icon="Box" fill={"#A9B0B6"} />
					<ButtonCuadrado url="/vuelo" name="Vuelo" icon="Box" fill={"#BEC5DF"} />
					<ButtonCuadrado url="/venta" name="Venta" icon="Box" fill={"#F0D2A2"} />
					<ButtonCuadrado url="/checkin" name="CheckIn" icon="Box" fill={"#AFD1E9"} />
					<ButtonCuadrado url="/login" name="Login" icon="Box" fill={"#AFD1E9"} />
				</SView>
			</SView>
		</SPage>
	);
}
