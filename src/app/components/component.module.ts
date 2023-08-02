import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { componentRoutingModule } from './component-routing.module';

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
    componentRoutingModule
  ],
  exports: [
    UsersComponent,
    TasksComponent,
  ]
})
export class ComponentModule { }
