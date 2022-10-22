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

	return (
		<SPage title={'Ventas'} disableScroll>
			<SView center col={'xs-12'} height>
				<STable2
					rowHeight={50}
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
							key: 'key', label: 'Seleccionar', width: 100, center: true,
							component: (key_) => <SView onPress={() => {
								var callback = SNavigation.getParam("callback");
								if (callback) {
									callback(key_)
								}
								SNavigation.goBack();
							}}><SText>Añadir</SText>
							</SView>
						},

					]}
					data={data}
				/>
			</SView>
		</SPage>
	);
};
