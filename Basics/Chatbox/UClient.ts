import { dfm } from "./UClient.dfm";
import { TObject, unit } from "@tmssoftware/webcore/system"
import { TShiftState, TStringList } from "@tmssoftware/webcore/System.Classes"
import { ColorToHTML, HTMLToColor } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { ShowMessage } from "@tmssoftware/webcore/WEBLib.Dialogs"
import { TWebButton, TWebEdit, TWebLabel, TWebColorPicker } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebSocketClient } from "@tmssoftware/webcore/WEBLib.WebSocketClient"
import { TJSObjectRecord, VK_RETURN } from "@tmssoftware/webcore/WEBLib.Controls"
import { TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TWebChatbox, TMessage } from "@tmssoftware/webcore/WEBLib.Chatbox"

@unit("UClient")
export class TForm43 extends TWebForm
{
   WebPanel1: TWebPanel = null;
   WebButton1: TWebButton = null;
   WebEdit1: TWebEdit = null;
   WebLabel1: TWebLabel = null;
   WebSocketClient1: TWebSocketClient = null;
   WebLabel3: TWebLabel = null;
   WebLabel4: TWebLabel = null;
   WebChatbox1: TWebChatbox = null;
   WebColorPicker1: TWebColorPicker = null;
   WebButton1Click(Sender: TObject): void
   {
      this.Connect();
   }
   WebSocketClient1DataReceived(Sender: TObject, Origin: string, SocketData: TJSObjectRecord): void
   {
      let sl: TStringList = null;
      let s: string = "";
      let msg: TMessage = null;
      s = SocketData.jsobject.toString();
      sl = new TStringList().Create();
      try
      {
         sl.Delimiter = "~";
         sl.StrictDelimiter = true;
         sl.DelimitedText = s;
         if ((sl.Count > 2) && (sl.Get(1) !== this.WebChatbox1.Username))
         {
            msg = this.WebChatbox1.Messages.Add$1();
            msg.ChatMessage = sl.Get(2);
            msg.Sender = sl.Get(1);
            msg.Color = HTMLToColor(sl.Get(0));
         }
      }
      finally
      {
         sl.Free();
      }
   }
   WebSocketClient1Connect(Sender: TObject): void
   {
      this.WebEdit1.Enabled = false;
      this.FConnected = true;
      this.WebButton1.Caption = "Disconnect";
      this.WebChatbox1.InputTextBoxEnabled = true;
      this.WebChatbox1.MessageHint = MSGTEXT;
   }
   WebSocketClient1Disconnect(Sender: TObject): void
   {
      this.FConnected = false;
      this.WebEdit1.Enabled = true;
      this.WebButton1.Caption = "Connect";
      this.WebChatbox1.InputTextBoxEnabled = false;
      this.WebChatbox1.MessageHint = MSGCONNECT;
   }
   WebFormCreate(Sender: TObject): void
   {
      this.WebSocketClient1.HostName = "88.198.69.227";
      this.WebSocketClient1.Port = 8888;
      this.WebChatbox1.MessageHint = MSGCONNECT;
   }
   WebEdit1KeyDown(Sender: TObject, Key: any, Shift: TShiftState): void
   {
      if (Key.get() === VK_RETURN)
      this.Connect();
   }
   WebChatbox1SendMessage(Sender: TObject, Value: TMessage): void
   {
      let s: string = "";
      if (this.FConnected && (Value.ChatMessage !== ""))
      {
         s = ColorToHTML(this.WebChatbox1.OutgoingChatBubbleColor) + "~" + this.WebChatbox1.Username + "~" + Value.ChatMessage;
         // limit message length
         // limit message length
         s = s.substring(1 - 1, 1 - 1 + 256);
         this.WebSocketClient1.Send(s);
      }
   }
   private FConnected: boolean = false;
   private Connect(): void
   {
      if (this.FConnected)
      {
         this.WebSocketClient1.Disconnect();
      }
      else
      {
         if (this.WebEdit1.Text === "")
         ShowMessage("Please enter a name first");
         else
         {
            this.WebChatbox1.Username = this.WebEdit1.Text;
            this.WebChatbox1.OutgoingChatBubbleColor = this.WebColorPicker1.Color;
            this.WebSocketClient1.Connect();
         }
      }
   }
}

export let Form43: TForm43 = null;
const MSGTEXT = "Enter your message here ...";
const MSGCONNECT = "Connect to the chat server first ...";

globalThis.Form43 = null;
globalThis.TForm43 = dfm;