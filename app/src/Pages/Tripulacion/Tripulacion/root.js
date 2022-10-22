import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import { getAll, remove } from '../../../Redux/tripulacion/tripulacionSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.tripulacion);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, [])

	// if (!data || loading) return <SLoad />;

	return (
		<>
			{loading && <SLoad />}
			{!data && <SLoad />}
			<SPage title={'Tripulación'} disableScroll>
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
							key: 'Estado',
							label: 'Estado',
							width: 100,
							center: true,
							component: (item) => {
								return (
									<SView
										onPress={() => {
											SNavigation.navigate('/tripulacion/registro', {
												key: item
											});
										}} center>
										<SView width={20} height={20}
											backgroundColor={item == 1 ? STheme.color.success : STheme.color.error}
											style={{ borderRadius: 25 }}>
										</SView>
										<SText fontSize={10}>{item == 1 ? "Disponible" : "No disponible"} </SText>
									</SView>
								);
							}
						},
						{
							key: 'key-editar',
							label: 'Editar',
							width: 50,
							center: true,
							component: (item) => {
								return (
									<SView
										onPress={() => {
											SNavigation.navigate('/tripulacion/tripulacion/registro', {
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
							key: 'key-tripulacion',
							label: 'Añadir tripulante',
							width: 100,
							center: true,
							component: (item) => {
								return (
									<SView
										onPress={() => {
											SNavigation.navigate('/tripulacion/tripulacion/addTripulante', {
												key: item
											});
										}}>
										<SIcon name={'AddTripulante'} width={35} />
									</SView>
								);
							}
						},
						// {
						// 	key: 'key-tripulacio',
						// 	label: 'Lista Tripulante',
						// 	width: 100,
						// 	center: true,
						// 	component: (item) => {
						// 		console.log(data?.Tripulantes?.length+" dd")
						// 		if (data?.Tripulantes?.length > 0) {
						// 			return (
						// 				<SView
						// 					onPress={() => {
						// 						SNavigation.navigate('/tripulacion/tripulacion/addTripulante', {
						// 							key: item
						// 						});
						// 					}}>
						// 					<SIcon name={'AddTripulante'} width={35} />
						// 				</SView>
						// 			);
						// 		}
						// 	}
						// },
					]}
					data={data}
					filter={(dta) => {
						if (dta.Estado == "0") return false;
						return true;
					}}
				/>
				<FloatButtom
					onPress={() => {
						SNavigation.navigate('/tripulacion/tripulacion/registro');
					}}
				/>
			</SPage>
		</>
	);
}