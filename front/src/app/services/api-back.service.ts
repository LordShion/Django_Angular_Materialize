import {Inject, Injectable} from '@angular/core';
import { AjaxService } from './ajax.service';

import { CONF_API } from './config'

const ListRestUrl = {
  USER_LOGIN: CONF_API.apihost+'api/' + CONF_API.version + 'user/login/',
  USER_DETAILS: CONF_API.apihost+'api/' + CONF_API.version + 'user/details/',
  USER_LOGOUT: CONF_API.apihost+'api/' + CONF_API.version + 'user/logout/',
  GET_CSRF: CONF_API.apihost+'api/' + CONF_API.version + 'csrf/'
}

@Injectable()
export class ApiBackService {

  constructor(
    @Inject(AjaxService) private _ajaxService
  ) { }

  user_login(data) {
        return this._ajaxService.postData(ListRestUrl.USER_LOGIN, data);
    }

  user_details() {
        return this._ajaxService.getData(ListRestUrl.USER_DETAILS);
    }

  user_logout() {
        return this._ajaxService.getData(ListRestUrl.USER_LOGOUT);
  }

  get_csrf() {
        return this._ajaxService.getData(ListRestUrl.GET_CSRF);
  }
}
