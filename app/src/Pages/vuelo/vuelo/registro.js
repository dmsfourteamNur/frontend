import { Component } from "react";
import { connect } from "react-redux";
import { SDate, SForm, SHr, SLoad, SNavigation, SPage, SText, SView } from "servisofts-component";

import Button from '../../../Components/Button';
import Config from '../../../Config';

const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";
const API = Config.apis.vuelo;

class registro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: SNavigation.getParam('key'),
			dataVuelo: {},
			dataAeronave: [],
			dataTripulacion: [],
		};
	}

	componentDidMount() {
		this.cargaAPI();
	}

	cargaAPI() {
		// Http.GET(API + ControllerVuelo + "/" + this.state.key).then(resp => { this.setState({ dataVuelo: resp.data }); })
		// Http.GET(API + ControllerAeronave).then(resp => { this.setState({ dataAeronave: resp }); })
		// Http.GET(API + ControllerTripulacion).then(resp => { this.setState({ dataTripulacion: resp }); })

		var requestOptions = { method: "GET", redirect: "follow" };
		fetch("http://localhost:8080/api/vuelo/" + this.state.key, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.state.dataVuelo = result.data;
				this.setState({ dataVuelo: result.data });
			})
			.catch((error) => console.log("error", error));

		fetch("http://localhost:8080/api/aeronave", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.state.dataAeronave = result;
				this.setState({ dataAeronave: result });
			})
			.catch((error) => console.log("error", error));

		fetch("http://localhost:8080/api/tripulacion", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.state.dataTripulacion = result;
				this.setState({ dataTripulacion: result });
			})
			.catch((error) => console.log("error", error));

	}

	getAeronaves() {
		var cargarAeronaves = [];

		cargarAeronaves.push({ key: " ", content: "Elegir Aeronave" })
		this.state.dataAeronave.map((item, index) => {
			if (item.estado == "1") {
				cargarAeronaves[index + 1] = { key: item.keyAeronave, content: item.matricula }
			}
		})
		return cargarAeronaves;
	}

	getTripulacion() {
		var cargarTripulacion = [];

		cargarTripulacion.push({ key: " ", content: "Elegir Tripulación" })
		this.state.dataTripulacion.map((item, index) => {
			if (item.estado == "1") {
				cargarTripulacion[index + 1] = { key: item.keyTripulacion, content: item.descripcion }
			}

		}
		)
		return cargarTripulacion;
	}

	getOrigen() {
		return [
			{ key: " ", content: "Elegir lugar Aeronpuerto" },
			{ key: "sc-vvi", content: "Santa cruz - Viru Viru" },
			{ key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
			{ key: "beni", content: "Beni - Magdalena" },
			{ key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
			{ key: "lpz", content: "La paz" },
			{ key: "sucre", content: "Sucre" },
			{ key: "potosi", content: "Potosi" }
		]
	}

	render() {
		if (this.state.key && !this.state.dataVuelo.key) return <SLoad />;

		const salidaDate = this.state.dataVuelo.fechaSalida;
		const llegadaDate = this.state.dataVuelo.fechaArribe;

		return (
			<SPage title={"Registro"}>

				<SView col={'xs-12'} center backgroundColor={"#0051c5"} >
					<SView col={'xs-11 sm-10 md-8 lg-6 '} center backgroundColor={"white"}>

						<SText> {this.state.dataVuelo.nroVuelo}</SText>
						<SForm
							center
							row
							col={'xs-11 '}
							ref={(form) => { this.form = form; }}

							style={{ justifyContent: "space-between", backgroundColor: "#0051c5" + "95" }}
							inputs={{
								nroVuelo: {
									type: "number",
									label: "nroVuelo",
									placeholder: 'NroVuelo *',
									isRequired: true,
									col: 'xs-12',
									defaultValue: this.state.dataVuelo?.nroVuelo
								},
								keyAeronave: {
									type: "select",
									label: "keyAeronave",
									placeholder: 'keyAeronave *',
									isRequired: true,
									defaultValue: this.state.dataVuelo?.keyAeronave ?? " ",
									options: this.getAeronaves(),
									col: 'xs-12'
								},
								origen: {
									type: "select",
									label: "origen",
									placeholder: 'Origen *',
									isRequired: true,
									defaultValue: this.state.dataVuelo?.origen ?? " ",
									options: this.getOrigen(),
									col: 'xs-5.5'
								},
								destino: {
									type: "select",
									label: "destino",
									isRequired: true,
									placeholder: 'Seleccionar destino',
									defaultValue: this.state.dataVuelo?.destino ?? " ",
									options: this.getOrigen(),
									col: 'xs-5.5'
								},
								dateDeparture: {
									type: "date",
									label: "fecha salida",
									placeholder: 'Fecha Salida *',
									isRequired: true,
									defaultValue: new SDate(salidaDate).toString("yyyy-MM-dd") ?? " ",
									// defaultValue: new SDate(this.state.data?.fechaSalida).toString("yyyy-MM-dd") ?? " ",
									col: 'xs-5.5'
								},
								timeDeparture: {
									type: "text",
									label: "hora salida",
									placeholder: 'Fecha Salida *',
									isRequired: true,
									defaultValue: new SDate(salidaDate).toString("hh:mm") ?? " ",
									col: 'xs-5.5'
								},
								dateArrival: {
									type: "date",
									label: "fecha Fin",
									placeholder: 'Fecha LLegada *',
									isRequired: true,
									defaultValue: new SDate(llegadaDate).toString("yyyy-MM-dd") ?? " ",
									// defaultValue: new SDate(this.state.data?.fechaArribe).toString("yyyy-MM-dd") ?? " ",
									col: 'xs-5.5'
								},
								timeArrival: {
									type: "text",
									label: "hora llegada",
									placeholder: 'hora LLegada *',
									isRequired: true,
									defaultValue: new SDate(llegadaDate).toString("hh:mm") ?? " ",
									col: 'xs-5.5'
								},
								keyTripulacion: {
									type: "select",
									label: "keyTripulacion",
									placeholder: 'KeyTripulacion *',
									isRequired: true,
									defaultValue: this.state.dataVuelo?.keyTripulacion ?? " ",
									options: this.getTripulacion(),
									col: 'xs-12'
								}
							}}
							onSubmit={(values) => {

								if (!values.nroVuelo) {
									alert("Nro vuelo vacio");
									return console.log("Nro vuelo vacio");
								}
								if (values.keyAeronave == " ") {
									alert("Seleccionar Aeronave");
									return console.log("Seleccionar Aeronave");
								}
								if (values.origen == " ") {
									alert("Seleccionar origen");
									return console.log("Seleccionar origen");
								}
								if (values.destino == " ") {
									alert("Seleccionar destino");
									return console.log("Seleccionar destino");
								}
								if (values.origen == values.destino) {
									alert("origen y destino son iguales");
									return console.log("origen y destino son iguales");
								}


								if (values.dateDeparture > values.dateArrival) {
									alert("fecha llegada incorrectas");
									return console.log("fecha llegada incorrecta");
								}

								if (values.timeDeparture >= values.timeArrival) {
									alert("hora llegada incorrecta");
									return console.log("hora llegada incorrecta");
								}

								if (values.keyTripulacion == " ") {
									alert("Seleccionar tripulacion");
									return console.log("Seleccionar tripulacion");
								}




								var vueloEditado =
								{
									"nroVuelo": values.nroVuelo,
									"keyAeronave": values.keyAeronave,
									"origen": values.origen,
									"destino": values.destino,
									"fechaSalida": values.dateDeparture + "T" + values.timeDeparture + ":00.000",
									"fechaArribe": values.dateArrival + "T" + values.timeArrival + ":00.000",
									"keyTripulacion": values.keyTripulacion
								}

								if (this.state.key) {
									console.log(vueloEditado)
									// Http.PUT(API + ControllerVuelo + "/" + this.state.key, vueloEditado).then(result => SNavigation.goBack())

									var requestOptions = {
										method: "PUT",
										redirect: "follow",
										body: JSON.stringify(vueloEditado)
									};
									fetch("http://localhost:8080/api/vuelo/" + this.state.key, requestOptions)
										// .then((response) => {
										// 	console.log("response")
										// 	console.log(response.text())
										// })
										.then((result) => {

											console.log("resultado");
											console.log(result);
											SNavigation.goBack();
										})
										.catch((error) => {
											console.log("aqui hay error")
											console.log(error)
											console.log("aqui ---")
										});

								} else {
									// Http.POST(API + ControllerVuelo + "/registro", values).then(result => SNavigation.goBack());

									var requestOptions = {
										method: "POST",
										redirect: "follow",
										body: JSON.stringify(values)
									};
									fetch("http://localhost:8080/api/vuelo/registro", requestOptions)
										.then((response) => {
											console.log("response")
											console.log(response.text())
										})
										.then((result) => {
											console.log("resultado")
											console.log(result)
											SNavigation.goBack();
										})
										.catch((error) => {
											console.log("aqui hay error")
											console.log(error)
											console.log("aqui ---")
										});
								}
							}}
						/>
						<SHr height={25} />

						<Button onPress={() => { this.form.submit(); }}>{this.state.key ? 'EDITAR' : 'REGISTRAR'}</Button>

					</SView>
				</SView>
				<SHr height={25} />

			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(registro);
