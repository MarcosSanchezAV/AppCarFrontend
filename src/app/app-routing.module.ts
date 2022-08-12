import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckRentComponent } from './components/check-rent/check-rent.component';
import { InfoRentComponent } from './components/info-rent/info-rent.component';
import { MsgRentComponent } from './components/msg-rent/msg-rent.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ThanksComponent } from './components/thanks/thanks.component';

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent
  },
  {
    path:'rent/:id',
    component: RentCarComponent
  },
  {
    path:'msg/:email',
    component: MsgRentComponent
  },
  {
    path:'checkRent',
    component: CheckRentComponent
  },
  {
    path:'infoRent/:id/:idCar/:dateEnd',
    component: InfoRentComponent
  },
  {
    path:'thanks',
    component: ThanksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
