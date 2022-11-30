import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) {}

  getShippingOrder(): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP9_API + 'api/shipping');
  }
  getShippingOrderDetail(code : any): Observable<any> {
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP9_API + 'api/shipping/' + code);
  }
  getShippingFeeList():Observable<any>{
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP9_API + 'api/shipping/shipment')
  }
  getShippingFeeDetail(code : any):Observable<any>{
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP9_API + 'api/shipping/shipment/' + code)
  }
}

