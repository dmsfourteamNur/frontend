import { Component } from "react";
import { connect } from "react-redux";
import {
	SForm,
	SHr, SNavigation, SPage, SText, SView
} from "servisofts-component";
import Button from "../../../../Components/Button";
import Config from "../../../../Config";
import Http from "../../../../Http";

const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";
const API = Config.apis.vuelo;


class Registro extends Component {

	constructor(props) {
		super(props);
		this.state = {
			key: SNavigation.getParam('key'),

			dataVuelo: [],
			dataAeronave: [],
			dataTripulacion: [],
			cargarAeronaves: [],
			cargarTripulacion: [],
		};
	}

	componentDidMount() {
		this.cargaAPI();
	}


	cargaAPI() {
		// Http.GET(API + ControllerVuelo + "/" + this.state.key).then(resp => { this.state.dataVuelo = resp.data; setState({ ...state }); })
		Http.GET(API + ControllerVuelo + "/" + this.state.key).then(resp => { this.setState({ dataVuelo: resp.data }); })
		Http.GET(API + ControllerAeronave).then(resp => { this.setState({ dataAeronave: resp }); })
		Http.GET(API + ControllerTripulacion).then(resp => { this.setState({ dataTripulacion: resp }); })
	}



	getAeronaves() {
		this.state.cargarAeronaves.push({ key: " ", content: "Elegir Aeronave" })
		this.state.dataAeronave.map((item, index) =>
			this.state.cargarAeronaves[index + 1] = { key: item.keyAeronave, content: item.matricula }
		)
		return this.state.cargarAeronaves;
	}

	getTripulacion() {
		this.state.cargarTripulacion.push({ key: " ", content: "Elegir Tripulación" })
		this.state.dataTripulacion.map((item, index) =>
			this.state.cargarTripulacion[index + 1] = { key: item.keyTripulacion, content: item.descripcion }
		)
		return this.state.cargarTripulacion;
	}

	getOrigen() {
		return [
			{ key: " ", content: "Elegir lugar Aeronpuerto" },
			{ key: "sc-vvi", content: "Santa cruz - Viru Viru" },
			{ key: "sc-tpll", content: "Santa Cruz - Tronpillo" },
			{ key: "beni", content: "Beni - Magdalena" },
			{ key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
			{ key: "lpz", content: "Cochabamba - Jorge Wilsterman" },
			{ key: "sucre", content: "Sucre" },
			{ key: "potosi", content: "Potosi" }
		]
	}

	render() {
		let data = {};

		if (this.state.key) {
			data = this.state.dataVuelo;


			if (!this.state.dataVuelo) return <SLoad />;
		}
		// console.log("this.state.dataVuelo")
		// console.log(data.nroVuelo)
		// console.log("this.state.dataVuelo")



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
									type: "text",
									label: "nroVuelo",
									placeholder: 'NroVuelo *',
									isRequired: true,
									col: 'xs-12',
									// defaultValue: this.state.dataVuelo.nroVuelo
									defaultValue: this.state.dataVuelo?.nroVuelo?.value ?? data.nroVuelo
									// defaultValue: data["nroVuelo"]
								},
								// keyAeronave: {
								// 	type: "select",
								// 	label: "keyAeronave",
								// 	placeholder: 'keyAeronave *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.keyAeronave ?? " ",
								// 	options: this.getAeronaves(),
								// 	col: 'xs-12'
								// },


								// origen: {
								// 	type: "select",
								// 	label: "origen",
								// 	placeholder: 'Origen *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.origen ?? " ",
								// 	options: this.getOrigen(),
								// 	col: 'xs-5.5'
								// },

								// destino: {
								// 	type: "select",
								// 	label: "destino",
								// 	isRequired: true,
								// 	placeholder: 'Seleccionar destino',
								// 	defaultValue: this.state.dataVuelo?.destino ?? " ",
								// 	options: this.getOrigen(),
								// 	col: 'xs-5.5'
								// },
								// fechaSalida: {
								// 	type: "text",
								// 	label: "fecha salida",
								// 	placeholder: 'Fecha Salida *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.fechaSalida ?? null,
								// 	col: 'xs-5'
								// },
								// horaSalida: {
								// 	type: "text",
								// 	label: "fecha salida",
								// 	placeholder: 'Fecha Salida *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.fechaSalida ?? null,
								// 	col: 'xs-5'
								// },
								// fechaArribe: {
								// 	type: "text",
								// 	label: "fecha Fin",
								// 	placeholder: 'Fecha LLegada *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.fechaArribe ?? null,
								// 	col: 'xs-4'
								// },
								// horaArribe: {
								// 	type: "text",
								// 	label: "fecha Fin",
								// 	placeholder: 'Fecha LLegada *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.fechaArribe ?? null,
								// 	col: 'xs-4'
								// },


								// keyTripulacion: {
								// 	type: "select",
								// 	label: "keyTripulacion",
								// 	placeholder: 'KeyTripulacion *',
								// 	isRequired: true,
								// 	defaultValue: this.state.dataVuelo?.keyTripulacion ?? " ",
								// 	options: this.getTripulacion(),
								// 	col: 'xs-12'
								// }
							}}
							onSubmit={(values) => {


								if (this.state.key) {
									// alert(values.nroVuelo)
									alert(this.state.dataVuelo.nroVuelo)
									// Http.PUT(API + ControllerVuelo + "/" + this.state.key, values).then(result => SNavigation.goBack())
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
export default connect(initStates)(Registro);
