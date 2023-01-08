import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    Token: '11802752-8ab4-11ed-b190-ea4934f9883e',
  }),
};
const options = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DeliveryFeeService {
  constructor(private http: HttpClient) {}

  getProvinces(): Observable<any> {
    return this.http.get(
      'https://online-gateway.ghn.vn/shiip/public-api/master-data/province',
      httpOptions
    );
  }
  getDistricts(id:any): Observable<any> {
    return this.http.post(
      'https://online-gateway.ghn.vn/shiip/public-api/master-data/district',
      {
        "province_id":id
      },
      httpOptions
    );
  }
  getWards(id:any): Observable<any> {
    return this.http.post(
      'https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id',
      {
        "district_id":id
      },
      httpOptions
    );
  }

  getDeliveryFee(body : any): Observable<any> {
    return this.http.post(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/shipping_fee',body,options);
  }
}
