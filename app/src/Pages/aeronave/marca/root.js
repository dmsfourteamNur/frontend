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
        Http.GET(Config.apis.aeronave + "marca").then(resp => {
            setState({ data: resp });
        })
    }, [])
    console.log(state)
    return (
        <SPage title={'Marca'} disableScroll>
            <STable2
                header={[
                    { key: "index", label: "#", width: 50 },
                    { key: "nombre", label: "nombre", width: 150 },
                    {
                        key: 'key-editar', label: 'Editar', width: 50, center: true,
                        component: (item) => {
                            return (
                                <SView onPress={() => {
                                    SNavigation.navigate('/aeronave/marca/registro', { key: item });
                                }}>
                                    <SIcon name={'Edit'} width={35} />
                                </SView>
                            );
                        }
                    },
                    {
                        key: 'key-eliminar', label: 'Eliminar', width: 60, center: true,
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
                                                Http.DELETE(Config.apis.aeronave + "marca/" + obj.key).then(result => {
                                                    window.location.reload()
                                                })
                                            }
                                        });
                                    }}>
                                    <SIcon name={'Delete'} />
                                </SView>
                            );
                        }
                    }
                ]}
                data={state.data} />
            <FloatButtom
                onPress={() => {
                    SNavigation.navigate('/aeronave/marca/registro');
                }}
            />
        </SPage>
    );
}