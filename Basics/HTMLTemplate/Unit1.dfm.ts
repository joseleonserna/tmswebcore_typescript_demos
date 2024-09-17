export const dfm = `object Form1: TForm1
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
    Left = 64
    Top = 232
    Width = 63
    Height = 16
    Caption = 'WebLabel1'
    ElementID = 'lbl'
  end
  object WebEdit1: TWebEdit
    Left = 64
    Top = 42
    Width = 121
    Height = 24
    ElementID = 'edt'
    TabOrder = 0
  end
  object WebButton1: TWebButton
    Left = 200
    Top = 40
    Width = 75
    Height = 25
    Caption = 'Add'
    ElementID = 'btn'
    TabOrder = 1
    OnClick = WebButton1Click
  end
  object WebMemo1: TWebMemo
    Left = 64
    Top = 88
    Width = 211
    Height = 89
    AutoSize = False
    ElementID = 'mem'
    SelLength = 0
    SelStart = 0
    TabOrder = 2
  end
  object WebComboBox1: TWebComboBox
    Left = 64
    Top = 191
    Width = 211
    Height = 24
    ElementID = 'sel'
    ItemIndex = -1
    TabOrder = 3
    Text = 'WebComboBox1'
    OnChange = WebComboBox1Change
  end
end
`;