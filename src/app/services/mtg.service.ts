import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MtgList } from '../models/mtg-list.model';
import { MtgDetail } from '../models/mtg-detail.model';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MtgService {

  private previousUrl: string;
  private currentUrl: string;

  constructor(private _client: HttpClient, private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  public getPreviousUrl() {
  return this.previousUrl;
  }    

  getAll(url: string): Observable<MtgList> {
    return this._client.get<MtgList>(url);
  }

  getOne(url: string): Observable<MtgDetail>
  {
    return this._client.get<MtgDetail>(url);
  }

  
}
