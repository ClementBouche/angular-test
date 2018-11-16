import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { ApiHelperService } from '../http/api-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
          return user;
        } else {
          throw Error('Impossible de parser la réponse');
        }
      });
  }

}
// "response":{"token":"montoken","user":{"pseudo":"admin","created_at":"04\/09\/2010","rol":"admin"}}
