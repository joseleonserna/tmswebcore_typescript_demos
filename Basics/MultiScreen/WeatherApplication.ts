import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { GetQueryParam } from "@tmssoftware/webcore/WEBLib.WebTools"
import { TMainForm, MainForm } from "./Main"
import { TWeatherForm, WeatherForm } from "./Weather"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   if (GetQueryParam("country") !== "")
   Application.CreateForm(TWeatherForm, {get: () => globalThis.WeatherForm, set: (value: any) => globalThis.WeatherForm = value});
   else
   Application.CreateForm(TMainForm, {get: () => globalThis.MainForm, set: (value: any) => globalThis.MainForm = value});
   Application.Run();
}