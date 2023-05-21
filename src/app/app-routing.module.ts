import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursesAddNoticeComponent } from './pages/admin-courses/admin-courses-add-notice/admin-courses-add-notice.component';
import { AdminCoursesAddQuestionComponent } from './pages/admin-courses/admin-courses-add-question/admin-courses-add-question.component';
import { AdminCoursesAddQuizComponent } from './pages/admin-courses/admin-courses-add-quiz/admin-courses-add-quiz.component';
import { AdminCoursesDashboardComponent } from './pages/admin-courses/admin-courses-dashboard/admin-courses-dashboard.component';
import { AdminCoursesUpdateQuizComponent } from './pages/admin-courses/admin-courses-update-quiz/admin-courses-update-quiz.component';
import { AdminCoursesViewNoticesComponent } from './pages/admin-courses/admin-courses-view-notices/admin-courses-view-notices.component';
import { AdminCoursesViewQuizQuestionsComponent } from './pages/admin-courses/admin-courses-view-quiz-questions/admin-courses-view-quiz-questions.component';
import { AdminCoursesViewQuizzesComponent } from './pages/admin-courses/admin-courses-view-quizzes/admin-courses-view-quizzes.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddNoticeComponent } from './pages/admin/add-notice/add-notice.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';

import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewNoticesComponent } from './pages/admin/view-notices/view-notices.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserCoursesDashboardComponent } from './pages/user-courses/user-courses-dashboard/user-courses-dashboard.component';
import { UserCoursesInstructionsComponent } from './pages/user-courses/user-courses-instructions/user-courses-instructions.component';
import { UserCoursesViewNoticesComponent } from './pages/user-courses/user-courses-view-notices/user-courses-view-notices.component';
import { UserCoursesViewProfileComponent } from './pages/user-courses/user-courses-view-profile/user-courses-view-profile.component';
import { UserCoursesViewQuizzesComponent } from './pages/user-courses/user-courses-view-quizzes/user-courses-view-quizzes.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user-courses/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'add-notice',
        component: AddNoticeComponent
      },
      {
        path: 'notice',
        component: ViewNoticesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    
  },
  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [NormalGuard],
  },
  {
    path: 'admin-courses/:cid',
    component: AdminCoursesDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'add-notice',
        component: AdminCoursesAddNoticeComponent,
      },
      {
        path: 'add-quiz',
        component: AdminCoursesAddQuizComponent,
      },
      {
        path: 'notices',
        component: AdminCoursesViewNoticesComponent,
      },
      {
        path: 'quizzes',
        component: AdminCoursesViewQuizzesComponent,
      },
      {
        path: 'quiz/:qid',
        component: AdminCoursesUpdateQuizComponent,
      },
      {
        path: 'view-questions/:qid/:title',
        component: AdminCoursesViewQuizQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AdminCoursesAddQuestionComponent,
      },
    ],
  },
  {
    path: 'user-courses/:cid',
    component: UserCoursesDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: 'notices',
        component: UserCoursesViewNoticesComponent,
      },
      {
        path: 'quizzes',
        component: UserCoursesViewQuizzesComponent,
      },
      {
        path: 'profile',
        component: UserCoursesViewProfileComponent,

      },
      {
        path: 'instructions/:qid',
        component: UserCoursesInstructionsComponent,
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
