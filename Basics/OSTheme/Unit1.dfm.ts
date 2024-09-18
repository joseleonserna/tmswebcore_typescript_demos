export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 866
  Height = 836
  Color = clWhite
  CSSLibrary = cssBootstrap
  ElementFont = efCSS
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Arial'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebLabel4: TWebLabel
    Left = 8
    Top = 549
    Width = 212
    Height = 16
    Caption = 'OS Theme automatic adaption demo'
    ElementID = 'title'
    ElementFont = efCSS
  end
  object WebLabel5: TWebLabel
    Left = 8
    Top = 571
    Width = 279
    Height = 16
    Caption = 'Automatically adopts the light or dark OS theme'
    ElementID = 'description'
    ElementFont = efCSS
  end
  object WebLabel3: TWebLabel
    Left = 464
    Top = 549
    Width = 119
    Height = 16
    Caption = 'Toggle color scheme'
    ElementFont = efCSS
  end
  object WebPageControl1: TWebPageControl
    Left = 8
    Top = 8
    Width = 641
    Height = 521
    ChildOrder = 9
    ElementFont = efCSS
    TabIndex = 1
    SelectedColor = clSilver
    TabOrder = 0
    object WebPageControl1Sheet1: TWebTabSheet
      Left = 0
      Top = 20
      Width = 641
      Height = 501
      Caption = 'Basic controls'
      object WebGroupBox1: TWebGroupBox
        Left = 18
        Top = 14
        Width = 479
        Height = 337
        BorderColor = clSilver
        Caption = 'Standard controls'
        ChildOrder = 5
        ElementFont = efCSS
        object WebLabel6: TWebLabel
          Left = 23
          Top = 77
          Width = 179
          Height = 16
          Caption = 'Add text to various list controls'
          ElementFont = efCSS
        end
        object WebMemo1: TWebMemo
          Left = 150
          Top = 99
          Width = 123
          Height = 97
          AutoSize = False
          ElementFont = efCSS
          Lines.Strings = (
            'A'
            'B'
            'C')
          SelLength = 0
          SelStart = 9
        end
        object WebButton1: TWebButton
          Left = 168
          Top = 36
          Width = 96
          Height = 25
          Caption = 'Add'
          ChildOrder = 4
          ElementFont = efCSS
          HeightStyle = ssAuto
          OnClick = WebButton1Click
        end
        object WebListBox1: TWebListBox
          Left = 23
          Top = 99
          Width = 121
          Height = 97
          ElementFont = efCSS
          ItemIndex = -1
          Items.Strings = (
            'A'
            'B'
            'C')
        end
        object WebEdit1: TWebEdit
          Left = 23
          Top = 36
          Width = 121
          Height = 22
          ChildOrder = 1
          ElementFont = efCSS
        end
        object WebComboBox1: TWebComboBox
          Left = 279
          Top = 99
          Width = 123
          Height = 22
          ElementFont = efCSS
          ItemIndex = -1
          Items.Strings = (
            'A'
            'B'
            'C')
        end
      end
    end
    object WebPageControl1Sheet2: TWebTabSheet
      Left = 0
      Top = 20
      Width = 641
      Height = 501
      Caption = 'Bootstrap lists'
      ChildOrder = 1
      object WebLabel1: TWebLabel
        Left = 18
        Top = 28
        Width = 154
        Height = 16
        Caption = 'List as breadcrumb control'
        ElementFont = efCSS
      end
      object WebLabel2: TWebLabel
        Left = 17
        Top = 136
        Width = 145
        Height = 16
        Caption = 'List as pagination control'
        ElementFont = efCSS
      end
      object WebListControl1: TWebListControl
        Left = 18
        Top = 58
        Width = 519
        Height = 49
        ChildOrder = 1
        DefaultItemClassName = 'breadcrumb-item'
        DefaultItemLinkClassName = 'breadcrumb-link'
        ElementFont = efCSS
        ElementListClassName = 'breadcrumb'
        Items = <
          item
            ItemClassName = 'breadcrumb-item'
            Items = <>
            LinkClassName = 'breadcrumb-link'
            Text = 'Main'
          end
          item
            ItemClassName = 'breadcrumb-item'
            Items = <>
            LinkClassName = 'breadcrumb-link'
            Text = 'Products'
          end
          item
            ItemClassName = 'breadcrumb-item'
            Items = <>
            LinkClassName = 'breadcrumb-link'
            Text = 'Software'
          end
          item
            ItemClassName = 'breadcrumb-item'
            Items = <>
            LinkClassName = 'breadcrumb-link'
            Text = 'Web development'
          end
          item
            ItemClassName = 'breadcrumb-item'
            Items = <>
            LinkClassName = 'breadcrumb-link'
            Text = 'TMS WEB Core'
          end>
        Style = lsBreadcrumb
        OnItemClick = WebListControl1ItemClick
      end
      object WebListControl3: TWebListControl
        Left = 18
        Top = 263
        Width = 300
        Height = 97
        ChildOrder = 2
        DefaultItemClassName = 'list-group-item'
        DefaultItemLinkClassName = 'list-group-link'
        ElementFont = efCSS
        ElementListClassName = 'list-group'
        Items = <
          item
            Active = True
            ItemClassName = 'list-group-item'
            Items = <>
            Text = 'Customers'
          end
          item
            ItemClassName = 'list-group-item'
            Items = <>
            Text = 'Products'
          end
          item
            ItemClassName = 'list-group-item'
            Items = <>
            Text = 'Orders'
          end
          item
            ItemClassName = 'list-group-item'
            Items = <>
            Text = 'Stock'
          end>
        Style = lsListGroup
        OnItemClick = WebListControl3ItemClick
      end
      object WebListControl2: TWebListControl
        Left = 17
        Top = 173
        Width = 300
        Height = 60
        ChildOrder = 2
        DefaultItemClassName = 'page-item'
        DefaultItemLinkClassName = 'page-link'
        ElementFont = efCSS
        ElementListClassName = 'pagination'
        Items = <
          item
            Active = True
            ItemClassName = 'page-item'
            Items = <>
            LinkClassName = 'page-link'
            Text = 'Customers'
          end
          item
            ItemClassName = 'page-item'
            Items = <>
            LinkClassName = 'page-link'
            Text = 'Products'
          end
          item
            ItemClassName = 'page-item'
            Items = <>
            LinkClassName = 'page-link'
            Text = 'Orders'
          end
          item
            ItemClassName = 'page-item'
            Items = <>
            LinkClassName = 'page-link'
            Text = 'Stock'
          end>
        Style = lsPagination
        OnItemClick = WebListControl2ItemClick
      end
    end
    object WebPageControl1Sheet3: TWebTabSheet
      Left = 0
      Top = 20
      Width = 641
      Height = 501
      Caption = 'Grid'
      ChildOrder = 2
      object WebStringGrid1: TWebStringGrid
        Left = 33
        Top = 24
        Width = 387
        Height = 201
        TabOrder = 0
        ElementFont = efCSS
      end
    end
    object WebPageControl1Sheet4: TWebTabSheet
      Left = 0
      Top = 20
      Width = 641
      Height = 501
      Caption = 'Treeview'
      ChildOrder = 3
      object WebTreeView1: TWebTreeView
        Left = 24
        Top = 24
        Width = 369
        Height = 233
        ElementFont = efCSS
      end
    end
  end
  object WebToggleButton1: TWebToggleButton
    Left = 605
    Top = 549
    Width = 44
    Height = 22
    OnClick = WebToggleButton1Click
  end
end
`;