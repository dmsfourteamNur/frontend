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

	if (marca.loading || !marca.data || !data) return <SLoad />
	return (
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
						{
							key: 'asientos', label: 'Asientos', width: 70, render: (arr) => {
								return arr.length
							}
						},
						{
							key: 'key-editar', label: 'Editar', width: 50, center: true,
							component: (item) => {
								return (
									<SView onPress={() => {
										SNavigation.navigate('/aeronave/aeronave/registro', { key: item });
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
											var obj = data[key];
											SPopup.confirm({
												title: 'Eliminar',
												message: '¿Esta seguro de eliminar?',
												onPress: () => {
													dispatch(remove(obj))
												}
											});
										}}>
										<SIcon name={'Delete'} />
									</SView>
								);
							}
						},
						{
							key: 'key-Asientos', label: 'Asientos', width: 50, center: true,
							component: (item) => {
								return (
									<SView onPress={() => {
										SNavigation.navigate('/aeronave/aeronave/asientos', { keyAeronave: item });
									}}>
										<SIcon name={'Ajustes'} width={35} />
									</SView>
								);
							}
						},
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
	);
};
