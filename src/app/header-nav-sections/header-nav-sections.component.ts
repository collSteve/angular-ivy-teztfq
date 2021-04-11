import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-header-nav-sections",
  templateUrl: "./header-nav-sections.component.html",
  styleUrls: ["./header-nav-sections.component.css"]
})
export class HeaderNavSectionsComponent implements OnInit {
  @Input() category;
  constructor() {}

  ngOnInit() {}
}
