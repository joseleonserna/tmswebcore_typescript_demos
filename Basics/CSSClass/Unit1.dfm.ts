export const dfm = `object Form1: TForm1
  Width = 640
  Height = 480
  ElementFont = efCSS
  object WebLabel1: TWebLabel
    Left = 160
    Top = 48
    Width = 101
    Height = 13
    Caption = 'TWebCSSClass demo'
    ElementID = 'title'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel2: TWebLabel
    Left = 160
    Top = 67
    Width = 331
    Height = 13
    Caption = 
      'Shows how a design-time editable CSS class is used to style elem' +
      'ents'
    ElementID = 'description'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebHTMLDiv1: TWebHTMLDiv
    Left = 95
    Top = 224
    Width = 209
    Height = 145
    ElementClassName = 'myfirstcss'
    ElementFont = efCSS
    HTML.Strings = (
      
        'First DIV styled by the TWebCSSClass component with CSS class na' +
        'me myfirstcss')
    Role = ''
  end
  object WebButton1: TWebButton
    Left = 240
    Top = 400
    Width = 185
    Height = 49
    Caption = 'Change CSS'
    ChildOrder = 1
    HeightPercent = 100.000000000000000000
    TabOrder = 1
    WidthPercent = 100.000000000000000000
    OnClick = WebButton1Click
  end
  object WebHTMLDiv2: TWebHTMLDiv
    Left = 342
    Top = 224
    Width = 209
    Height = 145
    ElementClassName = 'mysecondcss'
    ChildOrder = 2
    ElementFont = efCSS
    HTML.Strings = (
      
        'Second DIV styled by the TWebCSSClass component with CSS class n' +
        'ame mysecondcss')
    Role = ''
  end
  object WebCSSClass1: TWebCSSClass
    BackgroundColor = clInfoBk
    Border.Color = clRed
    Border.Style = bsgroove
    Border.Width = px2
    BorderRadius = 10
    CSSClassName = 'myfirstcss'
    Opacity = 1.000000000000000000
    Padding.Value = 10.000000000000000000
    Left = 128
    Top = 176
  end
  object WebCSSClass2: TWebCSSClass
    BackgroundColor = clInactiveCaption
    Border.Color = cl3DDkShadow
    Border.Style = bsdotted
    Border.Width = px2
    BoxShadow.HOffset = 8
    BoxShadow.VOffset = 8
    BoxShadow.Blur = 10
    BoxShadow.Color = clSilver
    BoxShadow.Spread = 3
    CSSClassName = 'mysecondcss'
    Color = clWhite
    Opacity = 1.000000000000000000
    Padding.Value = 10.000000000000000000
    Left = 375
    Top = 176
  end
end
`;