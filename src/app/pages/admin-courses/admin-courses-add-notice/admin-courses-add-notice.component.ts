import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { NoticeService } from 'src/app/services/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-courses-add-notice',
  templateUrl: './admin-courses-add-notice.component.html',
  styleUrls: ['./admin-courses-add-notice.component.css']
})
export class AdminCoursesAddNoticeComponent implements OnInit {

  cId;

  noticeData = {
    title: '',
    content: '',
    category: {
      cid: '',
    },
  }
  constructor(
    private _notice: NoticeService,
    private _router: ActivatedRoute,
    private _snack: MatSnackBar
    ) {}


  ngOnInit(): void {
    this._router.queryParams.subscribe(query=> {
      this.cId = query.cid;
    });

  }

  addNotice() {
    if (this.noticeData.title.trim() == '' || this.noticeData.title == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }

    //validation...

    //call server


    this.noticeData.category.cid = this.cId;
    this._notice.addNotice(this.noticeData).subscribe(
      (data) => {
        Swal.fire('Success', 'notice is added', 'success');
        this.noticeData = {
          title: '',
          content: '',
          category: {
            cid: '',
          },
        };
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding notice', 'error');
        console.log(error);
      }
    );
  }

}

