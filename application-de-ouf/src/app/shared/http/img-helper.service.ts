import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImgHelperService {

  constructor(
    private httpClient: HttpClient
  ) {}

  checkImg(url: string): Promise<any> {
    return this.httpClient.get(url, { responseType: 'blob' }).toPromise().then((success) => {
          return true;
      }).catch((error) => {
          return false;
      });
  }

  checkImgObservable(url: string): Promise<any> {
    return this.httpClient.get(url, { responseType: 'blob' })
        .pipe(debounceTime(1000))
        .toPromise().then((success) => {
          return true;
        }).catch((error) => {
            return false;
        });
    }
}
