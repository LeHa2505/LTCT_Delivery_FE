import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) {}

  getShippingOrder(): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order');
  }
  getShippingOrderDetail(code : any): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order/' + code);
  }
  getProductList(code : any): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order/product/' + code);
  }
  updateStatus(orderCode : string, body : any) : Observable<any>{
    return this.http.put(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order/' + orderCode, body);
  }

}

