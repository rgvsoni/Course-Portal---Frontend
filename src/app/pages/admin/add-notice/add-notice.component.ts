import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { NoticeService } from 'src/app/services/notice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  categories = []
  noticeData = {
    title: '',
    content: '',
    category: {
      cid: '',
    },
  }
  constructor(
    private _notice: NoticeService,
    private _cat: CategoryService,
    private _snack: MatSnackBar
    ) {}


  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data: any) => {
        //categories load
        this.categories = data;
        // console.log(this.categories);
      },

      (error) => {
        console.log(error);
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );

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
