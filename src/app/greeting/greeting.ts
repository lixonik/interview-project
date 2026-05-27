import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
    <h2>Приветствие</h2>

    <label>
      Имя:
      <input type="text" [value]="name" (input)="name = $event.target.value" placeholder="Введите имя" />
    </label>

    <p>
      Привет, <strong>{{ name || '(имя не введено)' }}</strong
      >!
    </p>
  `,
})
export class Greeting {
  protected name = '';
}
