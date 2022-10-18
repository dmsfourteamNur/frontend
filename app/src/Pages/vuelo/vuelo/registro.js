import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SDate, SForm, SHr, SLoad, SNavigation, SPage, SView } from "servisofts-component";
import Button from '../../../Components/Button';
import * as aeronaveSlice from '../../../Redux/vuelo/aeronaveSlice';
import * as tripulacionSlice from '../../../Redux/vuelo/tripulacionSlice';
import { create, edit, getByKey } from '../../../Redux/vuelo/vueloSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.vuelo);
	const aeronave = useSelector((state) => state.aeronaves)
	const tripulacion = useSelector((state) => state.tripulaciones)
	const dispatch = useDispatch();
	const formulario = useRef();

	const [state, setState] = useState({
		key: SNavigation.getParam('key', "")
	});
	useEffect(() => {
		if (state.key != "") {
			dispatch(getByKey(state.key));
			dispatch(aeronaveSlice.getAll());
			dispatch(tripulacionSlice.getAll());
		}
	}, [])

	var item;
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
	}

	const getOrigen = () => {
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

	const getAeronaves = () => {
		var cargarAeronaves = [];
		cargarAeronaves.push({ key: " ", content: "Elegir Aeronave" })
		Object.values(aeronave.data).map((item, index) => {
			cargarAeronaves[index + 1] = { key: item.keyAeronave, content: item.matricula }
		});
		return cargarAeronaves;
	}


	const getTripulacion = () => {
		var cargarTripulacion = [];
		cargarTripulacion.push({ key: " ", content: "Elegir Tripulación" })
		Object.values(tripulacion.data).map((item, index) => {
			// if (item.estado == "1") {
			cargarTripulacion[index + 1] = { key: item.keyTripulacion, content: item.descripcion }
			// }
		}); return cargarTripulacion;
	}


	var ultimo = () => {
		let numero = 0;
		Object.values(data).map((item, index) => {
			var obj = index[data.length - 1];
			numero = parseInt(item.nroVuelo) + 1;
			return numero;
		});
		return numero;
	}




	if (!data || loading) return <SLoad />;
	if (!aeronave.data || aeronave.loading) return <SLoad />;
	if (!tripulacion.data || tripulacion.loading) return <SLoad />;


	const salidaDate = item?.fechaSalida;
	const llegadaDate = item?.fechaArribe;

	return (
		<>
			<SPage title={'Registro'}>
				<SHr height={25} />
				<SView col={'xs-12'} center backgroundColor={"#0051c5"} >

					<SView col={'xs-11 sm-10 md-8 lg-6 '} center backgroundColor={"white"}>
						<SForm
							center
							row
							ref={formulario}
							col={'xs-11 '}
							inputs={{

								nroVuelo: {
									type: "text",
									label: "nroVuelo",
									placeholder: 'NroVuelo *',
									isRequired: true,
									disable: false,
									col: 'xs-12',
									// defaultValue: item?.nroVuelo,
									defaultValue: item?.nroVuelo ?? ultimo(),

								},
								keyAeronave: {
									type: "select",
									label: "keyAeronave",
									placeholder: 'keyAeronave *',
									isRequired: true,

									defaultValue: item?.keyAeronave ?? " ",
									// defaultValue: aeronave.data[item?.keyAeronave].matricula ?? " ",
									options: getAeronaves(),
									col: 'xs-12'
								},
								origen: {
									type: "select",
									label: "origen",
									placeholder: 'Origen *',
									isRequired: true,
									// defaultValue: getOrigen(),
									defaultValue: item?.origen ?? " ",
									options: getOrigen(),
									col: 'xs-5.5'
								},
								destino: {
									type: "select",
									label: "destino",
									isRequired: true,
									placeholder: 'Seleccionar destino',
									defaultValue: item?.destino ?? " ",
									options: getOrigen(),
									col: 'xs-5.5'
								},
								dateDeparture: {
									type: "date",
									label: "fecha salida",
									placeholder: 'Fecha Salida *',
									isRequired: true,
									// defaultValue: new SDate(salidaDate).toString("yyyy-MM-dd") ?? " ",
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
									// defaultValue: new SDate(salidaDate).toString("hh:mm") ?? " ",
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
									defaultValue: item?.keyTripulacion ?? " ",
									options: getTripulacion(),
									col: 'xs-12'
								}

							}}
							onSubmit={(values) => {

								if (!values.nroVuelo) {
									alert("Nro vuelo vacio");
									return console.log("Nro vuelo vacio");
								}
								//TODO bloquear input
								// if (!this.state.key) {
								// 	this.validaNroVuelo(values.nroVuelo);
								// }
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

								var vueloFormateado =
								{

									"nroVuelo": values.nroVuelo,
									"keyAeronave": values.keyAeronave,
									"origen": values.origen,
									"destino": values.destino,
									"fechaSalida": values.dateDeparture + "T" + values.timeDeparture + ":00.000",
									"fechaArribe": values.dateArrival + "T" + values.timeArrival + ":00.000",
									"keyTripulacion": values.keyTripulacion,
									"observacion": "partida",
									"estado": "2"
								}

								if (state.key != "") {

									console.log(vueloFormateado);
									dispatch(edit({
										...item,
										...vueloFormateado
									}));
								} else {
									console.log(vueloFormateado);
									console.log("vueloFormateado");
									dispatch(create(vueloFormateado));
								}
								SNavigation.goBack();
							}}
						/>
						<Button onPress={() => {
							formulario.current.submit();
						}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>

						<SHr height={45} />

					</SView>
				</SView>
			</SPage>
		</>

	);
}
