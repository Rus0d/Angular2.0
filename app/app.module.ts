import { NgModule } from '@angular/core';                               /* Импортируем декоратор NgModule */

import { BrowserModule } from '@angular/platform-browser';              /* Модуль нужен для того чтоб приложение работало в браузере */
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';                         /* импортируем компонент App */
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({                                                             /* Декоратор добавляет мета информацию класса ставится над классом (декоратор - функция) */
    imports: [                                                          /* В свойстве импорт указываем что модуль импортирует */
        BrowserModule,                                                  /* Импортируем модуль браузера */
        FormsModule
    ],
    declarations: [                                                     /* Регистрируем все компоненты приложения */
        AppComponent,                                                   /* Регистрируем AppComponent в основном модуле приложения */
        TodoFormComponent
    ],
    bootstrap: [
        AppComponent                                                    /* Сообщаем что для запуска приложения используется компонент AppComponent */
    ]
})

export class AppModule {

}