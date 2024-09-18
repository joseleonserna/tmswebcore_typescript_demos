import { dfm } from "./Ubluetooth.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { Format } from "@tmssoftware/webcore/System.SysUtils"
import { TWebForm, Application } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebWaitMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebBluetooth, TBluetoothCharacteristic, TBluetoothService } from "@tmssoftware/webcore/WEBLib.Bluetooth"
import { TWebButton, TWebCheckBox, TWebLabel, TWebRadioGroup } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebTimer, TWebImageControl } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Ubluetooth")
export class TForm1 extends TWebForm
{
   WebButton1: TWebButton = null;
   ckLEDRed: TWebCheckBox = null;
   ckLEDGreen: TWebCheckBox = null;
   ckBuzzer: TWebCheckBox = null;
   WebBluetooth: TWebBluetooth = null;
   WebTimer1: TWebTimer = null;
   WebImageControl1: TWebImageControl = null;
   WebImageControl2: TWebImageControl = null;
   WebImageControl3: TWebImageControl = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   lblTitle: TWebLabel = null;
   lblDescr: TWebLabel = null;
   WebRadioGroup1: TWebRadioGroup = null;
   WebWaitMessage1: TWebWaitMessage = null;
   WebImageControl4: TWebImageControl = null;
   WebButton1Click(Sender: TObject): void
   {
      this.WebWaitMessage1.Show();
      this.bt = this.WebBluetooth;
      this.bt.FilterService.Add(tempservice);
      this.bt.FilterService.Add(humidservice);
      this.bt.FilterService.Add(ledservice);
      this.bt.FilterService.Add(lightservice);
      this.charready = 0;
      this.bt.DeviceName = "";
      this.bt.OnDeviceObject = this.DeviceConnected;
      this.bt.GetDevice$1(() =>       {
         this.bt.Device.Connect$1(() =>          {
            this.bt.Device.GetService$1(tempservice, (AService: TBluetoothService) =>             {
               AService.GetCharacteristic$1(tempcharval, (AChar: TBluetoothCharacteristic) =>                {
                  this.btchartempvalue = AChar;
                  this.charready++;
               });
               AService.GetCharacteristic$1(tempcharonoff, (AChar: TBluetoothCharacteristic) =>                {
                  this.btchartempon = AChar;
                  this.charready++;
               });
            });
            this.bt.Device.GetService$1(humidservice, (AService: TBluetoothService) =>             {
               AService.GetCharacteristic$1(humidcharval, (AChar: TBluetoothCharacteristic) =>                {
                  this.btcharhumidvalue = AChar;
                  this.charready++;
               });
               AService.GetCharacteristic$1(humidcharonoff, (AChar: TBluetoothCharacteristic) =>                {
                  this.btcharhumidon = AChar;
                  this.charready++;
               });
            });
            this.bt.Device.GetService$1(lightservice, (AService: TBluetoothService) =>             {
               AService.GetCharacteristic$1(lightcharval, (AChar: TBluetoothCharacteristic) =>                {
                  this.btcharlightvalue = AChar;
                  this.charready++;
               });
               AService.GetCharacteristic$1(lightcharonoff, (AChar: TBluetoothCharacteristic) =>                {
                  this.btcharlighton = AChar;
                  this.charready++;
               });
            });
            this.bt.Device.GetService$1(ledservice, (AService: TBluetoothService) =>             {
               AService.GetCharacteristic$1(ledchardata, (AChar: TBluetoothCharacteristic) =>                {
                  this.btcharleddata = AChar;
                  this.charready++;
               });
               AService.GetCharacteristic$1(ledcharconfig, (AChar: TBluetoothCharacteristic) =>                {
                  this.btcharledconfig = AChar;
                  this.charready++;
               });
            });
         });
      });
   }
   ckLEDRedClick(Sender: TObject): void
   {
      let b: number = 0;
      b = 0;
      if (this.ckLEDRed.Checked)
      b = b | 1;
      if (this.ckLEDGreen.Checked)
      b = b | 2;
      if (this.ckBuzzer.Checked)
      b = b | 4;
      this.btcharleddata.WriteByte(b);
   }
   WebTimer1Timer(Sender: TObject): void
   {
      if (this.charready === 8)
      {
         this.WebWaitMessage1.Hide();
         this.ckLEDGreen.Enabled = true;
         this.ckBuzzer.Enabled = true;
         this.ckLEDRed.Enabled = true;
         this.btchartempon.WriteByte(1);
         this.btcharhumidon.WriteByte(1);
         this.btcharlighton.WriteByte(1);
         this.btcharledconfig.WriteByte(1);
         this.btcharleddata.WriteByte(0);
         this.charready++;
      }
      if (this.charready === 9)
      {
         this.ReadValues();
      }
   }
   WebFormCreate(Sender: TObject): void
   {
      this.charready = 0;
   }
   WebImageControl4Click(Sender: TObject): void
   {
      Application.Navigate("http://www.ti.com/tool/TIDC-CC2650STK-SENSORTAG");
   }
   charready: number = 0;
   bt: TWebBluetooth = null;
   btchartempvalue: TBluetoothCharacteristic = null;
   btchartempon: TBluetoothCharacteristic = null;
   btcharhumidvalue: TBluetoothCharacteristic = null;
   btcharhumidon: TBluetoothCharacteristic = null;
   btcharleddata: TBluetoothCharacteristic = null;
   btcharledconfig: TBluetoothCharacteristic = null;
   btcharlighton: TBluetoothCharacteristic = null;
   btcharlightvalue: TBluetoothCharacteristic = null;
   ReadCharacteristic(Sender: TObject, AValue: number): void
   {
      let a: number = 0;
      let b: number = 0;
      let temp: number = 0;
      a = (AValue & 0xFFFF);
      b = ((AValue & 0xFFFF0000)) >> 16;
      a = a >> 2;
      b = b >> 2;
      temp = b * 0.03125;
      if (this.WebRadioGroup1.ItemIndex === 0)
      this.WebLabel1.Caption = Format("%.2f", [temp]) + "°C";
   }
   DeviceConnected(Sender: TObject, AObject: Object): void
   {
      console.log("device connected");
   }
   ReadHumidity(AValue: number): void
   {
      let temp: number = 0;
      let hum: number = 0;
      let a: number = 0;
      let b: number = 0;
      a = (AValue & 0xFFFF);
      b = ((AValue & 0xFFFF0000)) >> 16;
      temp = (((a & 0xFFFF)) / 65536) * 165 - 40;
      b = ((b & (~0x0003)));
      hum = (b / 65536) * 100;
      if (this.WebRadioGroup1.ItemIndex === 1)
      this.WebLabel1.Caption = Format("%.2f", [temp]) + "°C";
      this.WebLabel2.Caption = Format("%.2f", [hum]) + "%";
   }
   ReadLight(AValue: number): void
   {
      let m: number = 0;
      let e: number = 0;
      let d: number = 0;
      m = (AValue & 0x0FFF);
      e = ((AValue & 0xF000)) >> 12;
      if (e === 0)
      e = 1;
      else
      e = 2 << (e - 1);
      d = m * (0.01 * e);
      this.WebLabel3.Caption = Format("%.2f", [d]) + "LUX";
   }
   ReadValues(): void
   {
      this.btchartempvalue.Read$1((AValue: number) =>       {
         this.ReadCharacteristic(this, AValue);
      });
      this.btcharhumidvalue.Read$1((AValue: number) =>       {
         this.ReadHumidity(AValue);
      });
      this.btcharlightvalue.Read$1((AValue: number) =>       {
         this.ReadLight(AValue);
      });
   }
}

export let Form1: TForm1 = null;
const tempservice = "f000aa00-0451-4000-b000-000000000000";
const tempcharval = "f000aa01-0451-4000-b000-000000000000";
const tempcharonoff = "f000aa02-0451-4000-b000-000000000000";
const humidservice = "f000aa20-0451-4000-b000-000000000000";
const humidcharval = "f000aa21-0451-4000-b000-000000000000";
const humidcharonoff = "f000aa22-0451-4000-b000-000000000000";
const lightservice = "f000aa70-0451-4000-b000-000000000000";
const lightcharval = "f000aa71-0451-4000-b000-000000000000";
const lightcharonoff = "f000aa72-0451-4000-b000-000000000000";
const ledservice = "f000aa64-0451-4000-b000-000000000000";
const ledchardata = "f000aa65-0451-4000-b000-000000000000";
const ledcharconfig = "f000aa66-0451-4000-b000-000000000000";

globalThis.Form1 = null;
globalThis.TForm1 = dfm;     