import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm, TModalResult, mrOk, mrYes, mrNo, mrAbort, mrRetry, mrClose, mrCancel, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebListBox, TWebButton, TWebEdit } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TMsgDlgType, MessageDlg, TMsgDlgBtn } from "@tmssoftware/webcore/WEBLib.Dialogs"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebLabel4: TWebLabel = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebListBox2: TWebListBox = null;
   WebButton1: TWebButton = null;
   WebEdit1: TWebEdit = null;
   WebLabel6: TWebLabel = null;
   WebButton1Click(Sender: TObject): void
   {
      const DialogProc = (AValue: number): void => 
      {
         let s: string = "";
         if (AValue === mrOk)
         s = "OK clicked";
         else
         if (AValue === mrYes)
         s = "Yes clicked";
         else
         if (AValue === mrNo)
         s = "No clicked";
         else
         if (AValue === mrAbort)
         s = "Abort clicked";
         else
         if (AValue === mrRetry)
         s = "Retry clicked";
         else
         if (AValue === mrClose)
         s = "Close clicked";
         else
         if (AValue === mrCancel)
         s = "Cancelled";
         this.WebLabel2.Caption = s;
      }
      switch(this.WebListBox2.ItemIndex)
      {
         case 0:
            MessageDlg(this.WebEdit1.Text, TMsgDlgType.mtWarning, new Set([]), DialogProc);
            break;
         case 1:
            MessageDlg(this.WebEdit1.Text, TMsgDlgType.mtError, new Set([]), DialogProc);
            break;
         case 2:
            MessageDlg(this.WebEdit1.Text, TMsgDlgType.mtInformation, new Set([]), DialogProc);
            break;
         case 3:
            MessageDlg(this.WebEdit1.Text, TMsgDlgType.mtConfirmation, new Set([TMsgDlgBtn.mbYes, TMsgDlgBtn.mbNo, TMsgDlgBtn.mbCancel]), DialogProc);
            break;
         case 4:
            MessageDlg(this.WebEdit1.Text, TMsgDlgType.mtCustom, new Set([TMsgDlgBtn.mbAbort, TMsgDlgBtn.mbRetry, TMsgDlgBtn.mbClose]), DialogProc);
            break;
      }
   }
   WebFormCreate(Sender: TObject): void
   {
      Application.ThemeColor = 0x8F814D;
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;