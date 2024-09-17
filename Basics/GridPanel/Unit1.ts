import { dfm } from "./Unit1.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebGridPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebLabel, TWebEdit, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebLabel5: TWebLabel = null;
   WebGridPanel1: TWebGridPanel = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebEdit1: TWebEdit = null;
   WebButton1: TWebButton = null;
   WebEdit2: TWebEdit = null;
   WebButton2: TWebButton = null;
   WebEdit3: TWebEdit = null;
   WebButton3: TWebButton = null;
   WebEdit4: TWebEdit = null;
   WebButton4: TWebButton = null;
   WebLabel7: TWebLabel = null;
   WebLabel6: TWebLabel = null;
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;