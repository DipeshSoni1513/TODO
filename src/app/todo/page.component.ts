import { TodoServiceService } from './todo-service.service';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-page',
  template: `
    <h1>
      Todo Page
    </h1>
    <todo-form (newTodoAdded) = "handleTodoAddedEvent($event)"></todo-form>
    <todo-list [todos] = "todoList"></todo-list>
    <todo-todo-dashboard></todo-todo-dashboard>
    
  `,
  styles: []
})
export class PageComponent {
  constructor(private todoListService:TodoServiceService) { }

  todoList:Array<Todo> = this.todoListService.getTodos();

  todoCount:number = this.todoList.length;

  Dipesh:string = "Lucky";

  handleTodoAddedEvent(todo){
    this.todoListService.addTodo(todo);
  }

  //totalTodoItems:number = this.todoListService.getTodosLength(this.todoList);
  


}
