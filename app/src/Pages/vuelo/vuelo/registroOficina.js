import { useEffect, useRef, useState } from 'react';
import { SForm, SHr, SLoad, SNavigation, SPage, SView } from 'servisofts-component';
import Button from '../../../Components/Button';
import Config from '../../../Config';
import Http from '../../../Http';

const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";
const API = Config.apis.vuelo;

export default (props) => {
	const formulario = useRef();
	const [state, setState] = useState({
		data: {},
		key: SNavigation.getParam('key', "")
	});
	// console.log(state)
	useEffect(() => {
		if (state.key != "") { Http.GET(API + ControllerVuelo + "/" + state.key).then(resp => { setState({ ...state, data: resp.data }); }) }
	}, [])


	if (!state?.data.key && state.key) return <SLoad />

	return (<SPage title={'Registro'}>
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SForm
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				center
				inputs={{
					nroVuelo: {
						label: 'nro Vuelo',
						type: 'text',
						isRequired: true,
						defaultValue: state.data?.nroVuelo
					},
					keyAeronave: {
						label: 'keyAeronave',
						type: 'text',
						isRequired: true,
						defaultValue: state.data?.keyAeronave
					}
				}}
				onSubmit={(values) => {
					if (state.key != "") {
						Http.PUT(API + ControllerVuelo + "/" + state.key, values).then(result => SNavigation.goBack())
					} else {
						Http.POST(API + ControllerVuelo + "/registro", values).then(result => SNavigation.goBack())
					}
				}}
			/>
			<Button onPress={() => {
				formulario.current.submit();
			}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
		</SView>
		<SHr height={25} />
	</SPage>
	);
}