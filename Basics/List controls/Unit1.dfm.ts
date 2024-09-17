export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 771
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
  object WebLabel1: TWebLabel
    Left = 24
    Top = 32
    Width = 154
    Height = 16
    Caption = 'List as breadcrumb control'
    ElementFont = efCSS
    HTMLType = tH3
  end
  object WebLabel2: TWebLabel
    Left = 24
    Top = 168
    Width = 145
    Height = 16
    Caption = 'List as pagination control'
    ElementFont = efCSS
    HTMLType = tH3
  end
  object WebLabel3: TWebLabel
    Left = 24
    Top = 528
    Width = 105
    Height = 16
    Caption = 'List with subitems'
    ElementFont = efCSS
    HTMLType = tH3
  end
  object WebLabel4: TWebLabel
    Left = 592
    Top = 464
    Width = 156
    Height = 16
    Caption = 'Bootstrap list control demo'
    ElementID = 'title'
  end
  object WebLabel5: TWebLabel
    Left = 592
    Top = 486
    Width = 223
    Height = 16
    Caption = 'Shows the various bootstrap list styles'
    ElementID = 'description'
  end
  object WebListControl1: TWebListControl
    Left = 24
    Top = 72
    Width = 593
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
  object WebListControl2: TWebListControl
    Left = 24
    Top = 208
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
  object WebListControl3: TWebListControl
    Left = 24
    Top = 288
    Width = 300
    Height = 97
    ChildOrder = 2
    DefaultItemClassName = 'list-group-item'
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
  object WebListControl4: TWebListControl
    Left = 24
    Top = 563
    Width = 425
    Height = 265
    HeightStyle = ssAuto
    ChildOrder = 6
    ElementFont = efCSS
    Items = <
      item
        Items = <>
        Text = 'Item 0'
      end
      item
        Items = <>
        Text = 'Item 1'
      end
      item
        Items = <>
        Text = 'Item 2'
      end>
  end
end
`;