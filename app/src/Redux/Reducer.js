import checkInReducer from './checkIn/checkinSlice';

import aeronaveSlice from './aeronave/aeronaveSlice';
import marcaSlice from './aeronave/marcaSlice';
import ventaSlice from './venta/ventaSlice';
import cargonReducer from './tripulacion/cargoSlice';
import tripulacionReducer from './tripulacion/tripulacionSlice';
import tripulanteReducer from './tripulacion/tripulanteSlice';
import aeronavesReducer from './vuelo/aeronaveSlice';
import tripulacionesReducer from './vuelo/tripulacionSlice';
import vueloReducer from './vuelo/vueloSlice';
import personaByIdSlice from './checkIn/personaByIdSlice';
export default {
  checkin: checkInReducer,
  tripulante: tripulanteReducer,
  tripulacion: tripulacionReducer,
  cargo: cargonReducer,
  vuelo: vueloReducer,
  aeronaves: aeronavesReducer,
  tripulaciones: tripulacionesReducer,
  aeronave: aeronaveSlice,
  marca: marcaSlice,
  venta: ventaSlice,
  persona: personaByIdSlice
};
