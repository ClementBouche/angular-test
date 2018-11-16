import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { UserService } from '../shared/login/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    username: 'admin',
    password: 'password'
  };

  message: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message = '';
  }

  tryConnection() {
    console.log(this.form);

    this.userService.login(this.form.username, this.form.password)
      .then((user) => {
        console.log('Login Component - then', user);
        this.userService.setUser(user);
        this.message = '';
        this.router.navigate(['./home']);
        console.log('login success');
      })
      .catch((error) => {
        this.message = 'Impossible de se connecter';
        console.log('login error');
      });
  }

}
