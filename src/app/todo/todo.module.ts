import { TodoServiceService } from './todo-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { FormComponent } from './form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TodoDashboardComponent } from './todo-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PageComponent, ListComponent, FormComponent, TodoDashboardComponent],
  exports:[PageComponent],
  providers: [TodoServiceService]
})
export class TodoModule { }
