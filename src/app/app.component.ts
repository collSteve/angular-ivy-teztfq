declare var $: any;
import { Component, ElementRef } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {}

  dropdownIsVisible = false;
}
