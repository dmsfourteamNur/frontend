import { useEffect, useState } from 'react';
import { SButtom, SForm, SHr, SIcon, SPage, SText, STheme, SView, STable2, SNavigation } from 'servisofts-component';
import ButtonCuadrado from '../../Components/ButtonCuadrado';

export default (props) => {
    return (
        <SPage title={'Tripulación'} disableScroll>
            <SView center col={'xs-12'} height >
                <SHr height={50} />
                <SView col={'xs-11 md-10 xl-10'} center row>
                    <ButtonCuadrado url="/tripulacion/cargo" name="CARGO" icon="Cargo" />
                    <ButtonCuadrado url="/tripulacion/tripulante" name="TRIPULANTES" icon="Tripulante" />
                    <ButtonCuadrado url="/tripulacion" name="TRIPULACION" icon="Tripulacion" />
                </SView>
            </SView>
        </SPage>
    );
}