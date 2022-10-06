import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SLoad, SNavigation } from 'servisofts-component';
import Config from '../../../config.json'

export default (props) => {

    const formulario = useRef();

    var keyEdit = "";
    if (SNavigation.getParam('key')) {
        keyEdit = SNavigation.getParam('key');
    }

    const [state, setState] = useState({
        data: [],
        dataCargo: [],
        dataCargoOk: [],
        key: keyEdit
    });

    if (state.key != "") {
        useEffect(() => {
            //LIST TRIPULANTE
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(Config.SERVER_URL_TRIPULACION + "tripulante", requestOptions)
                .then(response => response.json())
                .then(result => {
                    state.data = result;
                    setState({ ...state })
                    console.log(state.data)
                })
                .catch(error => console.log('error', error));

                if (!state?.data.Nombre) return <SLoad />

        }, [])
    }

    useEffect(() => {

        //LIST CARGOS
        var requestOptions2 = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(Config.SERVER_URL_TRIPULACION + "cargo", requestOptions2)
            .then(response => response.json())
            .then(result => {
                state.dataCargo = result;
                setState({ ...state })
                console.log(state.dataCargo)
            })
            .catch(error => console.log('error', error));

        if (!state?.dataCargo.Descripcion) return <SLoad />

    }, [])

    //CAMBIANDO IDENTIFICADOR CARGO PARA SELECT
    state.dataCargo.map((item, index) =>
        state.dataCargoOk[index] = { key: item.key, content: item.Descripcion }
    )

    return (
        <>
            <SPage title={'Registro Tripulante'}>
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
                                Nombre: {
                                    label: 'Nombres',
                                    type: 'text',
                                    isRequired: true,
                                    defaultValue: state.data['Nombre']
                                },
                                Apellido: {
                                    label: 'Apellidos',
                                    type: 'text',
                                    isRequired: true,
                                },
                                EmailAddress: {
                                    label: 'Correo',
                                    type: 'email',
                                    isRequired: true,
                                    // defaultValue: data['descripcion']
                                },
                                Tipo: {
                                    label: 'Personal de',
                                    type: 'select',
                                    // STheme: 'dark',
                                    options: [{ key: "TIERRA", content: "TIERRA" }, { key: "AIRE", content: "AIRE" }],
                                    isRequired: true,
                                },
                                // Cargo: {
                                //     label: 'Cargo',
                                //     type: 'select',
                                //     // STheme: 'dark',
                                //     options: state.dataCargoOk,
                                //     isRequired: true,
                                // },


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

                                    fetch(Config.SERVER_URL_TRIPULACION + "tripulante/" + state.key, requestOptions)
                                        .then(response => response.json())
                                        .then(result => console.log(result))
                                        .then(result => SNavigation.goBack())
                                        .catch(error => console.log('error', error));
                                } else {
                                    var requestOptions = {
                                        method: 'POST',
                                        body: raw,
                                    };

                                    fetch(Config.SERVER_URL_TRIPULACION + "tripulante/registro", requestOptions)
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
                        REGISTRAR
                    </SText>
                </SView>
            </SView>
            <SHr height={25} />
        </>
    );
}