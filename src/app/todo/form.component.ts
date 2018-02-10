import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-form',
  template: `
    Enter a Todo Item <input type="text" [(ngModel)]="todo.description">
    <button type="button" class="btn btn-primary" (click)="emitAddEvent()">Add</button>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  todo:Todo = {description:'', status:false};

  @Output()
  newTodoAdded:EventEmitter<Todo> = new EventEmitter<Todo>();

  emitAddEvent(){
      this.newTodoAdded.emit(this.todo);
      this.todo = {description:'', status:false};
  }

  constructor() { }

  ngOnInit() {
  }

}
