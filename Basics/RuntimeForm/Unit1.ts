import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { clInfoBk } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TSizeStyle } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebForm, TPopupClose } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebButton, TWebEdit } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebButton1: TWebButton = null;
   WebEdit1: TWebEdit = null;
   WebButton1Click(Sender: TObject): void
   {
      this.frm = new TWebForm().Create$1(this);
      this.frm.Popup = true;
      this.frm.PopupClose = TPopupClose.pcNever;
      this.frm.Width = 400;
      this.frm.Height = 300;
      this.frm.ShowModal();
      this.frm.Color = clInfoBk;
      this.btn = new TWebButton().Create$1(this);
      this.btn.Caption = "Close form";
      this.btn.WidthStyle = TSizeStyle.ssAuto;
      this.btn.Left = 10;
      this.btn.Top = 60;
      this.btn.Parent = this.frm;
      this.btn.OnClick = this.BtnClick;
      this.edt = new TWebEdit().Create$1(this);
      this.edt.Left = 10;
      this.edt.Top = 10;
      this.edt.Text = this.WebEdit1.Text;
      this.edt.TextHint = "Name";
      this.edt.Parent = this.frm;
   }
   frm: TWebForm = null;
   btn: TWebButton = null;
   edt: TWebEdit = null;
   BtnClick(Sender: TObject): void
   {
      this.WebEdit1.Text = this.edt.Text;
      this.frm.Close();
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;