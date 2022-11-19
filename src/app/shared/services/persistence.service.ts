import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
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
      const data = localStorage.getItem(key);

      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting from Local Storage', error);
      return null;
    }
  }
}
