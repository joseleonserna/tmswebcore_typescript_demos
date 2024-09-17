import { dfm } from "./Unit1.dfm";
import { TObject, Integer, TDateTime, Random, unit } from "@tmssoftware/webcore/system"
import { StrToInt, IntToStr, DateTimeToStr, Now } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebImageControl } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TControl, TJSHTMLElementRecord, crDefault, crHandPoint, TElementPosition } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebContinuousScroll } from "@tmssoftware/webcore/WEBLib.ContinuousScroll"
import { TJSONObject } from "@tmssoftware/webcore/WEBLib.JSON"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"
import { IncSecond } from "@tmssoftware/webcore/dateutils"

@unit("Unit1")
export class TForm4 extends TWebForm
{
   WebContinuousScroll1: TWebContinuousScroll = null;
   WebHTMLDiv1: TWebHTMLDiv = null;
   lbldesc: TWebLabel = null;
   lbltit: TWebLabel = null;
   WebContinuousScroll1FetchNextPage(Sender: TObject, APageSize: number, APageNumber: number, AURL: any): void
   {
      AURL.set("https://tmswebcore.com:8082/?page=" + IntToStr(APageNumber) + "&per_page=" + IntToStr(APageSize));
   }
   WebContinuousScroll1GetListItem(Sender: TObject, AElementControl: TControl, AObject: TJSONObject, AIndex: number, AElement: TJSHTMLElementRecord): void
   {
      let btn: TWebButton = null;
      let img: TWebImageControl = null;
      switch(AObject.GetJSONValue("status"))
      {
         case "Done":
            AElement.element.className = "done";
            break;
         case "Low priority":
            AElement.element.className = "low_prior";
            break;
         case "Medium priority":
            AElement.element.className = "med_prior";
            break;
         case "Urgent":
            AElement.element.className = "urgent";
            break;
      }
      if (AObject.GetJSONValue("status") === "Urgent")
      {
         btn = new TWebButton().Create$1(AElementControl);
         btn.Parent = AElementControl;
         btn.Cursor = crHandPoint;
         btn.ElementClassName = "done-button";
         btn.Caption = "Mark as done";
         btn.Width = 120;
         btn.Height = 30;
         btn.Left = 85;
         btn.Top = 35;
         btn.ElementHandle.style.setProperty("font-size", "12pt");
         btn.Tag = AIndex;
         btn.OnClick = this.ButtonClick;
      }
      img = new TWebImageControl().Create$1(AElementControl);
      img.Parent = AElementControl;
      img.ElementPosition = TElementPosition.epIgnore;
      img.URL = FAVICONURL;
      img.Width = 16;
      img.Height = 16;
      img.Cursor = crHandPoint;
      img.Tag = AIndex;
      img.OnClick = this.ImageClick;
      img.ElementHandle.style.setProperty("padding-left", "10px");
      AElement.element.insertBefore(img.ElementHandle, AElement.element.getElementsByTagName("p").item(2));
   }
   WebFormCreate(Sender: TObject): void
   {
      this.FPostDate = Now();
   }
   WebFormResize(Sender: TObject): void
   {
      this.WebContinuousScroll1.Left = (this.Width - this.WebContinuousScroll1.Width) / 2;
   }
   WebContinuousScroll1ItemGetFieldValue(Sender: TObject, AIndex: number, AFieldName: string, AValue: any): void
   {
      if (AFieldName === "date")
      {
         this.FPostDate = IncSecond(this.FPostDate, -Random(3600));
         AValue.set(DateTimeToStr(this.FPostDate));
      }
   }
   private FPostDate: number = 0;
   private ButtonClick(Sender: TObject): void
   {
      let el: Element = null;
      el = this.WebContinuousScroll1.GetChildElement(((Sender as TWebButton)).Tag);
      el.className = "done";
      (el.getElementsByTagName("IMG").item(0) as HTMLImageElement).src = DONEICONURL;
      (el.getElementsByTagName("SPAN").item(0) as HTMLElement).innerHTML = "Done";
      el.removeChild(((Sender as TWebButton)).ElementHandle);
   }
   private ImageClick(Sender: TObject): void
   {
      let el: Element = null;
      el = this.WebContinuousScroll1.GetChildElement(((Sender as TWebImageControl)).Tag);
      (el.getElementsByTagName("P").item(2) as HTMLElement).innerHTML = IntToStr(StrToInt((el.getElementsByTagName("P").item(2) as HTMLElement).innerHTML) + 1);
      ((Sender as TWebImageControl)).URL = FAVICONCLICKEDURL;
      ((Sender as TWebImageControl)).Cursor = crDefault;
      ((Sender as TWebImageControl)).OnClick = null;
   }
}

export let Form4: TForm4 = null;
export const FAVICONCLICKEDURL = "https://tmswebcore.com/demos/ContinuousScroll/img/favourited.png";
export const FAVICONURL = "https://tmswebcore.com/demos/ContinuousScroll/img/favourite.png";
export const DONEICONURL = "https://tmswebcore.com/demos/ContinuousScroll/img/done.png";

globalThis.Form4 = null;
globalThis.TForm4 = dfm;