import { Component, OnInit, OnChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from '../shared/login/user.service';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  user: User;

  loggedSubscription: Subscription;

  constructor(
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnChanges() {
  }

  ngOnInit() {

    console.log('[HomeComponent] ngOnInit !!!');

    // this.loggedSubscription = this.userService.logged$.subscribe((user) => {
    //   this.user = user;
    //   this.cd.markForCheck();
    //   console.log("[HomeComponent] logged$", this.user);
    // });
    // if (!this.user) {
    //   console.log('[HomeComponent] no user');
    //   // redirect to login
    //   this.router.navigate(['./login']);
    // } else {
    //   console.log('[HomeComponent] user', this.user);
    // }
  }

  ngOnDestroy() {
    // if (this.loggedSubscription) {
    //   this.loggedSubscription.unsubscribe();
    // }
  }

}
