import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  categories;

  constructor(
    private _category: CategoryService,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        this.categories = data;
        console.log(this.categories)
      },
      (error) => {
        alert('error in loading course data');
      }
    )

  }

  goToUserCourses(cId: any) {
    console.log(cId);
    this._router.navigate(['/user-courses/' + cId]);

  }
}

