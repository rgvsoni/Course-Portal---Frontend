import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-courses-sidebar',
  templateUrl: './user-courses-sidebar.component.html',
  styleUrls: ['./user-courses-sidebar.component.css']
})
export class UserCoursesSidebarComponent implements OnInit {

  cId;
  isLoggedIn;
  constructor(
    private _route: ActivatedRoute,
    private _log: LoginService,
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this._log.isLoggedIn();
    this._log.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this._log.isLoggedIn();
    });
    this.cId = this._route.snapshot.params.cid;
  }

  logout() {
    this._log.logout();
    window.location.reload();
  }

}
