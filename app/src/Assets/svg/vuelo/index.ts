

import Cargo, { ReactComponent as CargoTW } from './cargo.svg';
import Tripulante, { ReactComponent as TripulanteTW } from './tripulante.svg';
import Tripulacion, { ReactComponent as TripulacionTW } from './tripulacion.svg';



const Assets = {
	"BtnVuelo": { Native: Cargo, Web: CargoTW },
	"BtnAeronave": { Native: Tripulante, Web: TripulanteTW },
	"BtnTripulacion": { Native: Tripulacion, Web: TripulacionTW }
}

export default Assets;