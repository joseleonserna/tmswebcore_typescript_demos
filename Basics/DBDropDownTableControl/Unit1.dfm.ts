export const dfm = `object Form1: TForm1
  Width = 1003
  Height = 763
  CSSLibrary = cssBootstrap
  ElementFont = efCSS
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Arial'
  Font.Style = []
  FormContainer = 'appcontent'
  ParentFont = False
  OnCreate = WebFormCreate
  object WebLabel2: TWebLabel
    Left = 152
    Top = 103
    Width = 56
    Height = 14
    Caption = 'Paging type'
    ElementFont = efCSS
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel3: TWebLabel
    Left = 8
    Top = 616
    Width = 204
    Height = 14
    Caption = 'TWebDBTableControl and dropdown demo'
    ElementID = 'title'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebLabel4: TWebLabel
    Left = 8
    Top = 648
    Width = 379
    Height = 14
    Caption = 
      'TWebDBTableControl paging, search and filtering + use from dropd' +
      'own control'
    ElementID = 'description'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
  end
  object WebDBTableControl1: TWebDBTableControl
    Left = 8
    Top = 128
    Width = 836
    Height = 409
    HeightStyle = ssAuto
    WidthStyle = ssAuto
    BorderColor = clSilver
    ElementFont = efCSS
    ElementHeaderClassName = 'thead-light'
    ElementTableClassName = 'table table-striped table-bordered  table-hover'
    Footer.ButtonElementClassName = 'btn btn-light'
    Footer.DropDownElementClassName = 'form-control'
    Footer.InputElementClassName = 'form-control'
    Footer.LinkElementClassName = 'page-link'
    Footer.ListElementClassName = 'pagination'
    Footer.ListItemElementClassName = 'page-item'
    Header.FilterColumn = 3
    Header.Filter = True
    Header.Search = True
    Header.ButtonActiveElementClassName = 'btn btn-primary'
    Header.ButtonElementClassName = 'btn btn-light'
    Header.DropDownElementClassName = 'form-control'
    Header.InputElementClassName = 'form-control'
    Header.LinkActiveElementClassName = 'link-primary'
    Header.LinkElementClassName = 'link-secondary'
    Header.ListElementClassName = 'pagination'
    Header.ListItemElementClassName = 'page-item'
    Header.ListLinkElementClassName = 'page-link'
    Header.Caption = 'DummyUsers data'
    Header.Pager = tpList
    Header.Visible = True
    Options.AutoCellEmail = True
    Options.AutoCellURL = True
    Options.AutoCellImage = True
    Options.ImageWidth = 32
    Paging.Enabled = True
    Columns = <
      item
        Title = 'ID'
        Width = 40
      end
      item
        Title = 'First Name'
        Width = 100
      end
      item
        Title = 'Last Name'
        Width = 100
      end
      item
        Title = 'Sex'
        Width = 70
      end
      item
        Title = 'Email'
        Width = 180
      end
      item
        Title = 'Telephone'
        Width = 150
      end
      item
        Title = 'Age'
        Width = 40
      end
      item
        Title = 'Height'
        Width = 40
      end
      item
        Title = 'Icon'
        Width = 40
      end>
    DataSource = WebDataSource1
  end
  object WebCheckBox1: TWebCheckBox
    Left = 8
    Top = 100
    Width = 113
    Height = 22
    Caption = 'Paging'
    Checked = True
    ChildOrder = 1
    ElementClassName = 'custom-control custom-checkbox'
    ElementButtonClassName = 'custom-control-input'
    ElementLabelClassName = 'custom-control-label'
    ElementFont = efCSS
    HeightStyle = ssAuto
    HeightPercent = 100.000000000000000000
    State = cbChecked
    WidthPercent = 100.000000000000000000
    OnClick = WebCheckBox1Click
  end
  object WebRadioButton1: TWebRadioButton
    Left = 248
    Top = 100
    Width = 113
    Height = 25
    Caption = 'Button'
    Checked = False
    ChildOrder = 4
    Color = clNone
    ElementClassName = 'custom-control custom-radio'
    ElementButtonClassName = 'custom-control-input'
    ElementLabelClassName = 'custom-control-label'
    ElementFont = efCSS
    GroupName = 'pager'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebRadioButton1Click
  end
  object WebRadioButton2: TWebRadioButton
    Tag = 1
    Left = 319
    Top = 100
    Width = 113
    Height = 25
    Caption = 'List'
    Checked = True
    ChildOrder = 4
    Color = clNone
    ElementClassName = 'custom-control custom-radio'
    ElementButtonClassName = 'custom-control-input'
    ElementLabelClassName = 'custom-control-label'
    ElementFont = efCSS
    GroupName = 'pager'
    HeightPercent = 100.000000000000000000
    WidthPercent = 1.000000000000000000
    OnClick = WebRadioButton1Click
  end
  object WebRadioButton3: TWebRadioButton
    Tag = 2
    Left = 384
    Top = 100
    Width = 113
    Height = 25
    Caption = 'Link'
    Checked = False
    ChildOrder = 4
    Color = clNone
    ElementClassName = 'custom-control custom-radio'
    ElementButtonClassName = 'custom-control-input'
    ElementLabelClassName = 'custom-control-label'
    ElementFont = efCSS
    GroupName = 'pager'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebRadioButton1Click
  end
  object WebRadioButton4: TWebRadioButton
    Tag = 3
    Left = 438
    Top = 100
    Width = 113
    Height = 25
    Caption = 'Dropdown'
    Checked = False
    ChildOrder = 4
    Color = clNone
    ElementClassName = 'custom-control custom-radio'
    ElementButtonClassName = 'custom-control-input'
    ElementLabelClassName = 'custom-control-label'
    ElementFont = efCSS
    GroupName = 'pager'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = WebRadioButton1Click
  end
  object WebHTMLDiv1: TWebHTMLDiv
    Left = 8
    Top = 32
    Width = 481
    Height = 40
    ChildOrder = 11
    ElementFont = efCSS
    Role = ''
    object WebLabel5: TWebLabel
      Left = 3
      Top = 3
      Width = 111
      Height = 14
      Caption = 'Dropdown lookup table'
      ElementClassName = 'floatleft'
      ElementFont = efCSS
      ElementPosition = epIgnore
      HeightStyle = ssAuto
      HeightPercent = 100.000000000000000000
      WidthPercent = 100.000000000000000000
    end
    object WebDBEditDropDownTableControl2: TWebDBEditDropDownTableControl
      Left = 144
      Top = 3
      Width = 161
      Height = 22
      ElementClassName = 'floatleft'
      HeightStyle = ssAuto
      ChildOrder = 8
      Color = clWhite
      DropDownHeight = 400
      ElementButtonClassName = 'btn btn-light'
      ElementInputClassName = 'form-control'
      ElementFont = efCSS
      ElementPosition = epIgnore
      ParentColor = False
      TabOrder = 0
      Text = ''
      TableSource = WebDataSource1
      EditColumn = 2
      TableOptions.AutoCellEmail = True
      TableOptions.AutoCellURL = True
      TableOptions.AutoCellImage = True
      TableOptions.ElementFont = efCSS
      TableOptions.ElementHeaderClassName = 'thead-light'
      TableOptions.ElementTableClassName = 'table table-striped table-bordered  table-hover'
      TableOptions.ImageWidth = 32
      TableOptions.Header.ButtonElementClassName = 'btn btn-light'
      TableOptions.Header.DropDownElementClassName = 'form-control'
      TableOptions.Header.LinkElementClassName = 'page-link'
      TableOptions.Header.ListElementClassName = 'pagination'
      TableOptions.Header.ListItemElementClassName = 'page-item'
      TableOptions.Header.Pager = tpList
      TableOptions.Header.Visible = True
      TableOptions.Footer.ButtonElementClassName = 'btn btn-light'
      TableOptions.Footer.DropDownElementClassName = 'form-control'
      TableOptions.Footer.LinkElementClassName = 'page-link'
      TableOptions.Footer.ListElementClassName = 'pagination'
      TableOptions.Footer.ListItemElementClassName = 'page-item'
      TableOptions.Paging.Enabled = True
      TableOptions.ScrollVertical = True
    end
  end
  object WebClientDataSet1: TWebClientDataSet
    Connection = WebClientConnection1
    Params = <>
    Left = 552
    Top = 24
  end
  object WebClientConnection1: TWebClientConnection
    Active = True
    DataNode = 'users'
    URI = 
      'https://dummyjson.com/users?select=firstName,lastName,gender,ema' +
      'il,phone,age,height,image'
    Left = 760
    Top = 24
  end
  object WebDataSource1: TWebDataSource
    DataSet = WebClientDataSet1
    Left = 656
    Top = 24
  end
end
`;