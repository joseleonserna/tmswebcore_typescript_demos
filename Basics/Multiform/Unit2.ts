import { dfm } from "./Unit2.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton, TWebEdit } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Unit2")
export class TForm2 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebButton2: TWebButton = null;
   frm2Edit: TWebEdit = null;
   WebLabel2: TWebLabel = null;
   WebButton2Click(Sender: TObject): void
   {
      this.Close();
   }
}

export let Form2: TForm2 = null;

globalThis.Form2 = null;
globalThis.TForm2 = dfm;