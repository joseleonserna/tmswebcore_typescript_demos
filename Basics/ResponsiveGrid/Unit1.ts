import { dfm } from "./Unit1.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { TStringReplaceFlag, StringReplace } from "@tmssoftware/webcore/System.SysUtils"
import { clSilver, clGray, clAqua, clBlue, clWhite } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TWebForm, TModalResult, mrYes } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebMessageDlg, TMsgDlgType, TMsgDlgBtn } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebResponsiveGrid } from "@tmssoftware/webcore/WEBLib.Grids"
import { TWebButton, TWebCheckBox, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TSizeStyle } from "@tmssoftware/webcore/WEBLib.Controls"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebResponsiveGrid1: TWebResponsiveGrid = null;
   btnOpen: TWebButton = null;
   btnClear: TWebButton = null;
   WebCheckBox1: TWebCheckBox = null;
   WebMessageDlg1: TWebMessageDlg = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebFormCreate(Sender: TObject): void
   {
      this.WebResponsiveGrid1.Options.ItemBorderColor = clSilver;
      this.WebResponsiveGrid1.Options.ItemHoverColor = 0xE1FFFF;
      this.WebResponsiveGrid1.Options.ItemHoverBorderColor = clGray;
      this.WebResponsiveGrid1.Options.ItemSelectedBorderColor = clAqua;
      this.WebResponsiveGrid1.Options.ItemSelectedColor = clBlue;
      this.WebResponsiveGrid1.Options.ItemSelectedTextColor = clWhite;
   }
   btnOpenClick(Sender: TObject): void
   {
      this.WebResponsiveGrid1.Options.ItemTemplate = "<b>(%Brand%) (%Model%)</b><br><i>(%Country%)</i><br><img src=\"https://download.tmssoftware.com/tmsweb/demos/tmsweb_responsivegrid/img/(%Picture%)\"><br>Year:<b>(%Year%)</b><br>Price:<b>(%Price%)€</b>";
      this.WebResponsiveGrid1.LoadFromJSON("https://download.tmssoftware.com/tmsweb/demos/TMSWEB_ResponsiveGrid/cars.json");
   }
   btnClearClick(Sender: TObject): void
   {
      this.WebResponsiveGrid1.Items.Clear();
   }
   WebResponsiveGrid1ItemGetFieldValue(Sender: TObject, Index: number, AFieldName: string, AValue: any): void
   {
      if (AFieldName === "Picture")
      {
         AValue.set(StringReplace(AValue.get(), ".jpg", "_96.jpg", new Set([TStringReplaceFlag.rfReplaceAll])));
      }
   }
   WebCheckBox1Click(Sender: TObject): void
   {
      if (this.WebCheckBox1.Checked)
      this.WebResponsiveGrid1.HeightStyle = TSizeStyle.ssAbsolute;
      else
      this.WebResponsiveGrid1.HeightStyle = TSizeStyle.ssAuto;
   }
   WebResponsiveGrid1ItemClick(Sender: TObject, Index: number): void
   {
      const Afterdialog = (Value: number): void => 
      {
         if (Value === mrYes)
         this.WebResponsiveGrid1.Items.Delete(Index);
      }
      this.WebMessageDlg1.ShowDialog$1("Do you want to remove this car?", TMsgDlgType.mtConfirmation, new Set([TMsgDlgBtn.mbYes, TMsgDlgBtn.mbNo]), Afterdialog);
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;