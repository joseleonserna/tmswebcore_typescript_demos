export const dfm = `object frmMain: TfrmMain
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  object WebLabel1: TWebLabel
    Left = 67
    Top = 8
    Width = 89
    Height = 13
    Caption = 'Data module demo'
    ElementID = 'title'
  end
  object WebLabel2: TWebLabel
    Left = 67
    Top = 37
    Width = 377
    Height = 13
    Caption = 
      'This demo shows using a data module and calling a function from ' +
      'a datamodule'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object btAnswer: TWebButton
    Left = 168
    Top = 112
    Width = 169
    Height = 25
    Caption = 'Show the Answer'
    OnClick = btAnswerClick
  end
end
`;