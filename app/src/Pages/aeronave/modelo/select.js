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

	const formatData = () => {
		var modelos = []
		Object.values(data).map(marca => {
			if (!marca.modelos) return;
			modelos = [...modelos, ...marca.modelos]
		})
		return modelos;
	}

	return (
		<SPage title={'Marca'} disableScroll>
			{loading && <SLoad />}
			<SView center col={'xs-12'} height>
				<STable2
					header={[
						{ key: "index", label: "#", width: 50 },
						{
							key: "keyMarca", label: "Marca", width: 150, render: (key) => {
								return data[key].nombre
							}
						},
						{ key: "nombre", label: "Modelo", width: 150 },
						{
							key: 'key-editar', label: 'Editar', width: 50, center: true,
							component: (key) => {
								return (
									<SView onPress={() => {
										const callback = SNavigation.getParam("callback");
										if (callback) callback(key);

										SNavigation.goBack();
									}}>
										<SIcon name={'Salir'} width={35} />
									</SView>
								);
							}
						},
					]}
					data={formatData()} />
				<FloatButtom
					onPress={() => {
						SNavigation.navigate('/aeronave/modelo/registro');
					}}
				/>
			</SView>
		</SPage>
	);
};
