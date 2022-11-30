import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getDashboard(){
    return this.http.get(environment.BASE_API_URI.MOCK_API + 'api/dashboard')
  }
}
