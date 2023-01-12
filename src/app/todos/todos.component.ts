import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../Shared/Todo.model';
import { TodoService } from '../Shared/todo.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NotificationService } from './../Shared/notification.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(150, style({
          opacity: 0,
          height: 0,
          marginBottom: 0,
        }))

      ])
    ])
  ]
})
export class TodosComponent implements OnInit {


  todos!: Todo[];


  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }
  toggleCompleted(todo: Todo) {
    this.todoService.updatedTodo(todo.id, { completed: !todo.completed });

  }
  editClick(todo: Todo) {
    this.router.navigate(['/todos/', todo.id]);
  }
  deleteClick(todo: Todo) {
    this.todoService.deletedTodo(todo.id);

  }

  trackById(index: any, item: Todo) {
    return item.id

  }

}
