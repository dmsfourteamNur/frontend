import { SButtom, SHr, SIcon, SNavigation, SPage, STheme, SView } from 'servisofts-component';

export default (props) => {
    return (
        <SPage hidden disableScroll center>
            <SView col={"xs-9 sm-7 md-5 lg-4 xl-3"} height={200}>
                <SIcon name={"Logo"} fill={STheme.color.primary} />
            </SView>
            <SHr/>
            <SButtom type='outline' onPress={() => { SNavigation.navigate("/login") }}>Iniciar session</SButtom>
        </SPage>
    );
}