import { Injectable, EventEmitter } from '@angular/core';

import { User } from '../model/user.model';
import { ApiHelperService } from '../http/api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  logged$ = new EventEmitter<User>();

  constructor(
    private apiHelper: ApiHelperService
  ) { }

  login(username: string, password: string): Promise<User> {
    return this.apiHelper.post('login', {pseudo: username, password: password})
      .then((data: any) => {
        console.log(data);
        if (data.response && data.response.user) {
          const user = new User(
            data.response.user['pseudo'],
            data.response.user['created_at'],
            data.response.user['rol']
          );
          console.log(user);
          this.setUser(user);
          this.logged$.emit(this.user);
          return user;
        } else {
          throw Error('Impossible de parser la réponse');
        }
      });
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  // stocke l'user courant
  // todo localstorage
  setUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}
// "response":{"token":"montoken","user":{"pseudo":"admin","created_at":"04\/09\/2010","rol":"admin"}}
