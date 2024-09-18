import { dfm } from "./Umultilang.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebLabel, TWebButton, TWebEdit } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebImageControl } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TUILanguage } from "@tmssoftware/webcore/WEBLib.Lang"

@unit("Umultilang")
export class TForm1 extends TWebForm
{
   WebImageControl1: TWebImageControl = null;
   WebLabel1: TWebLabel = null;
   WebImageControl2: TWebImageControl = null;
   WebImageControl3: TWebImageControl = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebButton1: TWebButton = null;
   WebEdit1: TWebEdit = null;
   WebEdit2: TWebEdit = null;
   WebImageControl1Click(Sender: TObject): void
   {
      switch(((Sender as TWebImageControl)).Tag)
      {
         case 0:
            Application.Language = TUILanguage.lEnglish;
            break;
         case 1:
            Application.Language = TUILanguage.lGerman;
            break;
         case 2:
            Application.Language = TUILanguage.lFrench;
            break;
      }
   }
   WebButton1Click(Sender: TObject): void
   {
      switch(Application.Language)
      {
         case TUILanguage.lNone:
         case TUILanguage.lEnglish:
            ShowMessage("Welcome to demo application showing multi language with templates");
            break;
         case TUILanguage.lGerman:
            ShowMessage("Willkommen bei der Demo-Anwendung, die mehrere Sprachen mit Vorlagen zeigt");
            break;
         case TUILanguage.lFrench:
            ShowMessage("Bienvenue dans l'application de démonstration montrant plusieurs langues avec des modèles");
            break;
      }
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;