import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebEdit, TWebButton, TWebMemo, TWebComboBox } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebEdit1: TWebEdit = null;
   WebButton1: TWebButton = null;
   WebMemo1: TWebMemo = null;
   WebComboBox1: TWebComboBox = null;
   WebButton1Click(Sender: TObject): void
   {
      this.WebComboBox1.Items.Add(this.WebEdit1.Text);
      this.WebComboBox1.ItemIndex = this.WebComboBox1.Items.Count - 1;
      this.WebMemo1.Lines.Add(this.WebEdit1.Text);
   }
   WebComboBox1Change(Sender: TObject): void
   {
      this.WebLabel1.Caption = this.WebComboBox1.Items.Get(this.WebComboBox1.ItemIndex);
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;