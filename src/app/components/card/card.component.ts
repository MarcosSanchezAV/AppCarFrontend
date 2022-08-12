import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() id: number = 0;
  @Input() nameCar: string = 'Name Car';
  @Input() price: number = 0;
  @Input() img: string = '';
  @Input() typeCar: string = 'Type_car';
  @Input() available: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
