

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SDate, SIcon, SLoad, SNavigation, SPage, SPopup, STable2, STheme, SView } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import * as aeronaveSlice from '../../../Redux/vuelo/aeronaveSlice';
import * as tripulacionSlice from '../../../Redux/vuelo/tripulacionSlice';
import { getAll, remove } from '../../../Redux/vuelo/vueloSlice';

export default (props) => {

	const { loading, data, error } = useSelector((state) => state.vuelo);
	const aeronave = useSelector((state) => state.aeronaves)
	const tripulacion = useSelector((state) => state.tripulaciones)
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
		dispatch(aeronaveSlice.getAll());
		dispatch(tripulacionSlice.getAll());
	}, []);


	const lugares = (id) => {
		switch (id) {
			case "sc-vvi": return "Santa cruz - Viru Viru";
			case "beni": return "Beni - Magdalena";
			case "pando": return "Pando - Ciudad";
			case "cbb": return "Cochabamba - Jorge Wilsterman";
			case "lpz": return "La paz - El Alto";
			case "sucre": return "Sucre - Ciudad";
			case "oruro": return "Oruro - Ciudad";
			case "potosi": return "Potosi - Ciudad";
			default: return id;
		}
	}


	const observacionEstado = (id) => {

		switch (id) {
			case "1":
				return "En horario";
			// return (<SView col={"xs-12"} row style={{ alignItems: 'center', }}>
			// 	<SView width={10} backgroundColor={"#9CFF2E"} style={{ borderRadius: 28 }} center />
			// 	<SText fontSize={12} center >En horario</SText>
			// </SView >);
			case "2":
				return "Confirmado";

			// return (<SView col={"xs-12"} height row style={{ alignItems: 'center', }}>
			// 	<SView width={10} height={10} backgroundColor={"#FFB72B"} style={{ borderRadius: 28 }} center />
			// 	<SText fontSize={12} center height>Confirmado</SText>
			// </SView >);
			case "0":
				return "Cancelado";

			// return (<SView col={"xs-12"} height row style={{ alignItems: 'center', }}>
			// 	<SView width={10} height={10} backgroundColor={"#FFE61B"} style={{ borderRadius: 28 }} center />
			// 	<SText fontSize={12} center height>Cancelado</SText>
			// </SView >);
			default: return id;
		}
	}



	if (!aeronave.data || aeronave.loading) return <SLoad />;
	if (!tripulacion.data || tripulacion.loading) return <SLoad />;

	var salida = null;
	var llegada = null;

	return (
		<>
			<SPage title={'Operador'} disableScroll>
				{loading && <SLoad />}
				<SView center col={'xs-12'} height>
					<STable2
						header={[
							{ key: "index", label: "#", width: 50, color: STheme.color.danger, fontSize: 16, font: "Roboto", center: true },
							{ key: "nroVuelo", label: "Nro Vuelo", width: 70, center: true },
							{ key: "keyAeronave", label: "Aeronave", width: 100, center: true, render: (keyAeronave) => { if (!aeronave.data) return; var aux = aeronave.data[keyAeronave]; return aux?.matricula; } },
							{ key: "origen", label: "origen", width: 130, center: true, render: (item) => { return lugares(item); } },
							{ key: "destino", label: "destino", width: 130, center: true, render: (item) => { return lugares(item); } },
							{ key: "fechaSalida", label: "Fecha Salida", width: 80, center: true, render: (item) => { salida = item; return new SDate(item).toString("dd-MM-yyyy") } },
							{ key: "horaSalida", label: "Hora Salida", width: 80, center: true, render: (item) => { return new SDate(salida).toString("hh:mm") } },
							{ key: "fechaArribe", label: "Fecha Lllegada", width: 80, center: true, render: (item) => { llegada = item; return new SDate(item).toString("dd-MM-yyyy") } },
							{ key: "horaArribe", label: "Hora Lllegada", width: 80, center: true, render: (item) => { return new SDate(llegada).toString("hh:mm") } },
							{ key: "keyTripulacion", label: "Tripulacion", width: 180, center: true, render: (keyTripulacion) => { var aux = tripulacion.data[keyTripulacion]; return aux?.descripcion; } },
							{ key: "estado-view", label: "Estado", width: 130, center: true, render: (item) => { return observacionEstado(item); } },
							{
								key: 'key-editar', label: 'Editar', width: 50, center: true,
								component: (item) => {
									return (

										<SView onPress={() => { SNavigation.navigate('/vuelo/vuelo/registro', { key: item }); }}>
											<SIcon name={'Edit'} width={35} />
										</SView>
									);
								}
							},

							{
								key: 'key-eliminar', label: 'Eliminar', width: 60, center: true,
								component: (key) => {
									return (
										<SView width={35} height={35} onPress={() => {
											var obj = data[key];
											SPopup.confirm({
												title: 'Eliminar', message: '¿Esta seguro de eliminar?', onPress: () => { dispatch(remove(obj)) }
											});
										}}>
											<SIcon name={'Delete'} />
										</SView>
									);
								}
							}
						]}
						data={data}
					/>
					<FloatButtom
						onPress={() => {
							SNavigation.navigate('/vuelo/vuelo/registro');
						}}
					/>
				</SView>
			</SPage>
		</>
	);
}