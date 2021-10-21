import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError }  from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
export class StarService {
    apiurl = "https://pre-prod-api.baeprotein.com/api/v1/home";

    constructor(private http: HttpClient) { }

    getTasks() : Observable<any>{
       let data =  this.http.get<any>(this.apiurl).pipe(catchError(this.handleError));
       console.log("In service",data);
       return data;
    }

    private handleError(errorResponse : HttpErrorResponse): Observable<any>{
        if(errorResponse.error instanceof Error){
            console.log("Client Side Error:", errorResponse.error.message);
        }
        else {
            console.log("Client Side Error:", errorResponse);
        }
        return errorResponse.error;
    }
}