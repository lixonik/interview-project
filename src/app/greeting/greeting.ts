import { Component } from '@angular/core';
import { GreetingDisplay } from './greeting-display';

@Component({
  selector: 'app-greeting',
  imports: [GreetingDisplay],
  template: `
    <h2>Приветствие</h2>

    <label>
      Имя:
      <input
        type="text"
        [value]="user.name"
        (input)="user.name = $any($event.target).value"
        placeholder="Введите имя"
      />
    </label>

    <app-greeting-display [user]="user" />
  `,
})
export class Greeting {
  protected user = { name: '' };
}
