import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Configuracion from '../../../configuracion.json'
import Button from '../../../Components/Button';
import Config from '../../../Config';
import Http from '../../../Http';

const Controller = "tripulacion";
const API = Config.apis.tripulacion

export default (props) => {

	const formulario = useRef();
	const [state, setState] = useState({
		data: {},
		key: SNavigation.getParam('key', "")
	});
	console.log(state)

	useEffect(() => {
		if (state.key != "") {
			Http.GET(API + Controller + "/" + state.key).then(resp => {
				setState({ ...state, data: resp });
			})
		}
	}, [])

	if (!state?.data.key && state.key) return <SLoad />

	return (<SPage title={'Registro Tripulación'}>
				<SView col={'xs-12'} center >
					<SHr height={25} />

					<SForm
						center
						row
						col={'xs-11 sm-10 md-8 lg-6 xl-4'}
						ref={(form) => {
							formulario.current = form;
						}}
						style={{
							justifyContent: 'space-between',
						}}
						inputProps={{
							customStyle: 'romeo',
							separation: 16,

							color: STheme.color.text
							// fontSize: 16,
							// font: "Roboto",
						}}
						inputs={{
							Descripcion: {
								label: 'Descripción',
								type: 'text',
								isRequired: true,
								defaultValue: state.data?.Descripcion
							},

						}}
						// onSubmitName={"Registrar"}
						onSubmit={(values) => {

							if (state.key != "") {
								Http.PUT(API + Controller + "/" + state.key, values).then(result => SNavigation.goBack())
							} else {
								Http.POST(API + Controller + "/registro", values).then(result => SNavigation.goBack())
							}
						}}
					/>
					<Button onPress={() => {
						formulario.current.submit();
					}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
				</SView>
			</SPage>
	);
}