import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = "/api/orders"
  constructor(private http: HttpClient) { }

  createOrder(body: any) {
    return this.http.post(this.url, body);
  }

  getOrder(id: string, email: string) {
    return this.http.get(this.url + "?id=" + id + "&email=" + email);
  }

  getOrderId(id: string | null) {
    return this.http.get(this.url + "/id?id=" + id);
  }

  getCaducated(end: string | null) {
    return this.http.get(this.url + "/caducated?end=" + end);
  }

  getOrderEmail(email: string | null) {
    return this.http.get(this.url + "/order?email=" + email);
  }

  setDelivered(delivered: boolean, id: number) {
    return this.http.post(this.url + "/delivered?delivered=" + delivered + "&id=" + id,{})
  }
}
