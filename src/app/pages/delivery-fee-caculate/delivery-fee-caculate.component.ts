import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DeliveryFeeService } from 'src/app/service/delivery-fee.service';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-delivery-fee-caculate',
  templateUrl: './delivery-fee-caculate.component.html',
  styleUrls: ['./delivery-fee-caculate.component.less'],
})
export class DeliveryFeeCaculateComponent {
  response: any;
  data: any[];
  listOfDistrict: any[] = [];
  listOfProvince: any[] = [];
  listOfPrecinct: any[] = [];
  selectedValue = null;
  fee: number;
  weight: number;

  // message: any;

  constructor(private service:DeliveryFeeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.getDeliveryShipInfo().subscribe((res: any) => {
      this.response = res;
      this.data = [...this.response.data];
      // console.log(this.response);
      // console.log(this.data);
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index].DistrictName;        
        if (String(element).indexOf("Thành Phố") >= 0 || String(element).indexOf("Tỉnh") > -1) {
          this.listOfDistrict.push(element);
        }
        if (String(element).indexOf("Huyện") >= 0 || String(element).indexOf("Quận") > -1) {
          this.listOfProvince.push(element);
        }
        else {
          this.listOfPrecinct.push(element);
        }
      }
    });

    this.service.getDeliveryFee().subscribe((res: any) => {
      console.log("res"+res);
      
    });
  }
}


