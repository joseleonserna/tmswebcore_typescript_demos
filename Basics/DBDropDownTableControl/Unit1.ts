import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebDBTableControl, TWebDBEditDropDownTableControl } from "@tmssoftware/webcore/WEBLib.DBCtrls"
import { TWebDataSource } from "@tmssoftware/webcore/WEBLib.DB"
import { TWebClientDataSet, TWebClientConnection } from "@tmssoftware/webcore/WEBLib.CDS"
import { TWebCheckBox, TWebLabel, TWebRadioButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TTablePager } from "@tmssoftware/webcore/WEBLib.Grids"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebClientDataSet1: TWebClientDataSet = null;
   WebClientConnection1: TWebClientConnection = null;
   WebDataSource1: TWebDataSource = null;
   WebDBTableControl1: TWebDBTableControl = null;
   WebCheckBox1: TWebCheckBox = null;
   WebLabel2: TWebLabel = null;
   WebRadioButton1: TWebRadioButton = null;
   WebRadioButton2: TWebRadioButton = null;
   WebRadioButton3: TWebRadioButton = null;
   WebRadioButton4: TWebRadioButton = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebLabel5: TWebLabel = null;
   WebDBEditDropDownTableControl2: TWebDBEditDropDownTableControl = null;
   WebRadioButton1Click(Sender: TObject): void
   {
      switch(((Sender as TWebRadioButton)).Tag)
      {
         case 0:
            this.WebDBTableControl1.Header.Pager = TTablePager.tpButton;
            break;
         case 1:
            this.WebDBTableControl1.Header.Pager = TTablePager.tpList;
            break;
         case 2:
            this.WebDBTableControl1.Header.Pager = TTablePager.tpLink;
            break;
         case 3:
            this.WebDBTableControl1.Header.Pager = TTablePager.tpDropDown;
            break;
      }
   }
   WebCheckBox1Click(Sender: TObject): void
   {
      this.WebDBTableControl1.Paging.Enabled = this.WebCheckBox1.Checked;
   }
   WebFormCreate(Sender: TObject): void
   {
      this.WebDBEditDropDownTableControl2.Table$1.Columns.Assign(this.WebDBTableControl1.Columns);
      console.log(this.WebDBTableControl1.Columns.GetItem$1(0).Width);
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;