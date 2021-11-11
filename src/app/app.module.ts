import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module'
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { SearchHistoryComponent } from './search-history/search-history/search-history.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchHistoryStore } from './search-history/state/search-history.store';
import { SearchHistoryQuery } from './search-history/state/search-history.query';
import { SearchHistoryService } from './search-history/state/search-history.service';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchDataComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    SearchHistoryService,
    DataService,
    SearchHistoryStore,
    SearchHistoryQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
