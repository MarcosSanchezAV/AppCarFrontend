import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnChanges {

  @Input() ascendent: number = 1;
  @Input() category: number = 7;

  public listCars: any = [];
  constructor(private carService: CarServiceService) { }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.ascendent == 1 && this.category == 7) {
      this.carService.getCars().subscribe(resp => this.listCars = resp);
    } else if (this.ascendent != 1 && this.category == 7)  {
      this.carService.getCarsPrice(this.converterAscendent(this.ascendent)).subscribe(resp => this.listCars = resp);
    } else if (this.ascendent == 1 && this.category != 7) {
      this.carService.getCarsCategory(this.converterCategory(this.category)).subscribe(resp => this.listCars = resp);
    } else {
      this.carService.getCarsPriceCategory(this.converterAscendent(this.ascendent), this.converterCategory(this.category)).subscribe(resp => this.listCars = resp);
    }
  }

  ngOnInit(): void {
  
  }

  converterCategory(value: number): string {
    if (value == 1) {
      return "sport";
    } else if (value == 2) {
      return "pickup";
    } else if (value == 3) {
      return "sedan";
    } else if (value == 4) {
      return "electric";
    } else if (value == 5) {
      return "SUV";
    } else {
      return "deluxe";
    }
  }

  converterAscendent(value: number): boolean {
    return value == 2;
  }

}
