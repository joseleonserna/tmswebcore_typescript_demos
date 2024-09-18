export const dfm = `object FormRegexDemo: TFormRegexDemo
  Caption = 'Regular Expression Demo'
  Color = clWhite
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -15
  Font.Name = 'Tahoma'
  Font.Size = 11
  Font.Style = []
  FormContainer = 'appcontent'
  FormStyle = fsNormal
  Height = 670
  Left = 0
  OnCreate = WebFormCreate
  TabOrder = 1
  Top = 143
  Width = 978
  object WebLabel7: TWebLabel
    Caption = 'Regular Expressions Demo'
    ElementID = 'title'
    ElementPosition = epRelative
    Font.Charset = ANSI_CHARSET
    Font.Color = clBlack
    Font.Height = -11
    Font.Name = 'Arial'
    Font.Size = 8
    Font.Style = []
    Height = 37
    Left = 23
    Top = 608
    Width = 978
  end
  object WebLabel8: TWebLabel
    Caption = 'Usage of regular expressions'
    ElementID = 'description'
    ElementPosition = epRelative
    Font.Charset = ANSI_CHARSET
    Font.Color = clBlack
    Font.Height = -11
    Font.Name = 'Arial'
    Font.Size = 8
    Font.Style = []
    Height = 18
    Left = 22
    Top = 632
    Width = 208
  end
  object contentPanel: TWebPanel
    ChildOrder = 2
    Color = clBtnFace
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 11
    Font.Style = []
    Height = 583
    Left = 250
    TabOrder = 0
    TabStop = False
    Top = 0
    Width = 700
    object WebPanel1: TWebPanel
      Align = alTop
      Color = clBtnFace
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 137
      Left = 0
      TabOrder = 0
      TabStop = False
      Top = 0
      Width = 698
      object lblRemark: TWebLabel
        Align = alTop
        AlignWithMargins = True
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -15
        Font.Name = 'Tahoma'
        Font.Size = 11
        Font.Style = [fsBold]
        Height = 18
        Left = 6
        Margins.Bottom = 6
        Margins.Left = 6
        Margins.Right = 6
        Margins.Top = 0
        ParentFont = False
        Top = 101
        Width = 684
      end
      object WebLabel1: TWebLabel
        Align = alTop
        AlignWithMargins = True
        Caption = 'Regular Exporession Pattern'
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -15
        Font.Name = 'Tahoma'
        Font.Size = 11
        Font.Style = [fsBold]
        Height = 18
        Left = 6
        Margins.Bottom = 0
        Margins.Left = 6
        Margins.Right = 6
        Margins.Top = 6
        ParentFont = False
        Top = 6
        Width = 684
      end
      object memoPattern: TWebMemo
        Align = alTop
        AlignWithMargins = True
        AutoSize = False
        Color = clWindow
        Font.Charset = ANSI_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Arial'
        Font.Size = 8
        Font.Style = []
        Height = 65
        Left = 6
        Lines.Strings = (
          ''
        )
        Margins.Bottom = 6
        Margins.Left = 6
        Margins.Right = 6
        Margins.Top = 6
        ReadOnly = False
        SelLength = 0
        SelStart = 0
        ShowFocus = True
        TabOrder = 0
        Top = 30
        Width = 684
      end
    end
    object WebPanel3: TWebPanel
      Align = alClient
      ChildOrder = 2
      Color = clBtnFace
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 444
      Left = 0
      TabOrder = 0
      TabStop = False
      Top = 137
      Width = 698
      object memoDump: TWebMemo
        Align = alRight
        AlignWithMargins = True
        AutoSize = False
        Color = clBtnFace
        Font.Charset = ANSI_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Arial'
        Font.Size = 8
        Font.Style = []
        Height = 430
        Left = 441
        Margins.Bottom = 6
        Margins.Left = 6
        Margins.Right = 6
        Margins.Top = 6
        ReadOnly = True
        SelLength = 0
        SelStart = 0
        ShowFocus = True
        TabOrder = 0
        Top = 6
        Width = 249
      end
      object WebPanel4: TWebPanel
        Align = alClient
        ChildOrder = 2
        Color = clBtnFace
        Font.Charset = ANSI_CHARSET
        Font.Color = clBlack
        Font.Height = -11
        Font.Name = 'Arial'
        Font.Size = 8
        Font.Style = []
        Height = 442
        Left = 0
        TabOrder = 0
        TabStop = False
        Top = 0
        Width = 435
        object WebLabel2: TWebLabel
          Align = alTop
          AlignWithMargins = True
          Caption = 'Text to Test or Search'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Tahoma'
          Font.Size = 11
          Font.Style = [fsBold]
          Height = 18
          Left = 6
          Margins.Bottom = 0
          Margins.Left = 6
          Margins.Right = 6
          Margins.Top = 6
          ParentFont = False
          Top = 6
          Width = 421
        end
        object memoText: TWebMemo
          Align = alClient
          AlignWithMargins = True
          AutoSize = False
          Color = clWindow
          Font.Charset = ANSI_CHARSET
          Font.Color = clBlack
          Font.Height = -11
          Font.Name = 'Arial'
          Font.Size = 8
          Font.Style = []
          Height = 410
          Left = 3
          ReadOnly = False
          SelLength = 0
          SelStart = 0
          ShowFocus = True
          TabOrder = 0
          Top = 27
          Width = 427
        end
      end
    end
  end
  object leftPanel: TWebPanel
    ChildOrder = 1
    Color = clBtnFace
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = 'Tahoma'
    Font.Size = 11
    Font.Style = []
    Height = 583
    Left = 0
    TabOrder = 0
    TabStop = False
    Top = 0
    Width = 250
    object WebLabel3: TWebLabel
      Caption = 'RegEx Options:'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Size = 11
      Font.Style = [fsBold]
      Height = 18
      Left = 41
      ParentFont = False
      Top = 419
      Width = 113
    end
    object WebLabel4: TWebLabel
      Caption = 'Select Built-in Example:'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Size = 11
      Font.Style = [fsBold]
      Height = 18
      Left = 17
      ParentFont = False
      Top = 12
      Width = 176
    end
    object lblDescrExample: TWebLabel
      AutoSize = False
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 114
      Left = 32
      Top = 87
      Width = 201
      WordWrap = True
    end
    object WebLabel5: TWebLabel
      Caption = 'Instructions'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Size = 11
      Font.Style = [fsBold]
      Height = 18
      Left = 32
      ParentFont = False
      Top = 63
      Width = 90
    end
    object WebLabel6: TWebLabel
      Caption = 'Perform Operation:'
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -15
      Font.Name = 'Tahoma'
      Font.Size = 11
      Font.Style = [fsBold]
      Height = 18
      Left = 17
      ParentFont = False
      Top = 207
      Width = 143
    end
    object btFindFirst: TWebButton
      Caption = 'Find First Match'
      ChildOrder = 3
      Color = clNone
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 25
      Left = 42
      OnClick = btFindFirstClick
      Role = 'button'
      TabOrder = 0
      Top = 290
      Width = 153
    end
    object btFindNext: TWebButton
      Caption = 'Find Next Match'
      ChildOrder = 3
      Color = clNone
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 25
      Left = 43
      OnClick = btFindNextClick
      Role = 'button'
      TabOrder = 0
      Top = 321
      Width = 153
    end
    object ckUseMatchCollection: TWebCheckBox
      Caption = 'Use Matches Collection'
      ChildOrder = 3
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 22
      Left = 43
      ShowFocus = True
      TabOrder = 0
      Top = 355
      Width = 163
    end
    object ckUseEnumerator: TWebCheckBox
      Caption = 'Use Enumerator'
      ChildOrder = 3
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 22
      Left = 78
      ShowFocus = True
      TabOrder = 0
      Top = 383
      Width = 137
    end
    object ckIgnoreCase: TWebCheckBox
      Caption = 'Ignore Case'
      Checked = True
      ChildOrder = 7
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 22
      Left = 42
      ShowFocus = True
      State = cbChecked
      TabOrder = 0
      Top = 443
      Width = 113
    end
    object ckMultiLine: TWebCheckBox
      Caption = 'Multi Line'
      ChildOrder = 7
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 22
      Left = 42
      ShowFocus = True
      TabOrder = 0
      Top = 466
      Width = 113
    end
    object ckSingleLine: TWebCheckBox
      Caption = 'Single Line (DotAll in JS)'
      ChildOrder = 7
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 22
      Left = 42
      ShowFocus = True
      TabOrder = 0
      Top = 489
      Width = 191
    end
    object cbExamples: TWebComboBox
      Color = clWindow
      Font.Charset = ANSI_CHARSET
      Font.Color = clWindowText
      Font.Height = -11
      Font.Name = 'Tahoma'
      Font.Size = 11
      Font.Style = []
      Height = 22
      Left = 32
      OnChange = cbExamplesChange
      Role = 'combobox'
      ShowFocus = True
      Style = csDropDownList
      TabOrder = 0
      Top = 36
      Width = 153
    end
    object btDirectTest: TWebButton
      Caption = 'Test Direct Match'
      ChildOrder = 3
      Color = clNone
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 25
      Left = 42
      OnClick = btDirectTestClick
      Role = 'button'
      TabOrder = 0
      Top = 239
      Width = 153
    end
    object ckUnicode: TWebCheckBox
      Caption = 'Unicode (JS)'
      ChildOrder = 7
      Font.Charset = ANSI_CHARSET
      Font.Color = clBlack
      Font.Height = -11
      Font.Name = 'Arial'
      Font.Size = 8
      Font.Style = []
      Height = 22
      Left = 43
      ShowFocus = True
      TabOrder = 0
      Top = 512
      Width = 113
    end
  end
end
`;