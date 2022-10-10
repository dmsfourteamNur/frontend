import { useEffect, useRef, useState } from "react";
import {
	SForm,
	SHr, SNavigation,
	SPage, SView
} from "servisofts-component";
import Button from "../../../../Components/Button";
import Config from "../../../../Config";
import Http from "../../../../Http";




const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";
const API = Config.apis.vuelo;

export default (props) => {
	const formulario = useRef();
	const [state, setState] = useState({
		key: SNavigation.getParam('key'),
		data: [],
		dataAeronave: [],
		dataTripulacion: [],
		aeronaves: [],
		tripulacion: [],
	});
	// console.log(state)
	useEffect(() => {
		var requestOptions = { method: "GET", redirect: "follow" };
		fetch("http://localhost:8080/api/vuelo/" + state.key, requestOptions)
			.then((response) => response.json())
			.then((result) => { state.data = result.data; setState({ ...state }); })
			.catch((error) => console.log("error", error));
	}, []);

	// useEffect(() => {
	// 	if (state.key != "") {
	// 		Http.GET(API + ControllerVuelo + "/" + state.key).then(resp => { state.data = resp.data; setState({ ...state }) })
	// 	}
	// 	console.log(state.data);
	// 	// Http.GET(API + ControllerAeronave).then(resp => { this.setState({ dataAeronave: resp }); })
	// 	// Http.GET(API + ControllerTripulacion).then(resp => { this.setState({ dataTripulacion: resp }); })
	// }, [])







	// if (state.key) {
	// 	if (!state.data) return <SLoad />;
	// }

	console.log(state.data.nroVuelo)

	return (<SPage title={'Registro'} style={{ backgroundColor: "#0051c5" + "55", }} >
		<SView col={'xs-12'} center backgroundColor={"#0051c5"} >
			<SView col={'xs-11 sm-10 md-8 lg-6 '} center backgroundColor={"white"}>

				<SForm
					ref={formulario}
					center row col={'xs-11 '}

					style={{ justifyContent: "space-between", backgroundColor: "#0051c5" + "95" }}

					inputs={{
						nroVuelo: {
							type: "text",
							label: "nroVuelo",
							placeholder: 'NroVuelo *',
							isRequired: true,
							defaultValue: state.data?.nroVuelo ?? null,
							col: 'xs-12'
						},
						keyAeronave: {
							type: "text",
							label: "keyAeronave",
							placeholder: 'keyAeronave *',
							isRequired: true,
							defaultValue: state.data?.keyAeronave ?? null,
							col: 'xs-12'
						},
						origen: {
							type: "text",
							label: "origen",
							placeholder: 'Origen *',
							isRequired: true,
							defaultValue: state.data?.origen ?? null,
							col: 'xs-5.5'
						},
						destino: {
							label: "destino",
							type: "text",
							isRequired: true,
							placeholder: 'Destino *',
							defaultValue: state.data?.destino ?? null,
							col: 'xs-5.5'
						},
						// fecha_Salida: {
						// 	type: "text",
						// 	label: "fecha salida",
						// 	placeholder: 'Fecha Salida *',
						// 	isRequired: true,
						// 	defaultValue: new SDate(state.data?.fechaSalida).toString("yyyy-MM-dd") ?? "2022-08-10T18:30:56.235",
						// 	col: 'xs-5'
						// },
						// hora_Salida: {
						// 	type: "text",
						// 	label: "fecha salida",
						// 	placeholder: 'Fecha Salida *',
						// 	isRequired: true,
						// 	defaultValue: new SDate(state.data?.fechaSalida).toString("hh:mm:ss") ?? "2022-08-10T18:30:56.235",
						// 	col: 'xs-5.5'
						// },
						// fecha_Arribe: {
						// 	type: "text",
						// 	label: "fecha Fin",
						// 	placeholder: 'Fecha LLegada *',
						// 	isRequired: true,
						// 	defaultValue: new SDate(state.data?.fechaArribe).toString("yyyy-MM-dd") ?? "2022-08-10T20:50:56.235",
						// 	col: 'xs-5.5'
						// },
						// hora_Arribe: {
						// 	type: "text",
						// 	label: "fecha Fin",
						// 	placeholder: 'Fecha LLegada *',
						// 	isRequired: true,
						// 	defaultValue: new SDate(state.data?.fechaArribe).toString("hh:mm:ss") ?? "2022-08-10T20:50:56.235",
						// 	col: 'xs-5.5'
						// },


						keyTripulacion: {
							type: "text",
							label: "keyTripulacion",
							placeholder: 'KeyTripulacion *',
							isRequired: true,
							defaultValue: state.data?.keyTripulacion ?? null,
							col: 'xs-12'
						}
					}}
					onSubmit={(values) => {
						if (state.key) {
							Http.PUT(API + ControllerVuelo + "/" + state.key, values).then(result => SNavigation.goBack())
						} else {
							Http.POST(API + ControllerVuelo + "/registro", values).then(result => SNavigation.goBack);

							// 	var requestOptions = {
							// 	 method: "POST",
							// 	 redirect: "follow",
							// 	 body: JSON.stringify(values)
							//  };
							//  fetch("http://localhost:8080/api/vuelo/registro",requestOptions)
							// 	 .then((response) =>{
							// 	 console.log("response")
							// 	 console.log( response.text())
							// 	})
							// 	 .then((result) =>{
							// 	 console.log("resultado")
							// 	 console.log( result)
							// 	 })
							// 	 .catch((error) =>{
							// 	 console.log("aqui hay error")
							// 	 console.log( error)
							// 	 console.log("aqui ---")
							// 	});

						}
					}}
				/>
				<SHr height={25} />
				<Button onPress={() => { formulario.current.submit(); }}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
			</SView>
		</SView>
		<SHr height={25} />
	</SPage>
	);
}