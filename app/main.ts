/* main.ts импортирует основной модуль приложения и запускает его */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  /* Платформа на которой работает приложение */

import { AppModule } from './app.module';                                    /* Импортируем основной модуль */

const platform = platformBrowserDynamic();                                   /* Создаем платформу */
platform.bootstrapModule(AppModule);                                         /* Отправляем в платформу основной модуль приложения */