export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 399
  Height = 632
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  TabOrder = 1
  object WebPanel1: TWebPanel
    Left = 0
    Top = 0
    Width = 399
    Height = 100
    ElementClassName = 'toppanel'
    WidthStyle = ssPercent
    Align = alTop
    BorderColor = clSilver
    BorderStyle = bsSingle
    object ResLabel: TWebLabel
      Left = 0
      Top = 0
      Width = 399
      Height = 100
      Align = alClient
      Alignment = taRightJustify
      AutoSize = False
      Caption = '0.0'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -64
      Font.Name = 'DitigalRegular'
      Font.Style = []
      HTMLType = tLABELTAG
      Layout = tlCenter
      ParentFont = False
      Transparent = True
      ExplicitLeft = 309
      ExplicitWidth = 90
      ExplicitHeight = 72
    end
  end
  object WebPanel2: TWebPanel
    Left = 0
    Top = 100
    Width = 399
    Height = 532
    ElementClassName = 'toppanel'
    WidthStyle = ssPercent
    Align = alClient
    BorderColor = clSilver
    BorderStyle = bsSingle
    object WebGridPanel1: TWebGridPanel
      Left = 0
      Top = 0
      Width = 399
      Height = 532
      WidthStyle = ssPercent
      Align = alClient
      ColumnCollection = <
        item
          Value = 25
        end
        item
          Value = 25
        end
        item
          Value = 25
        end
        item
          Value = 25
        end>
      ControlCollection = <
        item
          Column = 0
          Row = 0
          Control = WebButton1
        end
        item
          Column = 0
          Row = 0
          Control = WebButton2
        end
        item
          Column = 0
          Row = 0
          Control = WebButton3
        end
        item
          Column = 0
          Row = 0
          Control = WebButton4
        end
        item
          Column = 0
          Row = 0
          Control = WebButton5
        end
        item
          Column = 0
          Row = 0
          Control = WebButton6
        end
        item
          Column = 0
          Row = 0
          Control = WebButton7
        end
        item
          Column = 0
          Row = 0
          Control = WebButton8
        end
        item
          Column = 0
          Row = 0
          Control = WebButton9
        end
        item
          Column = 0
          Row = 0
          Control = WebButton10
        end
        item
          Column = 0
          Row = 0
          Control = WebButton11
        end
        item
          Column = 0
          Row = 0
          Control = WebButton12
        end
        item
          Column = 0
          Row = 0
          Control = WebButton13
        end
        item
          Column = 0
          Row = 0
          Control = WebButton14
        end
        item
          Column = 0
          Row = 0
          Control = WebButton15
        end
        item
          Column = 0
          Row = 0
          Control = WebButton16
        end
        item
          Column = 0
          Row = 0
          Control = WebButton17
        end
        item
          Column = 0
          Row = 0
          Control = WebButton18
        end
        item
          Column = 0
          Row = 0
          Control = WebButton19
        end
        item
          Column = 0
          Row = 0
          Control = WebButton20
        end>
      Color = clWhite
      GridLineColor = clBlack
      RowCollection = <
        item
          Value = 20
        end
        item
          Value = 20
        end
        item
          Value = 20
        end
        item
          Value = 20
        end
        item
          Value = 20
        end>
      object WebButton1: TWebButton
        Left = 2
        Top = 2
        Width = 96
        Height = 102
        Align = alClient
        Caption = 'AC'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton1Click
      end
      object WebButton2: TWebButton
        Left = 102
        Top = 2
        Width = 96
        Height = 102
        Align = alClient
        Caption = 'Del'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton2Click
      end
      object WebButton3: TWebButton
        Left = 202
        Top = 2
        Width = 96
        Height = 102
        Align = alClient
        Caption = #247
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton3Click
      end
      object WebButton4: TWebButton
        Left = 302
        Top = 2
        Width = 96
        Height = 102
        Align = alClient
        Caption = #215
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton4Click
      end
      object WebButton5: TWebButton
        Left = 2
        Top = 108
        Width = 96
        Height = 102
        Align = alClient
        Caption = '7'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton6: TWebButton
        Left = 102
        Top = 108
        Width = 96
        Height = 102
        Align = alClient
        Caption = '8'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton7: TWebButton
        Left = 202
        Top = 108
        Width = 96
        Height = 102
        Align = alClient
        Caption = '9'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton8: TWebButton
        Left = 302
        Top = 108
        Width = 96
        Height = 102
        Align = alClient
        Caption = '-'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton8Click
      end
      object WebButton9: TWebButton
        Left = 2
        Top = 214
        Width = 96
        Height = 102
        Align = alClient
        Caption = '4'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton10: TWebButton
        Left = 102
        Top = 214
        Width = 96
        Height = 102
        Align = alClient
        Caption = '5'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton11: TWebButton
        Left = 202
        Top = 214
        Width = 96
        Height = 102
        Align = alClient
        Caption = '6'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton12: TWebButton
        Left = 302
        Top = 214
        Width = 96
        Height = 102
        Align = alClient
        Caption = '+'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton12Click
      end
      object WebButton13: TWebButton
        Left = 2
        Top = 320
        Width = 96
        Height = 102
        Align = alClient
        Caption = '1'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton14: TWebButton
        Left = 102
        Top = 320
        Width = 96
        Height = 102
        Align = alClient
        Caption = '2'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton15: TWebButton
        Left = 202
        Top = 320
        Width = 96
        Height = 102
        Align = alClient
        Caption = '3'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton16: TWebButton
        Left = 302
        Top = 320
        Width = 96
        Height = 102
        Align = alClient
        Caption = #177
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton16Click
      end
      object WebButton17: TWebButton
        Left = 2
        Top = 426
        Width = 96
        Height = 102
        Align = alClient
        Caption = '%'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton17Click
      end
      object WebButton18: TWebButton
        Left = 102
        Top = 426
        Width = 96
        Height = 102
        Align = alClient
        Caption = '0'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton5Click
      end
      object WebButton19: TWebButton
        Left = 202
        Top = 426
        Width = 96
        Height = 102
        Align = alClient
        Caption = '.'
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton19Click
      end
      object WebButton20: TWebButton
        Left = 302
        Top = 426
        Width = 96
        Height = 102
        Align = alClient
        Caption = '='
        ElementClassName = 'keybutton'
        ElementFont = efCSS
        OnClick = WebButton20Click
      end
    end
  end
end
`;