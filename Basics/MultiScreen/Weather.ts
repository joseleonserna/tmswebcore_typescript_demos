import { dfm } from "./Weather.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TStringHelper } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebHTMLDiv } from "@tmssoftware/webcore/WEBLib.WebCtrls"
import { GetQueryParam } from "@tmssoftware/webcore/WEBLib.WebTools"

@unit("Weather")
export class TWeatherForm extends TWebForm
{
   WebHTMLDiv1: TWebHTMLDiv = null;
   WebFormCreate(Sender: TObject): void
   {
      this.Caption = "The weather in " + GetQueryParam("country");
      this.WebHTMLDiv1.HTML.Text = this.GetCountryWeatherHTML(GetQueryParam("country"));
   }
   private GetCountryWeatherHTML(ALocation: string): string
   {
      let Result: string = "";
      if (new TStringHelper(ALocation).ToUpper() === "SYDNEY")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/n33d87151d21/sydney/\" data-label_1=\"SYDNEY\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\" >SYDNEY WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "BRUSSELS")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/50d854d35/brussels/\" data-label_1=\"BRUSSELS\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\" >BRUSSELS WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "NEWYORK")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/40d71n74d01/new-york/\" data-label_1=\"NEW YORK\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\" >NEW YORK WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "TOKYO")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/35d71139d73/tokyo/\" data-label_1=\"TOKYO\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\" >TOKYO WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "RIO")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/n22d91n43d17/rio-de-janeiro/\" data-label_1=\"RIO DE JANEIRO\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\" >RIO DE JANEIRO WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "LAGOS")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/6d523d38/lagos/\" data-label_1=\"LAGOS\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\"  >LAGOS WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "BERLIN")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/52d5213d40/berlin/\" data-label_1=\"BERLIN\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\"  >BERLIN WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "PARIS")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/48d862d35/paris/\" data-label_1=\"PARIS\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\"  >PARIS WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "SINGAPORE")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/1d35103d82/singapore/\" data-label_1=\"SINGAPORE\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\" >SINGAPORE WEATHER</a>";
      else
      if (new TStringHelper(ALocation).ToUpper() === "LONDON")
      Result = "<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/51d51n0d13/london/\" data-label_1=\"LONDON\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"dark\"  >LONDON WEATHER</a>";
      return Result;
   }
}

export let WeatherForm: TWeatherForm = null;

globalThis.WeatherForm = null;
globalThis.TWeatherForm = dfm;