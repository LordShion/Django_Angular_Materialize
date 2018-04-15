import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppMainBarComponent } from './main-bar/main-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { UserComponent } from './main-bar/user/user.component';
import { LoginComponent } from './login/login.component';
import { ApiBackGameService } from "./services/api-back-game.service";
import { AjaxService} from "./services/ajax.service";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppMainBarComponent,
    BottomBarComponent,
    GameScreenComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AjaxService,
    ApiBackGameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
