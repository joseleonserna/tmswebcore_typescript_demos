export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 1016
  Height = 783
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebImageControl1: TWebImageControl
    Left = 336
    Top = 39
    Width = 545
    Height = 362
    WidthStyle = ssAuto
    ChildOrder = 1
  end
  object WebLabel1: TWebLabel
    Left = 8
    Top = 20
    Width = 149
    Height = 16
    Caption = 'Pick image from local files'
  end
  object WebLabel2: TWebLabel
    Left = 8
    Top = 405
    Width = 162
    Height = 16
    Caption = 'Saved pictures in IndexedDB'
  end
  object WebLabel3: TWebLabel
    Left = 336
    Top = 20
    Width = 88
    Height = 16
    Caption = 'Picture preview'
  end
  object WebLabel4: TWebLabel
    Left = 8
    Top = 69
    Width = 139
    Height = 16
    Caption = 'Pick image from camera'
  end
  object WebLabel5: TWebLabel
    Left = 32
    Top = 600
    Width = 186
    Height = 16
    Caption = 'Local pictures and camera demo'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 32
    Top = 632
    Width = 182
    Height = 16
    Caption = 'Using local pictures and camera'
    ElementID = 'description'
  end
  object WebFilePicker1: TWebFilePicker
    Left = 8
    Top = 39
    Width = 305
    Height = 19
    OnChange = WebFilePicker1Change
    OnGetFileAsBase64 = WebFilePicker1GetFileAsBase64
  end
  object WebCamera1: TWebCamera
    Left = 8
    Top = 88
    Width = 305
    Height = 209
  end
  object WebButton1: TWebButton
    Left = 8
    Top = 303
    Width = 305
    Height = 25
    Caption = 'Take picture with camera'
    ChildOrder = 3
    OnClick = WebButton1Click
  end
  object WebDBGrid1: TWebDBGrid
    Left = 8
    Top = 424
    Width = 609
    Height = 120
    Columns = <
      item
      end
      item
      end
      item
      end
      item
      end>
    DefaultRowHeight = 21
    DataSource = WebDataSource1
    FixedCols = 1
    TabOrder = 3
    OnClick = WebDBGrid1Click
    ColWidths = (
      20
      64
      64
      64
      64)
    RowHeights = (
      21
      21
      21
      21
      21)
  end
  object WebIndexedDbClientDataset1: TWebIndexedDbClientDataset
    IDBAutoIncrement = True
    Left = 208
    Top = 336
  end
  object WebDataSource1: TWebDataSource
    DataSet = WebIndexedDbClientDataset1
    Left = 72
    Top = 336
  end
end
`;