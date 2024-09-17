import { dfm } from "./Unit1.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebEdit, TWebMemo } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebPanel1: TWebPanel = null;
   WebLabel1: TWebLabel = null;
   WebEdit1: TWebEdit = null;
   WebLabel2: TWebLabel = null;
   WebEdit2: TWebEdit = null;
   WebMemo1: TWebMemo = null;
   WebLabel3: TWebLabel = null;
   WebLabel6: TWebLabel = null;
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;