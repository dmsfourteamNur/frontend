import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Button from '../../../Components/Button';
import { getAll, delete_, getByKey, create, edit } from '../../../Redux/tripulacion/cargoSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.cargo);
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

	// if (!data && state.key) return <SLoad />
	var item;
	if (state.key) {
		item = data[state.key]
		if (!item) return <SLoad />
	}

	return (<SPage title={'Registro'}>
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SForm
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				center
				inputs={{
					Descripcion: {
						label: 'Descripcion',
						type: 'text',
						isRequired: true,
						defaultValue: item?.Descripcion
					}
				}}
				onSubmit={(values) => {
					if (state.key != "") {
						// Http.PUT(API + Controller + "/" + state.key, values).then(result => SNavigation.goBack())
						dispatch(edit({
							...item,
							...values
						}));
					} else {
						// Http.POST(API + Controller + "/registro", values).then(result => SNavigation.goBack())
						dispatch(create(values));
					}
					SNavigation.goBack();
				}}
			/>
			<Button onPress={() => {
				formulario.current.submit();
			}}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
		</SView>
		<SHr height={25} />
	</SPage>
	);
}