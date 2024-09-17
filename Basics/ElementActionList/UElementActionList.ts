import { dfm } from "./UElementActionList.dfm";
import { TObject, Delete, unit } from "@tmssoftware/webcore/system"
import { TJSHTMLElementRecord } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebForm, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebElementActionList, TJSEventParameter } from "@tmssoftware/webcore/WEBLib.Actions"
import { TWebMemo } from "@tmssoftware/webcore/WEBLib.StdCtrls"

@unit("UElementActionList")
export class TForm1 extends TWebForm
{
   WebElementActionList1: TWebElementActionList = null;
   WebMemo1: TWebMemo = null;
   WebElementActionList1Actions0Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.ValidateForm("fullname", "email", "city", "type");
   }
   WebElementActionList1Actions1Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      this.ValidateForm("fullname2", "email2", "city2", "type2");
   }
   WebElementActionList1Actions2Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      Application.Navigate("https://www.tmssoftware.com/site/tmswebcore.asp");
   }
   WebElementActionList1Actions3Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      ShowMessage("Congratulations, free level selected");
   }
   WebElementActionList1Actions4Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      ShowMessage("Congratulations, business level selected");
   }
   WebElementActionList1Actions5Execute(Sender: TObject, Element: TJSHTMLElementRecord, Event: TJSEventParameter): void
   {
      ShowMessage("Congratulations, basic level selected");
   }
   /* Public declarations*/
   ValidateForm(el1: string, el2: string, el3: string, el4: string): void
   {
      let fullname: string = "";
      let email: string = "";
      let city: string = "";
      let atype: string = "";
      let validate: string = "";
      fullname = (document.getElementById(el1) as HTMLInputElement).value;
      email = (document.getElementById(el2) as HTMLInputElement).value;
      city = (document.getElementById(el3) as HTMLInputElement).value;
      atype = (document.getElementById(el4) as HTMLInputElement).value;
      validate = "";
      if ((fullname === ""))
      validate = ",full name";
      if ((email === ""))
      validate = validate + ",email";
      if ((city === ""))
      validate = validate + ",city";
      if ((atype === ""))
      validate = validate + ",type";
      if (validate !== "")
      {
         Delete({get: () => validate, set: (value: any) => validate = value}, 1, 1);
         ShowMessage("Please provide a valid " + validate);
      }
      else
      {
         ShowMessage("Thank you " + fullname + " for registering for " + atype);
      }
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;