import { Component } from "react";
import { connect } from "react-redux";
import {
	SDate,
	SIcon,
	SLoad,
	SNavigation,
	SPage,
	SPopup,
	STable2, STheme,
	SView
} from "servisofts-component";
import FloatButtom from "../../../../Components/FloatButtom";
import Config from "../../../../Config";
import Http from "../../../../Http";

const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";
const API = Config.apis.vuelo;

class Operacion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataVuelo: [],
			dataAeronave: [],
			dataTripulacion: [],
			aeronaves: [],
			tripulacion: [],
		};
	}

	componentDidMount() {
		this.cargaAPI();
	}


	cargaAPI() {
		Http.GET(API + ControllerVuelo).then(resp => { this.setState({ dataVuelo: resp }); })
		Http.GET(API + ControllerAeronave).then(resp => { this.setState({ dataAeronave: resp }); })
		Http.GET(API + ControllerTripulacion).then(resp => { this.setState({ dataTripulacion: resp }); })

		// var requestOptions = {
		//   method: "GET",
		//   redirect: "follow",
		// };
		// fetch("http://localhost:8080/api/vuelo", requestOptions)
		//   .then((response) => response.json())
		//   .then((result) => {
		// this.state.dataVuelo=result
		// this.setState({ dataVuelo: result });
		//   })
		//   .catch((error) => console.log("error", error));

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

	// this.state.aeronaves.push({ key: "", content: "Elegir" })
	// state.dataAeronave.map((item, index) =>
	// state.aeronaves[index + 1] = { key: item.keyAeronave, content: item.matricula }




	//   test( keyObjtenido) {
	//     var dataas = this.state.dataAeronave;
	// 	var resulado="ddd"
	//     Object.keys(dataas).map((key, index) => {
	//       let obsj = dataas[key];
	//       if (obsj.keyAeronave == keyObjtenido)
	// 	  console.log(obsj.matricula)
	//         resulado=  obsj.matricula;
	//     });
	// 	return resulado;
	//   }

	render() {
		var aeronaves = this.state.dataAeronave;
		var tripulacion = this.state.dataTripulacion;
		if (!aeronaves) return <SLoad />;
		if (!tripulacion) return <SLoad />;

		// var pollot= aeronaves["686fc732-d731-4b29-beae-1ff15816eedb"];
		// console.log(pollot);
		// console.log(aeronaves);
		// console.log("****")
		// console.log("aerona", this.state.dataAeronave);
		// console.log("tripl", this.state.dataTripulacion);
		var salida = null;
		var llegada = null;
		return (
			<SPage title={"Operacion"}>
				<STable2
					headerColor={STheme.color.info}
					header={[
						{ key: "index", label: "#", width: 50, color: STheme.color.danger, fontSize: 16, font: "Roboto", center: true },
						{ key: "nroVuelo", label: "nroVuelo", width: 130, center: true },
						{
							key: "keyAeronave", label: "Aeronave", width: 130, center: true,
							// render: (item) => {
							// 	var obj = aeronaves.find((o) => o.keyAeronave == item);
							// 	// var obj = this.state.dataAeronave.find((o) => o.keyAeronave == "686fc732-d731-4b29-beae-1ff15816eedb");
							// 	return "obj.matricula";
							// }
						},
						{ key: "origen", label: "origen", width: 130, center: true },
						{ key: "destino", label: "destino", width: 130, center: true },
						{ key: "fechaSalida", label: "Fecha Salida", width: 130, center: true, render: (item) => { salida = item; return new SDate(item).toString("yyyy-MM-dd") } },
						{ key: "horaSalida", label: "Hora Salida", width: 130, center: true, render: (item) => { return new SDate(salida).toString("hh:mm:ss") } },
						{ key: "fechaArribe", label: "Fecha Lllegada", width: 130, center: true, render: (item) => { llegada = item; return new SDate(item).toString("yyyy-MM-dd") } },
						{ key: "horaArribe", label: "Hora Lllegada", width: 130, center: true, render: (item) => { return new SDate(llegada).toString("hh:mm:ss") } },
						{ key: "keyTripulacion", label: "keyTripulacion", width: 130, center: true },
						{ key: "observacion", label: "observacion", width: 130, center: true },
						{ key: "estado", label: "estado", width: 130, center: true, render: (item) => { return item == 1 ? "activo" : "no funciona" } },


						{
							key: "key-editar", label: "Editar", width: 50, center: true,
							component: (item) => {
								return (<SView onPress={() => { SNavigation.navigate("/vuelo/registro", { key: item }); }}><SIcon name={"Edit"} width={35} /> </SView>);
							},
						},
						{
							key: "key-eliminar",
							label: "Eliminar",
							width: 60,
							center: true,
							component: (key) => {
								return (
									<SView width={35} height={35}
										onPress={() => {
											var obj = this.state.dataVuelo.find((o) => o.key == key);
											SPopup.confirm({
												title: "Eliminar", message: "¿Esta seguro de eliminar?",
												onPress: () => { Http.DELETE(API + ControllerVuelo + "/" + obj.key).then(result => { window.location.reload() }) },
											});
										}}>
										<SIcon name={"Delete"} />
									</SView>
								);
							},
						},
					]}
					data={this.state.dataVuelo}
				// filter={(dta) => {
				//     if (dta.Estado != "1") return false;
				//     return true;
				// }}
				/>

				<FloatButtom
					onPress={() => {
						SNavigation.navigate("/vuelo/registro");
					}}
				/>

			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(Operacion);
