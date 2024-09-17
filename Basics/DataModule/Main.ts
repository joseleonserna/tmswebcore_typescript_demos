import { dfm } from "./Main.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebButton, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { dmMain } from "./MainModule"

@unit("Main")
export class TfrmMain extends TWebForm
{
   btAnswer: TWebButton = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   btAnswerClick(Sender: TObject): void
   {
      ShowMessage(dmMain.TheAnswer);
   }
}

export let frmMain: TfrmMain = null;

globalThis.frmMain = null;
globalThis.TfrmMain = dfm;