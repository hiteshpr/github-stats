import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { IGithubResponseData } from './search-history.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'search-history' })
export class SearchHistoryStore extends EntityStore<IGithubResponseData> {

  constructor() {
    super();
  }

}
