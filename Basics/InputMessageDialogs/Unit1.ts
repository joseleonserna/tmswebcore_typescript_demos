import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm, TModalResult, mrOk, mrYes, mrNo, mrAbort, mrRetry, mrClose, mrCancel, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebListBox, TWebButton, TWebEdit } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebInputMessageDlg, TMsgDlgButtons, TMsgDlgType, TMsgDlgBtn, InputMessageDlg, InputMessageDlgAsync } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TInputType } from "@tmssoftware/webcore/WEBLib.Controls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebLabel4: TWebLabel = null;
   WebLabel1: TWebLabel = null;
   ResAnon: TWebLabel = null;
   DlgTypeList: TWebListBox = null;
   WebButton1: TWebButton = null;
   DlgMessageInput: TWebEdit = null;
   WebLabel6: TWebLabel = null;
   WebInputMessageDlg1: TWebInputMessageDlg = null;
   DlgInputList: TWebListBox = null;
   WebLabel3: TWebLabel = null;
   DlgValueInput: TWebEdit = null;
   WebLabel5: TWebLabel = null;
   WebButton2: TWebButton = null;
   WebLabel7: TWebLabel = null;
   ResAsync: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   ResComp: TWebLabel = null;
   WebButton3: TWebButton = null;
   WebButton1Click(Sender: TObject): void
   {
      const DialogProc = (AResult: number): void => 
      {
         this.ResAnon.Caption = this.ModalValue(AResult);
         this.DlgValueInput.Text = this.DlgValue;
      }
      this.SettingsToDialog();
      InputMessageDlg(this.DlgMessageInput.Text, this.DlgType, this.DlgBtns, {get: () => this.DlgValue, set: (value: any) => this.DlgValue = value}, this.DlgInput, DialogProc);
   }
   WebFormCreate(Sender: TObject): void
   {
      Application.ThemeColor = 0x8F814D;
   }
   async WebButton2Click(Sender: TObject): Promise<void>
   {
      let res: number = 0;
      this.SettingsToDialog();
      res = await InputMessageDlgAsync(this.DlgMessageInput.Text, this.DlgType, this.DlgBtns, {get: () => this.DlgValue, set: (value: any) => this.DlgValue = value}, this.DlgInput);
      this.DlgValueInput.Text = this.DlgValue;
      this.ResAsync.Caption = this.ModalValue(res);
   }
   DlgInputListClick(Sender: TObject): void
   {
      this.DlgValueInput.Text = "";
   }
   async WebButton3Click(Sender: TObject): Promise<void>
   {
      let res: number = 0;
      this.SettingsToDialog();
      this.WebInputMessageDlg1.DialogType = this.DlgType;
      this.WebInputMessageDlg1.InputValue = this.DlgValue;
      this.WebInputMessageDlg1.InputType = this.DlgInput;
      this.WebInputMessageDlg1.Message = this.DlgMessageInput.Text;
      this.WebInputMessageDlg1.Buttons = this.DlgBtns;
      res = await this.WebInputMessageDlg1.ShowAsync();
      this.DlgValueInput.Text = this.WebInputMessageDlg1.InputValue;
      this.ResComp.Caption = this.ModalValue(res);
   }
   DlgBtns: TMsgDlgButtons = new Set([]);
   DlgType: TMsgDlgType = TMsgDlgType.mtWarning;
   DlgInput: TInputType = TInputType.itText;
   DlgValue: string = '';
   SettingsToDialog(): void
   {
      switch(this.DlgTypeList.ItemIndex)
      {
         case 0:
            this.DlgType = TMsgDlgType.mtWarning;
            break;
         case 1:
            this.DlgType = TMsgDlgType.mtError;
            break;
         case 2:
            this.DlgType = TMsgDlgType.mtInformation;
            break;
         case 3:
            this.DlgType = TMsgDlgType.mtConfirmation;
            break;
         case 4:
            this.DlgType = TMsgDlgType.mtCustom;
            break;
      }
      switch(this.DlgTypeList.ItemIndex)
      {
         case 0:
            this.DlgBtns = new Set([]);
            break;
         case 1:
            this.DlgBtns = new Set([]);
            break;
         case 2:
            this.DlgBtns = new Set([]);
            break;
         case 3:
            this.DlgBtns = new Set([TMsgDlgBtn.mbYes, TMsgDlgBtn.mbNo, TMsgDlgBtn.mbCancel]);
            break;
         case 4:
            this.DlgBtns = new Set([TMsgDlgBtn.mbAbort, TMsgDlgBtn.mbRetry, TMsgDlgBtn.mbClose]);
            break;
      }
      switch(this.DlgInputList.ItemIndex)
      {
         case 0:
            this.DlgInput = TInputType.itText;
            break;
         case 1:
            this.DlgInput = TInputType.itNumber;
            break;
         case 2:
            this.DlgInput = TInputType.itFile;
            break;
         case 3:
            this.DlgInput = TInputType.itDate;
            break;
         case 4:
            this.DlgInput = TInputType.itTime;
            break;
         case 5:
            this.DlgInput = TInputType.itDateTime;
            break;
         case 6:
            this.DlgInput = TInputType.itWeek;
            break;
         case 7:
            this.DlgInput = TInputType.itMonth;
            break;
         case 8:
            this.DlgInput = TInputType.itPassword;
            break;
         case 9:
            this.DlgInput = TInputType.itSearch;
            break;
         case 10:
            this.DlgInput = TInputType.itEmail;
            break;
         case 12:
            this.DlgInput = TInputType.itURL;
            break;
      }
      this.DlgValue = this.DlgValueInput.Text;
   }
   ModalValue(AResult: number): string
   {
      let s: string = "";
      let Result: string = "";
      s = "";
      if (AResult === mrOk)
      s = "OK clicked";
      else
      if (AResult === mrYes)
      s = "Yes clicked";
      else
      if (AResult === mrNo)
      s = "No clicked";
      else
      if (AResult === mrAbort)
      s = "Abort clicked";
      else
      if (AResult === mrRetry)
      s = "Retry clicked";
      else
      if (AResult === mrClose)
      s = "Close clicked";
      else
      if (AResult === mrCancel)
      s = "Cancelled";
      Result = s;
      return Result;
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;