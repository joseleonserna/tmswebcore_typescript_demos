export const dfm = `object Form4: TForm4
  Left = 0
  Top = 0
  Width = 475
  Height = 506
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -16
  Font.Name = 'RobotoRegular'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  OnResize = WebFormResize
  object lbldesc: TWebLabel
    Left = 192
    Top = 224
    Width = 283
    Height = 18
    Caption = 'This demo shows an infinite scrolling list. '
    ElementID = 'description'
  end
  object lbltit: TWebLabel
    Left = 192
    Top = 256
    Width = 185
    Height = 18
    Caption = 'Continuous scroll list demo'
    ElementID = 'title'
  end
  object WebHTMLDiv1: TWebHTMLDiv
    Left = 0
    Top = 0
    Width = 475
    Height = 506
    Align = alClient
    ChildOrder = 2
    Role = ''
    object WebContinuousScroll1: TWebContinuousScroll
      Left = 3
      Top = 0
      Width = 450
      Height = 481
      ElementClassName = 'cont-scroll'
      HeightStyle = ssPercent
      WidthStyle = ssAuto
      TabOrder = 0
      ItemTemplate = 
        '<div style="float: right; padding: 10px">(%message_number%)</div' +
        '><p style="font-size:12pt; padding: 10px; margin: 0px"><b>(%firs' +
        't_name%) (%last_name%)</b></p> <div style="padding: 0px 10px"><i' +
        'mg style="vertical-align:middle" src="https://tmswebcore.com/dem' +
        'os/ContinuousScroll/img/(%status_icon%)"> <span style="vertical-' +
        ' align:middle">(%status%)</span></div> <p style="text-overflow: ' +
        'ellipsis; padding: 10px; margin: 0px;"><b>Message:</b> (%message' +
        '%)</p> <div style="float: right; padding: 0px 10px 10px; margin:' +
        ' 0px">(%date%)</div><p id="fav_count(%message_number%)" style="t' +
        'ext-align: left;padding: 0px 10px 10px 5px; margin: 0px; display' +
        ': inline-block"> (%favs%)</p>'
      LoadType = ltScroll
      OnFetchNextPage = WebContinuousScroll1FetchNextPage
      OnGetListItem = WebContinuousScroll1GetListItem
      OnItemGetFieldValue = WebContinuousScroll1ItemGetFieldValue
    end
  end
end
`;