import { Component, Input, Output, EventEmitter } from '@angular/core';                                                 /* Импортируем декоратор Input, нужен чтоб указать что этот компонент принимает свойства. Декоратором Input помечаются входные данные, а декоратором Output - выходные. Импортируем класс EventEmitter */

import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;                                                                                                /* Свойство todo называется так же как мы его назвали в todo-list.component.html [todo] */
    @Output() delete = new EventEmitter();                                                                              /* Свойство delete необходимо пометить особым образом, для этого используем декоратор Output, свойство помеченное декоратором Output должно быть определенного типа, это экземпляр класса EventEmitter. Его тоже надо импортировать. Класс EventEmitter предназначен для создание объектов способных генерировать события, так же эти объекты предоставляют интерфей для подписки на эти события. */

    toggle() {
        this.todo.completed = !this.todo.completed;                                                                     /* Меняем переданное свойство this.todo на обратное значение */
    }

    onDelete() {                                                                                                        /* Метод delete мы назвать не можем, так как его названиебудет конфликтовать с названием свойства, поэтому назовем его onDelete */
        this.delete.emit(this.todo);                                                                                    /* Вызывая этот метод произойдет событие, в результате чего вызовится метод указанный в шаблоне todo-list.component.html, т.е. метод delete у родительского компонента. В метод emit мы можем что то отправить, например саму задачу. */
    }
}