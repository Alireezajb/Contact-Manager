import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Shared/Todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {


  @Input() todo!: Todo;

  @Output() editclick: EventEmitter<void> = new EventEmitter;
  @Output() deleteclick: EventEmitter<void> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  editClick() {

    this.editclick.emit()
  }
  deleteClick() {
    this.deleteclick.emit()
  }

}
