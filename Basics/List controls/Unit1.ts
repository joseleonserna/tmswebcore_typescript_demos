import { dfm } from "./Unit1.dfm";
import { TObject, Integer, Random, unit } from "@tmssoftware/webcore/system"
import { IntToStr } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebBadge } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebListControl, TListItem, TListStyle } from "@tmssoftware/webcore/WEBLib.Lists"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebListControl1: TWebListControl = null;
   WebLabel1: TWebLabel = null;
   WebListControl2: TWebListControl = null;
   WebLabel2: TWebLabel = null;
   WebListControl3: TWebListControl = null;
   WebLabel3: TWebLabel = null;
   WebListControl4: TWebListControl = null;
   WebLabel4: TWebLabel = null;
   WebLabel5: TWebLabel = null;
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
      let li: TListItem = null;
      let badge: TWebBadge = null;
      let i: number = 0;
      let j: number = 0;
      this.WebListControl4.Items.Clear();
      this.WebListControl4.Style = TListStyle.lsListGroup;
      this.WebListControl4.DefaultItemLinkClassName = "";
      this.WebListControl4.DefaultItemClassName = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
      li = this.WebListControl4.Items.Add$1();
      li.Text = "Mercedes";
      li.Active = true;
      li.AutoCollaps = true;
      li.Items.Add$1().Text = "S class";
      li.Items.Add$1().Text = "SL class";
      li.Items.Add$1().Text = "E class";
      li.Items.Add$1().Text = "AMG GT class";
      li = this.WebListControl4.Items.Add$1();
      li.Text = "Audi";
      li.AutoCollaps = true;
      li.Items.Add$1().Text = "A5";
      li.Items.Add$1().Text = "Q5";
      li.Items.Add$1().Text = "R8";
      li = this.WebListControl4.Items.Add$1();
      li.Text = "Porsche";
      li.AutoCollaps = true;
      li.Items.Add$1().Text = "911 Turbo";
      li.Items.Add$1().Text = "Macan";
      li.Items.Add$1().Text = "Panamera";
      li = this.WebListControl4.Items.Add$1();
      li.Text = "BMW";
      li.AutoCollaps = true;
      li.Items.Add$1().Text = "3 series";
      li.Items.Add$1().Text = "4 series";
      li.Items.Add$1().Text = "5 series";
      li.Items.Add$1().Text = "6 series";
      li.Items.Add$1().Text = "7 series";
      li.Items.Add$1().Text = "8 series";
      for (j = 0; j <= this.WebListControl4.Items.Count - 1; j++)
      {
         for (i = 0; i <= this.WebListControl4.Items.GetItem$1(j).Items.Count - 1; i++)
         {
            badge = new TWebBadge().Create$1(this);
            badge.ElementClassName = "badge badge-warning badge-pill";
            badge.Text = IntToStr(Random(10));
            badge.ParentElement = (this.WebListControl4.Items.GetItem$1(j).Items.GetItem$1(i).ListElement as HTMLElement);
         }
      }
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;