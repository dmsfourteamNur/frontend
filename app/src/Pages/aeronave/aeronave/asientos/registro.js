import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Button from '../../../../Components/Button';
import FloatButtom from '../../../../Components/FloatButtom';
import { getByKey, AddAsiento, edit } from '../../../../Redux/aeronave/aeronaveSlice';
const timeout = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}
export default (props) => {
	const { loading, data, error } = useSelector((state) => state.aeronave);
	const dispatch = useDispatch();
	const formulario = useRef();
	const [state, setState] = useState({
		key: SNavigation.getParam('key', ""),
		keyAeronave: SNavigation.getParam('keyAeronave', ""),
		data: {}
	});
	useEffect(() => {
		if (state.key != "") {
			dispatch(getByKey(state.key));
		}
	}, [])

	var item;
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
		if (!state.data.keyModelo) state.data.keyModelo = item.keyModelo;

	}


	return (<SPage title={'Registro'}>
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SForm
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				center
				inputs={{
					clase: {
						label: 'Clase',
						type: 'select',
						isRequired: true,
						defaultValue: item?.clase ?? "Economica",
						options: ["Economica", "Primera", "Ejecutiva", "VIP"]
					},
					numero: {
						label: 'Numero asiento',
						type: 'text',
						isRequired: true,
						defaultValue: item?.matricula,

					},
					cantidad: {
						label: 'cantidad',
						type: 'number',
						isRequired: true,
						defaultValue: 1,

					},

				}}
				onSubmit={async (values) => {
					values["keyAeronave"] = state.keyAeronave
					for (let i = 0; i < values.cantidad; i++) {
						await timeout(200);
						dispatch(AddAsiento({
							...values,
							numero: parseInt(values.numero) + parseInt(i)
						}));
					}
					await timeout(200);
					window.location.href = "/aeronave/aeronave/asientos?keyAeronave=" + state.keyAeronave
					// SNavigation.goBack();
				}}
			/>
			<Button onPress={() => {
				formulario.current.submit();
			}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
		</SView>

	</SPage>
	);
}