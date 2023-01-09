import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateDebtStatusService {

  constructor(private http : HttpClient) { }
  updateDebtStatus(code:any) : Observable<any>{
    return this.http.put(environment.BASE_API_URI.BASE_SERVICE_SP05_M03_API + 'api/receivable/' + code,{});
  }
}
