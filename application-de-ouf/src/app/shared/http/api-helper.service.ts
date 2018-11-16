import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {

  url: string;

  headers: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = 'http://34.249.171.19/angular/public';
    this.headers = new HttpHeaders().set('content-type', 'application/json');
  }

  get(route: string): Promise<any> {
    const url = `${this.url}/${route}`;
    return this.httpClient.get(url).toPromise().then((result) => {
        return result;
    });
  }

  post(route: string, data: any): Promise<any> {
    const url = `${this.url}/${route}`;
    console.log('ApiHelperService', url);
    console.log('ApiHelperService', data);
    return this.httpClient.post(url, data, {
        headers: this.headers
      }).toPromise().then((result: any) => {
        if (result.success === true) {
          return result;
        } else {
          throw Error('Erreur réseau');
        }
      });
  }

  put(route: string, data: any): Promise<any> {
    const url = `${this.url}/${route}`;
    return this.httpClient.post(url, data, {
        headers: this.headers
      }).toPromise();
  }

}
