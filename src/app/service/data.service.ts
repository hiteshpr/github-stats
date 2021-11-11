import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private githubApiUrl: string = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient) { }

  public getUserData(userName: string): Observable<any> {

    const url: string = this.githubApiUrl + userName;

    return this.httpClient.get(url);

  }
}
