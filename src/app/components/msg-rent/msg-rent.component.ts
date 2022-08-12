import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-msg-rent',
  templateUrl: './msg-rent.component.html',
  styleUrls: ['./msg-rent.component.css']
})
export class MsgRentComponent implements OnInit, OnChanges {

  email!: string | null;
  order: any;
  id: any;

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    this.orderService.getOrderEmail(this.email).subscribe(resp => {
      console.log(resp);
      this.order = resp;
      this.id = this.order.id
    });
  }

}
