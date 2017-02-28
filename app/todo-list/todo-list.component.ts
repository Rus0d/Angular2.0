import { Component, Input } from '@angular/core';

import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];
    /*todos: ITodo[] = todos;*/                                             /* Теперь свойство todos строго типизированно и туда можно поместить только элементы соответствующие интерфейсу ITodo */
    /*todos = todos;*/                                                      /* Присваемае свойству todos массив константу todos */


    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1)
        }
    }
}