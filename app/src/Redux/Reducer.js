import checkInReducer from "./checkIn/checkinSlice";

import cargonReducer from "./tripulacion/cargoSlice";
import tripulanteReducer from "./tripulacion/tripulanteSlice";
import tripulacionReducer from "./tripulacion/tripulacionSlice";
import vueloReducer from "./vuelo/vueloSlice";

export default {
	checkin: checkInReducer,
	tripulante: tripulanteReducer,
	tripulacion: tripulacionReducer,
	cargo: cargonReducer,
	vuelo: vueloReducer,
};
