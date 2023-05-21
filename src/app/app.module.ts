import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatExpansionModule} from '@angular/material/expansion';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user-courses/start/start.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { AddNoticeComponent } from './pages/admin/add-notice/add-notice.component';
import { ViewNoticesComponent } from './pages/admin/view-notices/view-notices.component';
import { AdminCoursesAddQuestionComponent } from './pages/admin-courses/admin-courses-add-question/admin-courses-add-question.component';
import { AdminCoursesDashboardComponent } from './pages/admin-courses/admin-courses-dashboard/admin-courses-dashboard.component';
import { AdminCoursesAddNoticeComponent } from './pages/admin-courses/admin-courses-add-notice/admin-courses-add-notice.component';
import { AdminCoursesSidebarComponent } from './pages/admin-courses/admin-courses-sidebar/admin-courses-sidebar.component';
import { AdminCoursesAddQuizComponent } from './pages/admin-courses/admin-courses-add-quiz/admin-courses-add-quiz.component';
import { AdminCoursesUpdateQuizComponent } from './pages/admin-courses/admin-courses-update-quiz/admin-courses-update-quiz.component';
import { AdminCoursesViewNoticesComponent } from './pages/admin-courses/admin-courses-view-notices/admin-courses-view-notices.component';
import { AdminCoursesViewQuizQuestionsComponent } from './pages/admin-courses/admin-courses-view-quiz-questions/admin-courses-view-quiz-questions.component';
import { AdminCoursesViewQuizzesComponent } from './pages/admin-courses/admin-courses-view-quizzes/admin-courses-view-quizzes.component';
import { UserCoursesDashboardComponent } from './pages/user-courses/user-courses-dashboard/user-courses-dashboard.component';
import { UserCoursesSidebarComponent } from './pages/user-courses/user-courses-sidebar/user-courses-sidebar.component';
import { UserCoursesViewQuizzesComponent } from './pages/user-courses/user-courses-view-quizzes/user-courses-view-quizzes.component';
import { UserCoursesViewNoticesComponent } from './pages/user-courses/user-courses-view-notices/user-courses-view-notices.component';
import { UserCoursesViewProfileComponent } from './pages/user-courses/user-courses-view-profile/user-courses-view-profile.component';
import { UserCoursesInstructionsComponent } from './pages/user-courses/user-courses-instructions/user-courses-instructions.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CallbackPipe } from './callback.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    AddNoticeComponent,
    ViewNoticesComponent,
    AdminCoursesAddQuestionComponent,
    AdminCoursesDashboardComponent,
    AdminCoursesAddNoticeComponent,
    AdminCoursesSidebarComponent,
    AdminCoursesAddQuizComponent,
    AdminCoursesUpdateQuizComponent,
    AdminCoursesViewNoticesComponent,
    AdminCoursesViewQuizQuestionsComponent,
    AdminCoursesViewQuizzesComponent,
    UserCoursesDashboardComponent,
    UserCoursesSidebarComponent,
    UserCoursesViewQuizzesComponent,
    UserCoursesViewNoticesComponent,
    UserCoursesViewProfileComponent,
    UserCoursesInstructionsComponent,
    CallbackPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
