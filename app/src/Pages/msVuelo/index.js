import { useEffect, useState } from 'react';
import TimePicker from 'react-times';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation, SDate} from 'servisofts-component';




export default (props) => {

    const [state, setState] = useState({
        data: []
        // new date()
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
            <SPage title={'Vuelo Home'} disableScroll>
                <SView center col={'xs-12'} height >
                    <SHr height={50} />
                    <SView col={'xs-11 md-10 xl-10'} center row>
                        <SView width={150} height={150} center
                        onPress={() => {
                            SNavigation.navigate('/vuelo/tripulacion');
                        }}>
                            <SHr height={20} />
                            <SIcon name={'Cargo'} color={STheme.color.primary}></SIcon>
                            <SHr height={5} />
                            <SText>CARGO</SText>
                        </SView>
                        <SView width={150} height={150} center
                            onPress={() => {
                                SNavigation.navigate('/vuelo/aeroanves');
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

                <DatePicker selected={startDate} onChange={( ) => setStartDate(date)} />


                <TimePicker
    showTimezone // show the timezone, default false
    focused // whether to show timepicker modal after rendered. default false
    withoutIcon // whether to has time icon on button, default false
    colorPalette="dark" // main color, default "light"
    time="13:05" // initial time, default current time
    theme="material"
    // or
    // theme="classic"
    timeMode="12" // use 24 or 12 hours mode, default 24
    timezone="America/New_York" // what timezone to use, detects the user's local timezone by default
  />

            </SPage>

            <SHr height={20} />
            {/* <PBarraFooter url={'login'} /> */}
            {/* {this.getCargando()} */}
        </>
    );
}