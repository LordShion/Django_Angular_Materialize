import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { AppMainBarComponent } from './main-bar/main-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { GameScreenComponent } from './game-screen/game-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMainBarComponent,
    BottomBarComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
