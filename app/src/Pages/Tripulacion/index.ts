import { SPage } from "servisofts-component";

import root from "./root";
import Cargo from "./Cargo";
export default SPage.combinePages("tripulacion", {
	"": root,
	...Cargo
	// "tripulantes": tripulantes,
	// "tripulantes/registro": tripulanteRegistro,
	// "cargos": cargos,
	// "cargos/registro": cargoRegistro,
	// "tripulacion": tripulacion,
	// "registro": tripulacionRegistro,
});
