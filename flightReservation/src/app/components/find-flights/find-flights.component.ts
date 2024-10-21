import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/models/criteria';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  criteria: Criteria = new Criteria('','','');

  constructor(private _flightService:FlightService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): any {
    this._flightService.getFlights(this.criteria).subscribe((res: any)=>{
      this._flightService.data = res;
      console.log(res);
      this.router.navigate(["/displayflights"]);
    });
  }

}
