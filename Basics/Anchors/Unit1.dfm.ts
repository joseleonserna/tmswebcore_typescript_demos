export const dfm = `object Form4: TForm4
  Left = 0
  Top = 0
  Width = 675
  Height = 500
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  object WebLabel3: TWebLabel
    Left = 312
    Top = 248
    Width = 83
    Height = 16
    Caption = 'Anchors Demo'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 3
    Top = 29
    Width = 445
    Height = 32
    Caption = 
      'This demo shows anchoring of controls on the web form. Resize th' +
      'e browser window to see the effect.'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebPanel1: TWebPanel
    Left = 24
    Top = 20
    Width = 410
    Height = 281
    Anchors = [akLeft, akTop, akRight, akBottom]
    BorderColor = clSilver
    BorderStyle = bsSingle
    Caption = 'WebPanel1'
    DesignSize = (
      410
      281)
    object WebLabel1: TWebLabel
      Left = 24
      Top = 24
      Width = 120
      Height = 16
      Caption = 'Left anchored label 1'
    end
    object WebLabel2: TWebLabel
      Left = 24
      Top = 64
      Width = 120
      Height = 16
      Caption = 'Left anchored label 2'
    end
    object WebEdit1: TWebEdit
      Left = 268
      Top = 21
      Width = 121
      Height = 24
      Anchors = [akTop, akRight]
      Text = 'Anchor right'
    end
    object WebEdit2: TWebEdit
      Left = 268
      Top = 61
      Width = 121
      Height = 24
      Anchors = [akLeft, akTop, akRight]
      TabOrder = 1
      Text = 'Anchor left,right'
    end
    object WebMemo1: TWebMemo
      Left = 24
      Top = 120
      Width = 365
      Height = 142
      Anchors = [akLeft, akTop, akRight, akBottom]
      AutoSize = False
      Lines.Strings = (
        'Left,Top / Right,Bottom anchored memo')
      SelLength = 0
      SelStart = 39
      TabOrder = 2
    end
  end
end
`;