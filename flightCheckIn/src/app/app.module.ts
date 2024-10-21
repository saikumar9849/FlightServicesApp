import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartCheckInComponent } from './components/start-check-in/start-check-in.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { ConfirmCheckInComponent } from './components/confirm-check-in/confirm-check-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CheckinService } from './services/checkin.service';
import { ConfirmPageComponent } from './components/confirm-page/confirm-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartCheckInComponent,
    CheckInComponent,
    ConfirmCheckInComponent,
    ConfirmPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CheckinService],
  bootstrap: [StartCheckInComponent]
})
export class AppModule { }
