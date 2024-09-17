export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 775
  Height = 575
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  object WebDBLabel1: TWebDBLabel
    Left = 132
    Top = 257
    Width = 457
    Height = 22
    AutoSize = False
    Caption = 'WebDBLabel1'
    EllipsisPosition = epEndEllipsis
    DataField = '_Length_In'
    DataSource = WebDataSource1
  end
  object WebLabel1: TWebLabel
    Left = 16
    Top = 98
    Width = 68
    Height = 16
    Caption = 'Species No:'
  end
  object WebLabel2: TWebLabel
    Left = 16
    Top = 130
    Width = 56
    Height = 16
    Caption = 'Category:'
  end
  object WebLabel3: TWebLabel
    Left = 16
    Top = 162
    Width = 93
    Height = 16
    Caption = 'Common Name:'
  end
  object WebLabel4: TWebLabel
    Left = 16
    Top = 195
    Width = 86
    Height = 16
    Caption = 'Species Name:'
  end
  object WebLabel6: TWebLabel
    Left = 16
    Top = 226
    Width = 64
    Height = 16
    Caption = 'Length cm:'
  end
  object WebLabel7: TWebLabel
    Left = 16
    Top = 257
    Width = 58
    Height = 16
    Caption = 'Length In:'
  end
  object WebLabel5: TWebLabel
    Left = 16
    Top = 288
    Width = 37
    Height = 16
    Caption = 'Notes:'
  end
  object WebLabel8: TWebLabel
    Left = 17
    Top = 443
    Width = 200
    Height = 16
    Caption = 'Using the web client dataset locally'
    ElementID = 'title'
  end
  object WebLabel9: TWebLabel
    Left = 17
    Top = 477
    Width = 460
    Height = 48
    Caption = 
      'This demo shows a web client dataset connected to DB controls. T' +
      'he web client dataset gets the information from an Client server' +
      ' but for demo purposes all editing in the dataset is local in th' +
      'e web client only!'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebButton1: TWebButton
    Left = 16
    Top = 16
    Width = 153
    Height = 25
    Caption = 'Connect to DB'
    OnClick = WebButton1Click
  end
  object WebDBNavigator1: TWebDBNavigator
    Left = 132
    Top = 60
    Width = 373
    Height = 25
    DataSource = WebDataSource1
    Hints.Strings = (
      'First'
      'Prior'
      'Next'
      'Last'
      'Edit'
      'Post'
      'Insert'
      'Delete'
      'Cancel')
  end
  object WebDBEdit1: TWebDBEdit
    Left = 132
    Top = 95
    Width = 457
    Height = 24
    AutoSelect = False
    Color = clWhite
    HideSelection = False
    TabOrder = 2
    Text = 'WebDBEdit1'
    DataField = '_Species_No'
    DataSource = WebDataSource1
  end
  object WebDBEdit2: TWebDBEdit
    Left = 132
    Top = 127
    Width = 457
    Height = 24
    AutoSelect = False
    Color = clWhite
    HideSelection = False
    TabOrder = 3
    Text = 'WebDBEdit1'
    DataField = '_Category'
    DataSource = WebDataSource1
  end
  object WebDBEdit3: TWebDBEdit
    Left = 132
    Top = 159
    Width = 457
    Height = 24
    AutoSelect = False
    Color = clWhite
    HideSelection = False
    TabOrder = 4
    Text = 'WebDBEdit1'
    DataField = '_Common_Name'
    DataSource = WebDataSource1
  end
  object WebDBEdit4: TWebDBEdit
    Left = 132
    Top = 192
    Width = 457
    Height = 24
    AutoSelect = False
    Color = clWhite
    HideSelection = False
    TabOrder = 5
    Text = 'WebDBEdit1'
    DataField = '_Species_Name'
    DataSource = WebDataSource1
  end
  object WebDBMemo1: TWebDBMemo
    Left = 132
    Top = 285
    Width = 457
    Height = 140
    AutoSize = False
    Lines.Strings = (
      'WebDBMemo1')
    SelLength = 0
    SelStart = 0
    TabOrder = 7
    DataField = '_Notes'
    DataSource = WebDataSource1
  end
  object WebDBSpinEdit1: TWebDBSpinEdit
    Left = 132
    Top = 223
    Width = 150
    Height = 22
    AutoSize = False
    BorderStyle = bsSingle
    Color = clWhite
    Increment = 1
    MaxValue = 100
    MinValue = 0
    Role = ''
    TabOrder = 8
    Value = 0
    DataField = '_Length__cm_'
    DataSource = WebDataSource1
  end
  object WebClientConnection1: TWebClientConnection
    Active = False
    Left = 664
    Top = 280
  end
  object WebClientDataSet1: TWebClientDataSet
    Connection = WebClientConnection1
    Left = 664
    Top = 336
  end
  object WebDataSource1: TWebDataSource
    DataSet = WebClientDataSet1
    Left = 664
    Top = 216
  end
end
`;