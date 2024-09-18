export const dfm = `object Form2: TForm2
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  TabOrder = 1
  object WebLabel1: TWebLabel
    Left = 40
    Top = 32
    Width = 90
    Height = 35
    Caption = 'Form 2'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clRed
    Font.Height = -29
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel2: TWebLabel
    Left = 40
    Top = 123
    Width = 75
    Height = 16
    Caption = 'Preset value:'
  end
  object WebButton2: TWebButton
    Left = 40
    Top = 184
    Width = 281
    Height = 57
    Caption = 'Close form'
    OnClick = WebButton2Click
  end
  object frm2Edit: TWebEdit
    Left = 121
    Top = 120
    Width = 209
    Height = 24
    TabOrder = 1
  end
end
`;