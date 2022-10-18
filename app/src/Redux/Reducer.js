import checkInReducer from "./checkIn/checkinSlice";

import cargonReducer from "./tripulacion/cargoSlice";
import tripulanteReducer from "./tripulacion/tripulanteSlice";
import tripulacionReducer from "./tripulacion/tripulacionSlice";
import vueloReducer from "./vuelo/vueloSlice";
import aeronaveSlice from "./aeronave/aeronaveSlice";
import marcaSlice from "./aeronave/marcaSlice";
export default {
	checkin: checkInReducer,
	tripulante: tripulanteReducer,
	tripulacion: tripulacionReducer,
	cargo: cargonReducer,
	vuelo: vueloReducer,
	aeronave: aeronaveSlice,
	marca: marcaSlice
};
