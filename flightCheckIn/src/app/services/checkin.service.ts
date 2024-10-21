import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckInRequest } from '../models/CheckInRequest';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  reservationUrl="http://localhost:8080/flightservices/reservations/";
  reservationData:any;

  constructor(private _httpClient:HttpClient) { }

  public getReservation(reservationId:number):any{
    return this._httpClient.get(this.reservationUrl+reservationId);
  }
  public updateReservation(checkInRequest: CheckInRequest): any {
    return this._httpClient.put(this.reservationUrl,checkInRequest);
  }
}
