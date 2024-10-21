import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
  flights: any;

  constructor(private _flightService:FlightService, private router:Router) { }

  ngOnInit(): void {
    this.flights = this._flightService.data;
  }

  onSelect(flightId: number) {
    this.router.navigate(['/passengerdetails/'+flightId]);
  }

}
