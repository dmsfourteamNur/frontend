import { SAssets } from 'servisofts-component';

import Camara from "./svg/camara";

// import Casagrande from "./svg/casagrande";
import restaurante from './svg/restaurante';
import Inicio from "./svg/inicio";
import Inputs from "./svg/inputs";
import Reserva from "./svg/reserva";
import Tarjeta from "./svg/tarjeta";
import Tripulacion from "./svg/tripulacion";
import Vuelo from "./svg/vuelo";


//Logo
import Logo, { ReactComponent as LogoW } from './svg/logo.svg';
import Logosolo, { ReactComponent as LogosoloW } from './svg/logosolo.svg';


const Assets: SAssets = {
    svg: {

        "Logo": { Native: Logo, Web: LogoW },
        "Logosolo": { Native: Logosolo, Web: LogosoloW },
        ...Inicio,
        ...Camara,
        ...restaurante,
        ...Inputs,
        ...Reserva,
        ...Tarjeta,
        ...Tripulacion,
        ...Vuelo,
    }
}

export default Assets;