import { SPage } from "servisofts-component";

import root from "./root";
import Cargo from "./Cargo";
import Tripulante from "./Tripulante";
import Tripulacion from "./Tripulacion";
export default SPage.combinePages("tripulacion", {
	"": root,
	...Cargo,
	...Tripulante,
	...Tripulacion
	// "tripulantes": tripulantes,
	// "tripulantes/registro": tripulanteRegistro,
	// "cargos": cargos,
	// "cargos/registro": cargoRegistro,
	// "tripulacion": tripulacion,
	// "registro": tripulacionRegistro,
});
