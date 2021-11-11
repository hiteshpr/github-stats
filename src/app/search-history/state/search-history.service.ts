import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { IGithubResponseData } from './search-history.model';
import { SearchHistoryQuery } from './search-history.query';
import { SearchHistoryStore } from './search-history.store';

@Injectable({ providedIn: 'root' })
export class SearchHistoryService {

  constructor(
    private searchHistoryStore: SearchHistoryStore, 
    private searchHistoryQuery: SearchHistoryQuery,
    private snackBar: MatSnackBar) {
  }

  public setDataInStore(userName: string, isSearchSuccessful: boolean): void {
    this.searchHistoryStore.add({
      id: userName,
      userName: userName,
      isSearchSuccessful: isSearchSuccessful
    });
  }

  public getAllDataFromStore(): Observable<object> {
    return this.searchHistoryQuery.selectAll();
  }

  public clearDataFromStore(): void {
    this.searchHistoryStore.reset();
  }

  public getDataFromStore(id: string): IGithubResponseData | any {
    return this.searchHistoryQuery.getEntity(id);
  }

  public showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 1000 
    });
  }
}
