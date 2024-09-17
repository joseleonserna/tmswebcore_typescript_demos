export const dfm = `object Form4: TForm4
  Left = 0
  Top = 0
  Width = 640
  Height = 480
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -13
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  OnCreate = WebFormCreate
  object WebLabel1: TWebLabel
    Left = 67
    Top = 88
    Width = 47
    Height = 16
    Caption = '-Events-'
  end
  object WebLabel3: TWebLabel
    Left = 67
    Top = 392
    Width = 171
    Height = 16
    Caption = 'TWebMainMenu control demo'
    ElementID = 'title'
  end
  object WebLabel2: TWebLabel
    Left = 67
    Top = 414
    Width = 453
    Height = 48
    Caption = 
      'This demo shows the use of the TWebMainMenu control. On large sc' +
      'reens the standard menu is displayed while on smaller screens th' +
      'e hamburger menu is displayed.'
    ElementID = 'description'
    WordWrap = True
    WidthStyle = ssPercent
  end
  object WebPanel2: TWebPanel
    Left = 0
    Top = 0
    Width = 640
    Height = 36
    Align = alTop
    BorderColor = clSilver
    BorderStyle = bsSingle
    ChildOrder = 6
    Color = clWindow
  end
  object WebMainMenu1: TWebMainMenu
    OnChange = WebMainMenu1Change
    Appearance.HamburgerMenu.Caption = 'Menu'
    Appearance.HamburgerMenu.CaptionColor = clBlack
    Appearance.HamburgerMenu.BackgroundColor = 15790320
    Appearance.HoverColor = clSkyBlue
    Appearance.HoverFontColor = clBlack
    Appearance.SubmenuIndicator = '&#9658;'
    Container = WebPanel2
    Left = 320
    Top = 56
    object File1: TMenuItem
      Caption = 'File'
      object Open1: TMenuItem
        Caption = 'Open'
        ImageIndex = 4
      end
      object Save1: TMenuItem
        Caption = 'Save'
        ImageIndex = 6
        object ext1: TMenuItem
          Caption = 'Text'
        end
        object PDF1: TMenuItem
          Caption = 'PDF'
        end
        object Image1: TMenuItem
          Caption = 'Image'
          object Hidden1: TMenuItem
            Caption = 'Hidden'
            Visible = False
          end
          object GIF1: TMenuItem
            Caption = 'GIF'
            RadioItem = True
          end
          object PNG1: TMenuItem
            Caption = 'PNG'
            Checked = True
            RadioItem = True
          end
          object JPGEG1: TMenuItem
            Caption = 'JPEG'
            RadioItem = True
          end
          object Bitmap1: TMenuItem
            Caption = 'Bitmap'
            RadioItem = True
          end
        end
      end
      object Close1: TMenuItem
        Caption = 'Close'
        ImageIndex = 0
      end
      object N1: TMenuItem
        Caption = '-'
      end
      object Exit1: TMenuItem
        Caption = 'Exit'
        ImageIndex = 3
      end
    end
    object Edit1: TMenuItem
      Caption = 'Edit'
      object Cut1: TMenuItem
        Caption = 'Cut '
        ImageIndex = 2
      end
      object Copy1: TMenuItem
        Caption = 'Copy'
        ImageIndex = 1
      end
      object Paste1: TMenuItem
        Caption = 'Paste'
        ImageIndex = 5
      end
    end
    object Help1: TMenuItem
      Caption = 'Help'
    end
  end
end
`;