import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:3000/API/Admin/';

@Injectable()
export class AdminServiceService {

  constructor( private http: Http) {  }

  private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
  }

  // Account Type
    public UserValidate(Info: any): Observable<any[]> {
        return this.http.post(API_URL + 'UserValidate', Info)
        .map(response => { const datas = response.json(); return response; })
        .catch(this.handleError);
    }

}
