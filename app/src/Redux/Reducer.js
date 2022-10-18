import checkInReducer from "./checkIn/checkinSlice";

import aeronaveSlice from "./aeronave/aeronaveSlice";
import marcaSlice from "./aeronave/marcaSlice";
import cargonReducer from "./tripulacion/cargoSlice";
import tripulacionReducer from "./tripulacion/tripulacionSlice";
import tripulanteReducer from "./tripulacion/tripulanteSlice";
import aeronavesReducer from "./vuelo/aeronaveSlice";
import tripulacionesReducer from "./vuelo/tripulacionSlice";
import vueloReducer from "./vuelo/vueloSlice";
export default {
	checkin: checkInReducer,
	tripulante: tripulanteReducer,
	tripulacion: tripulacionReducer,
	cargo: cargonReducer,
	vuelo: vueloReducer,
	aeronaves: aeronavesReducer,
	tripulaciones: tripulacionesReducer,
	aeronave: aeronaveSlice,
	marca: marcaSlice
};
