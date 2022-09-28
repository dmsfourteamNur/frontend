

import Exit, { ReactComponent as ExitW } from './exit.svg';
import Inicio, { ReactComponent as InicioW } from './inicio.svg';
import Entradas, { ReactComponent as EntradasW } from './entradas.svg';
import Reservas, { ReactComponent as ReservasW } from './reservas.svg';
import BgDate, { ReactComponent as BgDateW } from './bgDate.svg';
import BgCart, { ReactComponent as BgCartW } from './bgCart.svg';
import Buscar, { ReactComponent as BuscarW } from './buscar.svg';
import BgFecha, { ReactComponent as BgFechaW } from './bgFecha.svg';


const Assets = {
	"Exit": { Native: Exit, Web: ExitW },
	"Inicio": { Native: Inicio, Web: InicioW },
	"Entradas": { Native: Entradas, Web: EntradasW },
	"Reservas": { Native: Reservas, Web: ReservasW },
	"BgDate": { Native: BgDate, Web: BgDateW },
	"BgCart": { Native: BgCart, Web: BgCartW },
	"Buscar": { Native: Buscar, Web: BuscarW },
	"BgFecha": { Native: BgFecha, Web: BgFechaW },

}

export default Assets;