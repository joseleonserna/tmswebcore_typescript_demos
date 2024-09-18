import { dfm } from "./Umain.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TJSHTMLElementRecord } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebForm, TFormClass, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebElementActionList, TJSEventParameter, TElementAction } from "@tmssoftware/webcore/WEBLib.Actions"
import { TDashboard } from "./Udashboard"
import { TSearch } from "./Usearch"
import { TInsights } from "./UInsights"
import { TDocs } from "./UDocs"
import { TProducts } from "./UProducts"
import { TSettings } from "./USettings"
import { TMessages } from "./UMessages"
import { TAccount } from "./UAccount"

@unit("Umain")
export class TForm1 extends TWebForm
{
   WebElementActionList1: TWebElementActionList = null;
   WebElementActionList1Actions0Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TDashboard);
   }
   WebElementActionList1Actions1Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TSearch);
   }
   WebFormCreate(Sender: TObject): void
   {
      this.activeform = null;
      Application.OnAutoCreateForm = this.AutoCreateForm;
   }
   WebElementActionList1Actions2Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TInsights);
   }
   WebElementActionList1Actions3Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TDocs);
   }
   WebElementActionList1Actions4Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TProducts);
   }
   WebElementActionList1Actions5Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TSettings);
   }
   WebElementActionList1Actions6Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TMessages);
   }
   WebElementActionList1Actions7Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.CreateForm((Sender as TElementAction), TAccount);
   }
   WebFormShow(Sender: TObject): void
   {
      if (!Application.Route())
      this.AutoCreateForm(null, TDashboard, {get: () => this.activeform, set: (value: any) => this.activeform = value});
   }
   activeform: TWebForm = null;
   activeitem: TElementAction = null;
   CreateForm(Item: TElementAction, AInstanceClass: TFormClass): void
   {
      if ((this.activeform != null))
      this.activeform.Close();
      // remove selection from last item
      if ((this.activeitem != null))
      {
         document.getElementById(this.activeitem.TargetID).classList.add(this.activeitem.TargetClassRemove);
         document.getElementById(this.activeitem.TargetID).classList.remove(this.activeitem.TargetClassAdd);
      }
      this.activeitem = Item;
      this.activeform = new AInstanceClass().CreateNew$4("formarea", null);
   }
   AutoCreateForm(Sender: TObject, AInstanceClass: TFormClass, AReference: any): void
   {
      let ElementAction: TElementAction = null;
      let s: string = "";
      this.CreateForm(null, AInstanceClass);
      s = Application.Hash;
      if (s === "")
      s = "Dashboard";
      // default active page
      // default active page
      ElementAction = this.WebElementActionList1.GetAction(s);
      // set selected item in list when auto created form
      if ((ElementAction != null))
      {
         document.getElementById(ElementAction.TargetID).classList.remove(ElementAction.TargetClassRemove);
         document.getElementById(ElementAction.TargetID).classList.add(ElementAction.TargetClassAdd);
         this.activeitem = ElementAction;
      }
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm; 