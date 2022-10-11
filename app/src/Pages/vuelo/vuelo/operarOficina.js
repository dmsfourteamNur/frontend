import { useEffect, useState } from 'react';
import { SIcon, SNavigation, SPage, SPopup, STable2, SView } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';

const ControllerVuelo = "vuelo";
const ControllerAeronave = "aeronave";
const ControllerTripulacion = "tripulacion";

const API = Config.apis.vuelo;

export default (props) => {
	const [state, setState] = useState({
		dataVuelo: [],
		dataAeronave: [],
		dataTripulacion: [],
		aeronaves: [],
		tripulacion: []
	});


	useEffect(() => {
		Http.GET(API + ControllerVuelo).then(resp => { setState({ ...state, dataVuelo: resp }); })
		// Http.GET(API + ControllerAeronave).then(resp => { setState({ ...state, dataAeronave: resp }); })
		// Http.GET(API + ControllerTripulacion).then(resp => { setState({ ...state, dataTripulacion: resp }); })
	}, [])

	// console.log(state)


	return (
		<SPage title={'Operador'} disableScroll>
			<STable2
				header={[
					{ key: "index", label: "#", width: 50 },
					{ key: "nroVuelo", label: "nroVuelo", width: 130, center: true },
					{
						key: "keyAeronave", label: "Aeronave", width: 130, center: true,
						render: (item) => {
							// console.log(this.state.dataAeronave)
							// console.log("otros")
							// var obj = this.state.dataAeronave.find((o) => o.keyAeronave == item);
							return "dd";
						}
					},
					{
						key: 'key-editar', label: 'Editar', width: 50, center: true,
						component: (item) => {
							return (
								<SView onPress={() => {
									SNavigation.navigate('/vuelo/vuelo/registro', { key: item });
								}}>
									<SIcon name={'Edit'} width={35} />
								</SView>
							);
						}
					},
					{
						key: 'key-eliminar', label: 'Eliminar', width: 60, center: true,
						component: (key) => {
							return (
								<SView
									width={35}
									height={35}
									onPress={() => {
										var obj = state.dataVuelo.find(o => o.key == key);
										SPopup.confirm({
											title: 'Eliminar',
											message: '¿Esta seguro de eliminar?',
											onPress: () => {
												Http.DELETE(API + ControllerVuelo + "/" + obj.key).then(result => {
													window.location.reload()
												})
											}
										});
									}}>
									<SIcon name={'Delete'} />
								</SView>
							);
						}
					}
				]}
				data={state.dataVuelo} />
			<FloatButtom
				onPress={() => {
					SNavigation.navigate('/vuelo/vuelo/registro');
				}}
			/>
		</SPage>
	);
}