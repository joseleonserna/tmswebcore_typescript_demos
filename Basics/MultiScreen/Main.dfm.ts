export const dfm = `object MainForm: TMainForm
  Width = 641
  Height = 479
  Caption = 'Weather around the world!'
  OnCreate = Form1Create
  object ShowWeatherButton: TWebButton
    Left = 207
    Top = 150
    Width = 227
    Height = 161
    Margins.Left = 1
    Margins.Top = 1
    Margins.Right = 1
    Margins.Bottom = 1
    ElementID = 'showweather'
    HeightPercent = 100.000000000000000000
    WidthPercent = 100.000000000000000000
    OnClick = ShowWeatherButtonClick
  end
end
`;