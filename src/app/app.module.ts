import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { CarsComponent } from './components/cars/cars.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { CheckRentComponent } from './components/check-rent/check-rent.component';
import { InfoRentComponent } from './components/info-rent/info-rent.component';
import { MsgRentComponent } from './components/msg-rent/msg-rent.component';
import { ThanksComponent } from './components/thanks/thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CardComponent,
    CarsComponent,
    RentCarComponent,
    CheckRentComponent,
    InfoRentComponent,
    MsgRentComponent,
    ThanksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
