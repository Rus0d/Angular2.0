/* const todos = [ */                                   /* Переменная содержимое которой не меняется */
/*'Изучить JavaScript'*/
/*'Изучить Angular 2'*/
/*'Написать приложение'*/
/*];*/

/*const todos: ITodo[] = [*/
/*export const todos: Todo[] = [  */                   /* Массивы в тайпскрипт типизированные т.е. в массив строк нельзя добавить число */
export const todos = [                                 /* Убираем тип, так как задачи будем получать от сервера */
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