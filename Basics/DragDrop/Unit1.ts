import { dfm } from "./Unit1.dfm";
import { TObject, Integer, Delete, unit } from "@tmssoftware/webcore/system"
import { IntToStr } from "@tmssoftware/webcore/System.SysUtils"
import { TShiftState } from "@tmssoftware/webcore/System.Classes"
import { clSilver } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TDragState, TMouseButton, TDragObject } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebEdit, TWebLabel, TWebButton, TWebCheckBox, TWebRadioButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPageControl, TWebTabSheet } from "@tmssoftware/webcore/WEBLib.ComCtrls"
import { TWebListControl, TListItem } from "@tmssoftware/webcore/WEBLib.Lists"
import { TWebStringGrid } from "@tmssoftware/webcore/WEBLib.Grids"
import { TPoint, Point } from "@tmssoftware/webcore/types"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebListControl1: TWebListControl = null;
   WebStringGrid1: TWebStringGrid = null;
   WebStringGrid2: TWebStringGrid = null;
   WebEdit1: TWebEdit = null;
   WebPageControl1: TWebPageControl = null;
   WebPageControl1Sheet1: TWebTabSheet = null;
   WebPageControl1Sheet2: TWebTabSheet = null;
   WebPageControl1Sheet3: TWebTabSheet = null;
   WebPageControl2: TWebPageControl = null;
   WebPageControl2Sheet1: TWebTabSheet = null;
   WebPageControl2Sheet2: TWebTabSheet = null;
   WebPageControl2Sheet3: TWebTabSheet = null;
   WebLabel1: TWebLabel = null;
   WebEdit2: TWebEdit = null;
   Left3: TWebButton = null;
   WebLabel2: TWebLabel = null;
   WebCheckBox1: TWebCheckBox = null;
   WebRadioButton1: TWebRadioButton = null;
   WebRadioButton2: TWebRadioButton = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebLabel5: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebLabel7: TWebLabel = null;
   WebPageControl1DragOver(Sender: TObject, Source: TObject, X: number, Y: number, State: TDragState, Accept: any): void
   {
      Accept.set((Source instanceof TWebPageControl) && (Source !== Sender));
   }
   WebPageControl1DragDrop(Sender: TObject, Source: TObject, X: number, Y: number): void
   {
      let newSheet: TWebTabSheet = null;
      let sheet: TWebTabSheet = null;
      let I: number = 0;
      if (Sender !== Source)
      {
         ((Sender as TWebPageControl)).BeginUpdate();
         newSheet = new TWebTabSheet().Create$1(((Sender as TWebPageControl)));
         if (this.FSheetID !== -1)
         {
            sheet = ((Source as TWebPageControl)).GetPage(this.FSheetID);
            newSheet.Parent = ((Sender as TWebPageControl));
            newSheet.Caption = sheet.Caption;
            newSheet.Color = clSilver;
            for (I = sheet.ControlCount - 1; I >= 0; I--)
            sheet.GetControls(I).SetParentComponent(newSheet);
            sheet.Free();
         }
         ((Sender as TWebPageControl)).EndUpdate();
      }
   }
   WebStringGrid1DragOver(Sender: TObject, Source: TObject, X: number, Y: number, State: TDragState, Accept: any): void
   {
      if ((Source instanceof TWebStringGrid) || (Source instanceof TWebEdit) || (Source instanceof TWebListControl))
      Accept.set(this.CanAcceptGrid(Sender, X, Y));
   }
   WebStringGrid1DragDrop(Sender: TObject, Source: TObject, X: number, Y: number): void
   {
      let r: number = 0;
      let c: number = 0;
      let s: string = "";
      let p: TPoint = new TPoint();
      p = ((Sender as TWebStringGrid)).ScreenToClient(Point(X, Y));
      ((Sender as TWebStringGrid)).MouseToCell(p.x, p.y, {get: () => c, set: (value: any) => c = value}, {get: () => r, set: (value: any) => r = value});
      if (Source instanceof TWebStringGrid)
      this.HandleGridDrop(Sender, Source, X, Y, c, r);
      else
      if ((Source instanceof TWebEdit))
      {
         ((Sender as TWebStringGrid)).SetCells(c, r, ((Source as TWebEdit)).Text.substring(((Source as TWebEdit)).SelStart + 1 - 1, ((Source as TWebEdit)).SelStart + 1 - 1 + ((Source as TWebEdit)).SelLength));
         if (!(((Sender as TWebStringGrid)).ElementEvent as DragEvent).ctrlKey)
         {
            s = ((Source as TWebEdit)).Text;
            Delete({get: () => s, set: (value: any) => s = value}, ((Source as TWebEdit)).SelStart + 1, ((Source as TWebEdit)).SelLength);
            ((Source as TWebEdit)).Text = s;
         }
      }
      else
      if ((Source instanceof TWebListControl))
      {
         ((Sender as TWebStringGrid)).SetCells(c, r, this.FListItem);
         this.FListItem = "";
      }
   }
   WebStringGrid2MouseDown(Sender: TObject, Button: TMouseButton, Shift: TShiftState, X: number, Y: number): void
   {
      let r: number = 0;
      let c: number = 0;
      ((Sender as TWebStringGrid)).MouseToCell(X, Y, {get: () => c, set: (value: any) => c = value}, {get: () => r, set: (value: any) => r = value});
      if ((r !== 0) && (c !== 0))
      {
         ((Sender as TWebStringGrid)).SelectCell(c, r);
         ((Sender as TWebStringGrid)).BeginDrag();
      }
   }
   WebStringGrid2DragOver(Sender: TObject, Source: TObject, X: number, Y: number, State: TDragState, Accept: any): void
   {
      if ((Source instanceof TWebStringGrid))
      Accept.set(this.CanAcceptGrid(Sender, X, Y));
   }
   WebStringGrid2DragDrop(Sender: TObject, Source: TObject, X: number, Y: number): void
   {
      let c: number = 0;
      let r: number = 0;
      let p: TPoint = new TPoint();
      if (Source instanceof TWebStringGrid)
      {
         p = ((Sender as TWebStringGrid)).ScreenToClient(Point(X, Y));
         ((Sender as TWebStringGrid)).MouseToCell(p.x, p.y, {get: () => c, set: (value: any) => c = value}, {get: () => r, set: (value: any) => r = value});
         this.HandleGridDrop(Sender, Source, X, Y, c, r);
      }
   }
   WebEdit1DragOver(Sender: TObject, Source: TObject, X: number, Y: number, State: TDragState, Accept: any): void
   {
      Accept.set((Source instanceof TWebStringGrid));
   }
   WebEdit1DragDrop(Sender: TObject, Source: TObject, X: number, Y: number): void
   {
      ((Sender as TWebEdit)).Text = ((Source as TWebStringGrid)).GetCells(((Source as TWebStringGrid)).Col, ((Source as TWebStringGrid)).Row);
      if (!(((Sender as TWebEdit)).ElementEvent as DragEvent).ctrlKey)
      ((Source as TWebStringGrid)).SetCells(((Source as TWebStringGrid)).Col, ((Source as TWebStringGrid)).Row, "");
   }
   WebListControl1DragOver(Sender: TObject, Source: TObject, X: number, Y: number, State: TDragState, Accept: any): void
   {
      Accept.set((Source instanceof TWebStringGrid) || (Source instanceof TWebEdit));
   }
   WebListControl1DragDrop(Sender: TObject, Source: TObject, X: number, Y: number): void
   {
      let itm: TListItem = null;
      let txt: string = "";
      txt = "";
      if ((Source instanceof TWebStringGrid))
      txt = ((Source as TWebStringGrid)).GetCells(((Source as TWebStringGrid)).Col, ((Source as TWebStringGrid)).Row);
      if ((Source instanceof TWebEdit))
      txt = ((Source as TWebEdit)).SelText;
      if (txt !== "")
      {
         itm = ((Sender as TWebListControl)).Items.Add$1();
         itm.Text = txt;
      }
   }
   WebListControl1StartDrag(Sender: TObject, DragObject: any): void
   {
      this.FListItem = (((Sender as TWebListControl)).ElementEvent.target as HTMLElement).innerHTML;
   }
   WebPageControl2StartDrag(Sender: TObject, DragObject: any): void
   {
      this.FSheetID = ((Sender as TWebPageControl)).PageIndexFromElement(((Sender as TWebPageControl)).ElementEvent.target as HTMLElement);
   }
   WebFormCreate(Sender: TObject): void
   {
      let I: number = 0;
      let J: number = 0;
      for (I = 1; I <= this.WebStringGrid1.ColCount - 1; I++)
      for (J = 1; J <= this.WebStringGrid1.RowCount - 1; J++)
      this.WebStringGrid1.SetCells(I, J, "Cell " + IntToStr(I) + "-" + IntToStr(J));
      for (I = 1; I <= this.WebStringGrid2.ColCount - 1; I++)
      for (J = 1; J <= this.WebStringGrid2.RowCount - 1; J++)
      this.WebStringGrid2.SetCells(I, J, "Cell " + IntToStr(I) + "-" + IntToStr(J));
   }
   private FListItem: string = '';
   private FSheetID: number = 0;
   private CanAcceptGrid(Sender: TObject, X: number, Y: number): boolean
   {
      let c: number = 0;
      let r: number = 0;
      let p: TPoint = new TPoint();
      let Result: boolean = false;
      p = ((Sender as TWebStringGrid)).ScreenToClient(Point(X, Y));
      ((Sender as TWebStringGrid)).MouseToCell(p.x, p.y, {get: () => c, set: (value: any) => c = value}, {get: () => r, set: (value: any) => r = value});
      Result = (r !== 0) && (c !== 0);
      return Result;
   }
   private HandleGridDrop(Sender: TObject, Source: TObject, X: number, Y: number, Col: number, Row: number): void
   {
      ((Sender as TWebStringGrid)).SetCells(Col, Row, ((Source as TWebStringGrid)).GetCells(((Source as TWebStringGrid)).Col, ((Source as TWebStringGrid)).Row));
      if (!(((Sender as TWebStringGrid)).ElementEvent as DragEvent).ctrlKey)
      ((Source as TWebStringGrid)).SetCells(((Source as TWebStringGrid)).Col, ((Source as TWebStringGrid)).Row, "");
      ((Sender as TWebStringGrid)).SelectCell(Col, Row);
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;