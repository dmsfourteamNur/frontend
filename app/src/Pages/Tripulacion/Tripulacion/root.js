import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Config from '../../../Config';
import Http from '../../../Http';

export default (props) => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
		Http.GET(Config.apis.tripulacion + "tripulacion").then(resp => {
			setState({ data: resp });
		})
    }, [])

    return ( <SPage title={'Tripulación'} disableScroll>
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
                                            style={{borderRadius:25}}>
                                            </SView>
                                            <SText fontSize={10}>{item==1 ? "Disponible" : "No disponible"}</SText>
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
                                                var obj = state.data.find(o => o.key == key);
                                                SPopup.confirm({
                                                    title: 'Eliminar',
                                                    message: '¿Esta seguro de eliminar?',
                                                    onPress: () => {
														Http.DELETE(Config.apis.tripulacion + "tripulacion/" + obj.key).then(result => {
															window.location.reload()
														})
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
                                label: 'Editar',
                                width: 50,
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
                        ]}
                        data={state.data}
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
    );
}