export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  Caption = 'Hello world'
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebLabel1: TWebLabel
    Left = 40
    Top = 32
    Width = 90
    Height = 35
    Caption = 'Form 1'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clRed
    Font.Height = -29
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel2: TWebLabel
    Left = 40
    Top = 360
    Width = 119
    Height = 16
    Caption = 'Multiform application'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 40
    Top = 392
    Width = 479
    Height = 32
    Caption = 
      'Demo showing a web application consisting of two form files and ' +
      'showing the form either on top of the main form or launching it ' +
      'as a new web page'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebButton1: TWebButton
    Left = 40
    Top = 253
    Width = 265
    Height = 57
    Caption = 'Click here to open the second form'
    OnClick = WebButton1Click
  end
  object WebEdit1: TWebEdit
    Left = 40
    Top = 88
    Width = 265
    Height = 24
    TabOrder = 1
    Text = 'sample text edit'
  end
  object WebRadioGroup1: TWebRadioGroup
    Left = 40
    Top = 118
    Width = 265
    Height = 129
    Caption = ''
    ChildOrder = 7
    Columns = 1
    ItemIndex = 0
    Items.Strings = (
      'Regular form'
      'Popup form'
      'Popup form with caption'
      'Resizeable popup form with caption')
    Role = ''
  end
end
`;