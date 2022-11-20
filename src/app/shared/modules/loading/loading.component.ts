import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-loading',
  templateUrl: './loading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {}
