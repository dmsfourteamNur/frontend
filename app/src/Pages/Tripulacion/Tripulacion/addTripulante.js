import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import * as tripulacionSlice from '../../../Redux/tripulacion/tripulacionSlice';
import { getAll, remove } from '../../../Redux/tripulacion/tripulanteSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.tripulante);
	const tripulacion = useSelector((state) => state.tripulacion);

	const dispatch = useDispatch();

	const [state, setState] = useState({
		key: SNavigation.getParam('key')
	});

	var userExiste = null;

	useEffect(() => {
		dispatch(getAll());
		dispatch(tripulacionSlice.getAll());
	}, [])

	// if (!state.key) return <SLoad />
	// console.log(JSON.stringify(tripulacion?.data[state.key]?.Tripulantes) + " tripulacion")
	// if (!data || loading) return <SLoad />;
	// if (!tripulacion?.data || tripulacion?.loading) return <SLoad />;


	return (
		<>
			{loading && <SLoad />}
			{!data && <SLoad />}
			<SPage title={'Armando Tripulación'} disableScroll>
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
								width: 90,
								center: true,
								component: (item) => {
									userExiste = tripulacion?.data[state.key]?.Tripulantes.find(o => o.key == item)
									console.log(userExiste + " keys")

									return (
										<SView
											backgroundColor={(userExiste) ? STheme.color.danger : STheme.color.darkGray}
											style={{ borderRadius: 5 }}
											height={30}
											width={80}
											center
											onPress={() => {

												//Http.PUT(API + Controller + "/addTripulante/" + state.key, {key: item}).then(result => SNavigation.goBack())
												if (userExiste) {
													dispatch(tripulacionSlice.removeAdd({
														...{ keyCargo: state.key },
														...{ key: item }
													}));
													alert("remove")
												} else {
													dispatch(tripulacionSlice.add({
														...{ keyCargo: state.key },
														...{ key: item }
													}));
												}
											}}>
											<SText >{(userExiste) ? "ELIMINAR" : "AÑADIR"}</SText>
										</SView>
									);
								}
							},
						]}
						data={data}
						filter={(dta) => {
							if(dta.Tripulantes?.length > 0) return console.log(dta.Tripulantes?.length + " sss");
							if(userExiste != null){
								console.log(userExiste+"entrooo")
								if (dta.Estado != "1" ) return false;
							}
							//  if (userExiste ) return true;
							// if (tripulacion?.data[state.key]?.Tripulantes.length === 0) return console.log(tripulacion?.data[state.key]?.Tripulantes.length +"zz");
								return true;
						}}
					/>
					<SView height={40} />
				</SView>
			</SPage>
		</>
	);
}