import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './your-feed.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YourFeedComponent implements OnInit {
  apiUrl = '/articles/feed';

  constructor() {}

  ngOnInit() {}
}
