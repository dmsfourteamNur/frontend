

import Cargo, { ReactComponent as CargoTW } from './cargo.svg';
import Tripulante, { ReactComponent as TripulanteTW } from './tripulante.svg';
import Tripulacion, { ReactComponent as TripulacionTW } from './tripulacion.svg';
import AddTripulante, { ReactComponent as AddTripulanteTW } from './addTripulante.svg';



const Assets = {
	"Cargo": { Native: Cargo, Web: CargoTW },
	"Tripulante": { Native: Tripulante, Web: TripulanteTW },
	"Tripulacion": { Native: Tripulacion, Web: TripulacionTW },
	"AddTripulante": { Native: AddTripulante, Web: AddTripulanteTW }

}

export default Assets;