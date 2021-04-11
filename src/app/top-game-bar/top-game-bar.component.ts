import { Component, OnInit, HostListener } from "@angular/core";
import { pageData, frontendData } from "../frontend_data";

@Component({
  selector: "app-top-game-bar",
  templateUrl: "./top-game-bar.component.html",
  styleUrls: ["./top-game-bar.component.css"]
})
export class TopGameBarComponent implements OnInit {
  pageName = pageData.pageName;
  topBarY = frontendData.topBarY;

  visible = window.scrollY > this.topBarY;

  returnBtnText = "&lsaquo;";

  @HostListener("window:scroll", ["$event"])
  public onWindowScroll(): void {
    if (window.scrollY > this.topBarY) {
      // show top nav bar
      this.visible = true;
    } else {
      // hide top nav bar
      this.visible = false;
    }
  }

  ngOnInit() {}
}
