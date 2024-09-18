import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TForm1, Form1 } from "./Unit1"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   if (!Application.Route())
   Application.CreateForm(TForm1, {get: () => globalThis.Form1, set: (value: any) => globalThis.Form1 = value});
   Application.Run();
}