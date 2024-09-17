export const dfm = `object SubForm2: TSubForm2
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
    Caption = 'This is Sub Form 2'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -27
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebButton1: TWebButton
    Left = 72
    Top = 124
    Width = 96
    Height = 25
    Caption = 'WebButton1'
    TabOrder = 0
    OnClick = WebButton1Click
  end
  object WebMemo1: TWebMemo
    Left = 72
    Top = 155
    Width = 345
    Height = 145
    AutoSize = False
    Lines.Strings = (
      'Sample memo control')
    SelLength = 0
    SelStart = 21
    TabOrder = 1
  end
end
`;