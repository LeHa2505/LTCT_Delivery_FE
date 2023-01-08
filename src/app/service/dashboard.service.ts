import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const options = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getDashboard(){
    return this.http.get(environment.BASE_API_URI.BASE_SERVICE_SP10_API + 'api/dashboard',options)
  }
}
