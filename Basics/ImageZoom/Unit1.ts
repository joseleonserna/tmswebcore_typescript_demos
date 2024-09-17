import { dfm } from "./Unit1.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { IntToStr } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebResponsiveGridPanel, TWebImageZoomControl, TControlCollectionItem } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebResponsiveGridPanel1: TWebResponsiveGridPanel = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebFormCreate(Sender: TObject): void
   {
      let iz: TWebImageZoomControl = null;
      let cc: TControlCollectionItem = null;
      let I: number = 0;
      this.WebResponsiveGridPanel1.BeginUpdate();
      this.WebResponsiveGridPanel1.ControlCollection.Clear();
      for (I = 1; I <= 12; I++)
      {
         iz = new TWebImageZoomControl().Create$1(this);
         iz.Parent = this.WebResponsiveGridPanel1;
         iz.URL = "img/" + IntToStr(I) + "_128.jpg";
         iz.URLZoom = "img/" + IntToStr(I) + "_1024.jpg";
         iz.Width = 128;
         iz.Height = 85;
         cc = this.WebResponsiveGridPanel1.ControlCollection.Add$1();
         cc.Control = iz;
         cc.Column = 0;
         cc.Row = 0;
      }
      this.WebResponsiveGridPanel1.EndUpdate();
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;