import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:3000/API/Settings/CRMSettings/';

@Injectable()
export class CrmSettingsService {

  constructor( private http: Http) {  }

  private handleError (error: Response | any) {
      console.error('ApiService::handleError', error);
      return Observable.throw(error);
  }

  // Account Type
    public AccountTypeCreate(Info: any): Observable<any[]> {
        return this.http.post(API_URL + 'AccountTypeCreate', Info)
        .map(response => { const datas = response.json(); return response; })
        .catch(this.handleError);
    }

    public AccountTypeList(Info: any): Observable<any[]> {
      return this.http.post(API_URL + 'AccountTypeList', Info)
      .map(response => { const datas = response.json(); return response; })
      .catch(this.handleError);
    }

    public AccountTypeUpdate(Info: any): Observable<any[]> {
        return this.http.post(API_URL + 'AccountTypeUpdate', Info)
        .map(response => { const datas = response.json(); return response; })
        .catch(this.handleError);
    }

    public AccountTypeDelete(Info: any): Observable<any[]> {
        return this.http.post(API_URL + 'AccountTypeDelete', Info)
        .map(response => { const datas = response.json(); return response; })
        .catch(this.handleError);
    }


}
