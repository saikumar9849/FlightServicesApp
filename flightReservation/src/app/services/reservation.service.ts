import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservationUrl: string = "http://localhost:8080/flightservices/reservations";

  constructor(private _httpClient:HttpClient) { }

  public saveReservation(reservation: Reservation): any {
    return this._httpClient.post(this.reservationUrl,reservation);
  }
}
