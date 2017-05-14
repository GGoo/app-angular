import { Injectable } from '@angular/core';
import { Todo } from './todo';

import { Http, Response, Jsonp, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Subscription } from "rxjs";

@Injectable()
export class TodoDataService {
    private subscription: Subscription;
    private baseUrl: string = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=AAPL&callback=myRun';//'http://137.74.116.6/rest/todos';

    lastId: number = 0;
    todos: Todo[] = [];

    constructor(private http: Http, private jsonp: Jsonp) {
        for (var i = 0; i < 10; ++i) {
            this.addTodo(new Todo({ label: 'Ala ma kota' + this.lastId }));
        }
        // this.getData();
    }

    getData() {
        // let headers: Headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', '*');

        var options = new RequestOptions({
                'method': 'GET',
                'headers': new Headers({
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                })
            });

        console.log(options);
        this.jsonp.request(`${this.baseUrl}`, options)
            .map(response => { response.json().data })
            .subscribe((data) => {
                console.log('response', data);
            }, (error) => console.log('error', error)
            );
          // .map(
          //   (response: Response) => {
          //     return response.json();
          //   }
          // ).subscribe(
          // (data) => {
          //   for (let key in data)
          //     this.todos.push(data[key]);
          // }
          //   );

        return this.todos;
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
