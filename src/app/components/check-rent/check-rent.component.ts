import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-check-rent',
  templateUrl: './check-rent.component.html',
  styleUrls: ['./check-rent.component.css']
})
export class CheckRentComponent implements OnInit {

  checkForm: FormGroup = new FormGroup({});
  msgError: boolean = false;
  order: any;
  errorId: boolean = false;
  errorEmail: boolean = false;

  constructor(private orderService: OrderService, private route: Router) { }

  ngOnInit(): void {
    this.checkForm = new FormGroup({
      id: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  checkOrder(): void {
    if (this.checkForm.value.id == '' || this.checkForm.value.email == '') {
      if (this.checkForm.value.id == '') {
        this.errorId = true;
      } else {
        this.errorId = false;
      }
      if (this.checkForm.value.email == '') {
        this.errorEmail = true;
      } else {
        this.errorId = false;
      }
    } else {
    this.orderService.getOrder(this.checkForm.value.id, this.checkForm.value.email).subscribe(resp => {
      if (resp == null) {
        console.log("Order not found");
        this.msgError = true;
      } else {
        console.log(resp);
        this.order = resp;
        this.goInfo();
      }
    }); 
  }
  }

  goInfo(): void {
    this.route.navigate(['/infoRent/' + this.order.id + '/' + this.order.idCar + '/' + this.order.dateEnd]);
  }

}
