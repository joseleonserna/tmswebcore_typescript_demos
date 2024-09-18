import { dfm } from "./Unit1.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { IntToStr } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebFilePicker } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebImageControl } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebButton, TWebLabel } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebCamera } from "@tmssoftware/webcore/WEBLib.Devices"
import { TWebDataSource } from "@tmssoftware/webcore/WEBLib.DB"
import { TWebIndexedDbClientDataset } from "@tmssoftware/webcore/WEBLib.IndexedDb"
import { TWebDBGrid } from "@tmssoftware/webcore/WEBLib.DBCtrls"
import { TFieldType } from "@tmssoftware/webcore/db"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebFilePicker1: TWebFilePicker = null;
   WebImageControl1: TWebImageControl = null;
   WebCamera1: TWebCamera = null;
   WebButton1: TWebButton = null;
   WebDBGrid1: TWebDBGrid = null;
   WebIndexedDbClientDataset1: TWebIndexedDbClientDataset = null;
   WebDataSource1: TWebDataSource = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebLabel5: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   WebFilePicker1Change(Sender: TObject): void
   {
      this.WebFilePicker1.Files.GetItem$1(0).GetFileAsBase64();
   }
   WebFilePicker1GetFileAsBase64(Sender: TObject, AFileIndex: number, ABase64: string): void
   {
      let imgbase64: string = "";
      imgbase64 = "data:image/png;base64," + ABase64;
      this.WebImageControl1.URL = imgbase64;
      this.WebIndexedDbClientDataset1.Insert$1();
      this.WebIndexedDbClientDataset1.FieldByName("name").AsString = this.WebFilePicker1.Files.GetItem$1(0).Name;
      this.WebIndexedDbClientDataset1.FieldByName("data").AsString = imgbase64;
      this.WebIndexedDbClientDataset1.Post();
   }
   WebFormCreate(Sender: TObject): void
   {
      this.WebIndexedDbClientDataset1.IDBDatabaseName = "pictures";
      this.WebIndexedDbClientDataset1.IDBObjectStoreName = "myiddb";
      this.WebIndexedDbClientDataset1.IDBKeyFieldName = "id";
      this.WebIndexedDbClientDataset1.FieldDefs.Add$2("id",  TFieldType.ftInteger, 0, true, 3);
      this.WebIndexedDbClientDataset1.FieldDefs.Add$5("name", TFieldType.ftString);
      this.WebIndexedDbClientDataset1.FieldDefs.Add$5("data", TFieldType.ftString);
      this.WebIndexedDbClientDataset1.Active = true;
      this.WebCamera1.Start();
   }
   WebButton1Click(Sender: TObject): void
   {
      let imgbase64: string = "";
      imgbase64 = this.WebCamera1.SnapShotAsBase64;
      this.WebImageControl1.URL = imgbase64;
      this.WebIndexedDbClientDataset1.Insert$1();
      this.WebIndexedDbClientDataset1.FieldByName("name").AsString = "camera" + IntToStr(this.WebIndexedDbClientDataset1.RecordCount);
      this.WebIndexedDbClientDataset1.FieldByName("data").AsString = imgbase64;
      this.WebIndexedDbClientDataset1.Post();
   }
   WebDBGrid1Click(Sender: TObject): void
   {
      this.WebImageControl1.URL = this.WebIndexedDbClientDataset1.FieldByName("data").AsString;
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm; 