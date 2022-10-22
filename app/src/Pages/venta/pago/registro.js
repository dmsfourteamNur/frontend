import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad, SPopup } from 'servisofts-component';
import Button from '../../../Components/Button';
import FloatButtom from '../../../Components/FloatButtom';
import { getByKey, create, edit, add } from '../../../Redux/venta/ventaSlice';

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
	if (error) {
		SPopup.alert("error")
	}

	return (
		<>
			{loading && <SLoad />}
			{!data && <SLoad />}
			<SPage title={'Registro'}>
				<SHr height={25} />
				<SView col={'xs-12'} center >
					<SForm
						ref={formulario}
						col={'xs-11 sm-10 md-8 lg-6 xl-4'}
						center
						inputs={{
							descripcion: {
								label: 'Descripción',
								type: 'text',
								isRequired: true,
								defaultValue: item?.descripcion,
							},
							keyVenta: {
								label: 'keyVenta',
								type: 'text',
								isRequired: true,
								defaultValue: item?.keyVenta,
							},
							monto: {
								label: 'Monto',
								type: 'money',
								isRequired: true,
								defaultValue: item?.precio,
							},
							tipo: {
								label: 'Tipo',
								type: 'select',
								// STheme: 'dark',
								options: [{ key: "", content: <SText color={"#f0f"}>Elegir</SText> }, { key: "QR", content: "QR" }, { key: "EFECTIVO", content: "EFECTIVO" }],
								isRequired: true,
								defaultValue: item?.tipo,
							},


						}}
						onSubmit={(values) => {




							SNavigation.goBack();
						}}
					/>
					<Button onPress={() => {
						formulario.current.submit();
					}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
				</SView>

			</SPage>
		</>
	);
}