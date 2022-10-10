import { useEffect, useRef, useState } from "react";
import {
	SDate,
	SForm,
	SHr, SLoad,
	SNavigation,
	SPage,
	SText,
	STheme,
	SView
} from "servisofts-component";
import Config from "../../../../Config";

import Http from "../../../../Http";

const Controller = "vuelo";
const API = Config.apis.vuelo;

export default (props) => {
	const formulario = useRef();

	const [state, setState] = useState({
		key: SNavigation.getParam("key"),
	});

	useEffect(() => {
		var requestOptions = { method: "GET", redirect: "follow" };
		fetch("http://localhost:8080/api/vuelo/" + state.key, requestOptions)
			.then((response) => response.json())
			.then((result) => { state.data = result.data; setState({ ...state }); })
			.catch((error) => console.log("error", error));
	}, []);

	if (state.key) {
		if (!state.data) return <SLoad />;
	}

	return (
		<>
			<SPage title={"Registro"}>
				<SView col={"xs-12"} backgroundColor={"#0051c5"} center row>
					<SView col={"xs-11 sm-10 md-8 lg-6"} backgroundColor={"white"} center >

						{/* <SHr height={25} /> */}

						<SForm
							center
							row
							col={'xs-11 '}
							ref={formulario}
							style={{ justifyContent: "space-between", backgroundColor: "#0051c5" + "95" }}
							inputProps={{
								customStyle: "romeo",
								separation: 16,
								color: STheme.color.text,
							}}
							inputs={{

								nroVuelo: {
									label: "nroVuelo",
									type: "text",
									isRequired: true,
									placeholder: '0000',
									defaultValue: state.data?.nroVuelo ?? "7887",
									col: 'xs-12'
								},
								keyAeronave: {
									label: "keyAeronave",
									type: "text",
									isRequired: true,
									placeholder: 'Seleccionar aeronave',
									defaultValue: state.data?.keyAeronave ?? "686fc732-d731-4b29-beae-1ff15816eedb",
									col: 'xs-12'
								},

								origen: {
									label: "origen",
									type: "select",
									isRequired: true,
									placeholder: 'Seleccionar aeronave',
									defaultValue: state.data?.origen ?? "a1",
									options: [
										{ key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
										{ key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
										{ key: "beni-magdalena", content: "Beni - Magdalena" },
										{ key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
										{ key: "lpz", content: "La Paz -El Alto" },
										{ key: "sucre", content: "Sucre" },
										{ key: "potosi", content: "Potosi" },
									],
									col: 'xs-5.5'
								},

								destino: {
									label: "destino",
									type: "select",
									isRequired: true,
									placeholder: 'Seleccionar aeronave',
									defaultValue: state.data?.destino ?? "b1",
									options: [
										{ key: "sc-vvi", content: "Santa Cruz - Viru Viru" },
										{ key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
										{ key: "beni-magdalena", content: "Beni - Magdalena" },
										{ key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
										{ key: "lpz", content: "La Paz -El Alto" },
										{ key: "sucre", content: "Sucre" },
										{ key: "potosi", content: "Potosi" },
									],
									col: 'xs-5.5'
								},




								dateDeparture: {
									label: "fecha salida",
									type: "text",
									isRequired: true,
									placeholder: 'ingresar Hora inicio',
									defaultValue: new SDate(state.data?.fechaSalida).toString("yyyy-MM-dd") ?? "2022-08-22",

									col: 'lg-5.5'
								},
								dateArrival: {
									label: "fecha Fin",
									type: "text",
									isRequired: true,
									placeholder: 'Seleccionar hora fin',
									defaultValue: new SDate(state.data?.fechaArribe).toString("yyyy-MM-dd") ?? "2022-08-23",

									col: 'lg-5.5'

								},
								timeDeparture: {
									label: "fecha salida",
									type: "text",
									isRequired: true,
									placeholder: 'ingresar Hora inicio',
									defaultValue: new SDate(state.data?.fechaSalida).toString("hh:mm:ss") ?? "20:50:56",

									col: 'lg-5.5'
								},
								timeArrival: {
									label: "fecha Fin",
									type: "text",
									isRequired: true,
									placeholder: 'Seleccionar hora fin',
									defaultValue: new SDate(state.data?.fechaArribe).toString("hh:mm:ss") ?? "20:50:56",
									col: 'lg-5.5'
								},

								keyTripulacion: {
									label: "keyTripulacion",
									type: "text",
									isRequired: true,
									placeholder: 'escribir Tripulacion',
									defaultValue: state.data?.keyTripulacion ?? "5032fb80-5222-4e0d-a2b6-e3536ad16491",
								},
							}}
							onSubmit={(values) => {



								// var pollo = JSON.stringify(values);
								var vueloEditado =
								{
									"nroVuelo": values.nroVuelo,
									"keyAeronave": values.keyAeronave,
									"origen": values.origen,
									"destino": values.destino,
									"fechaSalida": values.dateDeparture + "T" + values.timeDeparture + ".000",
									"fechaArribe": values.dateArrival + "T" + values.timeArrival + ".000",
									// "fechaSalida": new SDate(values.dateDeparture + " " + values.timeDeparture, "yyyy-MM-ddThh:mm:ss"),
									// "fechaArribe": "2022-08-10T21:30:56.235",
									"keyTripulacion": values.keyTripulacion
								}


								if (state.key) {
									console.log(vueloEditado);

									Http.PUT(API + Controller + "/" + state.key, vueloEditado).then(result => SNavigation.goBack())
								} else {
									Http.POST(API + Controller + "/registro", values).then(result => SNavigation.goBack);

									// var requestOptions = {
									// 	method: "POST",
									// 	body: JSON.stringify(values),
									// 	redirect: "follow",
									// };
									// fetch("http://localhost:8080/api/vuelo/registro", requestOptions)
									// 	.then((response) => response.text())
									// 	.then((result) => console.log(result))
									// 	.then(result => SNavigation.goBack())
									// 	.catch((error) => console.log("error", error));
								}
							}}
						/>
					</SView>
				</SView>
			</SPage>

			<SView col={"xs-12"} center style={{ bottom: 0 }}>
				<SView
					col={"xs-11 sm-10 md-8 lg-6 xl-4"}
					height={50}
					center
					backgroundColor={STheme.color.card}
					style={{ borderRadius: 4 }}
					onPress={() => { formulario.current.submit(); }}>
					<SText color={STheme.color.text} font={"Roboto"} fontSize={14} bold>
						{state.key ? "EDITAR" : "REGISTRAR"}
					</SText>
				</SView>
			</SView>
			<SHr height={25} />
		</>
	);
};
