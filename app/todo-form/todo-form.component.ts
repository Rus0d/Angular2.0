import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {
    /*newTodoTitle: string = '';*/
    /*newTodoTitle: string = '';*/                                                                                      /* Это свойство перещло в файл todo-form.component.ts */

    /*create() {                                                                                                        /!* Первым аргументом указываем event, чтоб typescript имел представление о ДОМ объектах  *!/
    let todo: Todo = new Todo(this.newTodoTitle);                                                                       /!* Этот метод также перешел в компонент формы *!/

    this.todos.push(todo);
    this.newTodoTitle = '';
    }*/
    title: string = '';
    @Output() add = new EventEmitter();

    onSubmit() {                                                                                                          /* Первым аргументом указываем event, чтоб typescript имел представление о ДОМ объектах  */
        this.add.emit(this.title);
    }

}