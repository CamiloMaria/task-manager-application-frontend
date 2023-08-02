import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/tasks';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  url: string = '';
  endpoint = environment.apiUrl;

  constructor(protected http: HttpClient) { 
    this.url = `${this.endpoint}/tasks`
  }

  getAllTasks(): Observable<Task> {
    return this.http.get<Task>(this.url);
  }

  createTasks(title: string, description: string, dueDate: Date, priority: string, status: string, createdBy: string, assignTo: string): Observable<Task> {
    return this.http.post<Task>(this.url, { title, description, dueDate, priority, status, createdBy, assignTo });
  }

  updateTasks(title: string, description: string, dueDate: Date, priority: string, status: string, assignTo: string): Observable<Task> {
    return this.http.patch<Task>(this.url, { title, description, dueDate, priority, status, assignTo });
  }

  deleteTasks(): Observable<Task> {
    return this.http.delete<Task>(this.url);
  }
}
