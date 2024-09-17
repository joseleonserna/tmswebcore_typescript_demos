import { dfm } from "./Unit1.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { Format } from "@tmssoftware/webcore/System.SysUtils"
import { clBlack, clWhite } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebImageSlider, TNavigationStyle, TTransitionEffect } from "@tmssoftware/webcore/WEBLib.Slider"
import { TWebButton, TWebMemo, TWebComboBox, TWebLabel, TWebCheckBox } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"

@unit("Unit1")
export class TForm1 extends TWebForm
{
   btChangeHeight: TWebButton = null;
   btLoadImages: TWebButton = null;
   btChangeCount: TWebButton = null;
   ControlPanel: TWebPanel = null;
   ContentPanel: TWebPanel = null;
   WebPanel1: TWebPanel = null;
   memoEventInfo: TWebMemo = null;
   ImageSlider: TWebImageSlider = null;
   cbNavigationStyle: TWebComboBox = null;
   WebLabel1: TWebLabel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   cbTransitionEffect: TWebComboBox = null;
   desclbl: TWebLabel = null;
   titlbl: TWebLabel = null;
   ckSizeAspectRatio: TWebCheckBox = null;
   btLoadImagesClick(Sender: TObject): void
   {
      let i: number = 0;
      for (i = 1; i <= 12; i++)
      this.ImageSlider.ImageURLs.Add(Format("./images/nature-%d.jpg", [i]));
      this.ImageSlider.RefreshImages();
      this.EnableProperButtons();
   }
   btChangeHeightClick(Sender: TObject): void
   {
      if (this.ImageSlider.Appearance.Thumbnails.SizePercent === 20)
      this.ImageSlider.Appearance.Thumbnails.SizePercent = 30;
      else
      this.ImageSlider.Appearance.Thumbnails.SizePercent = 20;
   }
   btChangeCountClick(Sender: TObject): void
   {
      if (this.ImageSlider.Appearance.Thumbnails.NumDisplayed === 8)
      this.ImageSlider.Appearance.Thumbnails.NumDisplayed = 10;
      else
      this.ImageSlider.Appearance.Thumbnails.NumDisplayed = 8;
   }
   WebFormCreate(Sender: TObject): void
   {
      this.ImageSlider.Color = clBlack;
      this.ImageSlider.Appearance.Buttons.Color = clWhite;
      this.ImageSlider.OnImageClick = this.DoOnImageClick;
      this.ImageSlider.OnThumbnailClick = this.DoOnThumbnailClick;
      this.ImageSlider.OnImageChange = this.DoOnImageChange;
      this.cbTransitionEffect.Items.Add("Slide");
      this.cbTransitionEffect.Items.Add("Fade");
      this.cbTransitionEffect.Items.Add("Flip");
      this.cbTransitionEffect.ItemIndex = Number(this.ImageSlider.Appearance.TransitionEffect);
      this.cbNavigationStyle.Items.Add("None");
      this.cbNavigationStyle.Items.Add("Thumbnails");
      this.cbNavigationStyle.Items.Add("Bullets");
      this.cbNavigationStyle.ItemIndex = Number(this.ImageSlider.Appearance.NavigationStyle);
      this.EnableProperButtons();
   }
   cbNavigationStyleChange(Sender: TObject): void
   {
      this.ImageSlider.Appearance.NavigationStyle = (this.cbNavigationStyle.ItemIndex as TNavigationStyle);
      this.EnableProperButtons();
   }
   cbTransitionEffectChange(Sender: TObject): void
   {
      this.ImageSlider.Appearance.TransitionEffect = (this.cbTransitionEffect.ItemIndex as TTransitionEffect);
      this.EnableProperButtons();
   }
   ckSizeAspectRatioClick(Sender: TObject): void
   {
      this.ImageSlider.Appearance.Thumbnails.SizeAspectRatio = this.ckSizeAspectRatio.Checked;
   }
   private EnableProperButtons(): void
   {
      this.btLoadImages.Enabled = this.ImageSlider.ImageURLs.Count === 0;
      this.cbNavigationStyle.Enabled = this.ImageSlider.ImageURLs.Count > 0;
      this.cbTransitionEffect.Enabled = this.ImageSlider.ImageURLs.Count > 0;
      this.btChangeHeight.Enabled = (this.ImageSlider.ImageURLs.Count > 0) && (this.ImageSlider.Appearance.NavigationStyle === TNavigationStyle.navsThumbnails);
      this.btChangeCount.Enabled = this.btChangeHeight.Enabled;
      this.ckSizeAspectRatio.Enabled = this.btChangeHeight.Enabled;
   }
   protected DoOnImageClick(Sender: TObject, ImageIndex: number): void
   {
      this.memoEventInfo.Text = Format("Event: ImageClick#13#10" + "Index: %d", [ImageIndex]);
   }
   protected DoOnThumbnailClick(Sender: TObject, ImageIndex: number): void
   {
      this.memoEventInfo.Text = Format("Event: ThumbnailClick#13#10" + "Index: %d", [ImageIndex]);
   }
   protected DoOnImageChange(Sender: TObject, ImageIndex: number): void
   {
      this.memoEventInfo.Text = Format("Event: ImageChange#13#10" + "Index: %d", [ImageIndex]);
   }
}

export let Form1: TForm1 = null;

globalThis.Form1 = null;
globalThis.TForm1 = dfm;