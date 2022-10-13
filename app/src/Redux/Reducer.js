import checkInReducer from "./checkIn/checkinSlice";

import cargonReducer from "./tripulacion/cargoSlice";
import tripulacionReducer from "./tripulacion/tripulacionSlice";
import vueloReducer from "./vuelo/vueloSlice";

export default {
	checkin: checkInReducer,
	tripulacion: tripulacionReducer,
	cargo: cargonReducer,
	vuelo: vueloReducer,
};
