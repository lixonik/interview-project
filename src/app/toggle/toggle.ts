import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <h2>Переключатель</h2>
    <p>
      Статус: <strong>{{ on ? 'ВКЛ' : 'ВЫКЛ' }}</strong>
    </p>

    <button (click)="(toggle)">Переключить</button>
  `,
})
export class Toggle {
  protected on = false;

  toggle(): void {
    this.on = !this.on;
  }
}
