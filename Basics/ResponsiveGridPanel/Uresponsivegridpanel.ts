import { dfm } from "./Uresponsivegridpanel.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebResponsiveGridPanel, TWebImageControl, TWebPanel, TResponsiveLayoutItem } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebLabel, TWebEdit, TWebComboBox } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"

@unit("Uresponsivegridpanel")
export class TForm1 extends TWebForm
{
   Outerpanel: TWebResponsiveGridPanel = null;
   WebImageControl1: TWebImageControl = null;
   WebPanel1: TWebPanel = null;
   WebHTMLDiv1: TWebHTMLDiv = null;
   Innerpanel: TWebResponsiveGridPanel = null;
   WebLabel1: TWebLabel = null;
   WebEdit1: TWebEdit = null;
   WebLabel2: TWebLabel = null;
   WebEdit2: TWebEdit = null;
   WebLabel3: TWebLabel = null;
   WebEdit3: TWebEdit = null;
   WebLabel4: TWebLabel = null;
   WebComboBox1: TWebComboBox = null;
   WebImageControl2: TWebImageControl = null;
   WebLabel5: TWebLabel = null;
   WebHTMLDiv2: TWebHTMLDiv = null;
   WebHTMLDiv3: TWebHTMLDiv = null;
   WebLabel7: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   InnerpanelLayoutChange(Sender: TObject, ALayout: TResponsiveLayoutItem): void
   {
      switch(ALayout.Index)
      {
         case 0:
            this.WebLabel1.ElementHandle.style.removeProperty("float");
            this.WebLabel2.ElementHandle.style.removeProperty("float");
            this.WebLabel3.ElementHandle.style.removeProperty("float");
            this.WebLabel4.ElementHandle.style.removeProperty("float");
            break;
         case 1:
            this.WebLabel1.ElementHandle.style.setProperty("float", "right");
            this.WebLabel2.ElementHandle.style.setProperty("float", "right");
            this.WebLabel3.ElementHandle.style.setProperty("float", "right");
            this.WebLabel4.ElementHandle.style.setProperty("float", "right");
            break;
      }
   }
   OuterpanelLayoutChange(Sender: TObject, ALayout: TResponsiveLayoutItem): void
   {
      switch(ALayout.Index)
      {
         case 0:
            this.WebImageControl1.URL = "https://www.tmssoftware.com/site/img/tmslogo_128x128.png";
            break;
         case 1:
            this.WebImageControl1.URL = "https://www.tmssoftware.com/site/img/tmslogo_small.png";
            break;
         case 2:
            this.WebImageControl1.URL = "https://www.tmssoftware.com/site/img/tmslogo_128x128.png";
            break;
      }
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;