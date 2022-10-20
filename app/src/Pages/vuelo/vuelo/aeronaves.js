

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable2, STheme, SView } from 'servisofts-component';
import { getAll } from '../../../Redux/vuelo/aeronaveSlice';

export default (props) => {

	const { loading, data, error } = useSelector((state) => state.aeronaves);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, []);





	var salida = null;
	var llegada = null;

	return (
		<>
			<SPage title={'Operador'} disableScroll>
				{loading && <SLoad />}
				<SView center col={'xs-12'} height>
					<STable2
						headerColor={STheme.color.info}
						// Color={STheme.color.primary}
						header={[
							{ key: "index", label: "#", width: 50, color: STheme.color.danger, fontSize: 16, font: "Roboto", center: true },
							// { key: "keyAeronave", label: "Tripulacion", width: 100, center: true },
							{ key: "matricula", label: "Aeronave", width: 100, center: true },


							{
								key: 'keyAeronave-editar', label: 'Historial de Vuelos', width: 150, center: true,
								component: (item) => {
									return (
										<SView onPress={() => { SNavigation.navigate('/vuelo/vuelo/aeronavesHistorial', { key: item }); }}>
											<SIcon name={'Edit'} width={35} />
										</SView>
									);
								}
							},
						]}
						data={data}


					/>
				</SView>
			</SPage>
		</>
	);
}