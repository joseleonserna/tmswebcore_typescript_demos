export const dfm = `object Form1: TForm1
  Width = 734
  Height = 480
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  ParentFont = False
  OnClose = WebFormClose
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
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel2: TWebLabel
    Left = 40
    Top = 360
    Width = 151
    Height = 16
    Caption = 'Auto routed multiform app'
    ElementID = 'title'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel6: TWebLabel
    Left = 40
    Top = 382
    Width = 553
    Height = 32
    Caption = 
      'Demo showing automatic routed application. Use browser history t' +
      'o navigate through forms and copy actual link to open app on sam' +
      'e form in other browser tab'
    ElementID = 'description'
    HeightPercent = 100.000000000000000000
    WordWrap = True
    WidthStyle = ssPercent
    WidthPercent = 100.000000000000000000
  end
  object WebButton1: TWebButton
    Left = 40
    Top = 100
    Width = 265
    Height = 57
    Caption = 'Open Form2'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebButton1Click
  end
  object WebButton2: TWebButton
    Left = 40
    Top = 175
    Width = 265
    Height = 57
    Caption = 'Open Form3'
    ChildOrder = 6
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebButton2Click
  end
  object WebButton3: TWebButton
    Left = 40
    Top = 250
    Width = 265
    Height = 57
    Caption = 'Open Form4'
    ChildOrder = 6
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebButton3Click
  end
end
`;