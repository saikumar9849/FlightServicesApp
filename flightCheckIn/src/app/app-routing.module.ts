import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartCheckInComponent } from './components/start-check-in/start-check-in.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { ConfirmCheckInComponent } from './components/confirm-check-in/confirm-check-in.component';
import { ConfirmPageComponent } from './components/confirm-page/confirm-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'startCheckIn',
    component:StartCheckInComponent
  },
  {
    path:'checkIn',
    component:CheckInComponent
  },
  {
    path:'confirm',
    component:ConfirmCheckInComponent
  },
  {
    path:'confirmPage',
    component:ConfirmPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
