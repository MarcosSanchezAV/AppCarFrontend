import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  rentForm: FormGroup = new FormGroup({});
  id!: string | null;
  car: any;
  days!: number;
  msgError: boolean = false;

  constructor(private route: ActivatedRoute, private rentCarService: CarServiceService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.days = 1;
    this.rentForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
    this.id = this.route.snapshot.paramMap.get('id');
    this.rentCarService.getCar(this.id).subscribe(resp => this.car = resp);
  }

  increment(): void {
    this.days++;
  }

  decrement(): void {
    if (this.days > 1) {
      this.days--;
    }
  }

  sendOrder(): void {
    this.orderService.getOrderEmail(this.rentForm.value.email).subscribe(resp => {
      if (resp == null) {
        this.orderService.createOrder({
          id_car: this.car.id,
          days: this.days,
          amount: this.days * this.car.price,
          name_user: this.rentForm.value.name,
          email_user: this.rentForm.value.email
        }).subscribe(resp => console.log("Order sent"));
        this.rentCarService.setAvailable(false, this.car.id).subscribe(resp => console.log("Set successful!"));
        this.router.navigate(['/msg/' + this.rentForm.value.email]);
      } else {
        this.msgError = true;
        console.log("You have already rent a car!");
      }
      
    });
    
  }

  
}
