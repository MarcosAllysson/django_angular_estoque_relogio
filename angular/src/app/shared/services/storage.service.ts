import { Injectable } from '@angular/core';
import { Watch } from '../models/watch';
export const STORAGE_KEYS = {
  watchs: 'watchs',
};
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getWatch(): Watch {
    const watch = localStorage.getItem(STORAGE_KEYS.watchs);
    if (watch == null) {
      return null;
    } else {
      return JSON.parse(watch);
    }
  }

  setWatch(obj: Watch): void {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.watchs);
    } else {
      localStorage.setItem(STORAGE_KEYS.watchs, JSON.stringify(obj));
    }
  }
  
  clearWatch() {
    localStorage.removeItem(STORAGE_KEYS.watchs);
  }

}
