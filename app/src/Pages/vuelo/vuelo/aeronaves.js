

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { SLoad, SNavigation, SPage, STable2, SView } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import { getAll } from '../../../Redux/vuelo/aeronaveSlice';


export default (props) => {

	const { loading, data, error } = useSelector((state) => state.aeronave);
	const dispatch = useDispatch();


	useEffect(() => {
		dispatch(getAll());
	}, []);





	return (
		<>
			{loading && <SLoad />}
			<SPage title={'Operador'} disableScroll>
				<SView center col={'xs-12'} height>
					<STable2
						header={[
							{ key: "index", label: "#", width: 50 },
							{ key: "matricula", label: "Matrícula", width: 130 },
							{ key: "estado", label: "Estado", width: 130, center: true },
						]}
						data={data} />
					<FloatButtom
						onPress={() => {
							SNavigation.navigate('/vuelo/vuelo/registro');
						}}
					/>
				</SView>
			</SPage>
		</>
	);
}