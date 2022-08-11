import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-msg-rent',
  templateUrl: './msg-rent.component.html',
  styleUrls: ['./msg-rent.component.css']
})
export class MsgRentComponent implements OnInit {

  email!: string | null;
  order: any;
  
  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    this.orderService.getOrderEmail(this.email).subscribe(resp => {
      if (resp == null) {
        console.log("Es nulaa!");
      } else {
        this.order = resp;
      }
    });
  }

}
