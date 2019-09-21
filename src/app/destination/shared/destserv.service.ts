import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DestservService {

  constructor(private http: HttpClient) { }

public getRentalById(rentalId: string):Observable<any> {
  return this.http.get('/api/v1/dest/'+rentalId);
}


public getdest():Observable<any>{
   return this.http.get('/api/v1/dest');
  }

  
}
