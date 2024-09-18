export const dfm = `object Form1: TForm1
  Left = 0
  Top = 0
  Width = 878
  Height = 655
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  FormContainer = 'appcontent'
  TabOrder = 1
  object WebLabel7: TWebLabel
    Left = 8
    Top = 608
    Width = 136
    Height = 13
    Caption = 'Responsive Grid Panel Demo'
    ElementID = 'title'
  end
  object WebLabel6: TWebLabel
    Left = 8
    Top = 627
    Width = 468
    Height = 13
    Caption = 
      'The ResponsiveGridPanel has a layout collection to set different' +
      ' layouts for different form factors'
    ChildOrder = 1
    ElementID = 'description'
    ElementFont = efCSS
    ElementPosition = epRelative
    HTMLType = tDIV
    WordWrap = True
    WidthStyle = ssPercent
  end
  object Outerpanel: TWebResponsiveGridPanel
    Left = 0
    Top = 0
    Width = 839
    Height = 586
    HeightStyle = ssAuto
    WidthStyle = ssPercent
    ControlCollection = <
      item
        Column = 0
        Row = 0
        Control = WebImageControl1
      end
      item
        Column = 0
        Row = 0
        Control = WebPanel1
      end
      item
        Column = 0
        Row = 0
        Control = WebHTMLDiv1
      end
      item
        Column = 0
        Row = 0
        Control = Innerpanel
      end
      item
        Column = 0
        Row = 0
        Control = WebHTMLDiv2
      end>
    Color = clWhite
    ElementFont = efCSS
    Layout = <
      item
        ColumnGap = '10'
        Description = 'Ultrasmall'
        Style = '1fr'
        Width = 300
      end
      item
        ColumnGap = '10'
        Description = 'Smartphone'
        Margins.Top = 5
        RowGap = '0'
        Style = '1fr'
        Width = 575
      end
      item
        ColumnGap = '0'
        Description = 'Tablet'
        RowGap = '0'
        Style = '200px 1fr'
        Width = 768
      end>
    OnLayoutChange = OuterpanelLayoutChange
    DesignSize = (
      839
      586)
    object WebImageControl1: TWebImageControl
      Left = 0
      Top = 0
      Width = 128
      Height = 128
      HeightStyle = ssAuto
      WidthStyle = ssAuto
      Anchors = []
      AutoSize = True
      URL = 'https://www.tmssoftware.com/site/img/tmslogo_128x128.png'
    end
    object WebPanel1: TWebPanel
      Left = 200
      Top = 0
      Width = 639
      Height = 65
      ElementClassName = 'bottomborder'
      WidthStyle = ssPercent
      Anchors = []
      BorderColor = clSilver
      BorderStyle = bsNone
      Color = clWindow
      ElementFont = efCSS
      ElementPosition = epRelative
      object WebLabel5: TWebLabel
        Left = 64
        Top = 0
        Width = 91
        Height = 65
        Align = alLeft
        AutoSize = False
        Caption = 'Edit contact details'
        ElementFont = efCSS
        Layout = tlCenter
        ExplicitHeight = 13
      end
      object WebImageControl2: TWebImageControl
        Left = 0
        Top = 0
        Width = 64
        Height = 65
        Align = alLeft
        AutoSize = True
        Picture.Data = {
          0954506E67496D61676589504E470D0A1A0A0000000D49484452000000400000
          00400806000000AA6971DE000000097048597300000EC300000EC301C76FA864
          000004934944415478DAED9A3D6814411480DF8182224262A1858577606123E6
          0A1B0BB341501B31296D740FC44E625A41DD08B14DD20B9E36019B5C626323B9
          58091677621A41C959D85824D70816427C6F6E76B33B37B337FBBF777B0F86BD
          D9DD999DF7CDCF7BF3E64A50702965DD80AC650C20EB06642D630049556C5996
          8997DB980C4C13C2E32EA626A60D7CAF3E5200B8E2CF3095358B74302D660522
          3600A800F5F23AF47A3C8C3430D5B09EEED001E0CA6F619A8A58551BD34C9A10
          22038851F94C20C40160192F8F626ED70AD6BB907B00D8C8325E76136A5B05EB
          EFE41DC02BBC9809B5AD8EF5D7720B80CFFDFD84DB3799F45A1005C02CF4CC5E
          923287DF69E41580053D87274959E4DF1903282A80C417C2BC0328FC08C83580
          34AC00B9C4CDBC0228B61FC02114D713E400CA50E4BD008750DCDD2007107B3C
          00EBACA6A17C2C006286307C112101022D8AB321AB18DE98A000C28422468515
          20E85C604A028394A6E13E7AE702C32663005937206B89EA09D2CA4FAB3ECDF5
          AECC75C57B078AB225C93DB22254E706A6461A16213000EEFE92D2F740B0FB0A
          A5F64172388AF7273560D142F99AC3E8640A001B60E0651EFCED7C5F10531137
          E8DBE70FD85EB779DDB1431808800F735240C7DFEFDBC1F1F2B461B247010DEB
          8A38BC7D76960BF86C857EDC7AFEDE3DE50CF03976C7D478F7F4E6C029E40B20
          848BDBC13215493D161C8E026994076F11A4B2A00CB9C56DAE3C95999728AD12
          2ABF8A102CBF970601680550DE96AADD68573D26F4DC64929AE8FC609EBED192
          298F8A139475593B4E1C3B02D72E9DC5EB51D8E9ECC1D79F7BB2F6B0E983203A
          81004488F9F56D65314FA3C8E0D926E66784E7E296BACA9527A5A9ACB4D7571F
          5C81CA99934EFEC5DB167CFAF65BF62A038A10DAE203298088810ECF3450D4E5
          097608C39FCD79DEF32D95F217CF9D82A5BB973DF77670043C7EF359D52E8250
          1547820A40D42087330D147539A34418FE4E2C0001F84EBFD313C7E1E5C3AB9E
          7B1FBEFC82D5CD1DBF76B5118027D6A002202E4841C5ADA0AF1F20006266942F
          7803A71FCDFFFBD72FB0B5807A7F09A7C09FBFFF06155B742F8C32C785148F1A
          E773A68106001B362BC34DDD2EE8AFF641859961DB44CA00C415EF67BDA9B0EF
          CC5FE0CED516BFC7460D02A0775FE97F2694D410405D05C082784E7C6C254513
          47C2D608010E3B044100045F2BAA7467FABC27EF630A452127694E0540BB011A
          C20E36047F822D74928315F62E02904D19A96C3EB9E1C9AF7DFC016BDBDF758A
          7611C0A40A80DB66471566D2648E10265AF8965DDF656D410007BA9547000008
          A0A40210D502B8C5BD18EEF2AB3BEF7C274F00B41BA029768F9BBCFEBA302246
          1E40DF064936CA46190089B303F4B132B9590493004062C70954363EB0198C00
          C0D70C86D902C721811DA108007C1DA134FEF92193C0AE704800FEAE30876042
          F2EEA84CEC69608186371A1280FF66C805C1E010CA2902D0DE0E8704A0B71D16
          409810ECB033AA6805444200D00F882840506FD0FA300DBD9E496ABB4AA21512
          0B002058484C13C8041C0E51C3F5685A78D55054D114F2DBAEDF0D5734B80C8A
          A0A826807041D1BC492661F1BC49EA07234590C203F80FEA83CE5FD32DB4A300
          00000049454E44AE426082}
      end
    end
    object WebHTMLDiv1: TWebHTMLDiv
      Left = 0
      Top = 128
      Width = 100
      Height = 29
      Anchors = []
      Role = ''
    end
    object Innerpanel: TWebResponsiveGridPanel
      Left = 200
      Top = 128
      Width = 639
      Height = 209
      HeightStyle = ssAuto
      WidthStyle = ssPercent
      Anchors = []
      ControlCollection = <
        item
          Column = 0
          Row = 0
          Control = WebLabel1
        end
        item
          Column = 0
          Row = 0
          Control = WebEdit1
        end
        item
          Column = 0
          Row = 0
          Control = WebLabel2
        end
        item
          Column = 0
          Row = 0
          Control = WebEdit2
        end
        item
          Column = 0
          Row = 0
          Control = WebLabel3
        end
        item
          Column = 0
          Row = 0
          Control = WebEdit3
        end
        item
          Column = 0
          Row = 0
          Control = WebLabel4
        end
        item
          Column = 0
          Row = 0
          Control = WebComboBox1
        end
        item
          Column = 0
          Row = 0
          Control = WebHTMLDiv3
        end>
      Color = clWhite
      ElementFont = efCSS
      Layout = <
        item
          ColumnGap = '10px'
          Description = 'Smartphone'
          Margins.Left = 10
          Margins.Right = 10
          RowGap = '10px'
          Style = '1fr'
          Width = 575
        end
        item
          ColumnGap = '10px'
          Description = 'Tablet'
          RowGap = '10px'
          Style = '1fr 1fr'
          Width = 768
        end>
      OnLayoutChange = InnerpanelLayoutChange
      DesignSize = (
        639
        209)
      object WebLabel1: TWebLabel
        Left = 10
        Top = 10
        Width = 27
        Height = 13
        Anchors = []
        Caption = 'Name'
        ElementFont = efCSS
      end
      object WebLabel2: TWebLabel
        Left = 10
        Top = 39
        Width = 30
        Height = 13
        Anchors = []
        Caption = 'Street'
        ElementFont = efCSS
      end
      object WebLabel3: TWebLabel
        Left = 10
        Top = 68
        Width = 19
        Height = 13
        Anchors = []
        Caption = 'City'
        ElementFont = efCSS
      end
      object WebLabel4: TWebLabel
        Left = 10
        Top = 97
        Width = 39
        Height = 13
        Anchors = []
        Caption = 'Country'
        ElementFont = efCSS
      end
      object WebEdit1: TWebEdit
        Left = 330
        Top = 10
        Width = 121
        Height = 19
        Anchors = []
        ElementFont = efCSS
      end
      object WebEdit2: TWebEdit
        Left = 330
        Top = 39
        Width = 121
        Height = 19
        Anchors = []
        ElementFont = efCSS
      end
      object WebEdit3: TWebEdit
        Left = 330
        Top = 68
        Width = 121
        Height = 19
        Anchors = []
        ElementFont = efCSS
      end
      object WebComboBox1: TWebComboBox
        Left = 330
        Top = 97
        Width = 145
        Height = 22
        Anchors = []
        ElementFont = efCSS
        ItemIndex = -1
        Items.Strings = (
          'Germany'
          'Netherlands'
          'France'
          'United Kingdom'
          'Luxemburg'
          'Switzerland'
          'Italy'
          'spain'
          'Hungary'
          'Poland'
          'Denmark')
      end
      object WebHTMLDiv3: TWebHTMLDiv
        Left = 10
        Top = 129
        Width = 100
        Height = 40
        Anchors = []
        Role = ''
      end
    end
    object WebHTMLDiv2: TWebHTMLDiv
      Left = 0
      Top = 337
      Width = 100
      Height = 40
      Anchors = []
      Role = ''
    end
  end
end
`;