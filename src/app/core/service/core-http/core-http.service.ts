import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPaziente } from '../models/IPaziente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoreHttpService {
  private readonly BASE_URL = 'https://m9cn7ciplf.execute-api.us-east-1.amazonaws.com'

  constructor(private httpClient : HttpClient) { }

  public get(url : string) : Observable <IPaziente[]> {
    return this.httpClient.get<IPaziente[]>(this.BASE_URL + url);
  }

  public post(url : string, body : Omit<IPaziente, "id">) : Observable <IPaziente> {
    return this.httpClient.post<IPaziente>(this.BASE_URL + url, body);
  }

  public put(url : string, body : IPaziente) : Observable <IPaziente> {
    return this.httpClient.post<IPaziente>(this.BASE_URL + url, body);
  }

  public delete(url : string) : Observable <number> {
    return this.httpClient.delete<number>(this.BASE_URL + url);
  }
}
