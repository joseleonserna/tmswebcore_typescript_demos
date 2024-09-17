import { dfm } from "./Unit1.dfm";
import { TObject, Integer, Pos, unit } from "@tmssoftware/webcore/system"
import { ExtractFileExt, UpperCase } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TBinaryFile, TFolder, TFileSystemFolderHandle, TFileObject } from "@tmssoftware/webcore/WEBLib.LocalFiles"
import { TWebStringGrid } from "@tmssoftware/webcore/WEBLib.Grids"
import { TWebResponsiveGridPanel, TWebImageControl, TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TLongIntHelper, ArrayBufferToBase64 } from "@tmssoftware/webcore/WEBLib.Utils"
import { EmptyImage } from "@tmssoftware/webcore/WEBLib.WebTools"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebResponsiveGridPanel1: TWebResponsiveGridPanel = null;
   WebStringGrid1: TWebStringGrid = null;
   WebImageControl1: TWebImageControl = null;
   WebPanel1: TWebPanel = null;
   WebButton10: TWebButton = null;
   WebFormCreate(Sender: TObject): void
   {
      this.AFolderList = new Array();
      this.ABinaryFile = new TBinaryFile().Create$1(this);
      this.AFolder = new TFolder().Create();
      this.InitGrid();
      this.AddCSS("imgalign", "img {vertical-align:middle}");
   }
   WebButton10Click(Sender: TObject): void
   {
      if ((this.AFolder != null))
      {
         this.AFolder.Free();
         this.AFolder = new TFolder().Create();
         this.WebImageControl1.URL = EmptyImage();
      }
      this.ShowFolder();
   }
   WebStringGrid1DblClick(Sender: TObject): void
   {
      this.OpenFolder(this.WebStringGrid1.Row);
   }
   WebStringGrid1FixedCellClick(Sender: TObject, ACol: number, ARow: number): void
   {
      if ((ARow > 0) && (ACol === 0))
      {
         this.OpenFolder(ARow);
      }
   }
   async WebStringGrid1SelectCell(Sender: TObject, ACol: number, ARow: number, CanSelect: any): Promise<void>
   {
      let ext: string = "";
      let filename: string = "";
      let p: number = 0;
      let AFileHandle: any = null;
      let ABuffer: ArrayBuffer = null;
      if ((ARow > 1) && (this.WebStringGrid1.GetCells(0, ARow) === ""))
      {
         filename = this.WebStringGrid1.GetCells(1, ARow);
         p = Pos("&nbsp;", filename);
         if (p > 0)
         filename = filename.substring(p + 6 - 1, p + 6 - 1 + filename.length);
         ext = UpperCase(ExtractFileExt(filename));
         if ((ext === ".JPG") || (ext === ".PNG") || (ext === ".GIF") || (ext === ".BMP") || (ext === ".JPEG") || (ext === ".SVG"))
         {
            try
            {
               // get the file handle of the selected filename
               // get the file handle of the selected filename
               AFileHandle = await this.AFolder.FileHandle(filename);
               try
               {
                  // read the file as JS array buffer
                  // read the file as JS array buffer
                  ABuffer = await this.ABinaryFile.Open$1(AFileHandle);
                  this.WebImageControl1.URL = "data:image/jpeg;base64," + ArrayBufferToBase64(ABuffer);
               }
               catch(error: any)
               {
                  this.WebImageControl1.URL = EmptyImage();
               }
            }
            catch(error: any)
            {
               this.WebImageControl1.URL = EmptyImage();
            }
         }
         else
         this.WebImageControl1.URL = EmptyImage();
      }
   }
   ABinaryFile: TBinaryFile = null;
   AFolder: TFolder = null;
   AFolderList: Array<any> = null;
   InitGrid(): void
   {
      this.WebStringGrid1.SetColWidths(0, 20);
      this.WebStringGrid1.SetColWidths(1, 230);
      this.WebStringGrid1.SetColWidths(2, 200);
      this.WebStringGrid1.SetColWidths(3, 64);
      this.WebStringGrid1.SetCells(1, 0, "File name");
      this.WebStringGrid1.SetCells(2, 0, "Modified");
      this.WebStringGrid1.SetCells(3, 0, "Size");
   }
   ShowFolder(): void
   {
      const ShowDetails = (index: number, AFilename: string): void => 
      {
         let s: string = "";
         s = AFilename;
         this.AFolder.GetFile(s, (AFileObject: TFileObject) =>          {
            this.WebStringGrid1.SetCells(2, index, AFileObject.Lastmodfieddate);
            this.WebStringGrid1.SetCells(3, index, new TLongIntHelper(AFileObject.Size).ToString());
         });
      }
      let l: number = 0;
      let d: number = 0;
      let fname: string = "";
      this.AFolder.Open$1(() =>       {
         d = 1;
         if (this.AFolderList.length > 0)
         d = 2;
         this.AFolderList.push(this.AFolder.FolderHandle);
         this.WebStringGrid1.RowCount = this.AFolder.Files.length + d;
         this.WebStringGrid1.ColCount = 4;
         this.WebStringGrid1.SetCells(1, 0, "Name");
         this.WebStringGrid1.SetCells(2, 0, "Date");
         this.WebStringGrid1.SetCells(3, 0, "Size");
         if ((d === 2))
         {
            this.WebStringGrid1.SetCells(0, 1, "&#9658;");
            this.WebStringGrid1.GetCellElements(0, 1).style.setProperty("cursor", "pointer");
            this.WebStringGrid1.SetCells(1, 1, "<img src=\"folder.png\">&nbsp;" + "..");
         }
         for (l = 0; l <= this.AFolder.Files.length - 1; l++)
         {
            fname = this.AFolder.Files[l].Name;
            this.WebStringGrid1.SetCells(1, l + d, "<img src=\"document.png\">&nbsp;" + fname);
            //console.log('showdetails',fname,AFolder.Files[l].Kind);
            if (this.AFolder.Files[l].Kind === "file")
            ShowDetails(l + d, fname);
            else
            {
               this.WebStringGrid1.SetCells(0, l + d, "&#9658;");
               this.WebStringGrid1.GetCellElements(0, l + d).style.setProperty("cursor", "pointer");
               this.WebStringGrid1.SetCells(1, l + d, "<img src=\"folder.png\">&nbsp;" + fname);
            }
         }
      });
   }
   OpenFolder(ARow: number): void
   {
      let fldrname: string = "";
      let np: number = 0;
      if ((this.WebStringGrid1.GetCells(2, ARow) === "") && (this.WebStringGrid1.GetCells(0, ARow) !== ""))
      {
         fldrname = this.WebStringGrid1.GetCells(1, ARow);
         np = Pos("&nbsp;", fldrname);
         fldrname = fldrname.substring(np + 6 - 1, np + 6 - 1 + fldrname.length);
         if ((fldrname === "..") && (this.AFolderList.length >= 2))
         {
            this.AFolderList.pop();
            this.AFolder = new TFolder().Create$2(this.AFolderList.pop());
            this.WebStringGrid1.Clear();
            this.RemoveNodes();
            this.WebStringGrid1.RowCount = 2;
            this.ShowFolder();
         }
         else
         {
            this.AFolder.GetFolder(fldrname, (AFolderHandle: any) =>             {
               this.AFolder.Free();
               this.AFolder = new TFolder().Create$2(AFolderHandle);
               this.WebStringGrid1.Clear();
               this.RemoveNodes();
               this.WebStringGrid1.RowCount = 2;
               this.ShowFolder();
            });
         }
      }
   }
   RemoveNodes(): void
   {
      let i: number = 0;
      for (i = 1; i <= this.WebStringGrid1.RowCount - 1; i++)
      this.WebStringGrid1.GetCellElements(0, i).style.removeProperty("cursor");
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;