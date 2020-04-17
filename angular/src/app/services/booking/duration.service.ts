import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Duration } from '../../data/booking/duration.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DurationService {
  url: string = "api/duration";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(private _http: HttpService) { }

  get(): Observable<Duration[]> {
    return this._http.get_async(this.url)
                      .pipe(this.handleError("Error in get Guest"));
  }
  
  post(duration: Duration): Observable<Duration> {

    return this._http.post_async(this.url, duration) 
                      .pipe(this.handleError<Duration>("post error")) as Observable<Duration>
                      
  }

  put(duration: Duration): Observable<Duration> {
    return this._http.put_async(this.url, duration)
                      .pipe(this.handleError("Error in put Duration")) as Observable<Duration>;
  }

  delete() {
    
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}




















