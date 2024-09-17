import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebMainMenu, TMenuItem } from "@tmssoftware/webcore/WEBLib.Menus"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebMainMenu1: TWebMainMenu = null;
   File1: TMenuItem = null;
   Open1: TMenuItem = null;
   Save1: TMenuItem = null;
   ext1: TMenuItem = null;
   PDF1: TMenuItem = null;
   Image1: TMenuItem = null;
   Hidden1: TMenuItem = null;
   GIF1: TMenuItem = null;
   PNG1: TMenuItem = null;
   JPGEG1: TMenuItem = null;
   Bitmap1: TMenuItem = null;
   Close1: TMenuItem = null;
   N1: TMenuItem = null;
   Exit1: TMenuItem = null;
   Edit1: TMenuItem = null;
   Cut1: TMenuItem = null;
   Copy1: TMenuItem = null;
   Paste1: TMenuItem = null;
   Help1: TMenuItem = null;
   WebPanel2: TWebPanel = null;
   WebLabel3: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebMainMenu1Change(Sender: TObject, Source: TMenuItem, Rebuild: boolean): void
   {
      this.WebLabel1.Caption = "Item selected: " + Source.Caption;
      if ((Source.Caption === "GIF") || (Source.Caption === "PNG") || (Source.Caption === "JPEG") || (Source.Caption === "Bitmap"))
      Source.Checked = true;
   }
   WebFormCreate(Sender: TObject): void
   {
      this.WebMainMenu1.Appearance.ImageURLs.Clear();
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Close.png");
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Copy.png");
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Cut.png");
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Exit.png");
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Open.png");
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Paste.png");
      this.WebMainMenu1.Appearance.ImageURLs.Add("img/16x16/Save.png");
   }
}

export let Form4: TForm4 = null;

globalThis.Form4 = null;
globalThis.TForm4 = dfm;