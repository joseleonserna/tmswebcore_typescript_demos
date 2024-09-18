import { dfm } from "./Main.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { IntToStr, BoolToStr, FloatToStr } from "@tmssoftware/webcore/System.SysUtils"
import { TStringList } from "@tmssoftware/webcore/System.Classes"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebButton } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { GetScreenAvailability, GetScreensInfo, GetPermissions } from "@tmssoftware/webcore/WEBLib.Screens"

@unit("Main")
export class TMainForm extends TWebForm
{
   ShowWeatherButton: TWebButton = null;
   ShowWeatherButtonClick(Sender: TObject): void
   {
      this.ShowWeather();
   }
   Form1Create(Sender: TObject): void
   {
      this.FCountrys = new TStringList().Create();
      this.Popups = new Array();
      this.FCountrys.Add("Lagos");
      this.FCountrys.Add("Berlin");
      this.FCountrys.Add("Sydney");
      this.FCountrys.Add("Brussels");
      this.FCountrys.Add("NewYork");
      this.FCountrys.Add("Tokyo");
      this.FCountrys.Add("Rio");
      this.FCountrys.Add("Paris");
      this.FCountrys.Add("Singapore");
      this.FCountrys.Add("London");
      this.FColumns = 2;
      this.FRows = 5;
   }
   private FCountrys: TStringList = null;
   private FColumns: number = 0;
   private FRows: number = 0;
   private DoCurrentScreensChange(Event: Event): boolean
   {
      let Result: boolean = false;
      if (this.Popups.length !== 0)
      {
         this.CloseAllPopups();
         this.ShowWeather();
      }
      Result = true;
      return Result;
   }
   private DoScreenSChanged(Event: Event): boolean
   {
      let Result: boolean = false;
      window.console.log(this.screens);
      return Result;
   }
   private CreatePopup(AOptions: string, ACountry: string): Window
   {
      let Result: Window = null;
      Result = window.open("index.html?country=" + ACountry, FloatToStr(Math.random()), AOptions);
      return Result;
   }
   private ClosePopUp(element: any, index: number, anArray: Array<any>): boolean
   {
      let Result: boolean = false;
      (element as Window).removeEventListener("beforeunload", this.DoClosePopUp);
      (element as Window).close();
      return Result;
   }
   private DoClosePopUp(Event: Event): boolean
   {
      let Result: boolean = false;
      Event.preventDefault();
      this.CloseAllPopups();
      return Result;
   }
   private CloseAllPopups(): void
   {
      this.Popups.forEach(this.ClosePopUp);
      this.Popups = new Array();
   }
   private async ShowWeather(): Promise<void>
   {
      let PopUp: Window = null;
      let Features: string = "";
      let i: number = 0;
      let j: number = 0;
      let k: number = 0;
      let w: number = 0;
      let h: number = 0;
      let x: number = 0;
      let y: number = 0;
      let CountryIndex: number = 0;
      if (this.Popups.length !== 0)
      {
         this.CloseAllPopups();
         return;
      }
      if (!GetScreenAvailability())
      return;
      CountryIndex = 0;
      this.screens = await GetScreensInfo();
      this.screens.oncurrentscreenchange = this.DoCurrentScreensChange;
      this.screens.onscreenschange = this.DoScreenSChanged;
      if (!await GetPermissions())
      return;
      for (i = 0; i <= this.screens.screens.length; i++)
      {
         if ((this.screens.screens[i] === this.screens.currentScreen) && (this.screens.screens.length > 0))
         w = Math.floor((this.screens.screens[i].availWidth - this.FColumns * 1) / this.FColumns);
         h = Math.floor((this.screens.screens[i].availHeight - this.FRows * 51) / this.FRows);
         for (j = 0; j <= this.FColumns - 1; j++)
         {
            for (k = 0; k <= this.FRows - 1; k++)
            {
               x = j * w + this.screens.screens[i].left + j * 1;
               y = k * h + this.screens.screens[i].top + k * 51;
               Features = "" + "screenX=" + IntToStr(x) + "," + "screenY=" + IntToStr(y) + "," + "width=" + IntToStr(w) + "," + "height=" + IntToStr(h) + "," + "menubar=" + BoolToStr(false) + "," + "toolbar=" + BoolToStr(false) + "," + "location=" + BoolToStr(false) + "," + "status=" + BoolToStr(false) + "," + "resizable=" + BoolToStr(true) + "," + "scrollbars=" + BoolToStr(false) + "";
               PopUp = this.CreatePopup(Features, this.FCountrys.Get(CountryIndex));
               if (PopUp === null)
               {
                  this.CloseAllPopups();
                  window.alert("It looks like you are blocking popup windows. Please allow them as outlined at https://goo.gle/allow-popups.");
                  return;
               }
               PopUp.addEventListener("beforeunload", this.DoClosePopUp);
               this.Popups.push(PopUp);
               CountryIndex++;
            }
         }
         break;
      }
   }
   screens: ScreenDetails = null;
   Popups: Array<any> = null;
}

export let MainForm: TMainForm = null;

globalThis.MainForm = null;
globalThis.TMainForm = dfm;