import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Criteria } from '../models/criteria';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  data: any ;

  flightUrl:String = "http://localhost:8080/flightservices/flights";

  constructor(private _httpClient:HttpClient) { }

  public getFlights(criteria: Criteria):any {
    return this._httpClient.get(this.flightUrl+"?from="+criteria.from+"&to="+criteria.to+"&departureDate="+criteria.departureDate);
  }

  public getFlightsById(id:number):any {
    return this._httpClient.get(this.flightUrl+"/"+id);
  }
}
