import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SDate, SForm, SHr, SLoad, SNavigation, SPage, SView } from "servisofts-component";
import Button from '../../../Components/Button';
import * as aeronaveSlice from '../../../Redux/vuelo/aeronaveSlice';
import * as tripulacionSlice from '../../../Redux/vuelo/tripulacionSlice';
import { create, edit, getByKey } from '../../../Redux/vuelo/vueloSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.vuelo);
	const aeronave = useSelector((state) => state.aeronaves);
	const tripulacion = useSelector((state) => state.tripulaciones);
	const dispatch = useDispatch();

	const formulario = useRef();

	const [state, setState] = useState({
		key: SNavigation.getParam('key', "")
	});


	useEffect(() => {

		// console.log(state.key);
		// console.log(JSON.stringify(aeronave).length)
		// if (JSON.stringify(aeronave.data).length == 2) {
		// 	SNavigation.goBack();
		// }

		dispatch(aeronaveSlice.getAll());
		dispatch(tripulacionSlice.getAll());
		if (state.key != "") {
			dispatch(getByKey(state.key));

		}
	}, [])
	if (!tripulacion.data) return <SLoad />
	if (!aeronave.data) return <SLoad />

	console.log(data);
	var item;
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
	}

	const getOrigen = () => {
		return [
			{ key: " ", content: "Elegir lugar Aeronpuerto" },
			{ key: "sc-vvi", content: "Santa cruz - Viru Viru" },
			{ key: "beni", content: "Beni - Magdalena" },
			{ key: "pando", content: "Pando - Ciudad" },
			{ key: "cbb", content: "Cochabamba - Jorge Wilsterman" },
			{ key: "lpz", content: "La paz - El Alto" },
			{ key: "sucre", content: "Sucre - Ciudad" },
			{ key: "oruro", content: "Oruro - Ciudad" },
			{ key: "potosi", content: "Potosi - Ciudad" }
		]
	}


	const getAeronaves = () => {

		// { key: "keyAeronave", label: "Aeronave", width: 100, center: true, render: (keyAeronave) => { if (!aeronave.data) return; var aux = aeronave.data[keyAeronave]; return aux?.matricula; } },

		// if (!aeronave.data) return;
		var cargarAeronaves = [];

		cargarAeronaves.push({ key: " ", content: "Elegir Aeronave" })
		Object.values(aeronave?.data).map((item, index) => {
			if (item.estado == "1") {
			cargarAeronaves.push({ key: item.keyAeronave, content: item.matricula })
			}
		});
		return cargarAeronaves;
	}


	const getTripulacion = () => {
		// if (!tripulacion.data) return;

		var cargarTripulacion = [];
		cargarTripulacion.push({ key: " ", content: "Elegir Tripulación" })
		Object.values(tripulacion?.data).map((item, index) => {
			if (item.estado == "1") {
			cargarTripulacion.push({ key: item.keyTripulacion, content: item.descripcion })
			}
		});
		return cargarTripulacion;
	}


	var ultimo = () => {
		if (!data) return;

		let numero = 0;
		Object.values(data).map((item, index) => {
			var obj = index[data?.length - 1];
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
				{/* {loading && <SLoad />}
				{aeronave.loading && <SLoad />}
				{tripulacion.loading && <SLoad />} */}

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
									// style: { disabled: true },
									// disable,
									type: "text",
									label: "nroVuelo",
									placeholder: 'NroVuelo *',
									isRequired: true,
									// disable,
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
									defaultValue: new SDate(llegadaDate).toString("hh:mm"),
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
									alert("fecha llegada incorrecta");
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
								}

								if (state.key != "") {
									dispatch(edit({ ...item, ...vueloFormateado }));
								} else {
									vueloFormateado["estado"] = "1";
									vueloFormateado["observacion"] = "En horario";
									dispatch(create(vueloFormateado));
								}
								window.location.href = "/vuelo/vuelo/operaciones";
								// SNavigation.goBack();
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
