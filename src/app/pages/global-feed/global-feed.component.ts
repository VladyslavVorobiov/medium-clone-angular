import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalFeedComponent implements OnInit {
  apiUrl = '/articles';

  constructor() {}

  ngOnInit() {}
}
