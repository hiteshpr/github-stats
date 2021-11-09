import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SearchHistoryState {
   key: string;
}

export function createInitialState(): SearchHistoryState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'search-history' })
export class SearchHistoryStore extends Store<SearchHistoryState> {

  constructor() {
    super(createInitialState());
  }

}
