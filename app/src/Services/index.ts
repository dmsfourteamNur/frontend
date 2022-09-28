
import Casagrande from './Casagrande';
// import Roles_permisos from './Roles_permisos';
// import Usuario from './Usuario';
 const Pages = {
    // ...Usuario.Pages,
    // ...Roles_permisos.Pages,
    ...Casagrande.Pages,
 }

const Reducers = {
    // ...Usuario.Reducers,
    // ...Roles_permisos.Reducers,
    ...Casagrande.Reducers,
 }

export default {
    Pages,
    Reducers
}