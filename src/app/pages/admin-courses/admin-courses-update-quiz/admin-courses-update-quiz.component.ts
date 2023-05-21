import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-courses-update-quiz',
  templateUrl: './admin-courses-update-quiz.component.html',
  styleUrls: ['./admin-courses-update-quiz.component.css']
})
export class AdminCoursesUpdateQuizComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _cat: CategoryService,
    private _router: Router
  ) {}

  qId = 0;
  cId;
  quiz;
  categories;

  ngOnInit(): void {
    this.qId = this._route.snapshot.params.qid;
    this._route.queryParams.subscribe(query=> {
      this.cId = query.cid;
    });
    // alert(this.qId);
    this._quiz.getQuiz(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  //update form submit
  public updateData() {
    //validatate

    this._quiz.updateQuiz(this.quiz).subscribe(
      (data) => {
        Swal.fire('Success !!', 'quiz updated', 'success').then((e) => {
          this._router.navigate(['/admin-courses/' + this.cId + 'quizzes']);
        });
      },
      (error) => {
        Swal.fire('Error', 'error in updating quiz', 'error');
        console.log(error);
      }
    );
  }
}
