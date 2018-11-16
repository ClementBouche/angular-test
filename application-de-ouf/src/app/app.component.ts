import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from './shared/login/user.service';
import { User } from './shared/model/user.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  // default user is not logged
  user: User;
  logged: boolean = false;

  loggedSubscription: Subscription;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loggedSubscription = this.userService.logged$.subscribe((user) => {
      this.user = user;
      this.logged = true;
      this.cd.markForCheck;
      console.log("[AppComponent] logged$", this.user);
    });
  }

  ngOnDestroy() {
    if (this.loggedSubscription) {
      this.loggedSubscription.unsubscribe();
    }
  }

  logout() {
    this.userService.logout().then(() => {
      delete(this.user);
      this.logged = false;
      this.router.navigate(['./login']);
      console.log("[AppComponent] logout", this.user);
    });
  }

}
