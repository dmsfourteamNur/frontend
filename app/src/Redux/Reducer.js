import checkInReducer from "./checkIn/checkinSlice";

import tripulacionReducer from "./tripulacion/tripulacionSlice";
import cargonReducer from "./tripulacion/cargoSlice";

export default {
  checkin: checkInReducer,
  tripulacion: tripulacionReducer,
  cargo: cargonReducer
};
