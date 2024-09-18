export const dfm = `object Form43: TForm43
  Width = 973
  Height = 622
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  ParentFont = False
  OnCreate = WebFormCreate
  object WebLabel3: TWebLabel
    Left = 32
    Top = 552
    Width = 167
    Height = 13
    Caption = 'WebSocket based chat client demo'
    ElementID = 'title'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel4: TWebLabel
    Left = 32
    Top = 571
    Width = 262
    Height = 13
    Caption = 'Usage of TWebSocketClient and TWebChatBox control'
    ElementID = 'description'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebPanel1: TWebPanel
    Left = 0
    Top = 0
    Width = 973
    Height = 50
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    Align = alTop
    BorderColor = clSilver
    BorderStyle = bsSingle
    Caption = 'WebPanel1'
    object WebLabel1: TWebLabel
      AlignWithMargins = True
      Left = 10
      Top = 10
      Width = 31
      Height = 30
      Margins.Left = 10
      Margins.Top = 10
      Margins.Right = 0
      Margins.Bottom = 10
      Align = alLeft
      Caption = 'Name:'
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
      ExplicitHeight = 13
    end
    object WebButton1: TWebButton
      AlignWithMargins = True
      Left = 867
      Top = 10
      Width = 96
      Height = 30
      Margins.Left = 10
      Margins.Top = 10
      Margins.Right = 10
      Margins.Bottom = 10
      Align = alRight
      Caption = 'Connect'
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
      OnClick = WebButton1Click
    end
    object WebEdit1: TWebEdit
      AlignWithMargins = True
      Left = 51
      Top = 10
      Width = 696
      Height = 30
      Margins.Left = 10
      Margins.Top = 10
      Margins.Right = 0
      Margins.Bottom = 10
      Align = alClient
      HeightPercent = 100.000000000000000000
      TabOrder = 1
      WidthPercent = 100.000000000000000000
      OnKeyDown = WebEdit1KeyDown
    end
    object WebColorPicker1: TWebColorPicker
      AlignWithMargins = True
      Left = 757
      Top = 10
      Width = 100
      Height = 30
      Margins.Left = 10
      Margins.Top = 10
      Margins.Right = 0
      Margins.Bottom = 10
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
      Align = alRight
      ChildOrder = 3
      Color = clInfoBk
      Role = ''
    end
  end
  object WebChatbox1: TWebChatbox
    Left = 0
    Top = 50
    Width = 973
    Height = 572
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    Align = alClient
    Enabled = False
    TabOrder = 1
    Messages = <>
    MessageHint = 'Enter your message here ...'
    ChatMessageFont.Charset = DEFAULT_CHARSET
    ChatMessageFont.Color = clWindowText
    ChatMessageFont.Height = -16
    ChatMessageFont.Name = 'Tahoma'
    ChatMessageFont.Style = []
    ChatMessageInfoFont.Charset = DEFAULT_CHARSET
    ChatMessageInfoFont.Color = clWindowText
    ChatMessageInfoFont.Height = -11
    ChatMessageInfoFont.Name = 'Tahoma'
    ChatMessageInfoFont.Style = [fsItalic]
    InputTextBoxFont.Charset = DEFAULT_CHARSET
    InputTextBoxFont.Color = clWindowText
    InputTextBoxFont.Height = -16
    InputTextBoxFont.Name = 'Tahoma'
    InputTextBoxFont.Style = []
    SendButtonFont.Charset = DEFAULT_CHARSET
    SendButtonFont.Color = clWindowText
    SendButtonFont.Height = -16
    SendButtonFont.Name = 'Tahoma'
    SendButtonFont.Style = []
    EmojiPicker = False
    DateTimeFormat = 'hh:nn:ss dd/mm/yy'
    OnSendMessage = WebChatbox1SendMessage
    Username = 'anonymous'
    SendButtonColor = clWindow
    OutgoingChatBubbleColor = clMoneyGreen
    IncomingChatBubbleColor = clSilver
    SendButtonBorderColor = clNone
    InputTextBoxEnabled = False
    ExplicitLeft = 123
    ExplicitTop = 74
    ExplicitWidth = 505
    ExplicitHeight = 420
  end
  object WebSocketClient1: TWebSocketClient
    OnConnect = WebSocketClient1Connect
    OnDisconnect = WebSocketClient1Disconnect
    OnDataReceived = WebSocketClient1DataReceived
    Left = 128
    Top = 152
  end
end
`;