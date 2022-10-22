import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad, SPopup } from 'servisofts-component';
import Button from '../../Components/Button';
import FloatButtom from '../../Components/FloatButtom';
import { getByKey, create, edit } from '../../Redux/venta/ventaSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.venta);
	const dispatch = useDispatch();
	const formulario = useRef();
	const [state, setState] = useState({
		key: SNavigation.getParam('key', ""),
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
		// if (!state.data.keyModelo) state.data.keyModelo = item.keyModelo;

	}
	if(error){
		SPopup.alert("error")
	}

	return (<SPage title={'Registro'}>
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SForm
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				center
				inputs={{
					nombre: {
						label: 'Nombre',
						type: 'text',
						isRequired: true,
						defaultValue: item?.nombre,
					},
					apellido: {
						label: 'Apellido',
						type: 'text',
						isRequired: true,
						defaultValue: item?.apellido,
					},
					dni: {
						label: 'dni',
						type: 'text',
						isRequired: true,
						defaultValue: item?.dni,
					},
					keyVuelo: {
						label: 'keyVuelo',
						type: 'text',
						isRequired: true,
						defaultValue: item?.keyVuelo,
					},
					keyTarifa: {
						label: 'keyTarifa',
						type: 'text',
						isRequired: true,
						defaultValue: item?.keyTarifa,
					},
					monto: {
						label: 'Monto',
						type: 'text',
						isRequired: true,
						defaultValue: item?.monto,
					},

				}}
				onSubmit={(values) => {
					if (state.key != "") {
						dispatch(edit({
							...item,
							...values
						}));
					} else {
						dispatch(create(values));
					}
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