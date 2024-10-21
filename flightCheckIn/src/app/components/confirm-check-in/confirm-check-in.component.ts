import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckInRequest } from 'src/app/models/CheckInRequest';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-confirm-check-in',
  templateUrl: './confirm-check-in.component.html',
  styleUrls: ['./confirm-check-in.component.css']
})
export class ConfirmCheckInComponent implements OnInit {

  reservationdata: any;
  checkin:CheckInRequest = new CheckInRequest("",false,0);

  constructor(private _checinService:CheckinService,private router:Router) { }

  ngOnInit(): void {
    this.reservationdata=this._checinService.reservationData;
  }

  public checkInClick(): any {
    this.checkin.id = this.reservationdata.id;
    this.checkin.checkIn = true;
    this._checinService.updateReservation(this.checkin).subscribe((res:any)=>
    {
      this.router.navigate(['/confirmPage']);
    })
  }

}
