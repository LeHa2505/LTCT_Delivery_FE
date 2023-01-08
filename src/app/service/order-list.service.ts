import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const options = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) {}

  getShippingOrder(): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order',options);
  }
  getShippingOrderDetail(code : any): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order/' + code,options);
  }
  getProductList(code : any): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order/product/' + code,options);
  }
  updateStatus(orderCode : string, body : any) : Observable<any>{
    return this.http.put(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_order/' + orderCode, body,options);
  }

}

