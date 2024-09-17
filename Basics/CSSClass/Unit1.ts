import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { clYellow, clInfoBk } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebButton, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"
import { TWebCSSClass } from "@tmssoftware/webcore/WEBLib.CSS"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebCSSClass1: TWebCSSClass = null;
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebButton1: TWebButton = null;
   WebHTMLDiv2: TWebHTMLDiv = null;
   WebCSSClass2: TWebCSSClass = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebButton1Click(Sender: TObject): void
   {
      if (this.WebCSSClass1.BackgroundColor !== clYellow)
      this.WebCSSClass1.BackgroundColor = clYellow;
      else
      this.WebCSSClass1.BackgroundColor = clInfoBk;
      if (this.WebCSSClass2.BoxShadow.HOffset === 0)
      {
         this.WebCSSClass2.BoxShadow.HOffset = 8;
         this.WebCSSClass2.BoxShadow.VOffset = 8;
      }
      else
      {
         this.WebCSSClass2.BoxShadow.HOffset = 0;
         this.WebCSSClass2.BoxShadow.VOffset = 0;
      }
      this.WebCSSClass1.UpdateCSS();
      this.WebCSSClass2.UpdateCSS();
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;