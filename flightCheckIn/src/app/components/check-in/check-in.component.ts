import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinService } from 'src/app/services/checkin.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  reservationId:number=0;

  constructor(private _checinService:CheckinService,private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): any {
    this._checinService.getReservation(this.reservationId).subscribe((res:any)=>{
      this._checinService.reservationData=res;
      this.router.navigate(['/confirm']);
    })
  }

}
