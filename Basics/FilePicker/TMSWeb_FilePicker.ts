import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TForm2, Form2 } from "./Ufilepicker"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   Application.CreateForm(TForm2, {get: () => globalThis.Form2, set: (value: any) => globalThis.Form2 = value});
   Application.Run();
}