import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoDataService: TodoDataService) {}

  completetodos: Array<Todo>;
  incompletetodos: Array<Todo>;

  ngOnInit() {
    this.RefreshTodos();
  }

  completedTodos() {
    this.todoDataService
      .completedTodos()
      .subscribe(todos => (this.completetodos = todos));
  }

  incompletedToDos() {
    this.todoDataService
      .incompletedTodos()
      .subscribe(todos => (this.incompletetodos = todos));
  }

  private RefreshTodos() {
    this.completedTodos();
    this.incompletedToDos();
  }
}
