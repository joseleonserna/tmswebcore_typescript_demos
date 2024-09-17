export const dfm = `object Form4: TForm4
  Color = clWhite
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Size = 10
  Font.Style = []
  FormContainer = 'appcontent'
  FormStyle = fsNormal
  Height = 480
  Left = 0
  TabOrder = 1
  Top = 144
  Width = 640
  object WebLabel3: TWebLabel
    Caption = 'Align Demo'
    ElementID = 'title'
    ElementPosition = epRelative
    Font.Charset = ANSI_CHARSET
    Font.Color = clBlack
    Font.Height = -11
    Font.Name = 'Arial'
    Font.Size = 8
    Font.Style = []
    Height = 38
    Left = 248
    Top = 312
    Width = 640
  end
  object WebLabel4: TWebLabel
    Caption = 'Align Demo'
    ElementID = 'description'
    ElementPosition = epRelative
    Font.Charset = ANSI_CHARSET
    Font.Color = clBlack
    Font.Height = -11
    Font.Name = 'Arial'
    Font.Size = 8
    Font.Style = []
    Height = 19
    Left = 256
    Top = 320
    Width = 96
  end
  object LeftPanel: TWebPanel
    Align = alLeft
    Color = clBtnFace
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 335
    Left = 0
    TabOrder = 0
    TabStop = False
    Top = 0
    Width = 150
    object WebLabel1: TWebLabel
      Align = alTop
      Caption = 'Left aligned'
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 16
      Left = 0
      Top = 0
      Width = 148
    end
    object WebButton1: TWebButton
      Align = alBottom
      Caption = 'Bottom button'
      Color = clNone
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 25
      Left = 0
      OnClick = WebButton1Click
      Role = 'button'
      TabOrder = 0
      Top = 307
      Width = 147
    end
  end
  object ClientPanel: TWebPanel
    Align = alClient
    Caption = 'ClientPanel'
    Color = clBtnFace
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 335
    Left = 155
    TabOrder = 0
    TabStop = False
    Top = 0
    Width = 485
    object ListChildPanel: TWebPanel
      Align = alTop
      Caption = 'ListChildPanel'
      Color = clBtnFace
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 249
      Left = 0
      TabOrder = 0
      TabStop = False
      Top = 0
      Width = 483
      object WebLabel2: TWebLabel
        Align = alTop
        Alignment = taCenter
        AutoSize = False
        Caption = 'Top aligned child panel'
        Font.Charset = ANSI_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Arial'
        Font.Size = 8
        Font.Style = []
        Height = 16
        Left = 0
        Top = 0
        Width = 481
      end
      object WebListBox1: TWebListBox
        Align = alRight
        Color = clWindow
        Font.Charset = ANSI_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Arial'
        Font.Size = 8
        Font.Style = []
        Height = 231
        ItemHeight = 0
        Items.Strings = (
          'Right aligned'
        )
        Left = 360
        MultiSelect = False
        Role = 'listbox'
        ShowFocus = True
        TabOrder = 0
        Top = 16
        Width = 121
      end
      object WebListBox2: TWebListBox
        Align = alLeft
        Color = clWindow
        Font.Charset = ANSI_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Arial'
        Font.Size = 8
        Font.Style = []
        Height = 231
        ItemHeight = 0
        Items.Strings = (
          'Left aligned'
        )
        Left = 0
        MultiSelect = False
        Role = 'listbox'
        ShowFocus = True
        TabOrder = 1
        Top = 16
        Width = 121
      end
    end
  end
  object WebSplitter1: TWebSplitter
    Align = alLeft
    Color = clGray
    Cursor = crHSplit
    Height = 335
    Left = 150
    Top = 0
    Width = 5
  end
end
`;