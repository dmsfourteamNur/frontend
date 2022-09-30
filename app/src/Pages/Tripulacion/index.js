import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView } from 'servisofts-component';



export default (props) => {




    return (
        // <SPage title={'login'} preventBack>
        //     <SText>TODO</SText>
        // </SPage>
        <>
            <SPage title={'Tripulación'} center >
                <SView center col={'xs-12'}>
                    <SHr height={50} />
                    <SView col={'xs-11 md-6 xl-4'} center>
                        
                        <SView height={40} />
                    </SView>
                </SView>
            </SPage>

            <SHr height={20} />
            {/* <PBarraFooter url={'login'} /> */}
            {/* {this.getCargando()} */}
        </>
    );
}