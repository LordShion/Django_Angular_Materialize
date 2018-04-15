import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from "rxjs/Subscription";
import {ApiBackService} from "../services/api-back.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  response =  {
        'error': false,
        'data': null
      };
  rxjsSubs: Subscription[] = [];

  @Output() stateLoading = new EventEmitter();
  @Input() isLogged: boolean;
  @Output() onLoggedChanged = new EventEmitter();

  constructor(@Inject(ApiBackService) private _apiBackManager) {
    //this.onLoggedChanged = new EventEmitter();
  }

  ngOnInit() {
  }

  submitloginForm(){
    console.log('submitting');
    if (this.form.valid) {
        this.stateLoading.emit(true);
        console.log(this.stateLoading);
        const data = this.form.form.value;
        const loginForm = {
            'username' : data.username,
            'password' : data.password,
        };
        this.rxjsSubs.push(this._apiBackManager.user_login(loginForm).subscribe(
            res => {
                this.stateLoading.emit(false);
                this.onLoggedChanged.emit(true);
                if (res.hasOwnProperty('data')) {
                  window.localStorage.setItem('currentUser', data.username);

                }
            },
            err => {
                this.stateLoading.emit(false);
                // Here you go if errors occured
                this.response.error = true;
                if (err.status === 404 || err.status === 500) {
                   // ecrire un message d'erreur
                } else if (err.status === 'status mauvaise donnée') {
                  // ecrire que les logs sont mauvais
                }
        }));
    }

  }
}
