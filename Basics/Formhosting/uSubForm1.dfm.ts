export const dfm = `object SubForm1: TSubForm1
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  TabOrder = 1
  object WebLabel1: TWebLabel
    Left = 16
    Top = 16
    Width = 221
    Height = 33
    Caption = 'This is Sub Form 1'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -27
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object txtSelection: TWebLabel
    Left = 16
    Top = 184
    Width = 3
    Height = 13
  end
  object lbTexts: TWebListBox
    Left = 16
    Top = 72
    Width = 221
    Height = 97
    Color = clYellow
    ItemHeight = 13
    ItemIndex = -1
    TabOrder = 0
    OnClick = lbTextsClick
  end
end
`;