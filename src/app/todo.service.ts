import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { Todo } from './todo';
import { Http,Response,RequestOptions,Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getAllTask(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todoUrl);
  }

  addTodo(todo:Todo): Observable<Todo[]>{
    return this.http.post<Todo[]>(this.todoUrl,todo);
  }

  deleteTodo(id): Observable<Todo[]>{
    return this.http.delete<Todo[]>(this.todoUrl+'/'+id);
  }

  getTodos(id){
    return this.http.get(this.todoUrl+'/'+id);
  }

  updateTodo(id,todo){
    return this.http.put(this.todoUrl+'/'+id,todo);
  }

}
