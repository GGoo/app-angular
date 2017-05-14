import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // providers: [ TodoDataService ]
})
export class TodoComponent implements OnInit {
    newTodo: Todo = new Todo({
        label: 'ala ma kota',
        complete: false
    });

    constructor(private todoDataService: TodoDataService) {
        this.addTodo();
    }

    addTodo() {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new Todo({
            label: 'ala ma kota ' + this.todoDataService.lastId,
            complete: false
        });
    }

    toggleTodoComplete(todo) {
        this.todoDataService.toggleTodoComplete(todo);
    }

    removeTodo(todo) {
        this.todoDataService.deleteTodoById(todo.id);
    }

    get todos() {
        return this.todoDataService.getAllTodos();
    }

    ngOnInit() {
    }

}
