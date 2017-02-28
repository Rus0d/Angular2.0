/*interface ITodo {                                                        /!* Интерфейс - описание формы объекта *!/
 title: string;
 completed: boolean;
 }*/

/*class Todo {                                                             /!* Класс еще один способ определить тип объекта, класс отличается от интерфейса тем, что на основе класса мы можем создать объект, но для этого ему нужен конструктор. В то время как интерфейс просто описывает форму объекта. *!/
 title: string;                                                            /!* Описание свойств класса *!/
 completed: boolean;

 constructor(title: string, completed: boolean = false) {
 this.title = title;                                                       /!* Инициализация свойств в теле конструктора *!/
 this.completed = completed;
 }
 }*/
export class Todo {                                                               /* Если конструктор инициализирует только свойства, его можно немного сократить, убрав инициализацию и добавив public перед параметрами, при этом свойства класса необходимо удалить.  */
    constructor(public title: string,
                public completed: boolean = false) {}
}