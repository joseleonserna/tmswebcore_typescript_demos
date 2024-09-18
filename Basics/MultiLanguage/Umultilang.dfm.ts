export const dfm = `object Form1: TForm1
  Width = 721
  Height = 480
  CSSLibrary = cssBootstrap
  ElementFont = efCSS
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Arial'
  Font.Style = []
  FormContainer = 'appcontent'
  ParentFont = False
  object WebImageControl1: TWebImageControl
    Left = 557
    Top = 100
    Width = 57
    Height = 33
    Cursor = crHandPoint
    HeightStyle = ssAuto
    WidthStyle = ssAuto
    OnClick = WebImageControl1Click
    URL = 'english.png'
  end
  object WebLabel1: TWebLabel
    Left = 557
    Top = 56
    Width = 124
    Height = 14
    Caption = 'Select your <br>language'
    ElementFont = efCSS
    HTMLType = tSPAN
  end
  object WebImageControl2: TWebImageControl
    Tag = 1
    Left = 557
    Top = 148
    Width = 57
    Height = 33
    Cursor = crHandPoint
    HeightStyle = ssAuto
    WidthStyle = ssAuto
    ChildOrder = 2
    OnClick = WebImageControl1Click
    URL = 'german.png'
  end
  object WebImageControl3: TWebImageControl
    Tag = 2
    Left = 557
    Top = 196
    Width = 57
    Height = 33
    Cursor = crHandPoint
    HeightStyle = ssAuto
    WidthStyle = ssAuto
    ChildOrder = 3
    OnClick = WebImageControl1Click
    URL = 'french.png'
  end
  object WebLabel2: TWebLabel
    Left = 405
    Top = 8
    Width = 217
    Height = 14
    Caption = 'TMS WEB Core multi-language template demo'
    ElementID = 'title'
  end
  object WebLabel3: TWebLabel
    Left = 405
    Top = 28
    Width = 313
    Height = 14
    Caption = 'Three language template files used by TMS WEB Core application'
    ElementID = 'description'
  end
  object WebButton1: TWebButton
    Left = 232
    Top = 224
    Width = 96
    Height = 25
    Caption = 'Login'
    ChildOrder = 6
    ElementID = 'login'
    OnClick = WebButton1Click
  end
  object WebEdit1: TWebEdit
    Left = 368
    Top = 232
    Width = 121
    Height = 22
    ChildOrder = 7
    ElementClassName = 'form-control'
    ElementID = 'user'
    ElementFont = efCSS
  end
  object WebEdit2: TWebEdit
    Left = 368
    Top = 260
    Width = 121
    Height = 22
    ChildOrder = 8
    ElementClassName = 'form-control'
    ElementID = 'email'
    ElementFont = efCSS
  end
end
`;