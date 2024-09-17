export const dfm = `object Form2: TForm2
  Left = 0
  Top = 0
  Width = 809
  Height = 561
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  object WebLabel1: TWebLabel
    Left = 8
    Top = 5
    Width = 106
    Height = 13
    Caption = 'Select local text file(s)'
    ElementFont = efCSS
  end
  object WebLabel2: TWebLabel
    Left = 8
    Top = 456
    Width = 104
    Height = 13
    Caption = 'Local File Picker Demo'
    ElementID = 'title'
  end
  object WebLabel3: TWebLabel
    Left = 8
    Top = 488
    Width = 104
    Height = 13
    Caption = 'Local File Picker Demo'
    ElementID = 'description'
  end
  object WebPageControl1: TWebPageControl
    Left = 8
    Top = 68
    Width = 793
    Height = 365
    Anchors = [akLeft, akTop, akRight]
    ElementFont = efCSS
    SelectedColor = clSilver
    TabOrder = 0
  end
  object WebFilePicker1: TWebFilePicker
    Left = 8
    Top = 24
    Width = 313
    Height = 19
    Accept = '.txt'
    ElementFont = efCSS
    Multifile = True
    OnChange = WebFilePicker1Change
    OnGetFileAsText = WebFilePicker1GetFileAsText
  end
end
`;