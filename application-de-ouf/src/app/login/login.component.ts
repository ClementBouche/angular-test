import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/model/user.model';
import { UserService } from '../shared/login/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() logged = new EventEmitter<User>();

  form = {
    username: 'admin',
    password: 'password'
  };

  message: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.message = '';
  }

  tryConnection() {
    console.log(this.form);
    this.userService.login(this.form.username, this.form.password)
      .then((user) => {
        console.log('Login Component - then', user);
        this.message = '';
        this.logged.emit(user);
        console.log('login success');
      })
      .catch((error) => {
        this.message = 'Impossible de se connecter';
        console.log('login error');
      });
  }

}
