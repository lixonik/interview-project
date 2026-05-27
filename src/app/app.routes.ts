import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Toggle } from './toggle/toggle';
import { Greeting } from './greeting/greeting';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'counter' },
  { path: 'counter', component: Counter, title: 'Счётчик' },
  { path: 'toggle', component: Toggle, title: 'Переключатель' },
  { path: 'greeting', component: Greeting, title: 'Приветствие' },
];
