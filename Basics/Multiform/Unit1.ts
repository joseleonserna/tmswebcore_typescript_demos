import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm, TFormBorderStyle, TModalResult, clTMSWEB, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton, TWebEdit, TWebRadioGroup } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TForm2 } from "./Unit2"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebButton1: TWebButton = null;
   WebEdit1: TWebEdit = null;
   WebRadioGroup1: TWebRadioGroup = null;
   WebLabel2: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebButton1Click(Sender: TObject): void
   {
      let newform: TForm2 = null;
      newform = new TForm2().CreateNew$3((AForm: TObject) =>       {
         ((AForm as TForm2)).frm2Edit.Text = this.WebEdit1.Text;
      });
      newform.Caption = "Child form";
      switch(this.WebRadioGroup1.ItemIndex)
      {
         case 0:
            newform.Border = TFormBorderStyle.fbSingle;
            break;
         case 1:
            newform.Popup = true;
            break;
         case 2:
            newform.Popup = true;
            newform.Border = TFormBorderStyle.fbDialog;
            break;
         case 3:
            newform.Popup = true;
            newform.Border = TFormBorderStyle.fbDialogSizeable;
            break;
      }
      newform.ShowModal$1((AValue: number) =>       {
         ShowMessage("Form 2 closed with new value:" + newform.frm2Edit.Text);
         this.WebEdit1.Text = newform.frm2Edit.Text;
      });
   }
   WebFormCreate(Sender: TObject): void
   {
      Application.ThemeColor = clTMSWEB;
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;