import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalFeedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}