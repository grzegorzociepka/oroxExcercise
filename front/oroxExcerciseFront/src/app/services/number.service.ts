import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "https://localhost:5001/";

@Injectable({
  providedIn: 'root'
})

export class NumberService {

  constructor(private httpClient: HttpClient) { }

  getNumber():Observable<number>{
    return this.httpClient.get<number>(BASE_URL);
  }
}
