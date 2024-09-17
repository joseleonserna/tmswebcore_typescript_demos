import { dfm } from "./uSubForm2.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { IntToStr } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebButton, TWebMemo, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("uSubForm2")
export class TSubForm2 extends TWebForm
{
   WebButton1: TWebButton = null;
   WebMemo1: TWebMemo = null;
   WebLabel1: TWebLabel = null;
   WebButton1Click(Sender: TObject): void
   {
      this.WebMemo1.Lines.Add("Add line" + IntToStr(this.WebMemo1.Lines.Count));
   }
}

export let SubForm2: TSubForm2 = null;

globalThis.SubForm2 = null;
globalThis.TSubForm2 = dfm;