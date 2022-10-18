import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import { getAll } from '../../../Redux/aeronave/aeronaveSlice';
import * as MarcaSlice from '../../../Redux/aeronave/marcaSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.aeronave);
	const marca = useSelector((state) => state.marca);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
		dispatch(MarcaSlice.getAll());
	}, []);

	return (
		<>
			{loading && <SLoad />}
			<SPage title={'Aeronave'} disableScroll>
				<SView center col={'xs-12'} height>
					<STable2
						header={[
							{ key: 'index', label: '#', width: 50 },
							{
								key: 'keyModelo-marca', label: 'Marca', width: 150, render: (keyModelo) => {
									var _marca = {};
									Object.values(marca.data).map(objMarca => {
										var model = objMarca.modelos.find(o => o.key == keyModelo)
										if (model) {
											_marca = objMarca;
										}
									})
									return _marca.nombre
								}
							},

							{
								key: 'keyModelo', label: 'Modelo', width: 150, render: (keyModelo) => {
									var modelo = {};
									Object.values(marca.data).map(objMarca => {
										var model = objMarca.modelos.find(o => o.key == keyModelo)
										if (model) {
											modelo = model;
										}
									})
									return modelo.nombre
								}
							},
							{ key: 'matricula', label: 'Matricula', width: 250 },

						]}
						data={data}
					/>
				</SView>
				<FloatButtom
					onPress={() => {
						SNavigation.navigate('/aeronave/aeronave/registro');
					}}
				/>
			</SPage>
		</>
	);
};
