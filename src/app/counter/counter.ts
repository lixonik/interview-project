import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Счётчик</h2>
    <p>
      Текущее значение: <strong>{{ state.value }}</strong>
    </p>

    <button (click)="increment()">+1</button>
    <button (click)="decrement()">-1</button>
    <button (click)="reset()">Сброс</button>
  `,
})
export class Counter {
  protected state = { value: 0 };

  increment(): void {
    setTimeout(() => {
      this.state.value += 1;
    });
  }

  decrement(): void {
    setTimeout(() => {
      this.state.value -= 1;
    });
  }

  reset(): void {
    setTimeout(() => {
      this.state.value = 0;
    });
  }
}
