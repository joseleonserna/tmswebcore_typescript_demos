import { dfm } from "./Ufilepicker.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { TAlign, TElementFont } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebFilePicker } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebPageControl, TWebTabSheet } from "@tmssoftware/webcore/WEBLib.ComCtrls"
import { TWebLabel, TWebMemo } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Ufilepicker")
export class TForm2 extends TWebForm
{
   WebPageControl1: TWebPageControl = null;
   WebFilePicker1: TWebFilePicker = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebFilePicker1Change(Sender: TObject): void
   {
      let i: number = 0;
      let sheet: TWebTabSheet = null;
      let memo: TWebMemo = null;
      this.WebPageControl1.BeginUpdate();
      for (i = this.WebPageControl1.PageCount() - 1; i >= 0; i--)
      {
         sheet = this.WebPageControl1.GetPage(i);
         sheet.Free();
      }
      for (i = 0; i <= this.WebFilePicker1.Files.Count - 1; i++)
      {
         sheet = new TWebTabSheet().Create$1(this.WebPageControl1);
         sheet.Caption = this.WebFilePicker1.Files.GetItem$1(i).Name;
         sheet.TabVisible = true;
         sheet.Parent = this.WebPageControl1;
         memo = new TWebMemo().Create$1(sheet);
         memo.Parent = sheet;
         memo.Align = TAlign.alClient;
         memo.ElementFont = TElementFont.efCSS;
         this.WebFilePicker1.Files.GetItem$1(i).Object = memo;
         this.WebFilePicker1.Files.GetItem$1(i).GetFileAsText();
      }
      this.WebPageControl1.EndUpdate();
      this.WebPageControl1.TabIndex = 0;
   }
   WebFilePicker1GetFileAsText(Sender: TObject, AFileIndex: number, AText: string): void
   {
      let memo: TWebMemo = null;
      memo = (this.WebFilePicker1.Files.GetItem$1(AFileIndex).Object as TWebMemo);
      memo.Lines.Text = AText;
   }
}

export let Form2: TForm2 = null;

globalThis.Form2 = null;
globalThis.TForm2 = dfm;