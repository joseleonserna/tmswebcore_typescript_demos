export const dfm = `object Form3: TForm3
  Width = 640
  Height = 480
  FormContainer = 'appcontent'
  OnClose = WebFormClose
  object WebLabel1: TWebLabel
    Left = 40
    Top = 32
    Width = 90
    Height = 35
    Caption = 'Form 3'
    Color = 16711422
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clRed
    Font.Height = -29
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel3: TWebLabel
    Left = 24
    Top = 400
    Width = 126
    Height = 13
    Caption = 'Auto routed multiform app'
    Color = 16711422
    ElementID = 'title'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel6: TWebLabel
    Left = 24
    Top = 422
    Width = 553
    Height = 26
    Caption = 
      'Demo showing automatic routed application. Use browser history t' +
      'o navigate through forms and copy actual link to open app on sam' +
      'e form in other browser tab'
    Color = 16711422
    ElementID = 'description'
    HeightPercent = 100.000000000000000000
    WordWrap = True
    WidthStyle = ssPercent
    WidthPercent = 100.000000000000000000
  end
  object WebButton2: TWebButton
    Left = 40
    Top = 100
    Width = 265
    Height = 57
    Caption = 'Go back'
    ChildOrder = 2
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebButton2Click
  end
  object WebButton3: TWebButton
    Left = 40
    Top = 175
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