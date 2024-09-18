export const dfm = `object Form4: TForm4
  Width = 640
  Height = 480
  FormContainer = 'appcontent'
  object WebButton1: TWebButton
    Left = 224
    Top = 184
    Width = 153
    Height = 25
    Caption = 'Open new runtime form'
    ElementFont = efCSS
    HeightPercent = 100.000000000000000000
    WidthStyle = ssAuto
    WidthPercent = 100.000000000000000000
    OnClick = WebButton1Click
  end
  object WebEdit1: TWebEdit
    Left = 224
    Top = 144
    Width = 153
    Height = 22
    ChildOrder = 1
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    TextHint = 'Name'
    WidthPercent = 100.000000000000000000
  end
end
`;