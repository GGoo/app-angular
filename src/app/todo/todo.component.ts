import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  // providers: [ TodoDataService ]
})
export class TodoComponent implements OnInit, AfterViewInit {
    newTodo: Todo = new Todo({
        label: 'ala ma kota',
        complete: false
    });

    constructor(private todoDataService: TodoDataService) {
        // this.addTodo();
    }

    ngAfterViewInit () {
        $('.fc-event').each(function() {
            $(this).data('eventObject', {
                title: $.trim($(this).text())
            });

            $(this).draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
            });
        });
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
