import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/pages/auth/store/selectors';

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProp: string | null = '';

  isLoggedIn$!: Observable<boolean | null>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  initValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
