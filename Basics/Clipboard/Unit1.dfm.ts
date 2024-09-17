export const dfm = `object Form1: TForm1
  Width = 487
  Height = 407
  FormContainer = 'appcontent'
  OnCreate = WebFormCreate
  object WebImageControl1: TWebImageControl
    Left = 8
    Top = 8
    Width = 129
    Height = 57
    ChildOrder = 2
  end
  object WebLabel1: TWebLabel
    Left = 8
    Top = 168
    Width = 74
    Height = 13
    Caption = 'Clipboard demo'
    ElementID = 'title'
  end
  object WebLabel2: TWebLabel
    Left = 8
    Top = 187
    Width = 445
    Height = 13
    Caption = 
      'Use Ctrl-V to paste an image, a plain text or an HTML text onto ' +
      'the page from your clipboard'
    ElementID = 'description'
  end
  object WebMemo1: TWebMemo
    Left = 162
    Top = 8
    Width = 243
    Height = 113
    AutoSize = False
    SelLength = 0
    SelStart = 0
  end
  object WebHTMLDiv1: TWebHTMLDiv
    Left = 8
    Top = 90
    Width = 129
    Height = 55
    ChildOrder = 2
    Role = ''
  end
  object WebClipboard1: TWebClipboard
    OnImageData = WebClipboard1ImageData
    OnTextData = WebClipboard1TextData
    Left = 400
    Top = 136
  end
end
`;