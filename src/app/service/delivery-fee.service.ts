import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Token: '11802752-8ab4-11ed-b190-ea4934f9883e',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DeliveryFeeService {
  constructor(private http: HttpClient) {}

  getDeliveryShipInfo(): Observable<any> {
    return this.http.get(
      'https://online-gateway.ghn.vn/shiip/public-api/master-data/district',
      httpOptions
    );
  }

  getDeliveryFee(): Observable<any> {
    return this.http.get('http://tungsnk.tech:8082/api/shipping_fee');
  }
}
