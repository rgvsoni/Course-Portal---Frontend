import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-courses-view-quizzes',
  templateUrl: './admin-courses-view-quizzes.component.html',
  styleUrls: ['./admin-courses-view-quizzes.component.css']
})
export class AdminCoursesViewQuizzesComponent implements OnInit {

  cId;
  quizzes = [];

  constructor(
    private _quiz: QuizService,
    private _route: ActivatedRoute
    ) {}

  ngOnInit(): void {

    this._route.queryParams.subscribe(query=> {
      this.cId = query.cid;
    });
    this._quiz.getActiveQuizzesOfCategory(this.cId).subscribe(
      (data: any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  //
  deleteQuiz(qId) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...

        this._quiz.deleteQuiz(qId).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qId != qId);
            Swal.fire('Success', 'Quiz deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }

}
