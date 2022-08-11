import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-info-rent',
  templateUrl: './info-rent.component.html',
  styleUrls: ['./info-rent.component.css']
})
export class InfoRentComponent implements OnInit {
  id!: string | null;
  id_car!: string | null;
  date_end!: string | null;
  order: any;
  car: any;
  caducated: any;
  constructor(private orderService: OrderService, private carService: CarServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id_car = this.route.snapshot.paramMap.get('id_car');
    this.date_end = this.route.snapshot.paramMap.get('date_end');
    this.orderService.getOrderId(this.id).subscribe(resp => this.order = resp);
    this.carService.getCar(this.id_car).subscribe(resp => this.car = resp);
    this.orderService.getCaducated(this.date_end).subscribe(resp => this.caducated = resp );
  }

  returnCar() {
    this.orderService.setDelivered(true, this.order.id).subscribe(resp => console.log("order delivered!"));
    this.carService.setAvailable(true, this.car.id).subscribe(resp => console.log("Car returned"));
  }

}
