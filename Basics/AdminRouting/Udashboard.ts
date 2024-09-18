import { dfm } from "./Udashboard.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("Udashboard")
export class TDashboard extends TWebForm
{
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
}

export let Dashboard: TDashboard = null;

// initialization
RegisterClass(TDashboard);

globalThis.Dashboard = null;
globalThis.TDashboard = dfm;