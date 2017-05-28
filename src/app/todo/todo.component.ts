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
    show = true;

    btnText = '';

    constructor(private todoDataService: TodoDataService) {
        this.toggleTodos()
    }

    ngAfterViewInit () {
        setTimeout(function() {
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
        }, 1000);
    }

    toggleTodos(): void {
        this.show = !this.show;

        switch (this.show) {
            case true: this.btnText = 'Ukryj'; break;
            case false: this.btnText = 'Pokaż'; break;
        }
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
