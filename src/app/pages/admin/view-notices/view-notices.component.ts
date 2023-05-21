import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoticeService } from 'src/app/services/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-notices',
  templateUrl: './view-notices.component.html',
  styleUrls: ['./view-notices.component.css']
})
export class ViewNoticesComponent implements OnInit {


  notices = [];
  constructor(private _notice: NoticeService) { }

  ngOnInit(): void {
    this._notice.notices().subscribe (
      (data: any) => {
        this.notices = data;
      },
      (error) => {
        Swal.fire('Error', 'Error in loading data', 'error');
      }
    );
  }

}
