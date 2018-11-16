import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from './shared/login/user.service';
import { User } from './shared/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  user: User = new User('cbouche', 'cbouche', 'cbouche');

  logged: boolean = true;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
  }

  onLogged(user: User) {
    this.user = user;
    this.logged = true;
  }

  logout() {
    delete(this.user);
    this.logged = false;
  }

}
