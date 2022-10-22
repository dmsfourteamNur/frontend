import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import { getAll, remove } from '../../../Redux/aeronave/marcaSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.marca);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, []);
	if (!data) return <SLoad />
	return (
		<SPage title={'Marca'} disableScroll>
			{loading && <SLoad />}
			<SView center col={'xs-12'} height>
				<STable2
					header={[
						{ key: "index", label: "#", width: 50 },
						{ key: "nombre", label: "nombre", width: 150 },
						{
							key: 'key-editar', label: 'Editar', width: 50, center: true,
							component: (item) => {
								return (
									<SView onPress={() => {
										SNavigation.navigate('/aeronave/marca/registro', { key: item });
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
							key: 'key-modelo', label: 'Add Modelo', width: 70, center: true,
							component: (item) => {
								return (
									<SView onPress={() => {
										SNavigation.navigate('/aeronave/modelo/registro', { keyMarca: item });
									}}>
										<SIcon name={'Add'} width={35} />
									</SView>
								);
							}
						},
					]}
					data={data} />
				<FloatButtom
					onPress={() => {
						SNavigation.navigate('/aeronave/marca/registro');
					}}
				/>
			</SView>
		</SPage>
	);
};
