export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 924
  Height = 848
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebLabel1: TWebLabel
    Left = 8
    Top = 62
    Width = 421
    Height = 16
    Caption = 
      'Resize browser to see responsive behavior. Click on an item to r' +
      'emove it.'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebLabel2: TWebLabel
    Left = 8
    Top = 720
    Width = 126
    Height = 16
    Caption = 'Responsive grid demo'
    ElementID = 'title'
  end
  object WebResponsiveGrid1: TWebResponsiveGrid
    Left = 8
    Top = 102
    Width = 689
    Height = 577
    HeightStyle = ssAuto
    WidthStyle = ssPercent
    WidthPercent = 90
    ItemIndex = 0
    Items = <
      item
        HTML = 'Sample item 1'
        Tag = 0
      end
      item
        HTML = 'Sample item 2'
        Tag = 0
      end
      item
        HTML = 'Sample item 3'
        Tag = 0
      end>
    Options.ItemClassName = 'respitem'
    Options.ItemHeight = 150
    Options.ItemWidthMin = 200
    OnItemGetFieldValue = WebResponsiveGrid1ItemGetFieldValue
    OnItemClick = WebResponsiveGrid1ItemClick
  end
  object btnOpen: TWebButton
    Left = 8
    Top = 8
    Width = 96
    Height = 25
    Caption = 'Open'
    TabOrder = 1
    OnClick = btnOpenClick
  end
  object btnClear: TWebButton
    Left = 120
    Top = 8
    Width = 96
    Height = 25
    Caption = 'Clear'
    TabOrder = 2
    OnClick = btnClearClick
  end
  object WebCheckBox1: TWebCheckBox
    Left = 8
    Top = 39
    Width = 145
    Height = 17
    Caption = 'Fixed vertical size'
    Color = clNone
    State = cbUnchecked
    TabOrder = 3
    OnClick = WebCheckBox1Click
  end
  object WebMessageDlg1: TWebMessageDlg
    Left = 222
    Top = 8
    Width = 24
    Height = 24
    Buttons = []
    CustomButtons = <>
    DialogText.Strings = (
      'Warning'
      'Error'
      'Information'
      'Confirm'
      'Custom'
      'OK'
      'Cancel'
      'Yes'
      'No'
      'Abort'
      'Retry'
      'Ignore'
      'All'
      'Yes to All'
      'No to All'
      'Help'
      'Close')
    Opacity = 0.200000000000000000
  end
end
`;