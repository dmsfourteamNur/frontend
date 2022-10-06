import { SButtom, SHr, SIcon, SNavigation, SPage, STheme, SView } from 'servisofts-component';

export default (props) => {
    return (
        <SPage hidden disableScroll center>
            <SView col={"xs-9 sm-7 md-5 lg-12 xl-12"} height={200} row center backgroundColor={'transparent'}>
                <SView width={100} height={100} backgroundColor={'#20a6d8'} center row onPress={() => { SNavigation.navigate("/aeronave/inicio") }}>Aeronave</SView>
                <SView width={10} />

                <SView width={100} height={100} backgroundColor={'#e292d2'} center row onPress={() => { SNavigation.navigate("/tripulacion/inicio") }}>Tripulacion</SView>
                <SView width={10} />

                <SView width={100} height={100} backgroundColor={'#877771'} center row onPress={() => { SNavigation.navigate("/vuelo/inicio") }}>Vuelo</SView>
                <SView width={10} />

                <SView width={100} height={100} backgroundColor={'#ffc942'} center row onPress={() => { SNavigation.navigate("/venta/inicio") }}>Venta</SView>
                <SView width={10} />

                <SView width={100} height={100} backgroundColor={'#7d3b23'} center row onPress={() => { SNavigation.navigate("/checking/inicio") }}>Checking</SView>
                <SView width={10} />
            </SView>
            <SHr />
        </SPage>
    );
} 
