import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TfrmMain, frmMain } from "./Main"
import { TdmMain, dmMain } from "./MainModule"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   // Application.CreateForm(TdmMain, {get: () => globalThis.dmMain, set: (value: any) => globalThis.dmMain = value});
   Application.CreateForm(TfrmMain, {get: () => globalThis.frmMain, set: (value: any) => globalThis.frmMain = value});
   Application.Run();
}