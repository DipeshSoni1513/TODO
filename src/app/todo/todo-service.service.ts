import { Injectable, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoServiceService {

  constructor() { }

  newTodoAdded:EventEmitter<number> = new EventEmitter<number>();

  private todoList:Array<Todo> = [
    {description:"Playing", status:true},
    {description:"Grooming", status:true}
  ]

  getTodos(){
    return this.todoList; 
  }

  addTodo(todo:Todo){
    this.todoList.push({description:todo.description, status:todo.status});
    this.newTodoAdded.emit(this.todoList.length);

  }

}
