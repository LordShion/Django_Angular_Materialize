import {Component, OnInit, Output, EventEmitter, Inject, Input} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {ApiBackService} from "../../services/api-back.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  response =  {
        'error': false,
        'data': null
      };
  rxjsSubs: Subscription[] = [];
  isLogged = false;

  @Output() stateLoading = new EventEmitter();

  constructor(@Inject(ApiBackService) private _apiBackManager) { }

  ngOnInit() {
    this.rxjsSubs.push(this._apiBackManager.user_details().subscribe(
      res=> {
        this.stateLoading.emit(false);
        if (res.hasOwnProperty('data')) {
          window.localStorage.setItem('currentUser', res.data.username);
          this.isLogged = true;
        }
        this.isLogged = true;
      },err=> {
        this.isLogged = false;
      }
    ));
  }

  logout(){
    this.rxjsSubs.push(this._apiBackManager.user_logout().subscribe(
      res=> {
        this.stateLoading.emit(false);
        this.isLogged = false;
        console.log('loggged out');
        if (res.hasOwnProperty('data')) {
          window.localStorage.setItem('currentUser', res.data.username);

        }

      },err=> {

      }
    ));
  }
  logged_refresh(){
    this.isLogged=true;
    console.log('logged yeah');
  }



}
