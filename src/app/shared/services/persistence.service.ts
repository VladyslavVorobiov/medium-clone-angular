import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class PersistenceService implements OnDestroy {
  constructor() {
    console.log('PersistenceService is constructed');
  }

  ngOnDestroy() {
    console.log('PersistenceService is destroyed');
  }

  set(key: string, data: string) {
    try {
      localStorage.setItem(key, data);
    } catch (error) {
      console.error('Error saving to Local Storage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch (error) {
      console.error('Error getting from Local Storage', error);
      return null;
    }
  }
}
