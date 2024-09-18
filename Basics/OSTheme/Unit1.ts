import { dfm } from "./Unit1.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { TIntegerHelper } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm, TApplicationColorScheme, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebGroupBox } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebListControl, TListItem } from "@tmssoftware/webcore/WEBLib.Lists"
import { TWebLabel, TWebMemo, TWebButton, TWebListBox, TWebEdit, TWebComboBox } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPageControl, TWebTabSheet, TWebTreeView } from "@tmssoftware/webcore/WEBLib.ComCtrls"
import { TTreeNode } from "@tmssoftware/webcore/WEBLib.TreeNodes"
import { TWebStringGrid } from "@tmssoftware/webcore/WEBLib.Grids"
import { TWebToggleButton } from "@tmssoftware/webcore/WEBLib.Buttons"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebLabel4: TWebLabel = null;
   WebLabel5: TWebLabel = null;
   WebPageControl1: TWebPageControl = null;
   WebPageControl1Sheet1: TWebTabSheet = null;
   WebPageControl1Sheet2: TWebTabSheet = null;
   WebPageControl1Sheet3: TWebTabSheet = null;
   WebGroupBox1: TWebGroupBox = null;
   WebMemo1: TWebMemo = null;
   WebButton1: TWebButton = null;
   WebListBox1: TWebListBox = null;
   WebEdit1: TWebEdit = null;
   WebComboBox1: TWebComboBox = null;
   WebLabel6: TWebLabel = null;
   WebListControl1: TWebListControl = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebListControl3: TWebListControl = null;
   WebListControl2: TWebListControl = null;
   WebPageControl1Sheet4: TWebTabSheet = null;
   WebStringGrid1: TWebStringGrid = null;
   WebTreeView1: TWebTreeView = null;
   WebToggleButton1: TWebToggleButton = null;
   WebLabel3: TWebLabel = null;
   WebListControl3ItemClick(Sender: TObject, AListItem: TListItem): void
   {
      ShowMessage("Clicked: " + AListItem.Text);
      this.WebListControl3.ItemIndex = AListItem.Index;
   }
   WebListControl2ItemClick(Sender: TObject, AListItem: TListItem): void
   {
      ShowMessage("Clicked: " + AListItem.Text);
      this.WebListControl2.ItemIndex = AListItem.Index;
   }
   WebListControl1ItemClick(Sender: TObject, AListItem: TListItem): void
   {
      ShowMessage("Navigate to: " + AListItem.Text);
   }
   WebFormCreate(Sender: TObject): void
   {
      let i: number = 0;
      let j: number = 0;
      let tn: TTreeNode = null;
      let sn: TTreeNode = null;
      let wn: TTreeNode = null;
      this.currentscheme = Application.ColorScheme;
      if (this.currentscheme === TApplicationColorScheme.csDark)
      Application.InsertCSS("themecss", "darktheme.css");
      this.WebStringGrid1.RowCount = 30;
      for (j = 1; j <= this.WebStringGrid1.ColCount - 1; j++)
      {
         this.WebStringGrid1.SetCells(j, 0, "Header " + new TIntegerHelper(j).ToString());
         for (i = 1; i <= this.WebStringGrid1.RowCount - 1; i++)
         {
            this.WebStringGrid1.SetCells(j, i, "cell " + new TIntegerHelper(j).ToString() + ":" + new TIntegerHelper(i).ToString());
         }
      }
      this.WebTreeView1.BeginUpdate();
      tn = this.WebTreeView1.Items.Add(null, "<font color=\"#E5413C\" style=\"font-size:10pt\">&#x25FC;</font> VCL");
      sn = this.WebTreeView1.Items.AddChild(tn, "TMS VCL Subscription");
      wn = this.WebTreeView1.Items.AddChild(sn, "TMS VCL UI Pack");
      this.WebTreeView1.Items.AddChild(wn, "TAdvStringGrid");
      this.WebTreeView1.Items.AddChild(wn, "TAdvTreeView");
      this.WebTreeView1.Items.AddChild(wn, "TAdvMemo");
      this.WebTreeView1.Items.AddChild(wn, "TAdvTaskDialog");
      this.WebTreeView1.Items.AddChild(sn, "TMS VCL Chart");
      this.WebTreeView1.Items.AddChild(sn, "TMS VCL WebGMaps");
      this.WebTreeView1.Items.AddChild(sn, "TMS VCL Cloud Pack");
      this.WebTreeView1.Items.AddChild(sn, "TMS Instrumentation Workshop");
      this.WebTreeView1.Items.AddChild(sn, "TMS Async");
      this.WebTreeView1.Items.AddChild(sn, "TMS Passkit");
      this.WebTreeView1.Items.AddChild(sn, "TMS GUIMotions");
      tn = this.WebTreeView1.Items.Add(null, "<font color=\"#F39527\" style=\"font-size:10pt\">&#x25FC;</font> FMX");
      sn = this.WebTreeView1.Items.AddChild(tn, "TMS FMX Component Studio");
      this.WebTreeView1.Items.AddChild(sn, "TMS FMX UI Pack");
      this.WebTreeView1.Items.AddChild(sn, "TMS FMX WebGMaps");
      this.WebTreeView1.Items.AddChild(sn, "TMS FMX Cloud Pack");
      tn = this.WebTreeView1.Items.Add(null, "<font color=\"#BDC6CB\" style=\"font-size:10pt\">&#x25FC;</font> FNC");
      sn = this.WebTreeView1.Items.AddChild(tn, "TMS FNC Component Studio");
      this.WebTreeView1.Items.AddChild(sn, "TMS FNC UI Pack");
      this.WebTreeView1.Items.AddChild(sn, "TMS FNC WebGMaps");
      this.WebTreeView1.Items.AddChild(sn, "TMS FNC Cloud Pack");
      tn = this.WebTreeView1.Items.Add(null, "<font color=\"#6DBBFC\" style=\"font-size:10pt\">&#x25FC;</font> BIZ");
      sn = this.WebTreeView1.Items.AddChild(tn, "TMS Business Subscription");
      this.WebTreeView1.Items.AddChild(sn, "TMS XData");
      this.WebTreeView1.Items.AddChild(sn, "TMS Aurelius");
      this.WebTreeView1.Items.AddChild(sn, "TMS RemoteDB");
      this.WebTreeView1.Items.AddChild(sn, "TMS Logging");
      this.WebTreeView1.Items.AddChild(sn, "TMS Data Modeler");
      this.WebTreeView1.EndUpdate();
   }
   WebButton1Click(Sender: TObject): void
   {
      this.WebListBox1.Items.Add(this.WebEdit1.Text);
      this.WebComboBox1.Items.Add(this.WebEdit1.Text);
      this.WebMemo1.Lines.Add(this.WebEdit1.Text);
   }
   WebButton2Click(Sender: TObject): void
   {
      Application.RemoveCSS("themecss");
      this.SetColorScheme(TApplicationColorScheme.csLight);
   }
   WebToggleButton1Click(Sender: TObject): void
   {
      if (this.currentscheme === TApplicationColorScheme.csDark)
      {
         this.currentscheme = TApplicationColorScheme.csLight;
         Application.RemoveCSS("themecss");
         this.SetColorScheme(TApplicationColorScheme.csLight);
      }
      else
      {
         this.currentscheme = TApplicationColorScheme.csDark;
         Application.InsertCSS("themecss", "darktheme.css");
         this.SetColorScheme(TApplicationColorScheme.csDark);
      }
   }
   currentscheme: TApplicationColorScheme = TApplicationColorScheme.csNoScheme;
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;