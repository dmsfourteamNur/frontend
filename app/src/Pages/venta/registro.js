import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad, SPopup, SMath, SList, SDate } from 'servisofts-component';
import Button from '../../Components/Button';
import FloatButtom from '../../Components/FloatButtom';
import Config from '../../Config';
import Http from '../../Http';
import { getByKey, create, edit } from '../../Redux/venta/ventaSlice';
import * as VueloSlice from '../../Redux/venta/vueloSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.venta);
	const VueloReducer = useSelector((state) => state.ventaVuelo);
	const dispatch = useDispatch();
	const formulario = useRef();
	const [state, setState] = useState({
		key: SNavigation.getParam('key', ""),
		data: {}
	});
	useEffect(() => {
		dispatch(VueloSlice.getAll());
		if (state.key != "") {
			dispatch(getByKey(state.key));

		}
	}, [])

	var item;
	if (!VueloReducer.data) return <SLoad />
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
		// if (!state.data.keyModelo) state.data.keyModelo = item.keyModelo;

	}
	if (error) {
		SPopup.alert("error")
	}


	return (<SPage title={'Registro'} >
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SView col={'xs-11 sm-10 md-8 lg-6 xl-4'} center >
				<SForm
					ref={formulario}
					col={'xs-12'}
					center
					row
					style={{
						justifyContent: 'space-between',
					}}
					inputs={{
						dni: {
							label: 'dni',
							type: 'text',
							col: "xs-5.5",
							isRequired: true,
							defaultValue: item?.dni,
						},
						codigo: {
							label: 'Codigo',
							type: 'text',
							col: "xs-5.5",
							isRequired: true,
							defaultValue: "ASS-434",
						},
						nombre: {
							label: 'Nombre',
							type: 'text',
							isRequired: true,
							col: "xs-5.5",
							defaultValue: item?.nombre,
						},
						apellido: {
							label: 'Apellido',
							type: 'text',
							col: "xs-5.5",
							isRequired: true,
							defaultValue: item?.apellido,
						},



					}}
					onSubmit={(values) => {
						if (!state.data.keyVuelo) {
							SPopup.alert("Debe seleccionar un vuelo");
							return;
						}
						values.keyVuelo = state.data.keyVuelo;
						if (!state.data.keyTarifa) {
							SPopup.alert("Debe seleccionar una tarifa.");
							return;
						}
						values.keyTarifa = state.data.keyTarifa;
						Http.POST(Config.apis.venta + "venta/registro", {
							...values
						}).then(e => {
							window.location.href = "/venta/lista"
						}).catch((e) => {
							SPopup.alert("El dni ya existe");
							console.error(e);
						})

						// dispatch(create(values));

						// SNavigation.goBack();
					}}
				/>

				<SelectVuelo state={state} setState={setState} VueloReducer={VueloReducer} />

				<SHr />
				<Button onPress={() => {
					formulario.current.submit();
				}}>{'VENDER'}</Button>
			</SView>
		</SView>

	</SPage >
	);
}

const SelectVuelo = (props) => {
	const { state, setState, VueloReducer } = props;

	if (state.data.keyVuelo) {
		var keyVuelo = state.data.keyVuelo;
		var vuelo = VueloReducer.data[keyVuelo];
		return <SView col={"xs-12"} center>
			<SHr />
			<SHr />
			<SHr />
			<SView row>
				<SText fontSize={20}>Origen: {vuelo.origen}</SText>
				<SView width={30} />
				<SText fontSize={20}>Destino: {vuelo.destino}</SText>
			</SView>
			<SView row>
				<SText>F. Salida: {new SDate(vuelo.fechaSalida).toString("yyyy-MM-dd hh:mm")}</SText>
				<SView width={30} />
				<SText>F. Arribe: {new SDate(vuelo.fechaArribe).toString("yyyy-MM-dd hh:mm")}</SText>
			</SView>
			<SHr />
			<SHr />
			<SHr />
			<SText>{"TARIFAS"}</SText>
			<SText color={STheme.color.gray}>{"Seleccione la tarifa y precione vender."}</SText>
			<SHr />
			<SList
				data={vuelo.tarifas}
				render={(obj) => {
					return <SView col={"xs-12"} card height={30} center style={{
						opacity: (state.data.keyTarifa == obj.key ? 1 : 0.4)
					}} onPress={() => {
						state.data.keyTarifa = obj.key;
						setState({ ...state })
					}}>
						<SView row center col={"xs-12"}>
							<SText flex center>{obj.decripcion}</SText>
							<SView width={30} />
							<SText flex center>Disp. {obj.cantidad}</SText>

							<SView width={30} />
							<SText flex center>Bs. {SMath.formatMoney(obj.precio)}</SText>
						</SView>
					</SView>
				}}
			/>
		</SView>
	}

	return <SView col={"xs-12"} center height={50}
		card
		onPress={() => {
			SNavigation.navigate("/venta/vuelo/select", {
				callback: (key) => {
					state.data.keyVuelo = key;
					setState({ ...state })
				}
			})
		}}
	>
		<SText fontSize={22} bold>{"Seleccionar un vuelo"}</SText>
	</SView>
}