import { dfm } from "./USettings.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("USettings")
export class TSettings extends TWebForm
{
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
}

export let Settings: TSettings = null;

// initialization
RegisterClass(TSettings);

globalThis.Settings = null;
globalThis.TSettings = dfm;