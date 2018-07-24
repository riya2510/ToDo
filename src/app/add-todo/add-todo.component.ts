import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todos: Todo = new Todo();
  NAME_REGEX='^(?=.{1,40}$)[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$';

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {}

  saveTodo() {
    console.log(this.todos);
    this.todoService.addTodo(this.todos).subscribe(res => {
      this.router.navigate(['dashboard']);
    });
  }

  cancel(){
    this.router.navigate(['dashboard']);
  }

}
