import { dfm } from "./UInsights.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("UInsights")
export class TInsights extends TWebForm
{
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
}

export let Insights: TInsights = null;

// initialization
RegisterClass(TInsights);

globalThis.Insights = null;
globalThis.TInsights = dfm;