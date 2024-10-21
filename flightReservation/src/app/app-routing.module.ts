import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassThrough } from 'stream';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';

const routes: Routes = [
  {
    path: 'findflights',
    component: FindFlightsComponent
  },
  {
    path: 'displayflights',
    component: DisplayFlightsComponent
  },
  {
    path: 'passengerdetails/:id',
    component: PassengerDetailsComponent
  },
  {
    path: 'confirmdetails/:id',
    component: ConfirmReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
