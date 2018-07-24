import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todos: any;
  constructor(private todoService: TodoService,private router: Router) { }

  ngOnInit() {
    this.todoService.getAllTask().subscribe(todo => {
        this.todos = todo;        
    });
  }

  deleteTodo(id){
    this.todoService.deleteTodo(id).subscribe(res => {
      console.log(' done');
      this.ngOnInit();
    },err => {
      console.log(' error = ',err);
      this.ngOnInit();
    });
  }

  onSelect(todo){
    this.router.navigate(['detail-todo',todo.id]);
    console.log(todo);
  }

}
