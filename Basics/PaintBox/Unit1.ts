import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { clRed, clYellow, TBrushStyle } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPaintBox } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebPaintBox1: TWebPaintBox = null;
   WebPaintBox2: TWebPaintBox = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebPaintBox1Paint(Sender: TObject): void
   {
      this.PaintSign(this.WebPaintBox1, "Native clients only", true);
   }
   WebPaintBox2Paint(Sender: TObject): void
   {
      this.PaintSign(this.WebPaintBox2, "Web + Native clients!", false);
   }
   PaintSign(Control: TWebPaintBox, AText: string, Cross: boolean): void
   {
      Control.Canvas.Pen.Width = 3;
      Control.Canvas.Pen.Color = clRed;
      Control.Canvas.Brush.Color = clYellow;
      Control.Canvas.Brush.Style = TBrushStyle.bsSolid;
      Control.Canvas.Rectangle$1(10, 10, 200, 100);
      if (Cross)
      {
         Control.Canvas.MoveTo(10, 100);
         Control.Canvas.LineTo(200, 10);
         Control.Canvas.Font.Size = 14;
      }
      Control.Canvas.Font.Name = "Arial";
      Control.Canvas.Font.Size = 14;
      Control.Canvas.TextOut(20, 40, AText);
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;