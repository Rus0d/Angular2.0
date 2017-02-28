import { Component } from '@angular/core';                                 /* Импортируем декоратор Component */

import { Todo } from './shared/todo';
import { todos } from './shared/data';

@Component({                                                                /* Декоратор Component предоставляет фреймворку информацию о компоненте */
    moduleId: module.id,                                                    /* Добавляем чтоб не указывать полные пути относительно index.html */
    selector: 'app',                                                        /* Свойство декоратра selector тут мы указываем названия тэга в нашем html */
    templateUrl: 'app.component.html',                                      /* Адресс к HTML нашего компонента */
    styleUrls: ['app.component.css']                                        /* Массив с адрессамт стилей нашего компонента */
})

export class AppComponent {                                                 /* Компоненты это классы, т.к. класс прийдется использовать в другом файле, добавляем export */
    title: string = 'Angular 2Do';                                          /* Указываем тип данных. Добавляем свойства класса */
    todos: Todo[] = todos;

    create(title: string) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }
}