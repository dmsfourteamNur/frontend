import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation} from 'servisofts-component';




export default (props) => {

    const [state, setState] = useState({
        data: []
    });


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/tripulante", requestOptions)
            // .then(response => response.text())
            .then(response => response.json())
            .then(result => {
                state.data = result;
                setState({ ...state })
                // var obj = JSON.parse(state.data )
                console.log(state.data)
            })
            .catch(error => console.log('error', error));
    }, [])



    return (
        // <SPage title={'login'} preventBack>
        //     <SText>TODO</SText>
        // </SPage>
        <>
            <SPage title={'Tripulación'} disableScroll>
                <SView center col={'xs-12'} height >
                    <SHr height={50} />
                    <SView col={'xs-11 md-10 xl-10'} center row>
                        <SView width={150} height={150} center
                        onPress={() => {
                            SNavigation.navigate('/tripulacion/cargos');
                        }}>
                            <SHr height={20} />
                            <SIcon name={'Cargo'} color={STheme.color.primary}></SIcon>
                            <SHr height={5} />
                            <SText>CARGO</SText>
                        </SView>
                        <SView width={150} height={150} center
                            onPress={() => {
                                SNavigation.navigate('/tripulacion/tripulantes');
                            }}>
                            <SHr height={20} />
                            <SIcon name={'Tripulante'} color={STheme.color.primary}></SIcon>
                            <SHr height={5} />
                            <SText>TRIPULANTES</SText>
                        </SView>
                        <SView width={150} height={150} center>
                            <SHr height={20} />
                            <SIcon name={'Tripulacion'} color={STheme.color.primary}></SIcon>
                            <SHr height={5} />
                            <SText>TRIPULACION</SText>
                        </SView>
                        <SView height={40} />
                    </SView>
                    {/* <SText>{JSON.stringify(state.data)}</SText> */}
                </SView>

            </SPage>

            <SHr height={20} />
            {/* <PBarraFooter url={'login'} /> */}
            {/* {this.getCargando()} */}
        </>
    );
}