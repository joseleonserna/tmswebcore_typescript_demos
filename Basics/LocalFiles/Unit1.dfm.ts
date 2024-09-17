export const dfm = `object Form1: TForm1
  Width = 1102
  Height = 799
  FormContainer = 'appcontent'
  OnCreate = WebFormCreate
  object WebLabel1: TWebLabel
    Left = 16
    Top = 728
    Width = 135
    Height = 13
    Caption = 'Chrome Local files API demo'
    ElementID = 'title'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel2: TWebLabel
    Left = 208
    Top = 728
    Width = 231
    Height = 13
    Caption = 'Browse the local file system and view image files'
    ElementID = 'description'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebResponsiveGridPanel1: TWebResponsiveGridPanel
    Left = 0
    Top = 60
    Width = 1102
    Height = 473
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    Align = alTop
    ChildOrder = 5
    ControlCollection = <
      item
        Column = 0
        Row = 0
        Control = WebStringGrid1
      end
      item
        Column = 0
        Row = 0
        Control = WebImageControl1
      end>
    Color = clWhite
    Layout = <
      item
        Description = 'Tablet'
        Style = '1fr'
        Width = 768
      end
      item
        Description = 'Desktop'
        Style = '1fr 1fr'
        Width = 991
      end>
    DesignSize = (
      1102
      473)
    object WebImageControl1: TWebImageControl
      Left = 551
      Top = 0
      Width = 314
      Height = 289
      HeightStyle = ssAuto
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
      Anchors = []
      ChildOrder = 12
    end
    object WebStringGrid1: TWebStringGrid
      Left = 0
      Top = 0
      Width = 550
      Height = 425
      Anchors = []
      ColCount = 4
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'Roboto'
      Font.Style = []
      Options = [goFixedVertLine, goFixedHorzLine, goVertLine, goHorzLine, goRangeSelect, goRowSelect]
      ParentFont = False
      TabOrder = 0
      OnDblClick = WebStringGrid1DblClick
      OnFixedCellClick = WebStringGrid1FixedCellClick
      OnSelectCell = WebStringGrid1SelectCell
      RangeEdit.Max = 100.000000000000000000
      RangeEdit.Step = 1.000000000000000000
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
      ColWidths = (
        64
        64
        64
        64)
      RowHeights = (
        24
        24
        24
        24
        24)
    end
  end
  object WebPanel1: TWebPanel
    Left = 0
    Top = 0
    Width = 1102
    Height = 60
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    Align = alTop
    BorderColor = clSilver
    BorderStyle = bsNone
    ChildOrder = 4
    object WebButton10: TWebButton
      Left = 3
      Top = 17
      Width = 177
      Height = 25
      Caption = 'Show local folder'
      ChildOrder = 10
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
      OnClick = WebButton10Click
    end
  end
end
`;