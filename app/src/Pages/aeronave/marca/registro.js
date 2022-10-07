import { useEffect, useState, useRef } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SLoad } from 'servisofts-component';
import Button from '../../../Components/Button';
import Config from '../../../Config';
import Http from '../../../Http';

export default (props) => {
    const formulario = useRef();
    const [state, setState] = useState({
        data: {},
        key: SNavigation.getParam('key', "")
    });

    useEffect(() => {
        if (state.key != "") {
            Http.GET(Config.apis.aeronave + "marca/" + state.key).then(resp => {
                setState({ data: resp });
            })
        }
    }, [])


    if (!state?.data.key && state.key) return <SLoad />

    return (<SPage title={'Registro'}>
        <SHr height={25} />
        <SView col={'xs-12'} center >
            <SForm
                ref={formulario}
                col={'xs-11 sm-10 md-8 lg-6 xl-4'}
                center
                inputs={{
                    nombre: {
                        label: 'nombre',
                        type: 'text',
                        isRequired: true,
                        defaultValue: state.data?.nombre
                    }
                }}
                onSubmit={(values) => {
                    if (state.key != "") {
                        Http.PUT(Config.apis.aeronave + "marca/" + state.key, values).then(result => SNavigation.goBack())
                    } else {
                        Http.POST(Config.apis.aeronave + "marca/registro", values).then(result => SNavigation.goBack())
                    }
                }}
            />
            <Button onPress={() => {
                formulario.current.submit();
            }}>{state.key ? 'EDITAR' : 'REGISTRAR'}</Button>
        </SView>
        <SHr height={25} />
    </SPage>
    );
}