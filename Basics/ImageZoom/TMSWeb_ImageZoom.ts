import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TForm4, Form4 } from "./Unit1"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   Application.CreateForm(TForm4, {get: () => globalThis.Form4, set: (value: any) => globalThis.Form4 = value});
   Application.Run();
}