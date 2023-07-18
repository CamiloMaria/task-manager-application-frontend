import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
  
const routes: Routes = [
  { 
    path: 'tasks', 
    component: TasksComponent,
  },
  { 
    path: 'users', 
    component: UsersComponent,
  },
  { path: '', redirectTo:'tasks', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
