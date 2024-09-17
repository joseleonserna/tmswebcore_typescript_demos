export const dfm = `object Form1: TForm1
  Width = 1044
  Height = 876
  FormContainer = 'appcontent'
  OnCreate = WebFormCreate
  object WebLabel3: TWebLabel
    Left = 8
    Top = 352
    Width = 605
    Height = 19
    Caption = 
      'Move data between TWebStringGrid and TWebStringGrid/TWebEdit/TWe' +
      'bListControl.'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel4: TWebLabel
    Left = 8
    Top = 8
    Width = 359
    Height = 19
    Caption = 'Move tabs between two TWebPageControl controls'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebLabel5: TWebLabel
    Left = 469
    Top = 8
    Width = 98
    Height = 13
    Caption = 'Drag and drop demo'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 584
    Top = 8
    Width = 187
    Height = 13
    Caption = 'Drag and drop handling in web controls'
    ElementID = 'description'
  end
  object WebLabel7: TWebLabel
    Left = 8
    Top = 376
    Width = 368
    Height = 19
    Caption = 'Press Ctrl to copy data (TWebStringGrid/TWebEdit).'
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -16
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
  end
  object WebListControl1: TWebListControl
    Left = 438
    Top = 598
    Width = 300
    Height = 116
    ChildOrder = 2
    DragMode = dmAutomatic
    Items = <
      item
        Items = <>
        Text = 'ListItem1'
      end
      item
        Items = <>
        Text = 'ListItem2'
      end
      item
        Items = <>
        Text = 'ListItem3'
      end>
    OnDragDrop = WebListControl1DragDrop
    OnDragOver = WebListControl1DragOver
    OnStartDrag = WebListControl1StartDrag
  end
  object WebStringGrid1: TWebStringGrid
    Left = 8
    Top = 401
    Width = 400
    Height = 313
    RowCount = 11
    Options = [goFixedVertLine, goFixedHorzLine, goVertLine, goHorzLine, goEditing]
    TabOrder = 1
    OnDragDrop = WebStringGrid1DragDrop
    OnDragOver = WebStringGrid1DragOver
    OnMouseDown = WebStringGrid2MouseDown
  end
  object WebStringGrid2: TWebStringGrid
    Left = 438
    Top = 404
    Width = 400
    Height = 147
    Options = [goFixedVertLine, goFixedHorzLine, goVertLine, goHorzLine, goEditing]
    TabOrder = 2
    OnDragDrop = WebStringGrid2DragDrop
    OnDragOver = WebStringGrid2DragOver
    OnMouseDown = WebStringGrid2MouseDown
    RowHeights = (
      24
      24
      24
      24
      24)
  end
  object WebEdit1: TWebEdit
    Left = 438
    Top = 557
    Width = 144
    Height = 22
    ChildOrder = 5
    Text = 'WebEdit1'
    OnDragDrop = WebEdit1DragDrop
    OnDragOver = WebEdit1DragOver
  end
  object WebPageControl1: TWebPageControl
    Left = 8
    Top = 38
    Width = 400
    Height = 300
    ChildOrder = 4
    DragMode = dmAutomatic
    TabIndex = 0
    TabOrder = 4
    OnDragDrop = WebPageControl1DragDrop
    OnDragOver = WebPageControl1DragOver
    OnStartDrag = WebPageControl2StartDrag
    object WebPageControl1Sheet1: TWebTabSheet
      Left = 0
      Top = 20
      Width = 400
      Height = 280
      Caption = 'Left1'
      Color = clSilver
      object WebLabel1: TWebLabel
        Left = 16
        Top = 16
        Width = 122
        Height = 13
        Caption = 'This sheet is named Left1'
      end
    end
    object WebPageControl1Sheet2: TWebTabSheet
      Left = 0
      Top = 20
      Width = 400
      Height = 280
      Caption = 'Left2'
      ChildOrder = 1
      Color = clSilver
      object WebEdit2: TWebEdit
        Left = 16
        Top = 13
        Width = 121
        Height = 22
        Text = 'Left2'
      end
    end
    object WebPageControl1Sheet3: TWebTabSheet
      Left = 0
      Top = 20
      Width = 400
      Height = 280
      Caption = 'Left3'
      ChildOrder = 2
      Color = clSilver
      object Left3: TWebButton
        Left = 16
        Top = 11
        Width = 96
        Height = 25
        Caption = 'Left3'
      end
    end
  end
  object WebPageControl2: TWebPageControl
    Left = 438
    Top = 38
    Width = 400
    Height = 300
    ChildOrder = 5
    DragMode = dmAutomatic
    TabIndex = 0
    TabOrder = 5
    OnDragDrop = WebPageControl1DragDrop
    OnDragOver = WebPageControl1DragOver
    OnStartDrag = WebPageControl2StartDrag
    object WebPageControl2Sheet1: TWebTabSheet
      Left = 0
      Top = 20
      Width = 400
      Height = 280
      Caption = 'Right1'
      Color = clSilver
      object WebLabel2: TWebLabel
        Left = 16
        Top = 16
        Width = 128
        Height = 13
        Caption = 'This sheet is named Right1'
      end
    end
    object WebPageControl2Sheet2: TWebTabSheet
      Left = 0
      Top = 20
      Width = 400
      Height = 280
      Caption = 'Right2'
      ChildOrder = 1
      Color = clSilver
      object WebCheckBox1: TWebCheckBox
        Left = 16
        Top = 13
        Width = 113
        Height = 22
        Caption = 'Right2'
        Color = clNone
        State = cbUnchecked
      end
    end
    object WebPageControl2Sheet3: TWebTabSheet
      Left = 0
      Top = 20
      Width = 400
      Height = 280
      Caption = 'Right3'
      ChildOrder = 2
      Color = clSilver
      object WebRadioButton1: TWebRadioButton
        Left = 16
        Top = 13
        Width = 113
        Height = 22
        Caption = 'Right3 A'
        Checked = False
        Color = clNone
      end
      object WebRadioButton2: TWebRadioButton
        Left = 16
        Top = 41
        Width = 113
        Height = 22
        Caption = 'Right3 B'
        Checked = False
        ChildOrder = 1
        Color = clNone
      end
    end
  end
end
`;