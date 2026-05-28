import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-greeting-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      Привет, <strong>{{ user().name || '(имя не введено)' }}</strong
      >!
    </p>
  `,
})
export class GreetingDisplay {
  user = input.required<{ name: string }>();
}
