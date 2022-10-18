import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';
import { getAll, remove } from '../../../Redux/tripulacion/cargoSlice';


export default (props) => {

	const { loading, data, error } = useSelector((state) => state.cargo);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, [])

	return (
		<>
			{loading && <SLoad />}
			<SPage title={'Cargos'} disableScroll>
				<STable2
					headerColor={STheme.color.info}
					header={[
						{
							key: 'index',
							label: '#',
							width: 50,
							color: STheme.color.danger,
							fontSize: 16,
							font: 'Roboto'
						},
						{ key: 'Descripcion', label: 'Descripción', width: 130 },
						{
							key: 'key-editar',
							label: 'Editar',
							width: 50,
							center: true,
							component: (item) => {
								return (
									<SView
										onPress={() => {
											SNavigation.navigate('/tripulacion/cargo/registro', {
												key: item
											});
										}}>
										<SIcon name={'Edit'} width={35} />
									</SView>
								);
							}
						},
						{
							key: 'key-eliminar',
							label: 'Eliminar',
							width: 60,
							center: true,
							component: (key) => {
								return (
									<SView
										width={35}
										height={35}
										onPress={() => {
											var obj = data.find(o => o.key == key);
											SPopup.confirm({
												title: 'Eliminar',
												message: '¿Esta seguro de eliminar?',
												onPress: () => {
													// Http.DELETE(Config.apis.tripulacion + "cargo/" + obj.key).then(result => {
													// 	window.location.reload()
													// })
													dispatch(remove(obj))
												}
											});
										}}>
										<SIcon name={'Delete'} />
									</SView>
								);
							}
						}
					]}
					// data={state.data}
					data={data}
				// filter={(dta) => {
				//     if (dta.Estado != "1") return false;
				//     return true;
				// }}
				/>
				<FloatButtom
					onPress={() => {
						SNavigation.navigate('/tripulacion/cargo/registro');
					}}
				/>
			</SPage>
		</>
	);
}