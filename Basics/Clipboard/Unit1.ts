import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TAlign } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebMemo, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebClipboard } from "@tmssoftware/webcore/WEBLib.Clipboard"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"
import { TWebImageControl } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebClipboard1: TWebClipboard = null;
   WebMemo1: TWebMemo = null;
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebImageControl1: TWebImageControl = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebClipboard1TextData(AData: string, AMimeType: string): void
   {
      if (AMimeType === "text/html")
      {
         this.HideControls();
         this.WebHTMLDiv1.Visible = true;
         this.WebHTMLDiv1.HTML.Text = AData;
      }
      else
      if (AMimeType === "text/plain")
      {
         this.HideControls();
         this.WebMemo1.Visible = true;
         this.WebMemo1.Text = AData;
      }
   }
   WebFormCreate(Sender: TObject): void
   {
      this.HideControls();
      this.WebMemo1.Align = TAlign.alClient;
      this.WebImageControl1.AutoSize = true;
      this.WebHTMLDiv1.Align = TAlign.alClient;
   }
   WebClipboard1ImageData(ADataURL: string): void
   {
      this.HideControls();
      this.WebImageControl1.Visible = true;
      this.WebImageControl1.URL = ADataURL;
   }
   /* Private declarations*/
   private HideControls(): void
   {
      this.WebMemo1.Visible = false;
      this.WebImageControl1.Visible = false;
      this.WebHTMLDiv1.Visible = false;
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;