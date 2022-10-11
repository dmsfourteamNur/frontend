import { SPage } from "servisofts-component";

import root from "./root";
import vuelo from "./vuelo";

export default SPage.combinePages("vuelo", {
    "": root,
    ...vuelo
});
