export const dfm = `object Form4: TForm4
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebLabel4: TWebLabel
    Left = 48
    Top = 224
    Width = 179
    Height = 23
    Caption = 'MessageDialog Demo'
    ElementID = 'title'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel1: TWebLabel
    Left = 187
    Top = 66
    Width = 40
    Height = 16
    Caption = 'Result:'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel2: TWebLabel
    Left = 243
    Top = 66
    Width = 134
    Height = 16
    AutoSize = False
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel6: TWebLabel
    Left = 48
    Top = 253
    Width = 297
    Height = 32
    Caption = 
      'Demo showing various custom dialog types and the dialog response' +
      ' codes'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebListBox2: TWebListBox
    Left = 48
    Top = 66
    Width = 121
    Height = 97
    ItemIndex = 0
    Items.Strings = (
      'Warning'
      'Error'
      'Information'
      'Confirmation'
      'Custom')
  end
  object WebButton1: TWebButton
    Left = 48
    Top = 169
    Width = 121
    Height = 25
    Caption = 'Show message'
    TabOrder = 1
    OnClick = WebButton1Click
  end
  object WebEdit1: TWebEdit
    Left = 48
    Top = 39
    Width = 329
    Height = 24
    TabOrder = 2
    Text = 'Sample message text'
  end
end
`;