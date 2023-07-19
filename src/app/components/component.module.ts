import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { ComponentComponent } from './component.component';

@NgModule({
  declarations: [
    UsersComponent,
    TasksComponent,
    ComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    UsersComponent,
    TasksComponent,
  ]
})
export class ComponentModule { }
