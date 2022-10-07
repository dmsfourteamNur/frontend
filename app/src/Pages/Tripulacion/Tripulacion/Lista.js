import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SPopup } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';
import Configuracion from '../../../configuracion.json'

export default (props) => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulacion", requestOptions)
            .then(response => response.json())
            .then(result => {
                state.data = result;
                setState({ ...state })
                console.log(state.data)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <SPage title={'Tripulación'} disableScroll>
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
                                                SNavigation.navigate('/tripulacion/registro', {
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
                                                        var raw = "";
                                                        var requestOptions = {
                                                            method: 'DELETE'
                                                            // body: raw,
                                                            // redirect: 'follow'
                                                        };

                                                        fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulacion/" + obj.key, requestOptions)
                                                            .then(response => response.json())
                                                            .then(result => console.log(result))
                                                            .catch(error => console.log('error', error));
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
                                                SNavigation.navigate('/tripulacion/addTripulante', {
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
                    <SView height={40} />
                </SView>
                <FloatButtom
                    onPress={() => {
                        SNavigation.navigate('/tripulacion/registro');
                    }}
                />
            </SPage>

            <SHr height={20} />
        </>
    );
}