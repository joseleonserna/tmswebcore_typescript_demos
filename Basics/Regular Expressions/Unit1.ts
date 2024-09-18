import { dfm } from "./Unit1.dfm";
import { TObject, Integer, unit } from "@tmssoftware/webcore/system"
import { IntToStr, Format, Exception } from "@tmssoftware/webcore/System.SysUtils"
import { TStringList } from "@tmssoftware/webcore/System.Classes"
import { clWindowText, clBtnFace, clWhite, clRed } from "@tmssoftware/webcore/WEBLib.Graphics"
import { TWebForm } from "@tmssoftware/webcore/WEBLib.Forms"
import { TWebLabel, TWebButton, TWebMemo, TWebCheckBox, TWebComboBox } from "@tmssoftware/webcore/WEBLib.StdCtrls"
import { TWebPanel } from "@tmssoftware/webcore/WEBLib.ExtCtrls"
import { TMatch, TMatchCollection, TMatchCollectionEnumerator, TRegExOptions, TGroupCollection, TGroup, TRegExOption, TRegEx } from "@tmssoftware/webcore/WEBLib.RegularExpressions"
import { TrimRightSet } from "@tmssoftware/webcore/strutils"

@unit("Unit1")
export class TFormRegexDemo extends TWebForm
{
   WebPanel1: TWebPanel = null;
   contentPanel: TWebPanel = null;
   lblRemark: TWebLabel = null;
   btFindFirst: TWebButton = null;
   btFindNext: TWebButton = null;
   memoPattern: TWebMemo = null;
   leftPanel: TWebPanel = null;
   memoText: TWebMemo = null;
   ckUseMatchCollection: TWebCheckBox = null;
   ckUseEnumerator: TWebCheckBox = null;
   WebLabel1: TWebLabel = null;
   WebPanel3: TWebPanel = null;
   memoDump: TWebMemo = null;
   WebPanel4: TWebPanel = null;
   WebLabel2: TWebLabel = null;
   WebLabel3: TWebLabel = null;
   ckIgnoreCase: TWebCheckBox = null;
   ckMultiLine: TWebCheckBox = null;
   ckSingleLine: TWebCheckBox = null;
   WebLabel4: TWebLabel = null;
   cbExamples: TWebComboBox = null;
   lblDescrExample: TWebLabel = null;
   btDirectTest: TWebButton = null;
   WebLabel5: TWebLabel = null;
   WebLabel6: TWebLabel = null;
   ckUnicode: TWebCheckBox = null;
   WebLabel7: TWebLabel = null;
   WebLabel8: TWebLabel = null;
   WebFormCreate(Sender: TObject): void
   {
      this.SetupExamples();
   }
   btFindFirstClick(Sender: TObject): void
   {
      this.ClearDump();
      try
      {
         if (!this.ckUseMatchCollection.Checked)
         this.FindFirst();
         else
         this.FindFirstByMatchCollection();
      }
      catch(error: any)
      {
         let E = error;
         if (E instanceof Exception)
         {
            this.DumpError(E.Message);
            return;
         }
      }
   }
   btFindNextClick(Sender: TObject): void
   {
      this.ClearDump();
      try
      {
         if (!this.ckUseMatchCollection.Checked)
         this.FindNext();
         else
         this.FindNextByMatchCollection();
      }
      catch(error: any)
      {
         let E = error;
         if (E instanceof Exception)
         {
            this.DumpError(E.Message);
            return;
         }
      }
   }
   cbExamplesChange(Sender: TObject): void
   {
      let example: TRegexExample = TRegexExample.roSearchLink;
      this.ClearDump();
      // default the flags on switching
      // default the flags on switching
      this.ckIgnoreCase.Checked = true;
      this.ckMultiLine.Checked = false;
      this.ckSingleLine.Checked = false;
      this.ckUnicode.Checked = false;
      example = (this.cbExamples.ItemIndex as TRegexExample);
      switch(example)
      {
         case TRegexExample.roTestEmail:
            this.lblDescrExample.Caption = "Use Test Direct Match button to test for Email address.";
            // Many on the web. This simple one taken from
            // https://www.w3resource.com/javascript/form/email-validation.php
            // Many on the web. This simple one taken from
            // https://www.w3resource.com/javascript/form/email-validation.php
            this.memoPattern.Text = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";
            this.memoText.Text = "johndoe@gmail.com";
            break;
         case TRegexExample.roSearchLink:
            this.lblDescrExample.Caption = "Use Find First/Next to search for href links in the given text. " + "Default operation uses " + "Match method. Instead, you can use Matches/Matches with Enumerator too.";
            this.memoPattern.Text = "<a\\s.*?href=[\\\"\\'](.*?)[\\\"\\']*?>(.*?)<\\/a>";
            this.LoadFile("examplelinks.htm");
            break;
         case TRegexExample.roGroups:
            this.lblDescrExample.Caption = "Use Find First/Next to search for text made up with groups.";
            this.memoPattern.Text = "(str)([iau]ng)";
            this.memoText.Text = "Look for the Strings in this strang of strungs.";
            break;
         case TRegexExample.roTestIPAddress:
            this.lblDescrExample.Caption = "Use Test Direct Match button to test for IP address.";
            this.memoPattern.Text = "^\\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\" + ".(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\." + "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\." + "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b$";
            this.memoText.Text = "149.142.201.252";
            break;
         case TRegexExample.roTestDateMMDDYY:
            this.lblDescrExample.Caption = "Use Test Direct Match button to test for Date in mm-dd-yyyy format. " + "Dates allowed between 01-01-1900 and 31-12-2099.";
            this.memoPattern.Text = "^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[" + "01])[- /.](19|20)\\d\\d$";
            this.memoText.Text = "10-21-2019";
            break;
         case TRegexExample.roTestDateDDMMYY:
            this.lblDescrExample.Caption = "Use Test Direct Match button to test for Date in dd-mm-yyyy format. " + "Dates allowed between 01-01-1900 and 31-12-2099.";
            this.memoPattern.Text = "^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[01" + "2])[- /.](19|20)\\d\\d$";
            this.memoText.Text = "21-10-2019";
            break;
         case TRegexExample.roNamedGroups:
            this.lblDescrExample.Caption = "Use Find First/Next to detect the presence of next 'id' or 'home' named group.";
            this.memoPattern.Text = "<div (id=\"(?<id>[a-zA-Z0-9]+)\"|name=\"(?<name>[a-zA-Z0-9]+)\")";
            this.memoText.Text = "Look for the Strings in this strang of strungs.";
            this.LoadFile("examplenamedgroup.htm");
            break;
         case TRegexExample.roUnicode:
            this.lblDescrExample.Caption = "This expression looks for any character, even Unicode. " + "Since it uses class \\p, the Unicode flag must be used " + "with Find First/Next to find each letter.";
            this.ckUnicode.Checked = true;
            this.memoPattern.Text = "\\p{L}";
            this.memoText.Text = "A B C " + String.fromCharCode(0x2D8E);
            break;
      }
   }
   btDirectTestClick(Sender: TObject): void
   {
      let useInput: string = "";
      this.ClearDump();
      try
      {
         // For a direct test, we must remove New line from the end
         // as web memo always adds it even if absent.
         // For a direct test, we must remove New line from the end
         // as web memo always adds it even if absent.
         useInput = TrimRightSet(this.memoText.Text, ["\n", "\r"]);
         if (TRegEx.IsMatch$2(useInput, this.memoPattern.Text))
         this.lblRemark.Caption = "Match is Successful.";
         else
         this.lblRemark.Caption = "Match Failed.";
      }
      catch(error: any)
      {
         let E = error;
         if (E instanceof Exception)
         {
            this.DumpError(E.Message);
            return;
         }
      }
   }
   private FMatch: TMatch = new TMatch();
   private FMatches: TMatchCollection = new TMatchCollection();
   private FMatchesIndex: number = 0;
   private FEnum: TMatchCollectionEnumerator = null;
   private SetupExamples(): void
   {
      let example: TRegexExample = TRegexExample.roSearchLink;
      for (example = TRegexExample.roSearchLink; example <= TRegexExample.roUnicode; example++)
      {
         switch(example)
         {
            case TRegexExample.roTestEmail:
               this.cbExamples.Items.Add("Test Email Address");
               break;
            case TRegexExample.roSearchLink:
               this.cbExamples.Items.Add("Search for Links");
               break;
            case TRegexExample.roGroups:
               this.cbExamples.Items.Add("Search using Groups");
               break;
            case TRegexExample.roTestIPAddress:
               this.cbExamples.Items.Add("Test IP Address");
               break;
            case TRegexExample.roTestDateMMDDYY:
               this.cbExamples.Items.Add("Test Date mm-dd-yyyy");
               break;
            case TRegexExample.roTestDateDDMMYY:
               this.cbExamples.Items.Add("Test Date dd-mm-yyyy");
               break;
            case TRegexExample.roNamedGroups:
               this.cbExamples.Items.Add("Detect named group presence");
               break;
            case TRegexExample.roUnicode:
               this.cbExamples.Items.Add("Unicode character match");
               break;
         }
      }
      this.cbExamples.ItemIndex = 0;
      this.cbExamplesChange(this);
   }
   private LoadFile(aFileName: string): void
   {
      let slist: TStringList = null;
      slist = new TStringList().Create();
      try
      {
         slist.LoadFromFile(aFileName);
         this.memoText.Text = slist.Text;
      }
      finally
      {
         slist.Free();
      }
   }
   private SelectMatch(aMatch: TMatch): void
   {
      this.memoText.SelLength = 0;
      //Bug: in memo. Needed if caret put elsewhere.
      //Bug: in memo. Needed if caret put elsewhere.
      this.memoText.SelStart = aMatch.Index - 1;
      this.memoText.SelLength = aMatch.Length;
      this.memoText.SetFocus();
   }
   private ClearDump(): void
   {
      this.memoDump.Clear();
      // bug: setting parentcolor/font to true does not work.
      // bug: setting parentcolor/font to true does not work.
      this.memoDump.Font.Color = clWindowText;
      this.memoDump.Color = clBtnFace;
   }
   private DumpMatch(aMatch: TMatch): void
   {
      let i: number = 0;
      let groups: TGroupCollection = new TGroupCollection();
      let aGroup: TGroup = new TGroup();
      this.memoDump.Clear();
      this.memoDump.Lines.Add("CURRENT MATCH:");
      if (!aMatch.Success)
      {
         this.memoDump.Lines.Add("Success: False");
         return;
      }
      this.memoDump.Lines.Add("Success: True");
      this.memoDump.Lines.Add("Value: " + aMatch.Value);
      this.memoDump.Lines.Add("Index: " + IntToStr(aMatch.Index));
      this.memoDump.Lines.Add("Length: " + IntToStr(aMatch.Length));
      groups = aMatch.Groups;
      if (groups.Count === 0)
      {
         this.memoDump.Lines.Add("Groups: None");
         return;
      }
      this.memoDump.Lines.Add("");
      this.memoDump.Lines.Add("GROUPS FOUND:");
      if ((this.cbExamples.ItemIndex as TRegexExample) !== TRegexExample.roNamedGroups)
      {
         // Normal example with no named groups so dump the groups
         for (i = 0; i <= groups.Count - 1; i++)
         this.memoDump.Lines.Add(Format("  %d. Value: %s", [i, groups.GetItem(i).Value]));
      }
      else
      {
         // named group example so specifically look for 'id' and
         // 'name' groups by name and dump
         // named group example so specifically look for 'id' and
         // 'name' groups by name and dump
         aGroup = groups.GetItem("id");
         if (aGroup.Success)
         {
            this.memoDump.Lines.Add("Named Group 'id', Value: " + aGroup.Value);
         }
         aGroup = groups.GetItem("name");
         if (aGroup.Success)
         {
            this.memoDump.Lines.Add("Named Group 'name', Value: " + aGroup.Value);
         }
      }
   }
   private DumpError(aMsg: string): void
   {
      this.memoDump.Clear();
      this.memoDump.Font.Color = clWhite;
      this.memoDump.Color = clRed;
      this.memoDump.Lines.Add(aMsg);
   }
   private GetOptions(): TRegExOptions
   {
      let Result: TRegExOptions = new Set([]);
      Result = new Set([]);
      if (this.ckIgnoreCase.Checked)
      Result.add(TRegExOption.roIgnoreCase);
      if (this.ckMultiLine.Checked)
      Result.add(TRegExOption.roMultiLine);
      if (this.ckSingleLine.Checked)
      Result.add(TRegExOption.roSingleLine);
      if (this.ckUnicode.Checked)
      Result.add(TRegExOption.roJSUnicode);
      return Result;
   }
   private FindFirst(): void
   {
      this.FMatch = TRegEx.Match$4(this.memoText.Text, this.memoPattern.Text, this.GetOptions());
      this.DumpMatch(this.FMatch);
      if (this.FMatch.Success)
      {
         this.lblRemark.Caption = "Found first TMatch by Match method.";
         this.SelectMatch(this.FMatch);
      }
      else
      this.lblRemark.Caption = "No TMatch found by Match method.";
   }
   private FindNext(): void
   {
      this.FMatch = this.FMatch.NextMatch();
      this.DumpMatch(this.FMatch);
      if (this.FMatch.Success)
      {
         this.lblRemark.Caption = "Found next TMatch by Match method.";
         this.SelectMatch(this.FMatch);
      }
      else
      this.lblRemark.Caption = "No more TMatch found by Match method.";
   }
   private FindFirstByMatchCollection(): void
   {
      let aMatch: TMatch = new TMatch();
      this.FMatches = TRegEx.Matches$3(this.memoText.Text, this.memoPattern.Text, this.GetOptions());
      this.FMatchesIndex = 0;
      if (!this.ckUseEnumerator.Checked)
      {
         if (this.FMatches.Count <= this.FMatchesIndex)
         {
            this.lblRemark.Caption = "No TMatch found by Matches method.";
            return;
         }
         aMatch = this.FMatches.GetItem(this.FMatchesIndex);
         this.DumpMatch(aMatch);
         if (aMatch.Success)
         {
            this.lblRemark.Caption = "Found first TMatch by Matches method.";
            this.SelectMatch(aMatch);
         }
         else
         this.lblRemark.Caption = "Found FAILED first TMatch by Matches method.";
      }
      else
      {
         this.FEnum = this.FMatches.GetEnumerator();
         // As per specs a MoveNext is needed even to get to
         // first match.
         if (!this.FEnum.MoveNext())
         {
            this.lblRemark.Caption = "No TMatch found by Matches--Enumerator.";
            return;
         }
         aMatch = this.FEnum.Current;
         this.DumpMatch(aMatch);
         if (aMatch.Success)
         {
            this.lblRemark.Caption = "Found first TMatch by Matches--Enumerator.";
            this.SelectMatch(aMatch);
         }
         else
         this.lblRemark.Caption = "Found FAILED first TMatch by Matches--Enumerator.";
      }
   }
   private FindNextByMatchCollection(): void
   {
      let aMatch: TMatch = new TMatch();
      if (!this.ckUseEnumerator.Checked)
      {
         this.FMatchesIndex = this.FMatchesIndex + 1;
         if (this.FMatches.Count <= this.FMatchesIndex)
         {
            this.lblRemark.Caption = "No more TMatch found by Matches method.";
            return;
         }
         aMatch = this.FMatches.GetItem(this.FMatchesIndex);
         this.DumpMatch(aMatch);
         if (aMatch.Success)
         {
            this.lblRemark.Caption = "Found next TMatch by Matches method.";
            this.SelectMatch(aMatch);
         }
         else
         this.lblRemark.Caption = "Found FAILED next TMatch by Matches method.";
      }
      else
      {
         if (this.FEnum === null)
         // in case find next with enum pressed without find first
         return;
         if (!this.FEnum.MoveNext())
         {
            this.lblRemark.Caption = "No more TMatch found by Matches--Enumerator.";
            return;
         }
         aMatch = this.FEnum.Current;
         this.DumpMatch(aMatch);
         if (aMatch.Success)
         {
            this.lblRemark.Caption = "Found next TMatch by Matches--Enumerator.";
            this.SelectMatch(aMatch);
         }
         else
         this.lblRemark.Caption = "Found FAILED next TMatch by Matches--Enumerator.";
      }
   }
}

export let FormRegexDemo: TFormRegexDemo = null;
enum TRegexExample {
   roSearchLink,
   roGroups,
   roTestEmail,
   roTestIPAddress,
   roTestDateMMDDYY,
   roTestDateDDMMYY,
   roNamedGroups,
   roUnicode,
}


globalThis.FormRegexDemo = null;
globalThis.TFormRegexDemo = dfm;  