import { useEffect, useRef, useState } from "react";
import {
	SForm,
	SHr,
	SIcon,
	SLoad,
	SNavigation,
	SPage,
	SText,
	STheme,
	SView
} from "servisofts-component";
import Button from "../../../../Components/Button";
import Config from "../../../../Config";
import Http from "../../../../Http";

const Controller = "vuelo";
const API = Config.apis.vuelo;

export default (props) => {
	const formulario = useRef();
	const [state, setState] = useState({
 		key: SNavigation.getParam('key')
	});
	console.log(state)
	// useEffect(() => {
  //   var requestOptions = {method: "GET",redirect: "follow"};
  //   fetch("http://localhost:8080/api/vuelo/" + state.key, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => { state.data = result.data; setState({ ...state });})
  //     .catch((error) => console.log("error", error));}, []);

	useEffect(() => {
		if (state.key != "") {
			Http.GET(API + Controller + "/" + state.key).then(resp => {
				state.data=resp.data;
				setState({ ...state });
			})
		}
	}, [])


 	// if (!state?.data.key && state.key) return <SLoad />
  if (state.key) {
    if (!state.data) return <SLoad />;
  }

	return (<SPage title={'Registro'}>
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SForm
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				center
				inputs={{
					nroVuelo: {
						label: "nroVuelo",
						type: "text",
						isRequired: true,
						placeholder: '0000',
						defaultValue: state.data?.nroVuelo ?? "665",
						col: 'lg-12'
					},
					keyAeronave: {
						label: "keyAeronave",
						type: "text",
						isRequired: true,
						placeholder: 'Seleccionar aeronave',
						defaultValue: state.data?.keyAeronave ?? "686fc732-d731-4b29-beae-1ff15816eedb",
						col: 'lg-12'
					},
					origen: {
						label: "origen",
						type: "text",
						isRequired: true,
						placeholder: 'Seleccionar aeronave',
						defaultValue: state.data?.origen ?? "brasil",
						col: 'lg-12'
					},

					destino: {
						label: "destino",
						type: "text",
						isRequired: true,
						placeholder: 'Seleccionar aeronave',
						defaultValue: state.data?.destino ?? "oruro",
						col: 'lg-12'
					},


					fechaSalida: {
						label: "fecha salida",
						type: "text",
						isRequired: true,
						placeholder: 'ingresar Hora inicio',
						defaultValue: state.data?.fechaSalida ?? "2022-08-10T20:30:56.235",
						col: 'lg-5.5'
					},
					fechaArribe: {
						label: "fecha Fin",
						type: "text",
						isRequired: true,
						placeholder: 'Seleccionar hora fin',
						defaultValue: state.data?.fechaArribe ?? "2022-08-10T20:50:56.235",
						col: 'lg-5.5'

					},

					keyTripulacion: {
						label: "keyTripulacion",
						type: "text",
						isRequired: true,
						placeholder: 'escribir Tripulacion',
						defaultValue: state.data?.keyTripulacion ?? "5032fb80-5222-4e0d-a2b6-e3536ad16491",
					}
				}}
				onSubmit={(values) => {
					if (state.key) {
						Http.PUT(API + Controller + "/" + state.key, values).then(result => SNavigation.goBack())
					} else {
						// Http.POST(API + Controller + "/registro", values).then(result =>
						// 	console.log("aqui "+result)
						// 	// SNavigation.goBack()
						// 	)

 						// Http.POST(API+Controller+"/registro",values).then(result => SNavigation.goBack);
							var requestOptions = {
							 method: "POST",
 							 redirect: "follow",
							 body: JSON.stringify(values)
						 };
						 fetch("http://localhost:8080/api/vuelo/registro",requestOptions)
							 .then((response) =>{
  							 console.log("response")
  							 console.log( response.text())
							})
							 .then((result) =>{
							 console.log("resultado")
							 console.log( result)
							 })
 							 .catch((error) =>{
							 console.log("aqui hay error")
							 console.log( error)
							 console.log("aqui ---")

							});
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