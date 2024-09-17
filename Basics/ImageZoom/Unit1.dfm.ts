export const dfm = `object Form4: TForm4
  Left = 0
  Top = 0
  Width = 975
  Height = 913
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebLabel1: TWebLabel
    Left = 43
    Top = 480
    Width = 181
    Height = 16
    Caption = 'TWebImageZoom control demo'
    ElementID = 'title'
  end
  object WebLabel2: TWebLabel
    Left = 43
    Top = 502
    Width = 332
    Height = 32
    Caption = 
      'This demo shows the use of the TWebImageZoom control in combinat' +
      'ion with the TWebResponsiveGridPanel.'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebResponsiveGridPanel1: TWebResponsiveGridPanel
    Left = 37
    Top = 24
    Width = 900
    Height = 400
    HeightStyle = ssAuto
    WidthStyle = ssPercent
    WidthPercent = 90
    ChildOrder = 1
    ControlCollection = <>
    Color = clWhite
    Layout = <
      item
        Description = 'Smartphone'
        Style = '1fr'
        Width = 575
      end
      item
        Description = 'Tablet'
        Style = '1fr 1fr'
        Width = 768
      end
      item
        Description = 'Desktop'
        Style = '1fr 1fr 1fr'
        Width = 991
      end
      item
        Description = 'Large Desktop'
        Style = '1fr 1fr 1fr 1fr'
        Width = 1199
      end>
  end
end
`;