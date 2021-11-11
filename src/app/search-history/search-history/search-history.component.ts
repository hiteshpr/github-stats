import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISearchHistoryTable } from '../state/search-history.model';
import { SearchHistoryService } from '../state/search-history.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit, OnDestroy {

  public storeData = <any>{};
  public tableData!: ISearchHistoryTable[];
  public displayedColumns: string[] = ['userName', 'isSearchSuccessful', 'Action'];
  private dataFromStore!: Subscription;

  constructor(private readonly searchHistoryService: SearchHistoryService, 
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserSearchHistory();
  }

  ngOnDestroy() {
    if(this.dataFromStore) {
      this.dataFromStore.unsubscribe();
    }
  }

  public getUserSearchHistory(): void {

   this.dataFromStore = this.searchHistoryService.getAllDataFromStore().subscribe((data) => {
     this.storeData = data;
     this.tableData = this.storeData;
   });
  }

  public clearStoreData(): void {
    this.searchHistoryService.clearDataFromStore();
    this.searchHistoryService.showSnackBar('Data deleted successfully!');
  }

  public redirectToSearch(data: string): void {
    this.router.navigate(['/search-data'], { queryParams: { userName: data } });  
  }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }
  
}
