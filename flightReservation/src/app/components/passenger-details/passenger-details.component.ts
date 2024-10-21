import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { FlightService } from '../../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  flightData: any;
  reservation: Reservation = new Reservation("","","","","","","","","");

  constructor(private _reservationService:ReservationService,private _flightService:FlightService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._flightService.getFlightsById(Number.parseInt(this.route.snapshot.params['id'])).subscribe((res: any) => {
      this.flightData = res;
    })
  }

  public onSubmit():any{
    this.reservation.flightId = this.flightData.id;
    this._reservationService.saveReservation(this.reservation).subscribe((res: any)=>{
      this.router.navigate(["/confirmdetails/"+res.id]);
    })
  }

}
