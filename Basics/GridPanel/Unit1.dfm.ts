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
  object WebLabel5: TWebLabel
    Left = 70
    Top = 32
    Width = 186
    Height = 23
    Caption = 'Grid Panel component'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -19
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel7: TWebLabel
    Left = 72
    Top = 408
    Width = 95
    Height = 16
    Caption = 'Grid Panel Demo'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 72
    Top = 430
    Width = 397
    Height = 32
    Caption = 
      'The GridPanel allows easy control of alignment and sizing of con' +
      'trols within the panel.'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebGridPanel1: TWebGridPanel
    Left = 67
    Top = 64
    Width = 510
    Height = 217
    ColumnCollection = <
      item
        MarginLeft = 3
        MarginRight = 3
        Value = 25
      end
      item
        Alignment = taCenter
        MarginLeft = 3
        MarginRight = 3
        Value = 50
      end
      item
        Alignment = taRightJustify
        MarginLeft = 3
        MarginRight = 3
        Value = 25
      end>
    ControlCollection = <
      item
        Column = 0
        Row = 0
        Control = WebLabel1
      end
      item
        Column = 0
        Row = 0
        Control = WebEdit1
      end
      item
        Column = 0
        Row = 0
        Control = WebButton1
      end
      item
        Column = 0
        Row = 0
        Control = WebLabel2
      end
      item
        Column = 0
        Row = 0
        Control = WebEdit2
      end
      item
        Column = 0
        Row = 0
        Control = WebButton2
      end
      item
        Column = 0
        Row = 0
        Control = WebLabel3
      end
      item
        Column = 0
        Row = 0
        Control = WebEdit3
      end
      item
        Column = 0
        Row = 0
        Control = WebButton3
      end
      item
        Column = 0
        Row = 0
        Control = WebLabel4
      end
      item
        Column = 0
        Row = 0
        Control = WebEdit4
      end
      item
        Column = 0
        Row = 0
        Control = WebButton4
      end>
    Color = clWhite
    GridLineWidth = 1
    GridLineColor = clSilver
    RowCollection = <
      item
        Alignment = vaCenter
        Value = 25
      end
      item
        Alignment = vaCenter
        Value = 25
      end
      item
        Alignment = vaCenter
        Value = 25
      end
      item
        Alignment = vaCenter
        Value = 25
      end>
    object WebLabel1: TWebLabel
      Left = 5
      Top = 19
      Width = 66
      Height = 16
      Caption = 'First name:'
    end
    object WebLabel2: TWebLabel
      Left = 5
      Top = 73
      Width = 64
      Height = 16
      Caption = 'Last name:'
    end
    object WebLabel3: TWebLabel
      Left = 5
      Top = 127
      Width = 36
      Height = 16
      Caption = 'Email:'
    end
    object WebLabel4: TWebLabel
      Left = 5
      Top = 181
      Width = 49
      Height = 16
      Caption = 'Country:'
    end
    object WebEdit1: TWebEdit
      Left = 157
      Top = 15
      Width = 196
      Height = 24
      WidthStyle = ssPercent
      WidthPercent = 80
    end
    object WebButton1: TWebButton
      Left = 435
      Top = 12
      Width = 71
      Height = 30
      Caption = 'Edit'
      TabOrder = 1
      WidthStyle = ssPercent
      WidthPercent = 60
    end
    object WebEdit2: TWebEdit
      Left = 157
      Top = 69
      Width = 196
      Height = 24
      TabOrder = 2
      WidthStyle = ssPercent
      WidthPercent = 80
    end
    object WebButton2: TWebButton
      Left = 435
      Top = 66
      Width = 71
      Height = 30
      Caption = 'Edit'
      TabOrder = 3
      WidthStyle = ssPercent
      WidthPercent = 60
    end
    object WebEdit3: TWebEdit
      Left = 157
      Top = 123
      Width = 196
      Height = 24
      TabOrder = 4
      WidthStyle = ssPercent
      WidthPercent = 80
    end
    object WebButton3: TWebButton
      Left = 435
      Top = 120
      Width = 71
      Height = 30
      Caption = 'Edit'
      TabOrder = 5
      WidthStyle = ssPercent
      WidthPercent = 60
    end
    object WebEdit4: TWebEdit
      Left = 157
      Top = 177
      Width = 196
      Height = 24
      TabOrder = 6
      WidthStyle = ssPercent
      WidthPercent = 80
    end
    object WebButton4: TWebButton
      Left = 435
      Top = 174
      Width = 71
      Height = 30
      Caption = 'Edit'
      TabOrder = 7
      WidthStyle = ssPercent
      WidthPercent = 60
    end
  end
end
`;