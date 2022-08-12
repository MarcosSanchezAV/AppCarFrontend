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
  idCar!: string | null;
  dateEnd!: string | null;
  order: any;
  car: any;
  caducated: any;
  delivered: any;
  constructor(private orderService: OrderService, private carService: CarServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idCar = this.route.snapshot.paramMap.get('idCar');
    this.dateEnd = this.route.snapshot.paramMap.get('dateEnd');
    this.orderService.getOrderId(this.id).subscribe(resp => this.order = resp);
    this.carService.getCar(this.idCar).subscribe(resp => this.car = resp);
    this.orderService.getCaducated(this.dateEnd).subscribe(resp => this.caducated = resp );
  }

  returnCar() {
    this.orderService.setDelivered(true, this.order.id).subscribe(resp => console.log("order delivered!"));
    this.carService.setAvailable(true, this.car.id).subscribe(resp => console.log("Car returned"));
  }

}
