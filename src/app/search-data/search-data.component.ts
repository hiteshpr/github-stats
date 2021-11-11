import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGithubResponseData } from '../search-history/state/search-history.model';
import { SearchHistoryService } from '../search-history/state/search-history.service';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit, OnDestroy {

  public userName: string = '';
  public showData: boolean = false;
  public searchedUserData!: IGithubResponseData;
  public paramsSubscription!: Subscription;
  public dataSubscription!: Subscription;

  constructor(private readonly dataService: DataService, 
    private readonly searchHistoryService: SearchHistoryService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

   this.paramsSubscription = this.route.queryParams.subscribe((params) => {
      if(params.userName) {
        this.userName = params.userName;
        this.getUserData();
      }
    });
  }

  ngOnDestroy(): void {
    if(this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
    if(this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  public getUserData(): void {

    if(this.userName === '') {
      this.searchHistoryService.showSnackBar('Please enter valid data');
      return;
    }

    this.dataSubscription = this.dataService.getUserData(this.userName).subscribe((data) => {
      this.showData = true;
      this.searchedUserData = data;
      this.setDataInStore(true);
      this.searchHistoryService.showSnackBar('Data loaded successfully');
    }, (err) => {
      this.showData = false;
      this.setDataInStore(false);
      this.searchHistoryService.showSnackBar('Error in loading data');
      console.log(err);
    });
  }


  private setDataInStore(isSuccessful: boolean): void {
    this.searchHistoryService.setDataInStore(this.userName, isSuccessful);
  }

}
