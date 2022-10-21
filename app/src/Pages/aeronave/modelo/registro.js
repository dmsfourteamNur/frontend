import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Button from '../../../Components/Button';
import { getByKey, create, edit, getAll, AddModelo } from '../../../Redux/aeronave/marcaSlice';
export default (props) => {
	const { loading, data, error } = useSelector((state) => state.marca);
	const dispatch = useDispatch();
	const formulario = useRef();
	const [state, setState] = useState({
		key: SNavigation.getParam('key', ""),
		keyMarca: SNavigation.getParam('keyMarca', ""),
	});
	useEffect(() => {
		dispatch(getAll());
	}, [])
	if (!data) return <SLoad />
	var item = {}

	const getOptions = () => {
		var options = [
			{ key: "", content: "--" },
		];

		Object.values(data).map(obj => {
			options.push({
				key: obj.key,
				content: obj.nombre
			})
		})
		return options;
	}
	return (<SPage title={'Registro'}>
		<SHr height={25} />
		<SView col={'xs-12'} center >
			<SForm
				ref={formulario}
				col={'xs-11 sm-10 md-8 lg-6 xl-4'}
				center
				inputs={{
					keyMarca: {
						label: 'Marca',
						type: 'select',
						isRequired: true,
						defaultValue: item?.keyMarca,
						options: getOptions()
					},
					nombre: {
						label: 'Nombre',
						type: 'text',
						isRequired: true,
						defaultValue: item?.nombre
					}
				}}
				onSubmit={(values) => {
					dispatch(AddModelo(values));
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