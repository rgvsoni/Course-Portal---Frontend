import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-user-courses-view-quizzes',
  templateUrl: './user-courses-view-quizzes.component.html',
  styleUrls: ['./user-courses-view-quizzes.component.css']
})
export class UserCoursesViewQuizzesComponent implements OnInit {

  catId;
  quizzes;
  constructor(private _route: ActivatedRoute, private _quiz: QuizService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      this.catId = params.cid;

      console.log('Load specific quiz');

      this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
        (data: any) => {
          this.quizzes = data;
          console.log(this.quizzes);
        },
        (error) => {
          alert('error in loading quiz data');
        }
      );

    });
  }

}
