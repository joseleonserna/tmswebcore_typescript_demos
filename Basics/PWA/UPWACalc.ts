import { dfm } from "./UPWACalc.dfm";
import { TObject, Delete, unit } from "@tmssoftware/webcore/system"
import { Format, StrToFloat } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel, TWebGridPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

export enum TWebCalculatorOp {
   opAdd,
   opSubtract,
   opMultiply,
   opDivide,
   opNone,
}

@unit("UPWACalc")
export class TForm1 extends TWebForm
{
   WebPanel1: TWebPanel = null;
   ResLabel: TWebLabel = null;
   WebPanel2: TWebPanel = null;
   WebGridPanel1: TWebGridPanel = null;
   WebButton1: TWebButton = null;
   WebButton2: TWebButton = null;
   WebButton3: TWebButton = null;
   WebButton4: TWebButton = null;
   WebButton5: TWebButton = null;
   WebButton6: TWebButton = null;
   WebButton7: TWebButton = null;
   WebButton8: TWebButton = null;
   WebButton9: TWebButton = null;
   WebButton10: TWebButton = null;
   WebButton11: TWebButton = null;
   WebButton12: TWebButton = null;
   WebButton13: TWebButton = null;
   WebButton14: TWebButton = null;
   WebButton15: TWebButton = null;
   WebButton16: TWebButton = null;
   WebButton17: TWebButton = null;
   WebButton18: TWebButton = null;
   WebButton19: TWebButton = null;
   WebButton20: TWebButton = null;
   WebButton5Click(Sender: TObject): void
   {
      if ((((Sender as TWebButton)).Caption === ".") && !this.FHasDecimalPoint)
      {
         this.FText = this.FText + ((Sender as TWebButton)).Caption;
         this.FHasDecimalPoint = true;
         if (this.FText === ".")
         this.FText = "0.";
      }
      else
      if (((Sender as TWebButton)).Caption !== ".")
      {
         this.FText = this.FText + ((Sender as TWebButton)).Caption;
      }
      this.ResLabel.Caption = this.FText;
      this.FCurrNum = StrToFloat(this.ResLabel.Caption);
   }
   WebButton1Click(Sender: TObject): void
   {
      this.InitCalc();
   }
   WebButton2Click(Sender: TObject): void
   {
      if (this.FText !== "")
      {
         Delete({get: () => this.FText, set: (value: any) => this.FText = value}, this.FText.length, 1);
         if ((this.FText === ".") || (this.FText === ""))
         this.FText = "0.";
         this.ResLabel.Caption = this.FText;
      }
      else
      this.ResLabel.Caption = "0.0";
   }
   WebButton3Click(Sender: TObject): void
   {
      this.DoPreCalc();
      this.FOp = TWebCalculatorOp.opDivide;
   }
   WebButton4Click(Sender: TObject): void
   {
      this.DoPreCalc();
      this.FOp = TWebCalculatorOp.opMultiply;
   }
   WebButton8Click(Sender: TObject): void
   {
      this.DoPreCalc();
      this.FOp = TWebCalculatorOp.opSubtract;
   }
   WebButton12Click(Sender: TObject): void
   {
      this.DoPreCalc();
      this.FOp = TWebCalculatorOp.opAdd;
   }
   WebButton16Click(Sender: TObject): void
   {
      let f: number = 0;
      f = StrToFloat(this.ResLabel.Caption);
      f = -f;
      this.ResLabel.Caption = Format("%g", [f]);
   }
   WebButton19Click(Sender: TObject): void
   {
      if ((((Sender as TWebButton)).Caption === ".") && !this.FHasDecimalPoint)
      {
         this.FText = this.FText + ((Sender as TWebButton)).Caption;
         this.FHasDecimalPoint = true;
         if (this.FText === ".")
         this.FText = "0.";
      }
      else
      if (((Sender as TWebButton)).Caption !== ".")
      {
         this.FText = this.FText + ((Sender as TWebButton)).Caption;
      }
      this.ResLabel.Caption = this.FText;
      this.FCurrNum = StrToFloat(this.FText);
   }
   WebButton20Click(Sender: TObject): void
   {
      switch(this.FOp)
      {
         case TWebCalculatorOp.opAdd:
            this.ResLabel.Caption = Format("%g", [this.FPrevNum + this.FCurrNum]);
            break;
         case TWebCalculatorOp.opSubtract:
            this.ResLabel.Caption = Format("%g", [this.FPrevNum - this.FCurrNum]);
            break;
         case TWebCalculatorOp.opMultiply:
            this.ResLabel.Caption = Format("%g", [this.FPrevNum * this.FCurrNum]);
            break;
         case TWebCalculatorOp.opDivide:
            if (this.FCurrNum !== 0)
            this.ResLabel.Caption = Format("%g", [this.FPrevNum / this.FCurrNum]);
            break;
      }
      this.FText = "";
      this.FOp = TWebCalculatorOp.opNone;
   }
   WebButton17Click(Sender: TObject): void
   {
      this.FCurrNum = this.FPrevNum * this.FCurrNum / 100;
      this.ResLabel.Caption = Format("%g", [this.FCurrNum]);
      this.FText = "";
   }
   FPrevNum: number = 0;
   FCurrNum: number = 0;
   FHasDecimalPoint: boolean = false;
   FText: string = '';
   FOp: TWebCalculatorOp = TWebCalculatorOp.opAdd;
   DoPreCalc(): void
   {
      if (this.FOp !== TWebCalculatorOp.opNone)
      {
         switch(this.FOp)
         {
            case TWebCalculatorOp.opAdd:
               this.FPrevNum = this.FPrevNum + this.FCurrNum;
               break;
            case TWebCalculatorOp.opSubtract:
               this.FPrevNum = this.FPrevNum - this.FCurrNum;
               break;
            case TWebCalculatorOp.opMultiply:
               this.FPrevNum = this.FPrevNum * this.FCurrNum;
               break;
            case TWebCalculatorOp.opDivide:
               if (this.FCurrNum !== 0)
               this.ResLabel.Caption = Format("%g", [this.FPrevNum / this.FCurrNum]);
               break;
         }
         this.ResLabel.Caption = Format("%g", [this.FPrevNum]);
      }
      else
      this.FPrevNum = StrToFloat(this.ResLabel.Caption);
      this.FText = "";
      this.FCurrNum = 0;
      this.FHasDecimalPoint = false;
   }
   InitCalc(): void
   {
      this.FPrevNum = 0;
      this.FCurrNum = 0;
      this.FText = "";
      this.FHasDecimalPoint = false;
      this.FOp = TWebCalculatorOp.opNone;
      this.ResLabel.Caption = "0.0";
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;