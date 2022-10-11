import { SPage } from "servisofts-component";

import root from "./index";
// import marca from "./marca";
// import tripulacionInicio from "./Tripulacion/index";
// import cargos from "./Tripulacion/Cargo/root";
// import cargoRegistro from "./Tripulacion/Cargo/Registro";
// import tripulantes from "./Tripulacion/Tripulante/Lista";
// import tripulanteRegistro from "./Tripulacion/Tripulante/Registro";
// import tripulacion from "./Tripulacion/Tripulacion/Lista";
// import tripulacionRegistro from "./Tripulacion/Tripulacion/Registro";
export default SPage.combinePages("vuelo", {
    "": root,
    // ...marca
	// "vuelo/inicio": vueloInicio,
	// "vuelo/lista": vueloOperacion,
	// "vuelo/registro": vueloRegistro,
	// "vuelo/aeronaves": Aeronaves,
	// "vuelo/tripulaciones": Tripulaciones,
	// "vuelo/vueloSalidas": VueloSalidas,
	// "vuelo/vuelollegadas": VueloLLegadas,
});
