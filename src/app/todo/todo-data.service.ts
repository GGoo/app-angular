import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Http, Response, Jsonp, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Subscription } from "rxjs";

@Injectable()
export class TodoDataService {
    private subscription: Subscription;
    private baseUrl: string = 'http://137.74.116.6/rest/todoTasks';

    lastId: number = 0;
    todos: Todo[] = [];

    constructor(private http: Http, private jsonp: Jsonp) {
        this.getData();
    }

    getData(): void {
        this.http.get(`${this.baseUrl}`)
                .map((response: Response) => {  return response.json()._embedded.todoTasks })
                .subscribe((data) => {
                    for (let i = 0; i < data.length; i++) {
                        data[i].id = i;

                        this.addTodo(new Todo(data[i]));
                    }
                }, (error) => console.log('error', error));
    }

    addTodo(todo: Todo): TodoDataService {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }

        this.todos.push(todo);

        return this;
    }

    // usun po id DELETE /todos/:id
    deleteTodoById(id: number): TodoDataService {
        this.todos = this.todos.filter(todo => todo.id !== id);

        return this;
    }

    // uaktualnij po id PUT /todos/:id
    updateTodoById(id: number, values: Object = {}): Todo {
        let todo = this.getTodoById(id);

        if(!todo) {
            return null;
        }

        Object.assign(todo, values);

        return todo;
    }

    // GET /todos
    getAllTodos(): Todo[] {
        return this.todos;
    }

    // GET /todos/:id
    getTodoById(id: number): Todo {
        return this.todos.filter(todo => todo.id === id).pop();
    }

    toggleTodoComplete(todo: Todo) {
        console.log(todo);
        let updatedTodo = this.updateTodoById(todo.id, {
            complete: todo.complete ? false : true
        });

        return updatedTodo;
    }
}
