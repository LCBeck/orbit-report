import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { StudentTableComponent } from './student-table/student-table.component';


const routes: Routes = [
  { path: '', component: AppDashboardComponent},
  { path: 'students', component: StudentTableComponent},
  { path: 'courses', component: CourseTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
