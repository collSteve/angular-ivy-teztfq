import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeaderNavSectionsComponent } from "./header-nav-sections/header-nav-sections.component";
import { HeaderComponent } from "./header/header.component";
import { SeriesBarComponent } from "./series-bar/series-bar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { GameNameBandComponent } from "./game-name-band/game-name-band.component";
import { TopGameBarComponent } from './top-game-bar/top-game-bar.component';
import { GameComponent } from './game/game.component';
import { MainComponent } from './main/main.component';
import { BlankComponent } from './blank/blank.component';
import { BarAndBlankComponent } from './bar-and-blank/bar-and-blank.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderNavSectionsComponent,
    HeaderComponent,
    SeriesBarComponent,
    MainContentComponent,
    GameNameBandComponent,
    TopGameBarComponent,
    GameComponent,
    MainComponent,
    BlankComponent,
    BarAndBlankComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
