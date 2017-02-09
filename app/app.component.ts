import { Component } from '@angular/core';

/*interface ITodo {
    title: string;
    completed: boolean;
}*/

/*class Todo {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
    }
}*/

class Todo {
    constructor(public title: string,
                public completed: boolean = false) {}
}

/*const todos: ITodo[] = [*/
const todos: Todo[] = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
    {
        title: 'Изучить Angular 2',
        completed: false
    },
    {
        title: 'Написать приложение',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular 2Do';
    /*todos: ITodo[] = todos;*/
    todos: Todo[] = todos;
    newTodoTitle: string = '';

    create() {
        let todo: Todo = new Todo(this.newTodoTitle);

        this.todos.push(todo);
        this.newTodoTitle = '';
    }

    /*toggle(todo: { title: string, completed: boolean }) {*/
    /*toggle(todo: ITodo) {*/
    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    /*delete(todo: { title: string, completed: boolean }) {*/
    /*delete(todo: ITodo) {*/
    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1)
        }
    }
}