import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Magic from 'mtgsdk-ts'; 

@Injectable({
  providedIn: 'root'
})
export class MagicCardFetcherService {
  endpoint = 'https://api.magicthegathering.io/v1'
  // `${endpoint}/${queryFor}`,

  constructor(
    private http: HttpClient
  ) { }

  getCardsbyName(cardName: string) {
    let url = `${this.endpoint}/cards?name=${cardName}`;
    console.log('URL:',url);
    return this.http.get<any>(url);

    // console.log('from service',cardName);
  };
}
