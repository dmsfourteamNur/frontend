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
			// dataVuelo: [],
			dataAeronave: [],
			dataTripulacion: [],
			dataVuelos: [],
		};
	}

	componentDidMount() {
		this.cargaAPI();
		// this.ultimo();
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

		fetch("http://localhost:8080/api/vuelo", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.state.dataVuelos = result;
				this.setState({ dataVuelos: result });
			})
			.catch((error) => console.log("error", error));

	}

	getAeronaves() {
		var cargarAeronaves = [];

		cargarAeronaves.push({ key: " ", content: "Elegir Aeronave" })
		this.state.dataAeronave.map((item, index) => {
			// if (item.estado == "1") {
			cargarAeronaves[index + 1] = { key: item.keyAeronave, content: item.matricula }
			// }
		})
		return cargarAeronaves;
	}

	getTripulacion() {
		var cargarTripulacion = [];

		cargarTripulacion.push({ key: " ", content: "Elegir Tripulación" })
		this.state.dataTripulacion.map((item, index) => {
			// if (item.estado == "1") {
			cargarTripulacion[index + 1] = { key: item.keyTripulacion, content: item.descripcion }
			// }

		}
		)
		return cargarTripulacion;
	}

	ultimo() {
		let numero = 0;
		this.state.dataVuelos.map((item, index) => {
			var obj = index[this.state.dataVuelos.length - 1];
			numero = parseInt(item.nroVuelo) + 1;
			return numero;
		});
		return numero;
	}
	validaNroVuelo(numero) {
		this.state.dataVuelos.map((item, index) => {
			if (item.nroVuelo == numero) {
				alert("Nro ya existe");
				return console.log("Nro ya existe");
			}
		});
	}

	validaHoraSalidaPorAeronave(key, fecha) {
		let bandera = true;
		this.state.dataVuelos.map((item, index) => {
			if (item.keyAeronave == key && item.fechaSalida == fecha) {
				alert("aeronave ya tiene esa hora de salida");
				console.log("aeronave ya tiene esa hora de salida");
				bandera = false;
			}
		});
		return bandera;
	}

	validaHoraSalidaPorTripulacion(key, fecha) {
		let bandera = true;
		this.state.dataVuelos.map((item, index) => {
			if (item.keyTripulacion == key && item.fechaSalida == fecha) {
				alert("Tripulación ya tiene esa hora de salida");
				console.log("Tripulación ya tiene esa hora de salida");
				bandera = false;
			}
		});
		return bandera;
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
		// console.log(this.state.dataVuelos)
		this.ultimo();
		let siles = this.ultimo()
		return (
			<SPage title={"Registro"}>
				<SText>ultimo {this.ultimo()}</SText>
				<SView col={'xs-12'} center backgroundColor={"#0051c5"} >
					<SView col={'xs-11 sm-10 md-8 lg-6 '} center backgroundColor={"white"}>

						<SForm
							center
							row
							col={'xs-11 '}
							ref={(form) => { this.form = form; }}

							style={{ justifyContent: "space-between", backgroundColor: "#0051c5" + "95" }}
							inputs={{
								nroVuelo: {
									type: "text",
									label: "nroVuelo",
									placeholder: 'NroVuelo *',
									isRequired: true,
									col: 'xs-12',
									defaultValue: this.state.dataVuelo?.nroVuelo ?? null,
									options: this.ultimo(),

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

								if (!this.state.key) {
									this.validaNroVuelo(values.nroVuelo);
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

								//todo verifica si existe el numeo de vuelo con bd
								//todo verificar si existe vuelo la aeraonve con esa hora
								// al actualizar. verificar si existe a esa hora la aeroanve


								var vueloFormateado =
								{
									"nroVuelo": values.nroVuelo,
									"keyAeronave": values.keyAeronave,
									"origen": values.origen,
									"destino": values.destino,
									"fechaSalida": values.dateDeparture + "T" + values.timeDeparture + ":00.000",
									"fechaArribe": values.dateArrival + "T" + values.timeArrival + ":00.000",
									"keyTripulacion": values.keyTripulacion
								}

								if (!this.validaHoraSalidaPorAeronave(vueloFormateado.keyAeronave, vueloFormateado.fechaSalida)) return;
								if (!this.validaHoraSalidaPorTripulacion(vueloFormateado.keyAeronave, vueloFormateado.fechaSalida)) return;



								if (this.state.key) {
									console.log(vueloFormateado)
									// Http.PUT(API + ControllerVuelo + "/" + this.state.key, vueloEditado).then(result => SNavigation.goBack())

									var requestOptions = {
										method: "PUT",
										redirect: "follow",
										body: JSON.stringify(vueloFormateado)
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
										body: JSON.stringify(vueloFormateado)
									};
									fetch("http://localhost:8080/api/vuelo/registro", requestOptions)
										// .then((response) => {
										// 	console.log("response")
										// 	console.log(response.text())
										// })
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
