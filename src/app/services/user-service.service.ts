import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseURL:string = "https://jsonplaceholder.typicode.com/"
  constructor(
    private httpClient:HttpClient
  ) { }

  public getUserList(options:APIOptions):Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(this.baseURL+options.url);
  }
}
interface APIOptions{
  url:string,
  params?:Map<string,any>
}