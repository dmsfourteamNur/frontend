import Operaciones, {
  ReactComponent as OperacionesTW,
} from "./btnOperaciones.svg";
import Aeronaves, { ReactComponent as AeronavesTW } from "./btnAeronave.svg";
import Tripulaciones, {
  ReactComponent as TripulacionesTW,
} from "./btnTripulaciones.svg";

const Assets = {
  BtnOperaciones: { Native: Operaciones, Web: OperacionesTW },
  BtnAeronave: { Native: Aeronaves, Web: AeronavesTW },
  BtnTripulaciones: { Native: Tripulaciones, Web: TripulacionesTW },
};

export default Assets;
