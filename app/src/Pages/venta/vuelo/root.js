import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad, SDate, SMath } from 'servisofts-component';
import { getAll } from '../../../Redux/venta/vueloSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.ventaVuelo);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, []);

	if (!data) return <SLoad />
	console.log(data)
	return (
		<SPage title={'Ventas'} disableScroll>
			<SView center col={'xs-12'} height>
				<STable2
					rowHeight={70}
					header={[
						{ key: 'index', label: '#', width: 50 },
						{ key: 'origen', label: 'Origen', width: 60 },
						{ key: 'destino', label: 'Destino', width: 60 },
						{
							key: 'fechaSalida', label: 'Fecha Salida', width: 150,
							render: (o) => new SDate(o).toString("yyyy-MM-dd hh:mm")
						},
						{
							key: 'fechaArribe', label: 'Fecha Arribe', width: 150,
							render: (o) => new SDate(o).toString("yyyy-MM-dd hh:mm")
						},
						{
							key: 'asiento', label: 'Asientos', width: 70,
							render: o => o.length
						},
						{
							key: 'tarifas', label: 'Tarifas', width: 200,
							render: o => {
								var TarifasStr = ""
								if(!o) return "";
								o.map(i => {
									TarifasStr += `${i.decripcion} - Bs. ${SMath.formatMoney(i.precio)} \n`
								})
								return TarifasStr;
							}
						},
						{ key: 'key', label: 'Adicionar tarifa', width: 100, center: true, component: (key_) => <SView onPress={() => { SNavigation.navigate("/venta/vuelo/registro", { key: key_ }) }}><SText>Añadir</SText></SView> },

					]}
					data={data}
				/>
			</SView>
		</SPage>
	);
};
