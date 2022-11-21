import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
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
