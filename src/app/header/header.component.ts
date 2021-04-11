declare var $: any;
import { Component, OnInit } from "@angular/core";

import { categories } from "../categories";
import { frontendData } from "../frontend_data";
import { ViewChild, ElementRef, HostListener, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  categories = categories;
  logoPath = frontendData.path;
  orgName = frontendData.orgName;

  buttonSpecialChar = "&nbsp; &dtrif;";
  dropDownVisibility = false;
  displayStyle = "none";
  @ViewChild("dropdown") dropdownSection: ElementRef;
  @ViewChild("dropdownBtn") dropdownBtn: ElementRef;

  constructor(private elementRef: ElementRef) {}

  changeDisplayToNone() {
    if (this.dropDownVisibility) {
      this.displayStyle = "none";
      this.dropDownVisibility = false;
    }
  }

  changeDropDownDisplay() {
    if (this.dropDownVisibility) {
      this.displayStyle = "none";
      this.dropDownVisibility = false;
    } else {
      this.displayStyle = "grid";
      this.dropDownVisibility = true;
    }
  }

  @HostListener("document:click", ["$event"])
  public onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;

    // Check if the click was outside the element
    if (
      targetElement &&
      this.dropDownVisibility &&
      !this.dropdownSection.nativeElement.contains(targetElement) &&
      !this.dropdownBtn.nativeElement.contains(targetElement)
    ) {
      this.changeDisplayToNone();
    }
  }

  ngOnInit() {}
}
