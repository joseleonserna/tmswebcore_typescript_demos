import { dfm } from "./Unit4.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm, TCloseAction, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Unit4")
export class TForm4 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebButton2: TWebButton = null;
   WebLabel3: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebButton2Click(Sender: TObject): void
   {
      Application.GoBack();
   }
   WebFormClose(Sender: TObject, Action: any): void
   {
      Action.set(TCloseAction.caFree);
   }
}

export let Form4: TForm4 = null;

// initialization
RegisterClass(TForm4);

globalThis.Form4 = null;
globalThis.TForm4 = dfm;