import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppMainBarComponent } from './main-bar/main-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ScreenComponent } from './app-screen/app-screen.component';
import { UserComponent } from './main-bar/user/user.component';
import { LoginComponent } from './login/login.component';
import { ApiBackService } from "./services/api-back.service";
import { AjaxService} from "./services/ajax.service";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppMainBarComponent,
    BottomBarComponent,
    ScreenComponent,
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
    ApiBackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
