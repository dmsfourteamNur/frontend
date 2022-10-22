import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SLoad, SNavigation } from 'servisofts-component';
import Button from '../../../Components/Button';
import * as tripulanteSlice from '../../../Redux/tripulacion/tripulanteSlice';
import * as cargoSlice from '../../../Redux/tripulacion/cargoSlice';


export default (props) => {
	const { loading, data, error } = useSelector((state) => state.tripulante);
	const cargo = useSelector((state) => state.cargo);
	const dispatch = useDispatch();
	const formulario = useRef();

	const [state, setState] = useState({
		dataCargoOk: [],
		key: SNavigation.getParam('key', ""),
		input: "none"
	});
	useEffect(() => {
		//LIST CARGOS
		dispatch(cargoSlice.getAll());
		console.log("entro getAll cargo");

		if (state.key != "") {
			//LIST TRIPULANTE
			dispatch(tripulanteSlice.getByKey(state.key));
			console.log("entro key");

		}
	}, [])

	var item = "";
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
	}

	// state.dataCargoOk.push({ key: "", content: "Elegir" })
	var dataCargo = cargo.data;
	Object.keys(dataCargo).map((item2, index) =>
		state.dataCargoOk[index + 1] = { key: dataCargo[item2].key, content: dataCargo[item2].Descripcion }
	)

	if (!data || loading) return <SLoad />;
	if (!cargo.data || cargo.loading) return <SLoad />;

	return (<SPage title={'Registro Tripulante'}>
		<SHr height={25} />
		<SView
			col={'xs-12'}
			backgroundColor={'transparent'} center>
			<SHr height={25} />
			<SForm
				center
				row
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				style={{
					justifyContent: 'space-between'
				}}
				inputProps={{
					customStyle: 'romeo',
					separation: 16,
					color: STheme.color.text
					// fontSize: 16,
					// font: "Roboto",
				}}
				inputs={{
					Nombre: {
						label: 'Nombres',
						type: 'text',
						isRequired: true,
						defaultValue: item?.Nombre
					},
					Apellido: {
						label: 'Apellidos',
						type: 'text',
						isRequired: true,
						defaultValue: item?.Apellido
					},
					EmailAddress: {
						label: 'Correo',
						type: 'email',
						isRequired: true,
						defaultValue: item?.EmailAddress
					},
					KeyCargo: {
						label: 'Cargo',
						type: 'select',
						// STheme: 'dark',
						options: state.dataCargoOk,
						isRequired: true,
						defaultValue: item["KeyCargo"]
					},
					Tipo: {
						label: 'Personal de',
						type: 'select',
						// STheme: 'dark',
						options: [{ key: "", content: <SText color={"#f0f"}>Elegir</SText> }, { key: "TIERRA", content: "TIERRA" }, { key: "AIRE", content: "AIRE" }],
						isRequired: true,
						defaultValue: item["Tipo"],
						onChangeText: (dato) => {
							console.log(dato);
							// state.input= "block"
							(dato == "AIRE") ? setState({ ...state, input: "block" }) : setState({ ...state, input: "none" })
						}
					},
					HorasVuelo: {
						style: { display: state.input },
						label: 'Horas de vuelo',
						type: 'number',
						// isRequired: (state.input == "none") ? false : true,
						defaultValue: item?.HorasVuelo
					},
					NroMillas: {
						style: { display: state.input },
						label: 'Número de millas',
						type: 'number',
						// isRequired: (state.input == "none") ? false : true,
						defaultValue: item?.NroMillas
					},

				}}
				// onSubmitName={"Registrar"}
				onSubmit={(values) => {
					console.log(values);
					if (state.key != "") {
						dispatch(tripulanteSlice.edit({
							...item,
							...values
						}));
					} else {
						dispatch(tripulanteSlice.create(values));
					}
					SNavigation.goBack();
				}}
			/>
			<SHr height={15} />
			<Button onPress={() => {
				formulario.current.submit();
			}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
		</SView>
		<SHr height={25} />
	</SPage>
	);
}