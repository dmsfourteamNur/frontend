import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SLoad, SNavigation } from 'servisofts-component';
import Button from '../../../Components/Button';
import Config from '../../../Config';
import Http from '../../../Http';

const Controller = "tripulante";
const API = Config.apis.tripulacion;

export default (props) => {
	const formulario = useRef();

	const [state, setState] = useState({
		data: [],
		dataCargo: [],
		dataCargoOk: [],
		key: SNavigation.getParam('key', ""),
		input:"none"
	});

	useEffect(() => {
		//LIST CARGOS
		Http.GET(API + "cargo").then(resp2 => {
			setState({ ...state, dataCargo: resp2 });

		})

		if (state.key != "") {
			//LIST TRIPULANTE
			Http.GET(API + Controller + "/" + state.key).then(resp => {
				setState({ ...state, data: resp });

			})
		}
	}, [])


	//CAMBIANDO IDENTIFICADOR CARGO PARA SELECT
	state.dataCargoOk.push({ key: "", content: "Elegir" })
	state.dataCargo.map((item, index) =>
		state.dataCargoOk[index + 1] = { key: item.key, content: item.Descripcion }
	)

	if (!state?.data.key && state.key) return <SLoad />
	console.log(state)

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
						defaultValue: state?.data?.Nombre
					},
					Apellido: {
						label: 'Apellidos',
						type: 'text',
						isRequired: true,
						defaultValue: state.data?.Apellido
					},
					EmailAddress: {
						label: 'Correo',
						type: 'email',
						isRequired: true,
						defaultValue: state.data?.EmailAddress
					},
					KeyCargo: {
						label: 'Cargo',
						type: 'select',
						// STheme: 'dark',
						options: state.dataCargoOk,
						isRequired: true,
						// defaultValue: objCargo?.key
						defaultValue: state.data["KeyCargo"]
					},
					Tipo: {
						label: 'Personal de',
						type: 'select',
						// STheme: 'dark',
						options: [{ key: "", content: <SText color={"#f0f"}>Elegir</SText> }, { key: "TIERRA", content: "TIERRA" }, { key: "AIRE", content: "AIRE" }],
						isRequired: true,
						defaultValue: state.data["Tipo"],
						onChangeText:(dato) => {
							console.log(dato);
							// state.input= "block"
							(dato == "AIRE") ? setState({ ...state, input: "block" }) : setState({ ...state, input: "none" })
						}

					},
					HorasVuelo: {
						style:{display: state.input},
						label: 'Horas de vuelo',
						type: 'number',
						// isRequired: (state.input == "none") ? false : true,
						defaultValue: state?.data?.HorasVuelo
					},
					NroMillas: {
						style:{display: state.input},
						label: 'Número de millas',
						type: 'number',
						// isRequired: (state.input == "none") ? false : true,
						defaultValue: state?.data.NroMillas
					},

				}}
				// onSubmitName={"Registrar"}
				onSubmit={(values) => {
					console.log(values);
					if (state.key != "") {
						Http.PUT(API + Controller + "/" + state.key, values).then(result => SNavigation.goBack())
					} else {
						Http.POST(API + Controller + "/registro", values).then(result => SNavigation.goBack())
					}
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