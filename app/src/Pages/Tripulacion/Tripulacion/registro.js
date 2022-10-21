import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Configuracion from '../../../configuracion.json'
import Button from '../../../Components/Button';
import { getAll, delete_, getByKey, create, edit } from '../../../Redux/tripulacion/tripulacionSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.tripulacion);
	const dispatch = useDispatch();
	const formulario = useRef();
	const [state, setState] = useState({
		key: SNavigation.getParam('key', "")
	});
	console.log(state)

	useEffect(() => {
		if (state.key != "") {
			dispatch(getByKey(state.key));
		}
	}, [])

	var item;
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
	}

	if (!data || loading) return <SLoad />;

	return (<SPage title={'Registro Tripulación'}>
				<SView col={'xs-12'} center >
					<SHr height={25} />

					<SForm
						center
						row
						col={'xs-11 sm-10 md-8 lg-6 xl-4'}
						ref={(form) => {
							formulario.current = form;
						}}
						style={{
							justifyContent: 'space-between',
						}}
						inputProps={{
							customStyle: 'romeo',
							separation: 16,

							color: STheme.color.text
							// fontSize: 16,
							// font: "Roboto",
						}}
						inputs={{
							Descripcion: {
								label: 'Descripción',
								type: 'text',
								isRequired: true,
								defaultValue: item?.Descripcion
							},

						}}
						// onSubmitName={"Registrar"}
						onSubmit={(values) => {

							if (state.key != "") {
								dispatch(edit({
									...item,
									...values
								}));
							} else {
								dispatch(create(values));
							}
							SNavigation.goBack();
						}}
					/>
					<Button onPress={() => {
						formulario.current.submit();
					}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
				</SView>
			</SPage>
	);
}