import { Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TForm1, Form1 } from "./Umain"
import { TSearch, Search } from "./Usearch"
import { TInsights, Insights } from "./UInsights"
import { TDocs, Docs } from "./UDocs"
import { TProducts, Products } from "./UProducts"
import { TSettings, Settings } from "./USettings"
import { TMessages, Messages } from "./UMessages"
import { TAccount, Account } from "./UAccount"

{
   Application.Initialize();
   Application.MainFormOnTaskBar = true;
   Application.Routing = true;
   Application.CreateForm(TForm1, {get: () => globalThis.Form1, set: (value: any) => globalThis.Form1 = value});
   Application.CreateForm(TSearch, {get: () => globalThis.Search, set: (value: any) => globalThis.Search = value});
   Application.CreateForm(TInsights, {get: () => globalThis.Insights, set: (value: any) => globalThis.Insights = value});
   Application.CreateForm(TDocs, {get: () => globalThis.Docs, set: (value: any) => globalThis.Docs = value});
   Application.CreateForm(TProducts, {get: () => globalThis.Products, set: (value: any) => globalThis.Products = value});
   Application.CreateForm(TSettings, {get: () => globalThis.Settings, set: (value: any) => globalThis.Settings = value});
   Application.CreateForm(TMessages, {get: () => globalThis.Messages, set: (value: any) => globalThis.Messages = value});
   Application.CreateForm(TAccount, {get: () => globalThis.Account, set: (value: any) => globalThis.Account = value});
   Application.Run();
}