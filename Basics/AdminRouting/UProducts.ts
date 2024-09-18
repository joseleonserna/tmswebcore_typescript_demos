import { dfm } from "./UProducts.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("UProducts")
export class TProducts extends TWebForm
{
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
}

export let Products: TProducts = null;

// initialization
RegisterClass(TProducts);

globalThis.Products = null;
globalThis.TProducts = dfm;