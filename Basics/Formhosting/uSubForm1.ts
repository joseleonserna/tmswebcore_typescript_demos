import { dfm } from "./uSubForm1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebListBox, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("uSubForm1")
export class TSubForm1 extends TWebForm
{
   lbTexts: TWebListBox = null;
   WebLabel1: TWebLabel = null;
   txtSelection: TWebLabel = null;
   lbTextsClick(Sender: TObject): void
   {
      if (this.lbTexts.ItemIndex > -1)
      {
         this.txtSelection.Caption = this.lbTexts.Items.Get(this.lbTexts.ItemIndex);
      }
   }
}

export let SubForm1: TSubForm1 = null;

globalThis.SubForm1 = null;
globalThis.TSubForm1 = dfm;