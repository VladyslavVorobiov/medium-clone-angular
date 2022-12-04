import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../interfaces/backend-errors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: IBackendErrors | null | undefined;

  public errMessages: string[] = [];

  ngOnInit() {
    const errors = this.backendErrorsProps ?? {};

    this.errMessages = Object.keys(errors).map((name) => {
      const messages = errors[name].join(', ');

      return `${name}: ${messages}`;
    });
  }
}
