import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup, SLoad, SMath } from 'servisofts-component';
import { getAll } from '../../Redux/venta/ventaSlice';

export default (props) => {
	const { loading, data, error } = useSelector((state) => state.venta);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAll());
	}, []);

	if (!data) return <SLoad />
	return (
		<SPage title={'Ventas'} disableScroll>
			<SView center col={'xs-12'} height>
				<STable2
					header={[
						{ key: 'index', label: '#', width: 50 },
						{ key: 'nombre', label: 'Nombre', width: 150 },
						{ key: 'apellido', label: 'Apellido', width: 150 },
						{ key: 'dni', label: 'DNI', width: 100 },
						{ key: 'keyVuelo', label: 'keyVuelo', width: 150 },
						// { key: 'keyTarifa', label: 'keyTarifa', width: 150 },
						{ key: 'monto', label: 'Monto', width: 100, center: true, render: o => "Bs. " + o },
						{
							key: 'pagos', label: 'M. Pagado', center: true, width: 100, render: (o) => {
								var total = 0;
								if (!o) return total;
								o.map(p => {
									total += p.monto;
								})
								return "Bs. " + SMath.formatMoney(total);
							}
						},
						{
							key: '-alldeuda', label: 'Deuda', center: true, width: 100, render: (o) => {
								var total = 0;
								if (!o.pagos) return total;
								o.pagos.map(p => {
									total += p.monto;
								})
								return "Bs. " + SMath.formatMoney(o.monto - total);
							}
						},
						{
							key: '-alldeudaporc', label: '% Pago', center: true, width: 100, render: (o) => {
								var total = 0;
								if (!o.pagos) return total;
								o.pagos.map(p => {
									total += p.monto;
								})
								return ((total / o.monto) * 100).toFixed(0);
							}
						},
						{ key: 'key-ver', label: 'Ver', width: 100, center: true, component: (key) => <SView onPress={() => { SNavigation.navigate("/venta/registro", { key: key }) }}><SText>Ver</SText></SView> },
						{ key: 'key-pago', label: 'Pagar', width: 100, center: true, component: (key) => <SView onPress={() => { SNavigation.navigate("/venta/pago/registro", { key: key }) }}><SText>Ver</SText></SView> },

					]}
					data={data}
				/>
			</SView>
		</SPage>
	);
};
