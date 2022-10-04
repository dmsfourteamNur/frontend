import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2 } from 'servisofts-component';
import FloatButtom from '../../../Components/FloatButtom';




export default (props) => {

    const formulario = useRef();

    const [state, setState] = useState({
        data: []
    });


    // useEffect(() => {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:8080/tripulante", requestOptions)
    //         // .then(response => response.text())
    //         .then(response => response.json())
    //         .then(result => {
    //             state.data = result;
    //             setState({ ...state })
    //             // var obj = JSON.parse(state.data )
    //             console.log(state.data)
    //         })
    //         .catch(error => console.log('error', error));
    // }, [])


    let data = {};
    return (
        <>
            <SPage title={'Registro Cargo'}>
                <SView col={'xs-12'} backgroundColor={'transparent'} center row>
                    <SView
                        col={'xs-11 sm-10 md-8 lg-6 xl-4'}
                        backgroundColor={'transparent'}>
                        <SHr height={25} />

                        <SForm
                            center
                            row
                            ref={(form) => {
                                // this.form = form;
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
                                    // defaultValue: data['descripcion']
                                },

                            }}
                            // onSubmitName={"Registrar"}
                            onSubmit={(values) => {
                                // if (this.key) {
                                //     sector.Actions.editar({ ...data, ...values }, this.props);
                                // } else {
                                //     sector.Actions.registro(
                                //         { ...values, key_evento: this.key_evento },
                                //         this.props
                                //     );
                                var myHeaders = new Headers();
                                // myHeaders.
                                // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:8080/cargo/registro")
                                // myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
                                // myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")
                                myHeaders.append("Content-Type", "application/json");

                                var raw = JSON.stringify({
                                    // "Nombre": "Dana Test2",
                                    // "Apellido": "Portillo Test2"
                                    ...values
                                });

                                var requestOptions = {
                                    method: 'POST',
                                    //headers: myHeaders,
                                    body: raw,
                                   // redirect: 'follow'
                                };

                                fetch("http://localhost:8080/cargo/registro", requestOptions)
                                    .then(response => response.json())
                                    .then(result => console.log(result))
                                    .catch(error => console.log('error', error));
                                // }
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