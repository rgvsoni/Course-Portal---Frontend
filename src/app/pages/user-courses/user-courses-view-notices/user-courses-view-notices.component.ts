import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/app/services/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-courses-view-notices',
  templateUrl: './user-courses-view-notices.component.html',
  styleUrls: ['./user-courses-view-notices.component.css']
})
export class UserCoursesViewNoticesComponent implements OnInit {

  notices;
  cId;
  constructor(
    private _route: ActivatedRoute,
    private _notice: NoticeService, 
  ) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(query => {
      this.cId = query.cid;
      console.log(this.cId)
    });
    this._notice.noticesByCategory(this.cId).subscribe(
      (data: any) => {
        this.notices = data;
        console.log(this.notices)
      },
      (error) => {
        Swal.fire('Error', 'Error in loading data', 'error');
      }
    );
  }

}
