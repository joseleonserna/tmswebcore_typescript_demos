export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  CSSLibrary = cssBootstrap
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Arial'
  Font.Style = []
  TabOrder = 1
  object WebMemo1: TWebMemo
    Left = 128
    Top = 184
    Width = 401
    Height = 233
    AutoSize = False
    ElementClassName = 'form-control'
    ElementFont = efCSS
    Lines.Strings = (
      'The form is build from a HTML template.'
      ''
      
        'All the visuals from this page are defined in the HTML template ' +
        'loaded in '
      'UElementActionList.html'
      ''
      
        'The TWebElementActionList contains various TWebElementAction ite' +
        'ms.'
      
        'Each item handles a specific event happening for the HTML elemen' +
        'ts in the'
      'page template.'
      ''
      
        'The element in the page template causing the event is linked to ' +
        'the action '
      'via the TWebElementAction.ID property.'
      ''
      
        'The TWebElementAction.OnExecute event is triggered when this eve' +
        'nt '#11
      'happens.')
    SelLength = 0
    SelStart = 507
    Visible = False
  end
  object WebElementActionList1: TWebElementActionList
    Actions = <
      item
        ID = 'register'
        TargetAction = actNone
        OnExecute = WebElementActionList1Actions0Execute
      end
      item
        ID = 'register2'
        TargetAction = actNone
        OnExecute = WebElementActionList1Actions1Execute
      end
      item
        ID = 'started'
        TargetAction = actNone
        OnExecute = WebElementActionList1Actions2Execute
      end
      item
        ID = 'freebtn'
        TargetAction = actNone
        OnExecute = WebElementActionList1Actions3Execute
      end
      item
        ID = 'businessbtn'
        TargetAction = actNone
        OnExecute = WebElementActionList1Actions4Execute
      end
      item
        ID = 'basicbtn'
        TargetAction = actNone
        OnExecute = WebElementActionList1Actions5Execute
      end>
    Left = 312
    Top = 136
  end
end
`;