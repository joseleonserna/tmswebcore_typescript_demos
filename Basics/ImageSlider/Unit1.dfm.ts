export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 885
  Height = 471
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object desclbl: TWebLabel
    Left = 416
    Top = 232
    Width = 289
    Height = 16
    Caption = 'Demo showing control to slide collection of images'
    ElementID = 'description'
  end
  object titlbl: TWebLabel
    Left = 424
    Top = 240
    Width = 139
    Height = 16
    Caption = 'Web Image Slider demo'
    ElementID = 'title'
  end
  object WebPanel1: TWebPanel
    Left = 0
    Top = 0
    Width = 885
    Height = 471
    Align = alClient
    BorderColor = clSilver
    BorderStyle = bsSingle
    ChildOrder = 2
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'Tahoma'
    Font.Style = []
    ParentFont = False
    object ControlPanel: TWebPanel
      Left = 0
      Top = 0
      Width = 249
      Height = 471
      Align = alLeft
      BorderColor = clSilver
      BorderStyle = bsSingle
      ChildOrder = 3
      object WebLabel1: TWebLabel
        Left = 11
        Top = 123
        Width = 96
        Height = 16
        Caption = 'Navigation Style:'
      end
      object WebLabel2: TWebLabel
        Left = 11
        Top = 286
        Width = 36
        Height = 16
        Caption = 'Event:'
      end
      object WebLabel3: TWebLabel
        Left = 11
        Top = 67
        Width = 98
        Height = 16
        Caption = 'Transition Effect:'
      end
      object btChangeHeight: TWebButton
        Left = 11
        Top = 188
        Width = 214
        Height = 25
        Caption = 'Change Thumbnails Height'
        OnClick = btChangeHeightClick
      end
      object btLoadImages: TWebButton
        Left = 11
        Top = 24
        Width = 214
        Height = 25
        Caption = 'Load Images'
        ChildOrder = 1
        OnClick = btLoadImagesClick
      end
      object btChangeCount: TWebButton
        Left = 11
        Top = 227
        Width = 214
        Height = 25
        Caption = 'Change Thumbnails Count'
        ChildOrder = 2
        OnClick = btChangeCountClick
      end
      object memoEventInfo: TWebMemo
        Left = 11
        Top = 312
        Width = 214
        Height = 129
        AutoSize = False
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Tahoma'
        Font.Style = []
        ParentFont = False
        SelLength = 0
        SelStart = 0
      end
      object cbNavigationStyle: TWebComboBox
        Left = 11
        Top = 145
        Width = 214
        Height = 22
        OnChange = cbNavigationStyleChange
        ItemIndex = -1
      end
      object cbTransitionEffect: TWebComboBox
        Left = 11
        Top = 89
        Width = 214
        Height = 22
        OnChange = cbTransitionEffectChange
        ItemIndex = -1
      end
      object ckSizeAspectRatio: TWebCheckBox
        Left = 32
        Top = 258
        Width = 177
        Height = 22
        Caption = 'Size by Aspect Ratio'
        ChildOrder = 9
        Color = clNone
        State = cbUnchecked
        OnClick = ckSizeAspectRatioClick
      end
    end
    object ContentPanel: TWebPanel
      Left = 249
      Top = 0
      Width = 636
      Height = 471
      Align = alClient
      BorderColor = clSilver
      BorderStyle = bsSingle
      ChildOrder = 1
      object ImageSlider: TWebImageSlider
        Left = 0
        Top = 0
        Width = 636
        Height = 471
        Appearance.NavigationStyle = navsThumbnails
        Appearance.TransitionEffect = tefSlide
        Appearance.Bullets.Opacity = 1.000000000000000000
        Appearance.Thumbnails.NumDisplayed = 8
        Appearance.Thumbnails.Opacity = 0.500000000000000000
        Appearance.Thumbnails.OpacityActive = 1.000000000000000000
        Align = alClient
        Color = clWhite
      end
    end
  end
end
`;