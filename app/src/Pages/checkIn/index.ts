import { SPage } from "servisofts-component";

import root from "./root";
import Checkin from "./checkin";
export default SPage.combinePages("checkin", {
	"": root,
	...Checkin
});
