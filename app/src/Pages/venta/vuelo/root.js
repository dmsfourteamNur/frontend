import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import { getAll } from '../../../Redux/venta/vueloSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.vuelo);
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
					header={[
						{ key: 'index', label: '#', width: 50 },
						{ key: 'fechaSalida', label: 'Fecha Salida', width: 150 },
						{ key: 'fechaArribe', label: 'Fecha Arribe', width: 150 },

						{ key: 'key', label: 'Adicionar tarifa', width: 100, center: true, component: (key_) => <SView onPress={() => { SNavigation.navigate("/venta/vuelo/registro", { key: key_ }) }}><SText>Añadir</SText></SView> },

					]}
					data={data}
				/>
			</SView>
		</SPage>
	);
};
