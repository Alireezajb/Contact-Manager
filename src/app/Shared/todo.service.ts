import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Todo } from './Todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  todos: Todo[] = [new Todo('Add Your First Todo!')];


  constructor() {
    this.loadState();

    fromEvent(window, 'storage').subscribe((event: any) => {
      if (event.key === 'todos') this.loadState();
    })

  }


  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id);

  }

  addTodo(todo: Todo) {

    this.todos.push(todo);
    this.saveState();
  }

  updatedTodo(id: string, updatedTodoFiles: Partial<Todo>) {
    const todo: any = this.getTodo(id);
    Object.assign(todo, updatedTodoFiles);
    this.saveState();
  }


  deletedTodo(id: string) {
    const note = this.todos.findIndex(todo => todo.id === id);
    if (note === -1) return;

    this.todos.splice(note, 1);
    this.saveState();
  }
  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadState() {
    try {
      const todoInStorage = JSON.parse(localStorage.getItem('todos')!);
      if (!todoInStorage) return;

      this.todos.length = 0; // clear the todos array (while keeping the refrence)

      this.todos.push(...todoInStorage);
    }
    catch (error) {
      console.log('Error Occurs : ', error);

    }

  }
}
