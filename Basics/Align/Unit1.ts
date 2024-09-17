import { dfm } from "./Unit1.dfm";
import * as system from "@tmssoftware/webcore/system"
import { TObject, Insert, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebButton, TWebListBox, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel, TWebSplitter } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   LeftPanel: TWebPanel = null;
   WebButton1: TWebButton = null;
   ClientPanel: TWebPanel = null;
   ListChildPanel: TWebPanel = null;
   WebListBox1: TWebListBox = null;
   WebListBox2: TWebListBox = null;
   WebSplitter1: TWebSplitter = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebButton1Click(Sender: TObject): void
   {
      let myarray: Array<string> = [];
      let mystring: string = "";
      myarray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
      mystring = "k";
      mystring.substring(0 - 1, 0 - 1 + 0);
      system.Insert(mystring, {get: () => myarray, set: (value: any) => myarray = value}, 5);
      // system.copy(myarray, 0, 0);
      system.Insert("1", {get: () => myarray, set: (value: any) => myarray = value}, 0);
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;