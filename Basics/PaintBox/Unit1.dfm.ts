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
    Top = 40
    Width = 533
    Height = 32
    Caption = 
      'Say good-bye to the world of native clients only. Welcome in the' +
      ' wonderful TMS Web world, bringing Delphi developers everywhere:' +
      ' native clients and web clients!'
    WordWrap = True
  end
  object WebLabel2: TWebLabel
    Left = 64
    Top = 317
    Width = 428
    Height = 32
    Caption = 
      'With Pascal code you can draw on the TPaintbox control using the' +
      ' familiar TCanvas object'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebLabel3: TWebLabel
    Left = 64
    Top = 295
    Width = 169
    Height = 16
    Caption = 'Canvas drawing on TPaintbox'
    ElementID = 'title'
  end
  object WebPaintBox1: TWebPaintBox
    Left = 64
    Top = 87
    Width = 235
    Height = 137
    OnPaint = WebPaintBox1Paint
  end
  object WebPaintBox2: TWebPaintBox
    Left = 342
    Top = 87
    Width = 235
    Height = 137
    OnPaint = WebPaintBox2Paint
  end
end
`;