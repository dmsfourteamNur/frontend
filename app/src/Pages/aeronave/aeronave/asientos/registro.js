import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Button from '../../../../Components/Button';
import FloatButtom from '../../../../Components/FloatButtom';
import { getByKey, AddAsiento, edit } from '../../../../Redux/aeronave/aeronaveSlice';

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

				}}
				onSubmit={(values) => {
					values["keyAeronave"] = state.keyAeronave
					console.log(values)
					dispatch(AddAsiento(values));
					SNavigation.goBack();
				}}
			/>
			<Button onPress={() => {
				formulario.current.submit();
			}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
		</SView>

	</SPage>
	);
}