import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AjaxService implements OnInit {

    // Inject HttpClient into your component or service.
    constructor( @Inject(HttpClient) private _http: HttpClient) { }

    ngOnInit() {
    }

    getData(url): Observable<any> {
        // Make the HTTP request:
        const header = new HttpHeaders({
          'Authorization': 'Basic ' + btoa(window.localStorage.getItem('currentUser') + ':')
        });
        const options = { headers: header , withCredentials: true };
        console.log(options);
        console.log(header.keys());
        return this._http.get(url, options);
    }

    postData(url, data): Observable<any> {
        const csrftoken = this.getCookie('csrftoken');
        const header = new HttpHeaders({
          'Authorization': 'Basic ' + btoa(window.localStorage.getItem('currentUser') + ':'),
          'x-csrftoken': csrftoken,
          'content-type': 'application/json'
        });
        const options = { headers: header, withCredentials: true };
        return this._http.post(url, data, options);
    }

    deleteData(url): Observable<any> {
        const header = new HttpHeaders({
          //'Authorization': 'Basic ' + btoa(window.localStorage.getItem('currentUser') + ':')
        });
        const options = { headers: header, withCredentials: true };
        return this._http.delete(url, options);
    }

    putData(url, data): Observable<any> {
        const header = new HttpHeaders({
          //'Authorization': 'Basic ' + btoa(window.localStorage.getItem('currentUser') + ':')
        });
        const options = { headers: header, withCredentials: true };
        return this._http.put(url, data, options);
    }

    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }
}
