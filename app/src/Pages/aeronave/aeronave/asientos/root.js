import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../../Components/FloatButtom';
import { getAll } from '../../../../Redux/aeronave/aeronaveSlice';
import * as MarcaSlice from '../../../../Redux/aeronave/marcaSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.aeronave);
	const marca = useSelector((state) => state.marca);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data) dispatch(getAll());
		if (!marca.data) dispatch(MarcaSlice.getAll());
	}, []);

	if (marca.loading || loading) return <SLoad />
	if (!data || !marca.data) return <SLoad />
	var dataAeronave = data[SNavigation.getParam("keyAeronave")];
	console.log(dataAeronave)
	return (
		<SPage title={'Aeronave Asientos'} disableScroll>
			<SView center col={'xs-12'} height>
				<STable2
					header={[
						// { key: 'index', label: '#', width: 50 },
						{ key: 'numero', label: 'Numero', order:"desc", width: 70, center: true },
						{ key: 'clase', label: 'Clase', width: 170, center: true },

					]}
					data={dataAeronave.asientos}
				/>
			</SView>
			<FloatButtom
				onPress={() => {
					SNavigation.navigate('/aeronave/aeronave/asientos/registro', { keyAeronave: SNavigation.getParam("keyAeronave") });
				}}
			/>
		</SPage>
	);
};
