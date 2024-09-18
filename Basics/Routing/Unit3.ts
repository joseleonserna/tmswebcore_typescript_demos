import { dfm } from "./Unit3.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm, TCloseAction, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TForm4, Form4 } from "./Unit4"

@unit("Unit3")
export class TForm3 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebButton2: TWebButton = null;
   WebLabel3: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebButton3: TWebButton = null;
   WebButton2Click(Sender: TObject): void
   {
      Application.GoBack();
   }
   WebFormClose(Sender: TObject, Action: any): void
   {
      Action.set(TCloseAction.caFree);
   }
   WebButton3Click(Sender: TObject): void
   {
      Application.CreateForm(TForm4, {get: () => globalThis.Form4, set: (value: any) => globalThis.Form4 = value});
   }
}

export let Form3: TForm3 = null;

// initialization
RegisterClass(TForm3);

globalThis.Form3 = null;
globalThis.TForm3 = dfm;