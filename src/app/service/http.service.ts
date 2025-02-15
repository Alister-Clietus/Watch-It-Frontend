import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService 
{

  constructor(private http: HttpClient) 
  {

  }

  baseurl:any="http://localhost:8086"

  // Posting a data to
  public postdata<T>(url: string,data:any): Observable<T>
  {
    return this.http.post<T>(url,data);
  }

    // Updating a data to
    public updatedata<T>(url: string,data:any): Observable<T>
    {
      return this.http.put<T>(url,data);
    }
    // Get Details
    public getDataUsingUrl<T>(url: string): Observable<T>
    {
      return this.http.get<any>(url);
    }
}
