import { dfm } from "./uFrmMain.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebEdit, TWebListBox, TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TSubForm1 } from "./uSubForm1"
import { TSubForm2 } from "./uSubForm2"
import { TWebBitBtn } from "@tmssoftware/webcore/WEBLib.Buttons"

@unit("uFrmMain")
export class TFrmMain extends TWebForm
{
   txtSampleText: TWebEdit = null;
   lbTextsMain: TWebListBox = null;
   WebLabel1: TWebLabel = null;
   btCreateSubF1: TWebButton = null;
   HostPanel: TWebPanel = null;
   btRemoveSubForm: TWebButton = null;
   btTransferSet: TWebButton = null;
   btCreateSubF2: TWebButton = null;
   btTransferGet: TWebButton = null;
   WebButton2: TWebButton = null;
   WebBitBtn1: TWebBitBtn = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   btCreateSubF1Click(Sender: TObject): void
   {
      const AfterCreate = (AForm: TObject): void => 
      {
         if ((this.frm != null) && (this.frm instanceof TSubForm1))
         ((this.frm as TSubForm1)).lbTexts.Items.Assign(this.lbTextsMain.Items);
      }
      // destroy possible old form
      if ((this.frm != null))
      this.frm.Close();
      this.frm = new TSubForm1().CreateNew$4(this.HostPanel.ElementID, AfterCreate);
      this.btTransferGet.Enabled = true;
      this.btTransferSet.Enabled = true;
   }
   btRemoveSubFormClick(Sender: TObject): void
   {
      // destroy possible old form
      if ((this.frm != null))
      {
         this.frm.Close();
         this.frm = null;
      }
      this.btTransferGet.Enabled = false;
      this.btTransferSet.Enabled = false;
   }
   btTransferSetClick(Sender: TObject): void
   {
      if ((this.frm != null) && (this.frm instanceof TSubForm1))
      ((this.frm as TSubForm1)).lbTexts.Items.Assign(this.lbTextsMain.Items);
   }
   btCreateSubF2Click(Sender: TObject): void
   {
      // destroy possible old form
      if ((this.frm != null))
      this.frm.Close();
      this.frm = new TSubForm2().CreateNew$4(this.HostPanel.ElementID, null);
      this.btTransferGet.Enabled = false;
      this.btTransferSet.Enabled = false;
   }
   WebFormCreate(Sender: TObject): void
   {
      this.frm = null;
   }
   WebBitBtn1Click(Sender: TObject): void
   {
      this.lbTextsMain.Items.Add(this.txtSampleText.Text);
   }
   btTransferGetClick(Sender: TObject): void
   {
      if ((this.frm != null) && (this.frm instanceof TSubForm1))
      this.lbTextsMain.Items.Assign(((this.frm as TSubForm1)).lbTexts.Items);
   }
   WebButton2Click(Sender: TObject): void
   {
      this.lbTextsMain.Items.Clear();
   }
   frm: TWebForm = null;
}

export let FrmMain: TFrmMain = null;

globalThis.FrmMain = null;
globalThis.TFrmMain = dfm; 