import { Component } from "react";
import { connect } from "react-redux";
import {
	SDate, SLoad,
	SNavigation,
	SPage, STable2, STheme
} from "servisofts-component";
import FloatButtom from "../../../Components/FloatButtom";
import Config from "../../../Config";
import Http from "../../../Http";
const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";
const API = Config.apis.vuelo;

class vueloSalidas extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataVuelo: [],
			dataAeronave: [],
			dataTripulacion: [],
		};
	}

	componentDidMount() {
		this.cargaAPI();
	}


	cargaAPI() {
		// Http.GET(API + ControllerVuelo).then(resp => { this.setState({ dataVuelo: resp }); })
		Http.GET(API + ControllerAeronave).then(resp => { this.setState({ dataAeronave: resp }); })
		Http.GET(API + ControllerTripulacion).then(resp => { this.setState({ dataTripulacion: resp }); })

		var requestOptions = { method: "GET", redirect: "follow" };
		fetch("http://localhost:8080/api/vuelo", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				this.state.dataVuelo = result;
				this.setState({ dataVuelo: result });
			})
			.catch((error) => console.log("error", error));

		// fetch("http://localhost:8080/api/aeronave", requestOptions)
		//   .then((response) => response.json())
		//   .then((result) => {
		//     this.setState({ dataAeronave: result });
		//   })
		//   .catch((error) => console.log("error", error));

		// fetch("http://localhost:8080/api/tripulacion", requestOptions)
		//   .then((response) => response.json())
		//   .then((result) => {
		//     this.setState({ dataTripulacion: result });
		//   })
		//   .catch((error) => console.log("error", error));
	}



	getMatricula(key) {
		let aux;
		this.state.dataAeronave.map((item, index) => {
			if (item.keyAeronave == key) {
				aux = item.matricula;
				return aux;
			}
		})
		return aux;
	}
	getDescripcion(key) {
		let aux;
		this.state.dataTripulacion.map((item, index) => {
			if (item.keyTripulacion == key) {
				aux = item.descripcion;
				return aux;
			}
		})
		return aux;
	}
	lugares(id) {
		switch (id) {
			case "sc-vvi": return "Santa cruz - Viru Viru";
			case "sc-tpll": return "Santa Cruz - Tronpillo";
			case "beni": return "Beni - Magdalena";
			case "cbb": return "Cochabamba - Jorge Wilsterman";
			case "lpz": return "La paz";
			case "sucre": return "Sucre";
			case "potosi": return "Potosi";
		}
	}

	render() {

		if (!this.state.dataVuelo && !this.state.dataAeronave && !this.state.dataTripulacion) return <SLoad />;

		var salida;
		var llegada;
		// tiene que mostrar por fecha
		// buscador por origen de salidas

		return (
			<SPage title={"Operacion"}>
				<STable2
					headerColor={STheme.color.info}
					header={[
						{ key: "index", label: "#", width: 50, color: STheme.color.danger, fontSize: 16, font: "Roboto", center: true },
						{ key: "keyAeronave", label: "Aeronave", width: 130, center: true, render: (item) => { return this.getMatricula(item) } },
						{ key: "fechaSalida", label: "Fecha Salida", width: 130, center: true, render: (item) => { salida = item; return new SDate(item).toString("dd-MM-yyyy") } },
						{ key: "horaSalida", label: "Hora Salida", width: 130, center: true, render: (item) => { return new SDate(salida).toString("hh:mm") } },
						// { key: "fechaArribe", label: "Fecha Lllegada", width: 130, center: true, render: (item) => { llegada = item; return new SDate(item).toString("dd-MM-yyyy") } },
						// { key: "horaArribe", label: "Hora Lllegada", width: 130, center: true, render: (item) => { return new SDate(llegada).toString("hh:mm") } },
						{ key: "nroVuelo", label: "nroVuelo", width: 130, center: true },
						// { key: "origen", label: "Procedencia", width: 130, center: true, render: (item) => { return this.lugares(item); } },
						{ key: "destino", label: "Destino", width: 130, center: false, render: (item) => { return this.lugares(item); } },
						// { key: "keyTripulacion", label: "keyTripulacion", width: 130, center: true, render: (item) => { return this.getDescripcion(item) } },
						{ key: "observacion", label: "observacion", width: 130, center: true },
						// { key: "estado", label: "estado", width: 130, center: true, render: (item) => { return item == 1 ? "activo" : "no funciona" } },
					]}
					data={this.state.dataVuelo}
				// filter={(dta) => {
				//     if (dta.Estado != "1") return false;
				//     return true;
				// }}
				/>
				<FloatButtom
					onPress={() => {
						SNavigation.navigate("/vuelo/vuelo/registro");
					}}
				/>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(vueloSalidas);
