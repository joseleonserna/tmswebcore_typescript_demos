import { dfm } from "./Unit1.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebDBLabel, TWebDBNavigator, TWebDBEdit, TWebDBMemo, TWebDBSpinEdit } from "@tmssoftware/webcore/WEBLib.DBCtrls"
import { TWebClientConnection, TWebClientDataSet } from "@tmssoftware/webcore/WEBLib.CDS"
import { TWebDataSource } from "@tmssoftware/webcore/WEBLib.DB"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebDBLabel1: TWebDBLabel = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebLabel7: TWebLabel = null;
   WebButton1: TWebButton = null;
   WebDBNavigator1: TWebDBNavigator = null;
   WebDBEdit1: TWebDBEdit = null;
   WebDBEdit2: TWebDBEdit = null;
   WebDBEdit3: TWebDBEdit = null;
   WebDBEdit4: TWebDBEdit = null;
   WebClientConnection1: TWebClientConnection = null;
   WebClientDataSet1: TWebClientDataSet = null;
   WebDBMemo1: TWebDBMemo = null;
   WebLabel5: TWebLabel = null;
   WebDBSpinEdit1: TWebDBSpinEdit = null;
   WebDataSource1: TWebDataSource = null;
   WebLabel8: TWebLabel = null;
   WebLabel9: TWebLabel = null;
   WebButton1Click(Sender: TObject): void
   {
      // empty dataset for testing https://download.tmssoftware.com/tmsweb/fishfacti2_empty.json
      // empty dataset for testing https://download.tmssoftware.com/tmsweb/fishfacti2_empty.json
      this.WebClientConnection1.URI = "https://download.tmssoftware.com/tmsweb/fishfacti.json";
      this.WebClientConnection1.DataNode = "ROW";
      //  WebClientDataSet1.FieldDefs.Clear;
      //  WebClientDataSet1.FieldDefs.Add('_Species_No',ftString,0);
      //  WebClientDataSet1.FieldDefs.Add('_Category',ftstring,50);
      //  WebClientDataSet1.FieldDefs.Add('_Common_Name',ftstring,50);
      //  WebClientDataSet1.FieldDefs.Add('_Species_Name',ftstring,50);
      //  WebClientDataSet1.FieldDefs.Add('_Length__cm_',ftInteger,0);
      //  WebClientDataSet1.FieldDefs.Add('_Length_In',ftString,30);
      //  WebClientDataSet1.FieldDefs.Add('_Notes',ftString,255);
      //  WebClientDataSet1.FieldDefs.Clear;
      //  WebClientDataSet1.FieldDefs.Add('_Species_No',ftString,0);
      //  WebClientDataSet1.FieldDefs.Add('_Category',ftstring,50);
      //  WebClientDataSet1.FieldDefs.Add('_Common_Name',ftstring,50);
      //  WebClientDataSet1.FieldDefs.Add('_Species_Name',ftstring,50);
      //  WebClientDataSet1.FieldDefs.Add('_Length__cm_',ftInteger,0);
      //  WebClientDataSet1.FieldDefs.Add('_Length_In',ftString,30);
      //  WebClientDataSet1.FieldDefs.Add('_Notes',ftString,255);
      this.WebClientConnection1.Active = true;
      this.WebButton1.Enabled = false;
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;