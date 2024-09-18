import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TFormRegexDemo, FormRegexDemo } from "./Unit1"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   Application.CreateForm(TFormRegexDemo, {get: () => globalThis.FormRegexDemo, set: (value: any) => globalThis.FormRegexDemo = value});
   Application.Run();
}