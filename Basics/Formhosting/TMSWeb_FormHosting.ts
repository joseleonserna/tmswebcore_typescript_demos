import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TFrmMain, FrmMain } from "./uFrmMain"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   Application.CreateForm(TFrmMain, {get: () => globalThis.FrmMain, set: (value: any) => globalThis.FrmMain = value});
   Application.Run();
}