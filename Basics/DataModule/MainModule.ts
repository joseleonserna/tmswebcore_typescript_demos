import { dfm } from "./MainModule.dfm";
import { unit } from "@tmssoftware/webcore/system"
import { TWebDataModule } from "@tmssoftware/webcore/WEBLib.Modules"

@unit("MainModule")
export class TdmMain extends TWebDataModule
{
   private get_TheAnswer(): string
   {
      const cTheAnswer = "42";
      let Result: string = "";
      Result = cTheAnswer;
      return Result;
   }
   
   get TheAnswer(): string
   {
      return this.get_TheAnswer();
   }
}

export let dmMain: TdmMain = null;

globalThis.dmMain = null;
globalThis.TdmMain = dfm;