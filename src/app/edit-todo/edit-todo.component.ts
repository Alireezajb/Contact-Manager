import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from './../Shared/todo.service';
import { Todo } from './../Shared/Todo.model';
import { NotificationService } from '../Shared/notification.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  todo!: Todo[] | any;
  ShowValidationErrors: boolean = false;

  constructor(private router: ActivatedRoute, private todoservice: TodoService, private routerByurl: Router,private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const idParam = params['id'];
      this.todo = this.todoservice.getTodo(idParam);

    })
  }
  formSubmit(form: NgForm) {

    if (form.invalid) 
    {
      this.ShowValidationErrors = true;
      return;
    }

    this.todoservice.updatedTodo(this.todo.id, form.value);
    this.routerByurl.navigate(['/todos']);
    this.notificationService.showMethod('Todo  Updated!')
  }

}
