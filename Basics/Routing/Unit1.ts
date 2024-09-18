import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { RegisterClass } from "@tmssoftware/webcore/classes"
import { TWebForm, TCloseAction, Application, clTMSWEB } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TForm2, Form2 } from "./Unit2"
import { TForm3, Form3 } from "./Unit3"
import { TForm4, Form4 } from "./Unit4"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebButton1: TWebButton = null;
   WebLabel2: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebButton2: TWebButton = null;
   WebButton3: TWebButton = null;
   WebButton1Click(Sender: TObject): void
   {
      Application.CreateForm(TForm2, {get: () => globalThis.Form2, set: (value: any) => globalThis.Form2 = value});
   }
   WebFormCreate(Sender: TObject): void
   {
      Application.ThemeColor = clTMSWEB;
   }
   WebButton2Click(Sender: TObject): void
   {
      Application.CreateForm(TForm3, {get: () => globalThis.Form3, set: (value: any) => globalThis.Form3 = value});
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

export let Form1: TForm1 = null;

// initialization
RegisterClass(TForm1);

globalThis.Form1 = null;
globalThis.TForm1 = dfm;