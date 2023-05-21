import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-admin-courses-sidebar',
  templateUrl: './admin-courses-sidebar.component.html',
  styleUrls: ['./admin-courses-sidebar.component.css']
})
export class AdminCoursesSidebarComponent implements OnInit {

  cId;
  isLoggedIn = false;
  constructor(private _route: ActivatedRoute, private _log: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = this._log.isLoggedIn();
    this._log.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn = this._log.isLoggedIn();
    });
    this.cId = this._route.snapshot.params.cid;
    console.log(this.cId)
  }

  public logout() {
    this._log.logout();
    window.location.reload();
    // this.login.loginStatusSubject.next(false);
  }
}
