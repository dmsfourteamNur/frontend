import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad } from 'servisofts-component';
import { getAll } from '../../../Redux/aeronave/aeronaveSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.aeronave);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, []);

	return (
		<>
			{loading && <SLoad />}
			<SPage title={'CheckIn'} disableScroll>
				<SView center col={'xs-12'} height>
					<STable2
						header={[
							{ key: 'index', label: '#', width: 50 },

						]}
						data={data}
					/>
				</SView>

			</SPage>
		</>
	);
};
