

import DeleteT, { ReactComponent as DeleteTW } from './deleteT.svg';
import EditT, { ReactComponent as EditTW } from './editT.svg';
import SinTarjeta, { ReactComponent as SinTarjetaW } from './sinTarjeta.svg';
import TarjetaAdd, { ReactComponent as TarjetaAddW } from './tarjetaAdd.svg';
import TarjetaSeguridad, { ReactComponent as TarjetaSeguridadW } from './tarjetaSeguridad.svg';



const Assets = {
	"DeleteT": { Native: DeleteT, Web: DeleteTW },
	"EditT": { Native: EditT, Web: EditTW },
	"SinTarjeta": { Native: SinTarjeta, Web: SinTarjetaW },
	"TarjetaAdd": { Native: TarjetaAdd, Web: TarjetaAddW },
	"TarjetaSeguridad": { Native: TarjetaSeguridad, Web: TarjetaSeguridadW }
}

export default Assets;