import { Component, OnInit, HostListener } from "@angular/core";
import { pageData, frontendData } from "../frontend_data";

@Component({
  selector: "app-game-name-band",
  templateUrl: "./game-name-band.component.html",
  styleUrls: ["./game-name-band.component.css"]
})
export class GameNameBandComponent implements OnInit {
  pageName = pageData.pageName;
  pageCategory = pageData.category;
  topBarY = frontendData.topBarY;

  visible = true;

  constructor() {}

  // hide game band when top barY is reached
  @HostListener("window:scroll", ["$event"])
  public onWindowScroll(): void {
    if (window.scrollY > this.topBarY) {
      // show top nav bar
      this.visible = false;
    } else {
      // hide top nav bar
      this.visible = true;
    }
  }

  ngOnInit() {}
}
