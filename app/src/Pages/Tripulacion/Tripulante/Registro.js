import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SLoad, SNavigation } from 'servisofts-component';
import Configuracion from '../../../configuracion.json'

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


    useEffect(() => {

        if (state.key != "") {
            //LIST TRIPULANTE
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulante/" + state.key, requestOptions)
                .then(response => response.json())
                .then(result => {
                    state.data = result;
                    setState({ ...state })
                    if (!state?.data?.Nombre) return <SLoad />
                    console.log(state.data)
                })
                .catch(error => console.log('error', error));
        }

        //LIST CARGOS
        var requestOptions2 = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(Configuracion.SERVER_URL_TRIPULACION + "cargo", requestOptions2)
            .then(response => response.json())
            .then(result => {
                state.dataCargo = result;
                setState({ ...state })
                console.log(state.dataCargo)
                if (!state?.dataCargo?.Descripcion) return <SLoad />

            })
            .catch(error => console.log('error', error));
    }, [])


    //CAMBIANDO IDENTIFICADOR CARGO PARA SELECT
    state.dataCargoOk.push({ key: "", content: "Elegir" })
    state.dataCargo.map((item, index) =>
        state.dataCargoOk[index + 1] = { key: item.key, content: item.Descripcion }
    )
    // var objCargo = state.dataCargo.find(o => o.key == state.data["KeyCargo"])

    if (state.key != "") {
        if (!state?.data?.Nombre) return <SLoad />
        console.log(state?.data?.Nombre + " tripulante");
    }

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
                                    defaultValue: state?.data?.Nombre
                                },
                                Apellido: {
                                    label: 'Apellidos',
                                    type: 'text',
                                    isRequired: true,
                                    defaultValue: state.data?.Apellido
                                },
                                EmailAddress: {
                                    label: 'Correo',
                                    type: 'email',
                                    isRequired: true,
                                    defaultValue: state.data?.EmailAddress
                                },
                                Tipo: {
                                    label: 'Personal de',
                                    type: 'select',
                                    // STheme: 'dark',
                                    options: [{ key: "", content: <SText color={"#f0f"}>Elegir</SText> }, { key: "TIERRA", content: "TIERRA" }, { key: "AIRE", content: "AIRE" }],
                                    isRequired: true,
                                    defaultValue: state.data["Tipo"]

                                },
                                KeyCargo: {
                                    label: 'Cargo',
                                    type: 'select',
                                    // STheme: 'dark',
                                    options: state.dataCargoOk,
                                    isRequired: true,
                                    // defaultValue: objCargo?.key
                                    defaultValue: state.data["KeyCargo"]
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

                                    fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulante/" + state.key, requestOptions)
                                        .then(response => response.json())
                                        .then(result => console.log(result))
                                        .then(result => SNavigation.goBack())
                                        .catch(error => console.log('error', error));
                                } else {
                                    var requestOptions = {
                                        method: 'POST',
                                        body: raw,
                                    };

                                    fetch(Configuracion.SERVER_URL_TRIPULACION + "tripulante/registro", requestOptions)
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