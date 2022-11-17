import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps!: IBackendErrors | null;

  public errMessages: string[] = [];

  ngOnInit() {
    const errors = this.backendErrorsProps ?? {};

    this.errMessages = Object.keys(errors).map((name) => {
      const messages = errors[name].join(', ');

      return `${name}: ${messages}`;
    });
  }
}
