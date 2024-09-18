import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TForm43, Form43 } from "./UClient"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   Application.CreateForm(TForm43, {get: () => globalThis.Form43, set: (value: any) => globalThis.Form43 = value});
   Application.Run();
}