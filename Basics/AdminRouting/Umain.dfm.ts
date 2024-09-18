export const dfm = `object Form1: TForm1
  Color = clWhite
  ElementFont = efCSS
  Font.Charset = ANSI_CHARSET
  Font.Color = clBlack
  Font.Height = -11
  Font.Name = 'Arial'
  Font.Size = 8
  Font.Style = []
  FormStyle = fsNormal
  Height = 595
  Left = 0
  OnCreate = WebFormCreate
  OnShow = WebFormShow
  TabOrder = 0
  Top = 0
  Width = 694
  object WebElementActionList1: TWebElementActionList
    Actions = <
      item
        ID = 'dashboard'
        Name = 'dashboard'
        OnExecute = WebElementActionList1Actions0Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnkdashboard'
      end
      item
        ID = 'search'
        Name = 'search'
        OnExecute = WebElementActionList1Actions1Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnksearch'
      end
      item
        ID = 'insights'
        Name = 'insights'
        OnExecute = WebElementActionList1Actions2Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnkinsights'
      end
      item
        ID = 'docs'
        Name = 'docs'
        OnExecute = WebElementActionList1Actions3Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnkdocs'
      end
      item
        ID = 'products'
        Name = 'products'
        OnExecute = WebElementActionList1Actions4Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnkproducts'
      end
      item
        ID = 'settings'
        Name = 'settings'
        OnExecute = WebElementActionList1Actions5Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnksettings'
      end
      item
        ID = 'messages'
        Name = 'messages'
        OnExecute = WebElementActionList1Actions6Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnkmessages'
      end
      item
        ID = 'account'
        Name = 'account'
        OnExecute = WebElementActionList1Actions7Execute
        TargetAction = actAddRemoveClass
        TargetClassAdd = 'bg-gray-300'
        TargetClassRemove = 'hover:bg-gray-300'
        TargetID = 'lnkaccount'
      end>
    Left = 328
    Top = 248
  end
end
`;