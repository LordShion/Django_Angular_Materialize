import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ApiBackService} from "./services/api-back.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  response =  {
        'error': false,
        'data': null
      };

  rxjsSubs: Subscription[] = [];

  @Output() stateLoading = new EventEmitter();

  constructor(
    @Inject(ApiBackService) private _apiBackManager
  ) { }

  ngOnInit() {
    this.rxjsSubs.push(this._apiBackManager.get_csrf().subscribe(
            res => {
              // cookie with token is automaticaly recorded
                this.stateLoading.emit(false);

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
