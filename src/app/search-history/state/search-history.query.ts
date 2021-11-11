import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IGithubResponseData } from './search-history.model';
import { SearchHistoryStore } from './search-history.store';

@Injectable({ providedIn: 'root' })
export class SearchHistoryQuery extends QueryEntity<IGithubResponseData> {

  constructor(protected store: SearchHistoryStore) {
    super(store);
  }

}
