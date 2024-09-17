export const dfm = `object FrmMain: TFrmMain
  Color = clWhite
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Size = 10
  Font.Style = []
  FormContainer = 'appcontent'
  FormStyle = fsNormal
  Height = 738
  Left = 0
  OnCreate = WebFormCreate
  TabOrder = 1
  Top = 144
  Width = 893
  object WebLabel1: TWebLabel
    Caption = 'Main form'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 16
    Left = 32
    Top = 48
    Width = 59
  end
  object WebLabel2: TWebLabel
    Caption = 'Hosting forms demo'
    ElementID = 'title'
    ElementPosition = epRelative
    Font.Charset = ANSI_CHARSET
    Font.Color = clBlack
    Font.Height = -11
    Font.Name = 'Arial'
    Font.Size = 8
    Font.Style = []
    Height = 38
    Left = 32
    Top = 8
    Width = 893
  end
  object WebLabel3: TWebLabel
    Caption = 'Hosting forms demo'
    ElementID = 'description'
    ElementPosition = epRelative
    Font.Charset = ANSI_CHARSET
    Font.Color = clBlack
    Font.Height = -11
    Font.Name = 'Arial'
    Font.Size = 8
    Font.Style = []
    Height = 19
    Left = 32
    Top = 26
    Width = 166
  end
  object txtSampleText: TWebEdit
    Alignment = taLeftJustify
    Color = clWindow
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 24
    HideSelection = False
    Left = 32
    ShowFocus = True
    TabOrder = 0
    Text = 'txtSampleText'
    Top = 80
    Width = 121
  end
  object lbTextsMain: TWebListBox
    Color = clWindow
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 97
    ItemHeight = 0
    Left = 232
    MultiSelect = False
    Role = 'listbox'
    ShowFocus = True
    TabOrder = 1
    Top = 80
    Width = 150
  end
  object btCreateSubF1: TWebButton
    Caption = 'Create subform TForm1'
    Color = clNone
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 25
    Left = 32
    OnClick = btCreateSubF1Click
    Role = 'button'
    TabOrder = 2
    Top = 192
    Width = 169
  end
  object HostPanel: TWebPanel
    Caption = 'HostPanel'
    Color = clBtnFace
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 498
    Left = 32
    TabOrder = 0
    TabStop = False
    Top = 223
    Width = 841
  end
  object btRemoveSubForm: TWebButton
    Caption = 'Remove subform'
    Color = clNone
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 25
    Left = 388
    OnClick = btRemoveSubFormClick
    Role = 'button'
    TabOrder = 4
    Top = 192
    Width = 125
  end
  object btTransferSet: TWebButton
    Caption = 'Set subform items'
    Color = clNone
    Enabled = False
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 25
    Left = 393
    OnClick = btTransferSetClick
    Role = 'button'
    TabOrder = 5
    Top = 116
    Width = 157
  end
  object btCreateSubF2: TWebButton
    Caption = 'Create subform TForm2'
    Color = clNone
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 25
    Left = 213
    OnClick = btCreateSubF2Click
    Role = 'button'
    TabOrder = 6
    Top = 192
    Width = 169
  end
  object btTransferGet: TWebButton
    Caption = 'Get subform items'
    Color = clNone
    Enabled = False
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 25
    Left = 393
    OnClick = btTransferGetClick
    Role = 'button'
    TabOrder = 7
    Top = 152
    Width = 157
  end
  object WebButton2: TWebButton
    Caption = 'Clear'
    Color = clNone
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Height = 25
    Left = 393
    OnClick = WebButton2Click
    Role = 'button'
    TabOrder = 8
    Top = 80
    Width = 157
  end
  object WebBitBtn1: TWebBitBtn
    Color = clBtnFace
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 10
    Font.Style = []
    Glyph.Data = {}
    Height = 25
    Left = 159
    MaterialGlyph = 'add'
    OnClick = WebBitBtn1Click
    TabOrder = 9
    Top = 79
    Width = 67
  end
end
`;