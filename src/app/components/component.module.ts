import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    UsersComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [
    UsersComponent,
    TasksComponent
  ]
})
export class ComponentModule { }
