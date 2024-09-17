export const dfm = `object Form4: TForm4
  Width = 1003
  Height = 480
  CSSLibrary = cssBootstrap
  ElementFont = efCSS
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  ParentFont = False
  OnCreate = WebFormCreate
  object WebLabel4: TWebLabel
    Left = 224
    Top = 360
    Width = 225
    Height = 23
    Caption = 'InputMessageDialog Demo'
    ElementID = 'title'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel1: TWebLabel
    Left = 664
    Top = 107
    Width = 40
    Height = 16
    Caption = 'Result:'
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object ResAnon: TWebLabel
    Left = 731
    Top = 107
    Width = 134
    Height = 16
    AutoSize = False
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel6: TWebLabel
    Left = 224
    Top = 389
    Width = 233
    Height = 32
    Caption = 'Demo showing various input dialog types and call methods'
    ElementID = 'description'
    HeightPercent = 100.000000000000000000
    WordWrap = True
    WidthStyle = ssPercent
    WidthPercent = 100.000000000000000000
  end
  object WebLabel3: TWebLabel
    Left = 48
    Top = 17
    Width = 55
    Height = 16
    Caption = 'Message:'
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel5: TWebLabel
    Left = 404
    Top = 17
    Width = 37
    Height = 16
    Caption = 'Value:'
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel7: TWebLabel
    Left = 664
    Top = 171
    Width = 40
    Height = 16
    Caption = 'Result:'
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object ResAsync: TWebLabel
    Left = 731
    Top = 171
    Width = 134
    Height = 16
    AutoSize = False
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object WebLabel2: TWebLabel
    Left = 664
    Top = 235
    Width = 40
    Height = 16
    Caption = 'Result:'
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object ResComp: TWebLabel
    Left = 731
    Top = 235
    Width = 134
    Height = 16
    AutoSize = False
    ElementFont = efCSS
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    ParentFont = False
    WidthPercent = 100.000000000000000000
  end
  object DlgTypeList: TWebListBox
    Left = 224
    Top = 97
    Width = 153
    Height = 151
    ElementClassName = 'form-control'
    ElementFont = efCSS
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    Items.Strings = (
      'Warning'
      'Error'
      'Information'
      'Confirmation'
      'Custom')
    ItemIndex = 0
  end
  object WebButton1: TWebButton
    Left = 404
    Top = 104
    Width = 205
    Height = 25
    Caption = 'Get input (anon. method)'
    ElementClassName = 'btn btn-primary'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    TabOrder = 1
    WidthPercent = 100.000000000000000000
    OnClick = WebButton1Click
  end
  object DlgMessageInput: TWebEdit
    Left = 48
    Top = 39
    Width = 329
    Height = 24
    ElementClassName = 'form-control'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    TabOrder = 2
    Text = 'Enter your value'
    WidthPercent = 100.000000000000000000
  end
  object WebInputMessageDlg1: TWebInputMessageDlg
    Left = 329
    Top = 296
    Width = 24
    Height = 24
    Buttons = []
    CustomButtons = <>
    Opacity = 0.200000000000000000
    ElementButtonClassName = 'btn'
    ElementDialogClassName = 'shadow-lg p-3 mb-5 bg-white rounded'
    ElementTitleClassName = 'text-body'
    ElementContentClassName = 'text-body'
  end
  object DlgInputList: TWebListBox
    Left = 48
    Top = 97
    Width = 152
    Height = 262
    ElementClassName = 'form-control'
    ElementFont = efCSS
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = DlgInputListClick
    Items.Strings = (
      'Text'
      'Number'
      'File'
      'Date'
      'Time'
      'DateTime'
      'Week'
      'Month'
      'Password'
      'Search'
      'Email'
      'URL')
    ItemIndex = 0
  end
  object DlgValueInput: TWebEdit
    Left = 404
    Top = 39
    Width = 329
    Height = 24
    ChildOrder = 10
    ElementClassName = 'form-control'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    TabOrder = 2
    WidthPercent = 100.000000000000000000
  end
  object WebButton2: TWebButton
    Left = 404
    Top = 168
    Width = 205
    Height = 25
    Caption = 'Get input (async/await)'
    ChildOrder = 12
    ElementClassName = 'btn btn-primary'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    TabOrder = 1
    WidthPercent = 100.000000000000000000
    OnClick = WebButton2Click
  end
  object WebButton3: TWebButton
    Left = 404
    Top = 232
    Width = 205
    Height = 25
    Caption = 'Get input (component)'
    ChildOrder = 12
    ElementClassName = 'btn btn-primary'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    TabOrder = 1
    WidthPercent = 100.000000000000000000
    OnClick = WebButton3Click
  end
end
`;