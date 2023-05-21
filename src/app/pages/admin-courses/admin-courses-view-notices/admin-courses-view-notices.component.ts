import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticeService } from 'src/app/services/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-courses-view-notices',
  templateUrl: './admin-courses-view-notices.component.html',
  styleUrls: ['./admin-courses-view-notices.component.css']
})
export class AdminCoursesViewNoticesComponent implements OnInit {

  cId;
  dateSelected = false
  noticesByDate = []
  notices = [];
  filterdNotices = []
  
  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });
  constructor(
    private _notice: NoticeService,
    private _route: ActivatedRoute
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

  findNoticesInRange(notice: any): any {
    if (1 == 1)
      return true;
    else
      return notice.title == "title";
    
  }

  // valueChanged() {
  //   //return notice.addedDate <= this.range.get('end').value && notice.addedDate >= this.range.get('start').value 
  //   this.notices.forEach((notice)=>{console.log(notice.addedDate)})
  //   console.log(this.range.get('start').value)
  // }
  // filterNotices(startDate, endDate) {
  //   this.dates = {
  //     startDate: startDate,
  //     endDate: endDate
  //   }
  //   this._notice.noticesByCategoryAndDateRange(this.cId, this.dates).subscribe(
  //     (data: any) => {
  //       this.notices = data;
  //     },
  //     (error) => {
  //       Swal.fire('Error', 'Error in loading data', 'error');
  //     }
  //   );
  // }
}
