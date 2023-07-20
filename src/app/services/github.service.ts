import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // private _baseUrl = 'https://api.github.com';
  private _url = 'https://api.github.com/users/MKL-GitHub/repos';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any[]> {
    return this.http.get<any[]>(this._url);
  }

  getLanguages(url: string) {
    return this.http.get(url)
  }
}
