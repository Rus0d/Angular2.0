import { Component } from '@angular/core';                                 /* Импортируем декоратор Component */

/*interface ITodo {                                                          /!* Интерфейс - описание формы объекта *!/
    title: string;
    completed: boolean;
}*/

/*class Todo {                                                                    /!* Класс еще один способ определить тип объекта, класс отличается от интерфейса тем, что на основе класса мы можем создать объект, но для этого ему нужен конструктор. В то время как интерфейс просто описывает форму объекта. *!/
    title: string;                                                                /!* Описание свойств класса *!/
    completed: boolean;

    constructor(title: string, completed: boolean = false) {
        this.title = title;                                                       /!* Инициализация свойств в теле конструктора *!/
        this.completed = completed;
    }
}*/
class Todo {                                                                      /* Если конструктор инициализирует только свойства, его можно немного сократить, убрав инициализацию и добавив public перед параметрами, при этом свойства класса необходимо удалить.  */
    constructor(public title: string,
                public completed: boolean = false) {}
}



/* const todos = [ */                       /* Переменная содержимое которой не меняется */
    /*'Изучить JavaScript'*/
    /*'Изучить Angular 2'*/
    /*'Написать приложение'*/
/*];*/

/*const todos: ITodo[] = [*/
const todos: Todo[] = [                     /* Массивы в тайпскрипт типизированные т.е. в массив строк нельзя добавить число */
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

@Component({                                                                /* Декоратор Component предоставляет фреймворку информацию о компоненте */
    moduleId: module.id,                                                    /* Добавляем чтоб не указывать полные пути относительно index.html */
    selector: 'app',                                                        /* Свойство декоратра selector тут мы указываем названия тэга в нашем html */
    templateUrl: 'app.component.html',                                      /* Адресс к HTML нашего компонента */
    styleUrls: ['app.component.css']                                        /* Массив с адрессамт стилей нашего компонента */
})

export class AppComponent {                                                 /* Компоненты это классы, т.к. класс прийдется использовать в другом файле, добавляем export */
    title: string = 'Angular 2Do';                                          /* Указываем тип данных. Добавляем свойства класса */
    todos: Todo[] = todos;
    /*todos: ITodo[] = todos;*/                                             /* Теперь свойство todos строго типизированно и туда можно поместить только элементы соответствующие интерфейсу ITodo */
    /*todos = todos;*/                                                      /* Присваемае свойству todos массив константу todos */
    /*newTodoTitle: string = '';*/

    create(event: Event, title: string) {                                    /* Первым аргументом указываем event, чтоб typescript имел представление о ДОМ объектах  */
        let todo: Todo = new Todo(title);

        event.preventDefault();                                             /* Используем событие event.preventDefault(); чтоб остановить отправку данных. */
        this.todos.push(todo);
    }

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