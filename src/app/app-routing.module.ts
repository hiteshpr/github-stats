import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDataComponent } from './search-data/search-data.component';
import { SearchHistoryComponent } from './search-history/search-history/search-history.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'search-data', pathMatch: 'full',
  },
  {
    path: 'search-data', component: SearchDataComponent
  },
  {
    path: 'search-data/:id', component: SearchDataComponent
  },
  {
    path: 'search-history', component: SearchHistoryComponent
  },
  {
    path: '**', redirectTo: 'search-data'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
