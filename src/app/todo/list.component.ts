import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'todo-list',
  template: `
    <table class="table table-striped">
      <tr>
        <th>Item</th>
        <th>Status</th>
      </tr>
      <tr *ngFor = "let item of todos">
        <td>{{item.description}}</td>
        <td>
          <button type="button" class="btn btn-primary" *ngIf="item.status" 
          (click)="changeStatus(item)">Complete</button>
          <button type="button" class="btn btn-primary" *ngIf="!item.status"
          (click)="changeStatus(item)">Incomplete</button>
        </td>
      </tr>
    </table>
    <div>Dipesh</div>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  @Input()
  todos:Array<Todo> = [];

  changeStatus(item:Todo){
    item.status = !item.status;
  }

  Name:String = "Surekha";

  constructor() { }

  ngOnInit() {
  }

}
