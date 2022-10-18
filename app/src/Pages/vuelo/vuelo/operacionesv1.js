import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SDate, SLoad, SNavigation, SPage, STable2 } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';
import { getAllVuelo } from '../../../Redux/vuelo/vueloSlice';

const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";

const API = Config.apis.vuelo;

export default (props) => {

	const { loading, data, error } = useSelector((state) => state.vuelo);
	// const { loading, dataTr, error } = useSelector((state) => state.getAllTripulacion);
	const dispatch = useDispatch();


	const [state, setState] = useState({
		dataAeronave: null,
		// datatripulaciones: [],
	});


	useEffect(() => {
		dispatch(getAllVuelo());
		// dispatch(getAllTripulacion());
		// dispatch(getAllAeronave());

		Http.GET("http://34.125.171.46:80/api/aeronave").then(resp => {
			setState({ dataAeronave: resp });
			console.log(resp)
		});

		// Http.GET("http://localhost:8080/api/tripulacion").then(resp => {
		// 	setState({ datatripulaciones: resp });
		// 	console.log(resp)
		// })

	}, [])




	const lugares = (id) => {
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

	const getMatricula = (key) => {
		let aux;
		state.dataAeronave.map((item, index) => {
			if (item.keyAeronave == key) {
				aux = item.matricula;
				return aux;
			}
		})
		return aux;
	}

	// const getDescripcion = (key) => {
	// 	let aux2;
	// 	state.datatripulaciones.map((item2, index) => {
	// 		if (item2.keyTripulacion == key) {
	// 			aux2 = item2.descripcion;
	// 			return aux2;
	// 		}
	// 	})
	// 	return aux2;
	// }



	// if (!data) return <SLoad />;
	if (!state.dataAeronave) return <SLoad />;
	// if (!state.datatripulaciones) return <SLoad />;

	var salida = null;
	var llegada = null;

	return (
		<>
			{loading && <SLoad />}

			<SPage title={'Operador'} disableScroll>
				<STable2
					header={[
						{ key: "index", label: "#", width: 50 },
						// { key: "index", label: "#", width: 50, color: STheme.color.danger, fontSize: 16, font: "Roboto", center: true },
						{ key: "nroVuelo", label: "Nro Vuelo", width: 70, center: true },
						{ key: "keyAeronave", label: "Aeronave", width: 100, center: true, render: (item) => { return getMatricula(item) } },
						{ key: "origen", label: "origen", width: 130, center: true, render: (item) => { return lugares(item); } },
						{ key: "destino", label: "destino", width: 130, center: true, render: (item) => { return lugares(item); } },
						{ key: "fechaSalida", label: "Fecha Salida", width: 80, center: true, render: (item) => { salida = item; return new SDate(item).toString("dd-MM-yyyy") } },
						{ key: "horaSalida", label: "Hora Salida", width: 80, center: true, render: (item) => { return new SDate(salida).toString("hh:mm") } },
						{ key: "fechaArribe", label: "Fecha Lllegada", width: 80, center: true, render: (item) => { llegada = item; return new SDate(item).toString("dd-MM-yyyy") } },
						{ key: "horaArribe", label: "Hora Lllegada", width: 80, center: true, render: (item) => { return new SDate(llegada).toString("hh:mm") } },
						{ key: "keyTripulacion", label: "Tripulacion", width: 180, center: true, render: (item) => { return getDescripcion(item) } },
						// { key: "keyTripulacion", label: "Tripulacion", width: 180, center: true, render: (item) => { return item } },

					]}
					data={data} />
				{/* data={state.dataVuelo} /> */}
				<FloatButtom
					onPress={() => {
						SNavigation.navigate('/vuelo/vuelo/registro');
					}}
				/>
			</SPage>
		</>
	);
}