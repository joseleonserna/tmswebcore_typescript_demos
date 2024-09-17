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
  OnCreate = WebFormCreate
  object WebLabel5: TWebLabel
    Left = 70
    Top = 32
    Width = 203
    Height = 23
    Caption = 'EditAutoComplete Demo'
    ElementID = 'title'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel1: TWebLabel
    Left = 70
    Top = 120
    Width = 49
    Height = 16
    Caption = 'Country:'
  end
  object WebLabel2: TWebLabel
    Left = 70
    Top = 74
    Width = 414
    Height = 16
    Caption = 
      'Start typing the name of a country to display a list of availabl' +
      'e countries.'
  end
  object WebLabel6: TWebLabel
    Left = 70
    Top = 182
    Width = 484
    Height = 32
    Caption = 
      'The EditAutoComplete allows easy filtering and selection of pre-' +
      'defined values in an edit control.'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebEditAutocomplete1: TWebEditAutoComplete
    Left = 166
    Top = 115
    Width = 219
    Height = 24
    BorderStyle = bsSingle
    Color = clWhite
    TabStop = True
    TabOrder = 0
    Text = ''
    PopupHeight = 147
  end
end
`;