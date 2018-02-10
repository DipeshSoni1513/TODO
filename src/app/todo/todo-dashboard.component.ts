import { TodoServiceService } from './todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-todo-dashboard',
  template: `
    <p>
      todo-dashboard Works!
      The Number of todos are {{count}}
    </p>
  `,
  styles: []
})
export class TodoDashboardComponent implements OnInit {  

  constructor(private todoService:TodoServiceService) { }

  count:number = this.todoService.getTodos().length;

  ngOnInit() {
    this.todoService.newTodoAdded.subscribe((data)=>
    this.count = data
    );
  }



}
