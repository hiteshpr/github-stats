import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SearchHistoryStore, SearchHistoryState } from './search-history.store';

@Injectable({ providedIn: 'root' })
export class SearchHistoryQuery extends Query<SearchHistoryState> {

  constructor(protected store: SearchHistoryStore) {
    super(store);
  }

}
