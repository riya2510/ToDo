import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {
  todos:Todo = new Todo();
  todo = {};
  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('id = ',params.id);
      this.todoService.getTodos(params.id).subscribe(res => {
          this.todo = res;
      });
    });
  }

  onChange(status){
    console.log(status);
  }

  updateTodo(id){
    this.todoService.updateTodo(id,this.todo).subscribe(res => {
      this.router.navigate(['dashboard']);
    });
  }

}
