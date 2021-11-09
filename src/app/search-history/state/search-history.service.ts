import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SearchHistoryStore } from './search-history.store';

@Injectable({ providedIn: 'root' })
export class SearchHistoryService {

  constructor(private searchHistoryStore: SearchHistoryStore, private http: HttpClient) {
  }


}
