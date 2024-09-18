import { dfm } from "./Unit2.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm, TCloseAction, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TForm3, Form3 } from "./Unit3"
import { TForm4, Form4 } from "./Unit4"

@unit("Unit2")
export class TForm2 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebButton2: TWebButton = null;
   WebButton1: TWebButton = null;
   WebLabel3: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebButton3: TWebButton = null;
   WebButton2Click(Sender: TObject): void
   {
      Application.GoBack();
   }
   WebButton1Click(Sender: TObject): void
   {
      Application.CreateForm(TForm3, {get: () =>globalThis.Form3, set: (value: any) => globalThis.Form3 = value});
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

export let Form2: TForm2 = null;

// initialization
RegisterClass(TForm2);

globalThis.Form2 = null;
globalThis.TForm2 = dfm;