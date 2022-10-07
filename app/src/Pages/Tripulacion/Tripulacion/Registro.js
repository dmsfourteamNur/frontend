import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Configuracion from '../../../configuracion.json'

export default (props) => {

    const formulario = useRef();

    var keyEdit = "";
    if (SNavigation.getParam('key')) {
        keyEdit = SNavigation.getParam('key');
    }

    const [state, setState] = useState({
        data: [],
        key: keyEdit
    });

    if (state.key != "") {

        useEffect(() => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulacion/" + state.key, requestOptions)
                .then(response => response.json())
                .then(result => {
                    state.data = result;
                    setState({ ...state })
                    console.log(state.data)
                })
                .catch(error => console.log('error', error));
        }, [])

        if (!state?.data.Descripcion) return <SLoad />

    }

    return (
        <>
            <SPage title={'Registro Tripulación'}>
                <SView col={'xs-12'} backgroundColor={'transparent'} center row>
                    <SView
                        col={'xs-11 sm-10 md-8 lg-6 xl-4'}
                        backgroundColor={'transparent'}>
                        <SHr height={25} />

                        <SForm
                            center
                            row
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
                                    defaultValue: state.data?.Descripcion
                                },

                            }}
                            // onSubmitName={"Registrar"}
                            onSubmit={(values) => {
                                var raw = JSON.stringify({
                                    ...values
                                });

                                if (state.key != "") {
                                    var requestOptions = {
                                        method: 'PUT',
                                        body: raw,
                                    };

                                    fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulacion/" + state.key, requestOptions)
                                        .then(response => response.json())
                                        .then(result => console.log(result))
                                        .then(result => SNavigation.goBack())
                                        .catch(error => console.log('error', error));
                                } else {
                                    var requestOptions = {
                                        method: 'POST',
                                        body: raw,
                                    };

                                    fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulacion/registro", requestOptions)
                                        .then(response => response.json())
                                        .then(result => console.log(result))
                                        .then(result => SNavigation.goBack())
                                        .catch(error => console.log('error', error));
                                }
                            }}
                        />
                    </SView>
                </SView>
            </SPage>

            <SView col={'xs-12'} center style={{ bottom: 0 }}>
                <SView
                    col={'xs-11 sm-10 md-8 lg-6 xl-4'}
                    height={50}
                    center
                    backgroundColor={STheme.color.card}
                    style={{ borderRadius: 4 }}
                    onPress={() => {
                        formulario.current.submit();
                    }}>
                    <SText color={STheme.color.text} font={'Roboto'} fontSize={14} bold>
                        {state.key ? 'EDITAR' : 'REGISTRAR'}
                    </SText>
                </SView>
            </SView>
            <SHr height={25} />
        </>
    );
}