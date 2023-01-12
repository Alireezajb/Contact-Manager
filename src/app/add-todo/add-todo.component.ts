import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from './../Shared/todo.service';
import { Todo } from './../Shared/Todo.model';
import { Router } from '@angular/router';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  constructor(private TodoService: TodoService, private router: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
  }


  formSubmit(form: NgForm) {
    if (form.invalid) return alert ('Please Add Text');
    const todo = new Todo(form.value.text);
    this.TodoService.addTodo(todo);
    this.router.navigate(['/todos']);
    this.notificationService.showMethod('Todo Created!')

    

  }
}
