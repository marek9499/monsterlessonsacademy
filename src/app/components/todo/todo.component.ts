import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoInterface } from '../../todos/types/todo.interface';
import { TodosService } from '../../todos/services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input('todo') todoProps: TodoInterface;

  filter$: Observable<string>;

  constructor(private todosService: TodosService) {
    this.filter$ = todosService.filter$;
  }

  checkRender(): boolean {
    console.log('checkRender child');
    return true;
  }

  changeText(): void {
    this.todoProps.text = 'Changed from inside';
  }

  changeFilter(): void {
    this.todosService.filter$.next('active');
  }
}
