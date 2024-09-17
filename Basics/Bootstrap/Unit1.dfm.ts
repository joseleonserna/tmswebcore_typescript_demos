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
  object WebLabel1: TWebLabel
    Left = 64
    Top = 248
    Width = 63
    Height = 16
    Caption = 'WebLabel1'
    ElementClassName = 'h5'
  end
  object WebLabel2: TWebLabel
    Left = 64
    Top = 296
    Width = 237
    Height = 16
    Caption = 'Using a bootstrap theme in a web project'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 64
    Top = 2
    Width = 457
    Height = 32
    Caption = 
      'Demo showing a bootstrap theme applied to standard controls of t' +
      'he TMS WEB Core framework'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebEdit1: TWebEdit
    Left = 64
    Top = 42
    Width = 121
    Height = 24
    CharCase = wecLowerCase
    ElementClassName = 'form-control'
    TextHint = 'Set text to add ...'
  end
  object WebButton1: TWebButton
    Left = 204
    Top = 40
    Width = 75
    Height = 30
    Caption = 'Add'
    ElementClassName = 'btn btn-primary'
    TabOrder = 1
    OnClick = WebButton1Click
  end
  object WebMemo1: TWebMemo
    Left = 64
    Top = 88
    Width = 215
    Height = 89
    AutoSize = False
    ElementClassName = 'form-control'
    SelLength = 0
    SelStart = 0
    TabOrder = 2
  end
  object WebComboBox1: TWebComboBox
    Left = 64
    Top = 199
    Width = 215
    Height = 24
    TabOrder = 3
    OnChange = WebComboBox1Change
    ItemIndex = -1
  end
end
`;