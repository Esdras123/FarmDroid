import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Culture } from '../models/culture';

// Il faut remplacer par le bon appel de l'api des AVOMO
const apiUrl = "http://localhost/curd";
 
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
http: HttpClient;
  constructor(http:HttpClient) { }

  getCultures (): Observable<Culture[]> {
    // IL faut remplacer par le bon code
    return this.http.get<Culture[]>(apiUrl, httpOptions)
      .pipe(
        tap(heroes => console.log('fetched todos')),
        catchError(this.handleError('getTodos', []))
      ); 
  }
   
  
   
 

  deleteCulture (id): Observable<Culture> {
    // Il faut remplacer par le bon code
    const url = `${apiUrl}/delete.php?id=${id}`;
   
    return this.http.delete<Culture>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted culture id=${id}`)),
      catchError(this.handleError<Culture>('deleteculture'))
    ); 
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
