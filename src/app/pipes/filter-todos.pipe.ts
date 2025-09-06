import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Array<Todo>, searchTerm: string): Array<Todo> {
    if (!todos || !searchTerm) {
      return todos;
    }
    searchTerm = searchTerm.toLowerCase();
    return todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm)
    );
  }
}
