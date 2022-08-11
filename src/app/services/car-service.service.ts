import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private url = "/api/cars";
  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.url);
  }

  getCar(id: string | null) {
    return this.http.get(this.url + "/id?id=" + id);
  }

  setAvailable(available: boolean, id: number) {
    return this.http.post(this.url + "/available?available=" + available + "&id=" + id, {});
  }

  getCarsPrice(ascendent: boolean) {
    return this.http.get(this.url + "/ascendent?ascendent=" + ascendent);
  }

  getCarsCategory(type: string) {
    return this.http.get(this.url + "/type?type=" + type);
  }

  getCarsPriceCategory(ascendent: boolean, type: string) {
    return this.http.get(this.url + "/ascendent/type?ascendent=" + ascendent + "&type=" + type);
  }
}
