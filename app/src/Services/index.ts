
import Casagrande from './Casagrande';
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