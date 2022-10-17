import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';

import { getAllTripulante } from '../../../Redux/tripulacion/tripulanteSlice';


const Controller = "tripulacion";
const API = Config.apis.tripulacion


export default (props) => {

	const [state, setState] = useState({
		// data: [],
		key: SNavigation.getParam('key')
	});

	const { loading, data, error } = useSelector((state) => state.tripulante);
	const dispatch = useDispatch();


	console.log(state.key)

	useEffect(() => {
		// if (state.key != "") {
		// 	Http.GET(Config.apis.tripulacion + "tripulante").then(resp => {
		// 		setState({ data: resp });
		// 	})
		// }
		dispatch(getAllTripulante());
	}, [])

	if (!state.key) return <SLoad />



	return (<SPage title={'Armando Tripulación'} disableScroll>
		<SView center col={'xs-12'} height>
			<SHr height={50} />
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
					{ key: 'Nombre', label: 'Nombre', width: 130 },
					{ key: 'Apellido', label: 'Apellido', width: 130, center: true, },
					{ key: 'EmailAddress', label: 'EmailAddress', width: 130, center: true, },
					{ key: 'Tipo', label: 'Personal de', width: 130, center: true, },
					{
						key: 'key-editar',
						label: 'Opciones',
						width: 70,
						center: true,
						component: (item) => {
							return (
								<SView
									backgroundColor={STheme.color.darkGray}
									style={{ borderRadius: 5 }}
									height={30}
									width={60}
									center
									onPress={() => {
										// SNavigation.navigate('/tripulacion/tripulante/registro', {
										// 	key: item
										// });

										alert(state.key)
										Http.PUT(API + Controller + "/addTripulante/" + state.key, {key: item}).then(result => SNavigation.goBack())
									}}>
									<SText >AÑADIR</SText>
								</SView>
							);
						}
					},
				]}
				data={data}
				filter={(dta) => {
					if (dta.Estado != "1") return false;
					return true;
				}}
			/>
			<SView height={40} />
		</SView>
	</SPage>
	);
}