import { dfm } from "./Usearch.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("Usearch")
export class TSearch extends TWebForm
{
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
}

export let Search: TSearch = null;

// initialization
RegisterClass(TSearch);

globalThis.Search = null;
globalThis.TSearch = dfm;