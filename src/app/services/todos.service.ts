import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: 'Learn Angular',
      completed: false,
      userId: 1,
      id: 1,
    },
    {
      title: 'Build an Angular App',
      completed: false,
      userId: 1,
      id: 2,
    },
  ];
  constructor() {}
}
