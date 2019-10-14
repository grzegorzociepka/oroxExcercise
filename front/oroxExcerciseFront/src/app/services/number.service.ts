import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "https://localhost:5001/api/values";

@Injectable({
  providedIn: 'root'
})

export class NumberService {

  constructor(private httpClient: HttpClient) { }

  getNumber():Promise<number>{
    return this.httpClient.get<number>(BASE_URL)
                          .toPromise();
  }
}
