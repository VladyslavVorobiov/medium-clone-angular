import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  templateUrl: './error-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  @Input('message') messageProps: string = 'Something went wrong';
}
